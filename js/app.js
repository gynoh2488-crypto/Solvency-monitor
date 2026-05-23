'use strict';

// ── State ────────────────────────────────────────────
let currentPage = 'dashboard';
let currentRegime = null;
let filterType = 'all';
let filterRegime = 'all';
let searchQuery = '';

// ── Helpers ──────────────────────────────────────────
function getRegime(id) {
  return REGIMES.find(r => r.id === id);
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
}

function typeLabel(t) {
  const map = { regulation: '규정·고시', report: '보고서', consultation: '협의·입법예고' };
  return map[t] || t;
}

// ── Render helpers ───────────────────────────────────
function statusBadge(status) {
  const map = { active: '시행 중', transition: '전환기', monitoring: '모니터링' };
  return `<span class="regime-status ${status}">${map[status] || status}</span>`;
}

function renderTags(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join('');
}

// ── Pages ────────────────────────────────────────────
function showPage(page, regimeId) {
  currentPage = page;
  currentRegime = regimeId || null;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page)?.classList.add('active');

  document.querySelectorAll('.sidebar-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page && (!regimeId || el.dataset.regime === regimeId));
  });

  document.querySelectorAll('.header-nav a').forEach(a => a.classList.remove('active'));
  if (!regimeId) document.getElementById('nav-' + page)?.classList.add('active');

  document.querySelector('.main')?.scrollTo(0, 0);

  if (page === 'dashboard') renderDashboard();
  else if (page === 'updates') renderUpdates();
  else if (page === 'regime') renderRegimeDetail(regimeId);
  else if (page === 'resources') renderResources();
}

// ── Dashboard ────────────────────────────────────────
function renderDashboard() {
  renderRegimeGrid();
  renderRecentUpdates(4);
}

function renderRegimeGrid() {
  const el = document.getElementById('regime-grid');
  el.innerHTML = REGIMES.map(r => `
    <div class="regime-card" style="--card-color:${r.color}" onclick="showPage('regime','${r.id}')">
      <div class="regime-card-top">
        <div class="regime-flag">${r.flag}</div>
        <div class="regime-info">
          <div class="regime-name">${r.name}</div>
          <div class="regime-authority">${r.region} · ${r.authority}</div>
        </div>
        ${statusBadge(r.status)}
      </div>
      <div class="regime-summary">${r.summary}</div>
    </div>
  `).join('');
}

function renderRecentUpdates(limit) {
  const el = document.getElementById('recent-updates');
  const items = [...UPDATES].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
  el.innerHTML = items.map(u => renderUpdateItem(u)).join('');
}

// ── Updates Feed ────────────────────────────────────
function renderUpdates() {
  renderFilterBar();
  applyUpdatesFilter();
}

function renderFilterBar() {
  const typeEl = document.getElementById('filter-type');
  const types = [
    { id: 'all', label: '전체' },
    { id: 'regulation', label: '규정·고시' },
    { id: 'report', label: '보고서' },
    { id: 'consultation', label: '협의·예고' }
  ];
  typeEl.innerHTML = types.map(t =>
    `<button class="filter-btn ${filterType === t.id ? 'active' : ''}" onclick="setTypeFilter('${t.id}')">${t.label}</button>`
  ).join('');

  const regimeEl = document.getElementById('filter-regime');
  const regimes = [{ id: 'all', label: '모든 제도', flag: '' }, ...REGIMES.map(r => ({ id: r.id, label: r.name, flag: r.flag }))];
  regimeEl.innerHTML = regimes.map(r =>
    `<button class="filter-btn ${filterRegime === r.id ? 'active' : ''}" onclick="setRegimeFilter('${r.id}')">${r.flag ? r.flag + ' ' : ''}${r.label}</button>`
  ).join('');
}

function setTypeFilter(type) {
  filterType = type;
  renderUpdates();
}

function setRegimeFilter(regime) {
  filterRegime = regime;
  renderUpdates();
}

