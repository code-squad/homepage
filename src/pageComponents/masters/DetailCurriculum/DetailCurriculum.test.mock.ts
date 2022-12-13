export const DetailCurriculumQueryResult = {
  allMdx: {
    edges: [
      {
        node: {
          frontmatter: {
            tabName: "웹 프론트엔드",
            index: 1,
            curriculum: [
              {
                subject: "개인 프로젝트",
                subjectList: [
                  {
                    detail: "HTML, CSS, DOM, Event 기초. 브라우저 렌더링. git",
                    name: "정적 페이지 개발",
                  },
                  {
                    detail: "Node.JS 개발환경, DOM APIs, Event 중급, Templating, 웹 애니메이션",
                    name: "정적 페이지 개발",
                  },
                  {
                    detail: "디버깅, 데이터 fetching, 비동기 통신, API Server",
                    name: "데이터 통신",
                  },
                  {
                    detail: "ES Classes,비동기제어, Promise 패턴, 정렬, 탐색",
                    name: "알고리즘 구현",
                  },
                  {
                    detail: "ES Modules, 객체지향 자바스크립트. MVC와 의존성관리, 재사용컴포넌트",
                    name: "쇼핑몰 개발",
                  },
                  {
                    detail: "Event 고급제어, 커스텀 웹서버",
                    name: "인터랙티브 웹사이트",
                  },
                  {
                    detail: "JS 특징 파헤치기",
                    name: "FE 세미나",
                  },
                ],
              },
              {
                subject: "팀 프로젝트",
                subjectList: [
                  {
                    detail: "FE 빌드 (웹팩, 바벨), 옵저버 패턴, 함수단위 프로그래밍",
                    name: "할 일 관리 서비스",
                  },
                  {
                    detail: "타입스크립트, 에러핸들링",
                    name: "온라인 주문 서비스",
                  },
                  {
                    detail: "클라이언트 상태관리, React 기초",
                    name: "상품 관리",
                  },
                  {
                    detail: "리액트 훅, 리액트 스타일, 커스텀 훅, 상태관리",
                    name: "온라인 예약 서비스",
                  },
                  {
                    detail: "컴포넌트 기반 개발, 스토리 북, 최적화, 테스팅",
                    name: "이슈 관리 서비스",
                  },
                ],
              },
            ],
            masterInfoList: [
              {
                picture: "crong",
                introduce: "바닐라JS를 좋아하고, UX향상에 도움이 되는 개발 방법에 관심이 많아요",
                name: "크롱",
                nutshell: '"바닐라JS에서 프레임웍까지 프론트엔드 최고의 커리큘럼으로 배우세요"',
                position: "Crong, 웹 프론트엔드 마스터",
              },
            ],
          },
        },
      },
      {
        node: {
          frontmatter: {
            tabName: "웹 백엔드",
            index: 2,
            curriculum: [
              {
                subject: "개인 프로젝트",
                subjectList: [
                  {
                    detail: "GitHub을 사용한 코드 관리, 객체 지향 프로그래밍 이해하기",
                    name: "사다리 게임",
                  },
                  {
                    detail: "TDD, JCF 익히기, JVM의 동작 원리 파악",
                    name: "로또 게임",
                  },
                  {
                    detail: "스프링 부트로 다양한 웹백엔드 기반 기술 익히기",
                    name: "카페 구현",
                  },
                  {
                    detail: "바닐라 자바로 웹 서버를 구현하며 HTTP의 동작원리를 학습",
                    name: "자바 웹 서버",
                  },
                ],
              },
              {
                subject: "팀 프로젝트",
                subjectList: [
                  {
                    detail: "스프링 부트 + JPA 학습",
                    name: "할 일 관리 서비스",
                  },
                  {
                    detail: "Oauth를 이용한 인증, 클라우드를 이용한 배포",
                    name: "온라인 주문 서비스",
                  },
                  {
                    detail: "NoSQL DB의 활용, 자연어 검색",
                    name: "온라인 예약 서비스",
                  },
                  {
                    detail: "도커와 컨테이너, 서버 모니터링 및 성능 분석",
                    name: "이슈 관리 서비스",
                  },
                ],
              },
            ],
            masterInfoList: [
              {
                picture: "honux",
                introduce:
                  "자바, 스프링, 데이터베이스,HTTP, 클라우드도 배우지만 함께 배우고, 함께 자라는 법도 익힙니다.",
                name: "호눅스",
                nutshell: '"서버 인프라 뿐만 아니라 사람과도 협업을 하며 성장하는 방법을 배웁니다"',
                position: "Honux, 웹 백엔드 마스터",
              },
            ],
          },
        },
      },
      {
        node: {
          frontmatter: {
            tabName: "모바일 iOS",
            index: 3,
            curriculum: [
              {
                subject: "개인 프로젝트",
                subjectList: [
                  {
                    detail: "HIG, 프로그래밍 설계, 뷰 컨트롤러 프로그래밍",
                    name: "사진 프로파일 앱",
                  },
                  {
                    detail: "Struct와 Class, 메모리 관리, 스위프트 객체지향",
                    name: "카드 게임 앱",
                  },
                  {
                    detail: "뷰프로그래밍, MVC역할, 단위테스트",
                    name: "그림판 앱",
                  },
                  {
                    detail: "옵저버와 노티피케이션, 앱 라이프 사이클, 프로토콜 지향 프로그래밍",
                    name: "사진 앨범 앱",
                  },
                ],
              },
              {
                subject: "팀 프로젝트",
                subjectList: [
                  {
                    detail: "터치이벤트와 응답체인, 오토레이아웃, 함수형 프로그래밍",
                    name: "할 일 관리 서비스",
                  },
                  {
                    detail: "동시성 프로그래밍, 네트워크 프로그래밍",
                    name: "온라인 주문 서비스",
                  },
                  {
                    detail: "영구저장소, 앱 아키텍처 개선",
                    name: "스타벅스 클론 앱",
                  },
                  {
                    detail: "코어그래픽스, 멀티미디어, 앱 배포",
                    name: "온라인 예약 서비스",
                  },
                  {
                    detail: "코어 ML, 뷰렌더링 원리",
                    name: "이슈 관리 서비스",
                  },
                ],
              },
            ],
            masterInfoList: [
              {
                picture: "jk",
                introduce: "매력적인 애플 플랫폼에서 함께 성장할 개발자를 기다립니다.",
                name: "JK",
                nutshell: "“나와 지인들에게 필요한 iOS 앱을 직접 만들고 출시까지 도전해보세요”",
                position: "모바일 iOS 마스터",
              },
            ],
          },
        },
      },
    ],
  },
};
