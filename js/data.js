const REGIMES = [
  {
    id: "solvency2",
    name: "Solvency II",
    region: "EU",
    flag: "🇪🇺",
    authority: "EIOPA / EC",
    status: "active",
    color: "#003399",
    summary: "EU 보험사 건전성 감독 체계. 2016년 시행, 2025년 개정(Omnibus II) 진행 중.",
    link: "https://www.eiopa.europa.eu"
  },
  {
    id: "solvency_uk",
    name: "Solvency UK",
    region: "영국",
    flag: "🇬🇧",
    authority: "PRA / FCA",
    status: "active",
    color: "#012169",
    summary: "Brexit 이후 Solvency II를 영국 실정에 맞게 개편. 매칭조정(MA) 규제 완화 포함.",
    link: "https://www.bankofengland.co.uk/prudential-regulation"
  },
  {
    id: "ics",
    name: "ICS 2.0",
    region: "국제",
    flag: "🌍",
    authority: "IAIS",
    status: "monitoring",
    color: "#1a6b3a",
    summary: "국제보험감독자협의회(IAIS)의 국제보험자본기준. 2025년 모니터링 기간 종료, 2026년부터 시행 예정.",
    link: "https://www.iaisweb.org"
  },
  {
    id: "rbc",
    name: "RBC",
    region: "미국",
    flag: "🇺🇸",
    authority: "NAIC",
    status: "active",
    color: "#B22234",
    summary: "NAIC 위험기준자기자본제도. 각 주(州) 보험감독관이 집행. ICS 동등성(ComFrame) 논의 진행.",
    link: "https://www.naic.org"
  },
  {
    id: "japan_ev",
    name: "경제가치기반 지급여력",
    region: "일본",
    flag: "🇯🇵",
    authority: "FSA",
    status: "transition",
    color: "#BC002D",
    summary: "경제가치기반 지급여력비율(EV-based) 도입 추진. 2025년 필드테스트 진행, 2025년 시행.",
    link: "https://www.fsa.go.jp"
  },
  {
    id: "cross2",
    name: "C-ROSS Phase II",
    region: "중국",
    flag: "🇨🇳",
    authority: "NFRA (구 CBIRC)",
    status: "active",
    color: "#DE2910",
    summary: "중국 위험기반 지급여력제도 2단계. 2022년 시행. 보험회사 투자·운용 규제 강화.",
    link: "https://www.nfra.gov.cn"
  },
  {
    id: "apra",
    name: "LAGIC / GPS 110",
    region: "호주",
    flag: "🇦🇺",
    authority: "APRA",
    status: "active",
    color: "#00008B",
    summary: "호주 건전성규제청(APRA) 보험자본기준. Life/General 분리 감독. 기후리스크 공시 요건 강화.",
    link: "https://www.apra.gov.au"
  },
  {
    id: "sst",
    name: "SST",
    region: "스위스",
    flag: "🇨🇭",
    authority: "FINMA",
    status: "active",
    color: "#D52B1E",
    summary: "스위스 지급여력테스트(Swiss Solvency Test). 시장일관적(Market-consistent) 평가 방식. IAIS ICS 개발에 기술적 기반 제공.",
    link: "https://www.finma.ch"
  },
  {
    id: "kics",
    name: "K-ICS",
    region: "한국",
    flag: "🇰🇷",
    authority: "금융위원회 / 금융감독원",
    status: "active",
    color: "#003478",
    summary: "경제가치기반 지급여력제도(K-ICS, 킥스). 2023년 1월 시행. 부채를 시장금리로 평가하는 Solvency II 유사 방식 채택.",
    link: "https://www.fss.or.kr"
  },
  {
    id: "bermuda",
    name: "BSCR",
    region: "버뮤다",
    flag: "🇧🇲",
    authority: "BMA",
    status: "active",
    color: "#00247D",
    summary: "버뮤다 지급여력자본요건. EU Solvency II 동등성 인정. 2024년 감독 강화 패키지 도입.",
    link: "https://www.bma.bm"
  }
];