function applyUpdatesFilter() {
  let items = [...UPDATES].sort((a, b) => b.date.localeCompare(a.date));
  if (filterType !== 'all') items = items.filter(u => u.type === filterType);
  if (filterRegime !== 'all') items = items.filter(u => u.regime === filterRegime);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = items.filter(u =>
      u.title.toLowerCase().includes(q) ||
      u.summary.toLowerCase().includes(q) ||
      u.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  const el = document.getElementById('updates-list');
  if (items.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="icon">🔍</div><p>조건에 맞는 업데이트가 없습니다.</p></div>`;
  } else {
    el.innerHTML = items.map(u => renderUpdateItem(u)).join('');
  }

  document.getElementById('updates-count').textContent = `${items.length}건`;
}

function renderUpdateItem(u) {
  const regime = getRegime(u.regime);
  return `
    <div class="update-item" onclick="showPage('regime','${u.regime}')">
      <div class="update-date-col">
        <div class="update-date">${formatDate(u.date)}</div>
        <div><span class="update-type-badge ${u.type}">${typeLabel(u.type)}</span></div>
      </div>
      <div class="update-content">
        <div class="update-regime-tag">
          <span class="flag">${regime?.flag || ''}</span>
          <span>${regime?.name || u.regime} · ${u.source}</span>
        </div>
        <div class="update-title">${u.title}</div>
        <div class="update-summary">${u.summary}</div>
        <div class="update-tags">${renderTags(u.tags)}</div>
        ${u.link ? `<a class="update-source-link" href="${u.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">원문 보기 ↗</a>` : ''}
      </div>
    </div>
  `;
}

function onSearch(e) {
  searchQuery = e.target.value.trim();
  if (currentPage === 'updates') applyUpdatesFilter();
}

// ── Regime Detail ────────────────────────────────────
function renderRegimeDetail(id) {
  const r = getRegime(id);
  if (!r) return;

  const el = document.getElementById('regime-detail-content');
  const related = UPDATES.filter(u => u.regime === id).sort((a, b) => b.date.localeCompare(a.date));

  el.innerHTML = `
    <button class="back-btn" onclick="showPage('dashboard')">← 전체 보기</button>

    <div class="regime-detail-header" style="--card-color:${r.color}">
      <div class="regime-detail-top">
        <div class="regime-detail-flag">${r.flag}</div>
        <div class="regime-detail-title">
          <h1>${r.name}</h1>
          <div class="sub">${r.region} · ${r.authority} · ${statusBadge(r.status)}</div>
        </div>
      </div>
      <div class="regime-detail-body">${r.summary}</div>
      <a class="regime-ext-link" href="${r.link}" target="_blank" rel="noopener">
        공식 사이트 바로가기 ↗
      </a>
    </div>

    <div class="section-title-row">
      <h2>관련 업데이트 (${related.length}건)</h2>
    </div>
    ${related.length > 0
      ? `<div class="update-list">${related.map(u => renderUpdateItem(u)).join('')}</div>`
      : `<div class="empty-state"><div class="icon">📭</div><p>등록된 업데이트가 없습니다.</p></div>`
    }
  `;
}

// ── Resources ────────────────────────────────────────
function renderResources() {
  const el = document.getElementById('resources-content');
  el.innerHTML = RESOURCES.map(g => `
    <div class="resource-group">
      <div class="resource-group-header">${g.category}</div>
      ${g.items.map(item => `
        <div class="resource-item">
          <div class="resource-icon">🔗</div>
          <div>
            <a href="${item.url}" target="_blank" rel="noopener">${item.name} ↗</a>
            <div class="desc">${item.desc}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ── Sidebar ──────────────────────────────────────────
function buildSidebar() {
  const el = document.getElementById('sidebar-regimes');
  el.innerHTML = REGIMES.map(r => `
    <div class="sidebar-item" data-page="regime" data-regime="${r.id}" onclick="showPage('regime','${r.id}')">
      <span class="flag">${r.flag}</span>
      <span class="name">${r.name}</span>
      <span class="badge">${r.region}</span>
    </div>
  `).join('');
}

// ── Init ─────────────────────────────────────────────
function init() {
  buildSidebar();

  // Set today's date in header
  const today = new Date();
  const dateStr = today.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('header-date').textContent = dateStr + ' 기준';

  showPage('dashboard');
}

document.addEventListener('DOMContentLoaded', init);
