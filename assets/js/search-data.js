// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed papers and preprints, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Things I have built and explored.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, experience, and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-예시-joined-ocs-lab-korea-university-as-a-researcher",
          title: '🔬 (예시) Joined OCS Lab, Korea University as a researcher.',
          description: "",
          section: "News",},{id: "news-예시-논문이-학회-이름-2026에-accept-되었습니다-news-폴더에서-수정하세요",
          title: '🎉 (예시) 논문이 학회 이름 2026에 accept 되었습니다! — _news/ 폴더에서 수정하세요.',
          description: "",
          section: "News",},{id: "projects-research-project-one",
          title: 'Research Project One',
          description: "한 줄 설명 — 어떤 문제를 어떻게 풀었는지",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-research-project-two",
          title: 'Research Project Two',
          description: "한 줄 설명 — 핵심 기여나 결과 수치",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-side-project",
          title: 'Side Project',
          description: "한 줄 설명 — 오픈소스 툴, 해커톤 등",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Jeonghyun516", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