const UPDATES = [
  {
    id: 13,
    date: "2025-05-08",
    regime: "kics",
    type: "regulation",
    title: "금융위, K-ICS 경과조치 적용 기준 개정안 입법예고",
    summary: "금융위원회가 K-ICS 경과조치(10년) 적용 요건 및 한도 산정 방식 개정안을 입법예고. 금리 변동에 따른 보험부채 급등 완화 목적. 2025년 하반기 시행 예정.",
    tags: ["K-ICS", "경과조치", "금융위원회"],
    source: "금융위원회",
    link: "https://www.fsc.go.kr"
  },
  {
    id: 14,
    date: "2025-03-20",
    regime: "kics",
    type: "report",
    title: "금융감독원, 2024년 보험회사 K-ICS 비율 현황 발표",
    summary: "금감원 발표 기준 2024년 말 생명보험사 평균 K-ICS 비율 196.3%, 손해보험사 평균 214.7%. 경과조치 적용 전 비율은 각각 156.0%, 185.2%로 금리 민감도 여전히 높음.",
    tags: ["K-ICS", "지급여력비율", "금융감독원"],
    source: "금융감독원 (FSS)",
    link: "https://www.fss.or.kr"
  },
  {
    id: 15,
    date: "2025-01-16",
    regime: "kics",
    type: "consultation",
    title: "금융감독원, K-ICS 신뢰조정(VA) 제도 개선 방향 협의",
    summary: "금감원이 EU Solvency II의 변동성조정(VA)에 해당하는 신뢰조정 산출 방식 개선안 업계 협의. 스프레드 확대 시 충격 완충 효과 제고 목적.",
    tags: ["K-ICS", "신뢰조정", "VA"],
    source: "금융감독원 (FSS)",
    link: "https://www.fss.or.kr"
  },
  {
    id: 1,
    date: "2025-04-30",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, Solvency II Omnibus II 패키지 최종 의견 제출",
    summary: "EIOPA가 유럽의회·이사회에 Solvency II 개정 옴니버스 II 패키지 최종 의견서 제출. 장기보증조치(LTG) 개선, 지속가능성 리스크 반영 강화 포함.",
    tags: ["Omnibus II", "LTG", "지속가능성"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu"
  },
  {
    id: 2,
    date: "2025-04-15",
    regime: "ics",
    type: "report",
    title: "IAIS, ICS 2025 필드테스트 결과 보고서 발표",
    summary: "IAIS가 ICS 모니터링 기간(2020~2024) 누적 필드테스트 결과 분석 보고서 공개. 17개국 55개 보험그룹 참여. 자본비율 분포 및 감도분석 포함.",
    tags: ["ICS 2.0", "필드테스트", "ComFrame"],
    source: "IAIS",
    link: "https://www.iaisweb.org"
  },
  {
    id: 3,
    date: "2025-03-28",
    regime: "solvency_uk",
    type: "regulation",
    title: "PRA, Solvency UK 매칭조정(MA) 새 지침 확정",
    summary: "영국 PRA가 매칭조정 포트폴리오 적격 자산 범위 확대, 보고 절차 간소화 등 최종 규정 발표. 2025년 7월 시행 예정.",
    tags: ["매칭조정", "PRA", "Solvency UK"],
    source: "Bank of England / PRA",
    link: "https://www.bankofengland.co.uk/prudential-regulation"
  },
  {
    id: 4,
    date: "2025-03-10",
    regime: "japan_ev",
    type: "consultation",
    title: "일본 FSA, 경제가치기반 지급여력 최종 기준서 확정",
    summary: "2025년 4월 시행을 앞두고 FSA가 금리리스크 측정, 장기보증 처리, 전환조치 세부 기준 최종 확정. 생명보험사 중심 자본 재조정 필요.",
    tags: ["일본 FSA", "경제가치기반", "금리리스크"],
    source: "金融庁 (FSA Japan)",
    link: "https://www.fsa.go.jp"
  },
  {
    id: 5,
    date: "2025-02-20",
    regime: "rbc",
    type: "report",
    title: "NAIC, 2024년 RBC 동향 및 ICS 동등성 검토 보고서",
    summary: "NAIC가 연간 RBC 결과 분석 발표. 미국 ICS 동등성 인정 여부 논의 현황, IAIS ComFrame 적용 계획 포함.",
    tags: ["RBC", "NAIC", "ICS 동등성"],
    source: "NAIC",
    link: "https://www.naic.org"
  },
  {
    id: 6,
    date: "2025-02-05",
    regime: "cross2",
    type: "regulation",
    title: "중국 NFRA, C-ROSS II 재보험 처리 기준 개정",
    summary: "NFRA가 재보험 위험경감 인정 요건을 강화하고 역외 재보험사에 대한 신용리스크 가중치 조정. 2025년 하반기 적용.",
    tags: ["C-ROSS", "재보험", "NFRA"],
    source: "NFRA (中国)",
    link: "https://www.nfra.gov.cn"
  },
  {
    id: 7,
    date: "2025-01-22",
    regime: "apra",
    type: "consultation",
    title: "APRA, 기후 관련 재무공시 보험 지침 초안 발표",
    summary: "APRA가 TCFD 기반 기후리스크 공시 의무화 지침 초안 협의. 보험사 기후 시나리오 분석 및 자본영향 평가 요구.",
    tags: ["APRA", "기후리스크", "TCFD"],
    source: "APRA Australia",
    link: "https://www.apra.gov.au"
  },
  {
    id: 8,
    date: "2025-01-10",
    regime: "bermuda",
    type: "regulation",
    title: "BMA, BSCR 2024 감독 강화 패키지 시행",
    summary: "버뮤다 BMA가 Class E/4 보험사 대상 강화된 BSCR 기준 시행. 운용리스크 요소 추가, 역내외 재보험 한도 규정 신설.",
    tags: ["BSCR", "BMA", "버뮤다"],
    source: "BMA Bermuda",
    link: "https://www.bma.bm"
  },
  {
    id: 9,
    date: "2024-12-18",
    regime: "solvency2",
    type: "report",
    title: "EIOPA, 2024년 보험 리스크 대시보드 발표",
    summary: "EIOPA 분기 리스크 대시보드. EU 보험시장 총 지급여력비율 평균 228%. 금리 정상화 이후 자산·부채 매칭 리스크 안정화 추세.",
    tags: ["리스크 대시보드", "SCR 비율", "EIOPA"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu"
  },
  {
    id: 10,
    date: "2024-12-05",
    regime: "ics",
    type: "report",
    title: "IAIS, 2024 글로벌 보험시장 보고서(GIMAR) 발간",
    summary: "IAIS GIMAR 2024. 글로벌 보험시장 건전성 지표 분석. 고금리 환경 지속에 따른 생명보험 부채감소 효과, P&C 인플레이션 영향 분석.",
    tags: ["GIMAR", "글로벌 시장", "IAIS"],
    source: "IAIS",
    link: "https://www.iaisweb.org"
  },
  {
    id: 11,
    date: "2024-11-14",
    regime: "sst",
    type: "report",
    title: "FINMA, 2024년 스위스 SST 결과 공표",
    summary: "FINMA SST 연간 결과 발표. 스위스 보험업계 평균 SST 비율 218%. 금리 상승으로 생명보험 자본 개선. 사이버리스크 스트레스 시나리오 신규 추가.",
    tags: ["SST", "FINMA", "스위스"],
    source: "FINMA Switzerland",
    link: "https://www.finma.ch"
  },
  {
    id: 12,
    date: "2024-10-30",
    regime: "solvency_uk",
    type: "report",
    title: "PRA, Solvency UK 개혁 1년 성과 평가 보고서",
    summary: "PRA가 Solvency UK 시행 1주년 성과 분석 발표. 매칭조정 적용 보험사 수 증가, 인프라 투자 확대 효과 확인. 추가 개정 계획 포함.",
    tags: ["Solvency UK", "PRA", "개혁 평가"],
    source: "PRA / Bank of England",
    link: "https://www.bankofengland.co.uk/prudential-regulation"
  }
];

const RESOURCES = [
  {
    category: "IAIS / ICS",
    items: [
      { name: "IAIS 공식 웹사이트", url: "https://www.iaisweb.org", desc: "ICS, ComFrame, GIMAR 등 발간물" },
      { name: "IAIS Insurance Core Principles", url: "https://www.iaisweb.org/activities/standard-setting/ips", desc: "핵심 감독원칙(ICPs) 전문" },
    ]
  },
  {
    category: "EU Solvency II",
    items: [
      { name: "EIOPA 공식 웹사이트", url: "https://www.eiopa.europa.eu", desc: "지침, 가이드라인, 리스크 대시보드" },
      { name: "EU 입법 포털 (EUR-Lex)", url: "https://eur-lex.europa.eu", desc: "Solvency II Directive 원문" },
    ]
  },
  {
    category: "영국 Solvency UK",
    items: [
      { name: "PRA 정책 성명", url: "https://www.bankofengland.co.uk/prudential-regulation/publication", desc: "정책문서(PS), 감독문서(SS) 목록" },
    ]
  },
  {
    category: "미국 RBC",
    items: [
      { name: "NAIC 공식 웹사이트", url: "https://www.naic.org", desc: "RBC 모델법, 산출지침 등" },
    ]
  },
  {
    category: "일본",
    items: [
      { name: "일본 FSA 보험국", url: "https://www.fsa.go.jp/policy/hoken/index.html", desc: "경제가치기반 지급여력 관련 자료" },
    ]
  },
  {
    category: "한국 K-ICS",
    items: [
      { name: "금융감독원 보험감독국", url: "https://www.fss.or.kr", desc: "K-ICS 비율 현황, 감독 지침, 업무 설명서" },
      { name: "금융위원회 보험과", url: "https://www.fsc.go.kr", desc: "보험업감독규정 개정, 입법예고" },
    ]
  }
];
