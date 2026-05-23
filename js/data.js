const REGIMES = [
  {
    id: "kics",
    name: "K-ICS",
    region: "한국",
    flag: "🇰🇷",
    authority: "금융위원회 / 금융감독원",
    status: "active",
    color: "#003478",
    summary: "경제가치기반 지급여력제도(K-ICS, 킥스). 2023년 1월 시행. 2025년 경과조치 개정 및 신뢰조정(VA) 개선 논의 중. 금리 하락 시 비율 변동성 완화가 주요 과제.",
    link: "https://www.fss.or.kr"
  },
  {
    id: "solvency2",
    name: "Solvency II",
    region: "EU",
    flag: "🇪🇺",
    authority: "EIOPA / EC",
    status: "active",
    color: "#003399",
    summary: "EU 보험사 건전성 감독 체계. 2016년 시행. Omnibus II 개정안 유럽의회 심의 중(2025년 하반기 3자협의 예정). LTG·지속가능성 리스크 반영 강화 핵심.",
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
    status: "transition",
    color: "#1a6b3a",
    summary: "국제보험감독자협의회(IAIS)의 국제보험자본기준. 2024년 모니터링 기간 종료, 2026년 공식 시행 예정. IAIS, 최종 감독지침 확정 단계.",
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
    summary: "경제가치기반 지급여력비율(EV-based) 2025년 4월 정식 시행. 첫 공시 결과 주요 생명보험사 비율 200% 상회. 전환기 경과조치 병행 적용 중.",
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
    id: 54,
    date: "2026-04-16",
    regime: "kics",
    type: "regulation",
    title: "금융위, 제5차 생산적 금융 대전환 회의 — 보험업권 최대 24.2조원 자금공급 여력 확보",
    summary: "보험업권 K-ICS 위험계수 합리화로 최대 24.2조원 추가 자금공급 여력 마련. 국민성장펀드 위험계수 49%→20% 미만, 적격 벤처투자 35% 적용. 변동금리 자산 10% 미스매칭 허용 등 매칭조정 요건 완화. 기존 K-ICS 비율 산출체계 정비도 병행.",
    tags: ["생산적 금융", "위험계수", "매칭조정"],
    source: "금융위원회",
    link: "https://fsc.go.kr/no010101/86725"
  },
  {
    id: 53,
    date: "2026-03-01",
    regime: "kics",
    type: "report",
    title: "금융감독원, 2025년 12월말 보험회사 K-ICS 비율 현황 발표",
    summary: "경과조치 적용 후 2025년 12월말 보험회사 전체 K-ICS 비율 212.3%(전분기 대비 +1.5%p). 생보사 205.8%(+4.4%p), 손보사 221.9%(△2.2%p). 주가 상승에 따른 가용자본 증가(284조원)가 주요 개선 요인.",
    tags: ["K-ICS 비율", "2025년 연간", "금감원"],
    source: "금융감독원 (FSS)",
    link: "https://www.fss.or.kr/fss/bbs/B0000188/list.do?menuNo=200218"
  },
  {
    id: 52,
    date: "2026-01-13",
    regime: "kics",
    type: "regulation",
    title: "금융위, 기본자본 K-ICS 비율 제도 도입 확정 — 2027년 시행·9년 경과조치",
    summary: "보험사 자본의 질 강화를 위해 기본자본 K-ICS 비율 50% 이상 유지 의무 도입. 2027년 1월 시행, 2035년말까지 9년 경과조치 적용. 기준 미달 시 경영개선권고(0~50%) 또는 경영개선요구(0% 미만) 부과.",
    tags: ["기본자본 K-ICS", "경영개선", "2027년 시행"],
    source: "금융위원회",
    link: "https://www.fsc.go.kr/no010101/86032"
  },
  {
    id: 51,
    date: "2025-12-19",
    regime: "kics",
    type: "regulation",
    title: "금융위, 2026년 업무계획 — 생산적 금융 대전환·국민성장펀드 150조원 조성",
    summary: "금융위원회 2026년 업무보고에서 생산적 금융을 핵심 과제로 제시. 150조원 규모 국민성장펀드로 AI·반도체·이차전지 첨단산업 지원 본격화. 보험업권 자본규제 합리화를 통한 산업금융 참여 확대 포함.",
    tags: ["생산적 금융", "국민성장펀드", "업무계획"],
    source: "금융위원회",
    link: "https://www.fsc.go.kr/no010101/85892"
  },
  {
    id: 50,
    date: "2025-12-01",
    regime: "kics",
    type: "report",
    title: "금융감독원, 2025년 9월말 보험회사 K-ICS 비율 현황 발표",
    summary: "경과조치 적용 후 2025년 9월말 보험회사 전체 K-ICS 비율 210.8%(전분기 대비 +4.0%p). 금리 하락에 따른 보험부채 증가 압력에도 주가 회복 효과로 생보사 비율 개선. 기본자본 비율 취약보험사 개선계획 제출 완료.",
    tags: ["K-ICS 비율", "3분기", "금감원"],
    source: "금융감독원 (FSS)",
    link: "https://www.fss.or.kr/fss/bbs/B0000188/list.do?menuNo=200218"
  },
  {
    id: 49,
    date: "2025-09-01",
    regime: "kics",
    type: "report",
    title: "금융감독원, 2025년 6월말 보험회사 K-ICS 비율 현황 발표",
    summary: "경과조치 적용 후 2025년 6월말 전체 K-ICS 비율 206.8%(전분기 197.9% 대비 +8.9%p). 생보사 200.9%(+10.2%p), 손보사 214.7%(+7.0%p). 금리 반등 및 보험부채 감소가 주요 개선 요인.",
    tags: ["K-ICS 비율", "2분기", "금감원"],
    source: "금융감독원 (FSS)",
    link: "https://www.fss.or.kr/fss/bbs/B0000188/list.do?menuNo=200218"
  },
  {
    id: 48,
    date: "2025-06-11",
    regime: "kics",
    type: "regulation",
    title: "금융위, 보험업감독규정 개정 — K-ICS 권고기준 150%→130% 하향 즉시 시행",
    summary: "IFRS17·K-ICS 도입으로 높아진 건전성 수준을 반영, 후순위채 중도상환·보험종목 추가 허가 등에 적용되는 K-ICS 권고기준을 150%에서 130%로 일괄 정비. 비상위험준비금 당기순손실·보험영업손실 환입요건 삭제. 6월 11일 즉시 시행. 건전성 TF 가동 병행.",
    tags: ["감독규정 개정", "130%", "비상위험준비금"],
    source: "금융위원회",
    link: "https://www.fsc.go.kr/no010101/84742"
  },
  {
    id: 47,
    date: "2025-06-01",
    regime: "kics",
    type: "report",
    title: "금융감독원, 2025년 3월말 보험회사 K-ICS 비율 현황 발표",
    summary: "경과조치 적용 후 2025년 3월말 전체 K-ICS 비율 197.9%(전분기 206.7% 대비 △8.7%p). 금리 하락에 따른 보험부채 증가 영향. 경과조치 미적용 시 기본자본 비율 취약사 집중 모니터링 예고.",
    tags: ["K-ICS 비율", "1분기", "금리 민감도"],
    source: "금융감독원 (FSS)",
    link: "https://www.fss.or.kr/fss/bbs/B0000188/list.do?menuNo=200218"
  },
  {
    id: 46,
    date: "2025-04-29",
    regime: "kics",
    type: "consultation",
    title: "금융위, 보험업법 시행령·감독규정 개정안 입법예고 — K-ICS 연동 기준 전면 재정비",
    summary: "제7차 보험개혁회의 후속 조치로 K-ICS 연동 기준 하향(190%→170% 등), 해약환급금준비금 조정 적립비율 요건 완화, 비상위험준비금 환입요건 삭제 등 감독규정 전면 개정안 입법예고. 2025.4.29~6.9 의견수렴, 3분기 개정 완료 예정.",
    tags: ["입법예고", "해약환급금준비금", "비상위험준비금"],
    source: "금융위원회",
    link: "https://fsc.go.kr/po040301/view?noticeId=3832"
  },
  {
    id: 45,
    date: "2025-03-12",
    regime: "kics",
    type: "regulation",
    title: "금융위, 제7차 보험개혁회의 — IFRS17·K-ICS 맞춤형 자본규제 고도화 방안 발표",
    summary: "기본자본 K-ICS 비율 의무기준 도입(50%), 후순위채 중도상환 기준 합리화, 보험부채 평가기준 법규화, 비상위험준비금 환입요건 정비(1.6조원 적립액 감소 예상) 등 3대 과제 발표. 2025년 3분기 감독규정 개정 완료 목표.",
    tags: ["보험개혁회의", "자본규제 고도화", "IFRS17"],
    source: "금융위원회",
    link: "https://www.fsc.go.kr/no010101/84128"
  },
  {
    id: 44,
    date: "2026-04-09",
    regime: "solvency2",
    type: "report",
    title: "ESM-EIOPA, 유럽 자연재해 위험 공유 토론 논문 발간",
    summary: "ESM과 EIOPA가 유럽 자연재해 보험 보호 격차 해소를 위한 EU 차원 위험 공유 메커니즘 제안. 유럽 자연재해 위험풀 설립 및 대출 기반 후원 결합 시 전체 위험 부담 능력 향상 효과 분석. 민간 부문 참여 유인 및 비용 효율적 자금 조달 방안 모색.",
    tags: ["자연재해", "보험 격차", "위험 공유"],
    source: "EIOPA / ESM",
    link: "https://www.eiopa.europa.eu/publications/esm-eiopa-discussion-paper-sharing-risk-european-approach-natural-catastrophe-risk-management_en"
  },
  {
    id: 43,
    date: "2026-04-07",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, Solvency II 소규모·비복잡 보험사(SNCU) 식별 기준 기술 명세서 발표",
    summary: "Solvency II 개정으로 도입된 비례성 체계의 핵심인 소규모·비복잡 보험회사(SNCU) 및 그룹(SNCG) 식별 기준 기술 명세서 공개. 정량 보고 템플릿상 데이터 포인트 지정으로 회원국 간 일관된 이행 보장 목적.",
    tags: ["SNCU", "비례성", "Solvency II Review"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/technical-specification-calculation-criteria-small-and-non-complex-undertakings-sncus-and-groups_en"
  },
  {
    id: 42,
    date: "2026-03-30",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, Solvency II 감독보고 및 공시 요건 개정 최종 보고서 발표",
    summary: "Solvency II 보고 부담을 전체 부문 최소 25%, 중소기업 35% 감축하는 EU 규제 간소화 목표를 반영한 ITS 개정안 최종 보고서. Solvency II Review 결과를 감독보고·공시 체계에 반영하고 보고 양식 현대화.",
    tags: ["감독보고", "공시", "규제 간소화"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/final-report-supervisory-reporting-and-public-disclosure-requirements-under-solvency-ii_en"
  },
  {
    id: 41,
    date: "2026-03-27",
    regime: "solvency2",
    type: "report",
    title: "ESAs 공동위원회, 2026년 봄 EU 금융시스템 리스크 업데이트 발간",
    summary: "EBA·EIOPA·ESMA 공동위원회의 2026년 봄 EU 금융시스템 리스크 보고서. 지속되는 지정학적 긴장과 민간금융 시장 확대를 주요 이슈로 지목. 보험·은행·증권 시장 전반의 취약성 분석.",
    tags: ["금융안정", "지정학 리스크", "ESAs"],
    source: "EBA / EIOPA / ESMA",
    link: "https://www.eiopa.europa.eu/publications/joint-committee-update-risks-and-vulnerabilities-eu-financial-system-spring-2026_en"
  },
  {
    id: 40,
    date: "2026-02-16",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, 보험사 정리·회생(IRRD) 관련 RTS/지침 패키지 최종 발표",
    summary: "IRRD 이행을 위한 정리계획·회생계획 RTS, 정리 가능성 평가 지침, 중요 기능 식별 기준 지침 등 6종 패키지 최종 발표. EU 보험사 부실 시 체계적 정리를 위한 감독 인프라 핵심 구성 요소.",
    tags: ["IRRD", "정리계획", "회생계획"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/final-report-regulatory-technical-standards-content-resolution-plans-and-group-resolution-plans-irrd_en"
  },
  {
    id: 39,
    date: "2026-02-13",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, Solvency II 시장·거래상대방 위험 처리 지침 개정판 발표",
    summary: "표준공식상 시장 및 거래상대방 위험 처리에 관한 개정 지침 발표. 법적 참조 업데이트, 4개 지침 삭제, 레버리지 펀드 처리 기준 신설 포함. Solvency II Review 결과를 반영한 기술 지침 현행화.",
    tags: ["표준공식", "시장리스크", "거래상대방 리스크"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/revised-guidelines-treatment-market-and-counterparty-risk-exposures-standard-formula_en"
  },
  {
    id: 38,
    date: "2026-02-02",
    regime: "solvency2",
    type: "report",
    title: "EIOPA, 생성형 AI 시장 조사 보고서 발간",
    summary: "347개 유럽 보험사 응답 기반 생성형 AI 도입 현황 조사 결과 발표. 약 3분의 2가 이미 기술 활용 중이나 대부분 초기 단계. 활용 사례, 위험 관리 체계, 감독 시사점 분석 포함.",
    tags: ["생성형 AI", "디지털 혁신", "리스크 관리"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/generative-ai-market-survey-outlook-use-cases-and-risk-management_en"
  },
  {
    id: 37,
    date: "2026-01-15",
    regime: "solvency2",
    type: "report",
    title: "EIOPA, 2030 전략 발표",
    summary: "EIOPA가 단일시장 통합 강화·시장 및 사회적 위험 회복력 증진·규제 및 감독 개선 3대 전략 영역을 핵심으로 하는 2030 전략 발표. 유럽 사회 회복력 강화와 보험·연금 시장 지속가능한 발전을 장기 목표로 제시.",
    tags: ["EIOPA 전략", "2030", "감독 방향"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/eiopas-strategy-towards-2030_en"
  },
  {
    id: 36,
    date: "2026-01-08",
    regime: "solvency2",
    type: "regulation",
    title: "ESAs, ESG 스트레스 테스트 공동 지침 최종 보고서 발간",
    summary: "EBA·EIOPA·ESMA 공동으로 ESG 리스크 스트레스 테스트 통합 지침 최종안 발표. 금융기관별 ESG 리스크 시나리오 설계·적용 방법론 표준화. 기후·생물다양성·사회 리스크 반영 체계화.",
    tags: ["ESG 스트레스 테스트", "기후 리스크", "ESAs"],
    source: "EBA / EIOPA / ESMA",
    link: "https://www.eiopa.europa.eu/publications/final-report-joint-esas-guidelines-esg-stress-testing_en"
  },
  {
    id: 35,
    date: "2025-12-15",
    regime: "solvency2",
    type: "report",
    title: "EIOPA, 2025년 12월 금융안정성 보고서 발간",
    summary: "경제적 취약성·부진한 성장·국제 협력 불확실성 환경에서의 유럽 보험·연금 시장 위험 분석. 민간신용 시장 확대, 달러 약세, 시장 상호연결성, 사이버 리스크, AI 영향 5개 주제 심층 분석 포함.",
    tags: ["금융안정성", "FSR", "시스템 리스크"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/financial-stability-report-december-2025_en"
  },
  {
    id: 34,
    date: "2025-12-05",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, Solvency II Review 관련 지침·의견 최종 보고서 패키지 발표",
    summary: "관계회사 처리 지침, 내부모델 DVA 의견서, 그룹감독 제외 범위 지침 등 Solvency II Review 후속 기술 기준 패키지 최종 발표. EU 입법 과정과 별도로 EIOPA가 기술적 이행 표준 선제 확정.",
    tags: ["Solvency II Review", "내부모델", "DVA"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/final-report-guidelines-exclusions-scope-group-supervision-solvency-ii-review_en"
  },
  {
    id: 33,
    date: "2025-11-17",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, Solvency II Review 유동성위험관리계획 RTS 최종 발표",
    summary: "Solvency II 개정에 따라 보험사·그룹이 수립해야 하는 유동성위험관리계획(LRMP) 규제기술기준(RTS) 최종안 발표. 단기·중장기 유동성 분석 의무 대상 기준, 계획 내용 및 갱신 주기 규정.",
    tags: ["유동성 리스크", "LRMP", "Solvency II Review"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/final-report-draft-rts-liquidity-risk-management-plans-solvency-ii-review_en"
  },
  {
    id: 32,
    date: "2025-11-17",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, Solvency II ORSA 내 거시건전성 분석 RTS 최종 발표",
    summary: "ORSA(자체위험지급여력평가) 및 예방적 회복계획(PPP) 내 거시건전성 분석 요건 RTS 최종안 발표. 보험사의 시스템 리스크 분석 의무 강화 및 감독당국과의 거시건전성 정보 공유 체계 수립.",
    tags: ["ORSA", "거시건전성", "PPP"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/final-report-draft-rts-macroprudential-analyses-orsa-and-ppp_en"
  },
  {
    id: 31,
    date: "2025-11-03",
    regime: "solvency2",
    type: "report",
    title: "EIOPA, 유럽 보험 개요 보고서 2025 발간",
    summary: "Solvency II 데이터 기반 EEA 전체 보험시장 연간 현황 보고서. 비생명·생명보험 부문 규모, 자본 현황, 투자 포트폴리오, 주요 리스크 지표 등 종합 분석. EEA 33개국 감독당국 제출 데이터 집계.",
    tags: ["보험 개요", "EEA", "시장 현황"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/european-insurance-overview-report-2025_en"
  },
  {
    id: 30,
    date: "2025-10-01",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, 2026년 EU 전략적 감독 우선순위 발표",
    summary: "2026년 유럽 보험 감독 공통 우선순위로 DORA(디지털 운영 회복력)와 지속가능성 리스크 두 가지 선정. 추가 관심 영역으로 집합투자기구(CIU) SCR 산출 및 청구 처리 과정의 소비자 보호 지정.",
    tags: ["감독 우선순위", "DORA", "지속가능성"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/union-wide-strategic-supervisory-priorities-focus-areas-2026_en"
  },
  {
    id: 29,
    date: "2025-09-29",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, 유럽의회에 Solvency II Level 2 개정안 서한 제출",
    summary: "EIOPA가 Solvency II Omnibus II 입법 과정에서 위임규정(Delegated Regulation) Level 2 조문 개정 필요 사항을 유럽위원회에 공식 서한으로 전달. 기술적 이행 세부 요건 선제 정비 목적.",
    tags: ["Level 2", "Delegated Regulation", "Omnibus II"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/letter-european-commission-level-2-amendments-solvency-ii_en"
  },
  {
    id: 28,
    date: "2025-09-19",
    regime: "solvency2",
    type: "report",
    title: "ESAs 공동위원회, 2025년 가을 EU 금융시스템 리스크 보고서 발간",
    summary: "EBA·EIOPA·ESMA 공동 가을 리스크 보고서. 고금리 지속, 지정학적 긴장, 부동산 시장 조정 등 주요 리스크 요인 분석. 보험 부문 지급여력 전반적 양호하나 기후 손실 증가 추세 경고.",
    tags: ["금융안정", "가을 리스크", "ESAs"],
    source: "EBA / EIOPA / ESMA",
    link: "https://www.eiopa.europa.eu/publications/joint-committee-report-risks-and-vulnerabilities-eu-financial-system-autumn-2025_en"
  },
  {
    id: 27,
    date: "2025-08-06",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, 보험 부문 AI 거버넌스 및 위험관리 의견서 발표",
    summary: "보험 부문 AI 시스템 사용·감독에 관한 EIOPA 공식 의견서 발표. 위험 기반 비례적 접근 원칙 하에 AI 이점과 위험 균형 방안 제시. AI Act 적용 관련 보험업 특수성 반영 요건 명확화.",
    tags: ["AI 거버넌스", "AI Act", "디지털 감독"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/opinion-artificial-intelligence-governance-and-risk-management_en"
  },
  {
    id: 26,
    date: "2025-07-14",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, Solvency II Review RTS 패키지 최종 발표 (지배력 기준·국경간 활동 등)",
    summary: "Solvency II Review 후속으로 지배적 영향력 보유 회사 식별 기준 RTS, 진출국 시장 내 국경간 활동 중요성 RTS, 지방정부·지방자치단체 익스포저 ITS 등 3종 최종 발표. 그룹감독 및 국경간 감독 체계 구체화.",
    tags: ["RTS", "그룹감독", "Solvency II Review"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/final-report-draft-rts-factors-identifying-undertakings-under-dominant-or-significant-influence-and_en"
  },
  {
    id: 25,
    date: "2026-05-12",
    regime: "solvency2",
    type: "report",
    title: "EIOPA 감독위원회(BoS) 2026년 3월 회의 의사록 공개",
    summary: "2026년 3월 24~25일 개최된 EIOPA 감독위원회 정기회의 의사록 발간. Omnibus II 입법 진행 현황, 감독 수렴 이니셔티브, 2026년 EIOPA 업무계획 이행 점검 등 주요 의제 논의.",
    tags: ["BoS 회의", "Omnibus II", "감독 수렴"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/minutes-board-supervisors-meeting-24-25-march-2026_en"
  },
  {
    id: 24,
    date: "2026-05-05",
    regime: "solvency2",
    type: "report",
    title: "EIOPA, EU 보험보장제도(IGS) 조화 기준의 소비자 영향 연구 발간",
    summary: "EU 차원의 보험보장제도(IGS) 최소 공통 기준 도입이 소비자 행동에 미치는 영향 분석. 체코·프랑스·독일·스페인·스웨덴 5개국 대상. 조화된 기준이 국경간 보험사 선택 의향·신뢰도·보험료 수용도에 긍정적 영향을 미치는 것으로 확인.",
    tags: ["IGS", "보험보장제도", "소비자보호"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/study-effect-harmonised-igs-standards-consumer-perceptions-and-choice_en"
  },
  {
    id: 23,
    date: "2026-04-28",
    regime: "solvency2",
    type: "report",
    title: "EIOPA BoS-OPSG 합동회의 의사록 공개 (2026년 3월)",
    summary: "EIOPA 감독위원회(BoS)와 직업연금 이해관계자그룹(OPSG) 합동 회의 의사록. IORP II 지침 검토 진행 현황, 지속가능성 공시 요건, PEPP(범유럽 개인연금상품) 시장 현황 등 논의.",
    tags: ["OPSG", "IORP II", "직업연금"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/joint-board-supervisors-bos-opsg-meeting-minutes-23-march-2026_en"
  },
  {
    id: 22,
    date: "2026-04-24",
    regime: "solvency2",
    type: "consultation",
    title: "EIOPA OPSG, IORP II 지침 검토 자발적 의견서 발표",
    summary: "EIOPA 직업연금 이해관계자그룹(OPSG)이 IORP II 지침 검토에 대한 자발적 의견서 공개. 투자 규정 현대화, 거버넌스 강화, 회원 정보 제공 개선, 지속가능성 요건 반영 등 권고사항 포함.",
    tags: ["OPSG", "IORP II", "연금 감독"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/opsg-own-initiative-opinion-review-iorp-ii-directive_en"
  },
  {
    id: 21,
    date: "2026-04-24",
    regime: "solvency2",
    type: "regulation",
    title: "EIOPA, 보험사 정리보고(IRRD) 이행기술기준 최종 보고서 발표",
    summary: "EIOPA가 보험회사 정리·회생 지침(IRRD) 이행을 위한 기술기준(ITS) 최종안 발표. 보험사 정리 절차 시 감독당국에 제출해야 하는 보고 정보의 표준 양식·절차·템플릿 규정. EU 보험사 부실 대응 체계 강화 목적.",
    tags: ["IRRD", "정리보고", "ITS"],
    source: "EIOPA",
    link: "https://www.eiopa.europa.eu/publications/final-report-implementing-technical-standards-regarding-resolution-reporting-irrd_en"
  },
  {
    id: 20,
    date: "2025-08-07",
    regime: "ics",
    type: "regulation",
    title: "IAIS, ICS 최종 감독지침(Supervisory Material) 초안 공개",
    summary: "IAIS가 2026년 ICS 공식 시행에 앞서 ComFrame 감독지침 최종 초안 공개. 그룹감독자 역할, 자본배분 방법론, 보고체계 세부 규정 포함. 9월까지 의견수렴.",
    tags: ["ICS 2.0", "ComFrame", "감독지침"],
    source: "IAIS",
    link: "https://www.iaisweb.org"
  },
  {
    id: 19,
    date: "2025-07-24",
    regime: "kics",
    type: "report",
    title: "금융감독원, 2025년 1분기 K-ICS 비율 현황 발표",
    summary: "생명보험사 평균 K-ICS 비율 189.4%(경과조치 적용 전 148.2%), 손해보험사 평균 207.1%(적용 전 178.6%). 금리 하락 영향으로 생명보험사 비율 전분기 대비 소폭 하락.",
    tags: ["K-ICS", "1분기", "금리 민감도"],
    source: "금융감독원 (FSS)",
    link: "https://www.fss.or.kr"
  },
  {
    id: 18,
    date: "2025-07-10",
    regime: "japan_ev",
    type: "report",
    title: "일본 FSA, 경제가치기반 지급여력 시행 후 첫 분기 공시 결과",
    summary: "2025년 4월 시행 이후 첫 번째 경제가치기반 비율 공시. 주요 생명보험 그룹 평균 비율 220%대. 금리 상승 효과로 부채 평가액 감소, 전반적 양호한 출발.",
    tags: ["일본 FSA", "경제가치기반", "첫 공시"],
    source: "金融庁 (FSA Japan)",
    link: "https://www.fsa.go.jp"
  },
  {
    id: 17,
    date: "2025-06-18",
    regime: "solvency2",
    type: "regulation",
    title: "유럽의회 ECON, Omnibus II 수정안 심의 완료",
    summary: "유럽의회 경제통화위원회(ECON)가 Omnibus II 수정안 의결. 변동성조정(VA) 산출 방식 개선, 비례성 원칙 확대, 기후 시나리오 분석 의무화 포함. 3자협의(Trilogue) 개시 예정.",
    tags: ["Omnibus II", "ECON", "Trilogue"],
    source: "European Parliament",
    link: "https://www.eiopa.europa.eu"
  },
  {
    id: 16,
    date: "2025-06-03",
    regime: "solvency_uk",
    type: "report",
    title: "PRA, Solvency UK 시행 성과 점검 및 추가 개혁 방향 공표",
    summary: "PRA가 Solvency UK 주요 성과 발표. 매칭조정 포트폴리오 자산 25% 확대, 인프라 투자 증가. 2026년 추가 보고 간소화 패키지 예고.",
    tags: ["Solvency UK", "PRA", "인프라 투자"],
    source: "PRA / Bank of England",
    link: "https://www.bankofengland.co.uk/prudential-regulation"
  },
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
