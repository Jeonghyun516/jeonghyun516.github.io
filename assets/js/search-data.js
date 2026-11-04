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
        },{id: "news-our-paper-on-adversarial-attack-detection-with-grad-cam-and-clustering-was-published-in-systems-mdpi",
          title: '🎉 Our paper on adversarial attack detection with Grad-CAM and clustering was published...',
          description: "",
          section: "News",},{id: "news-started-my-m-s-in-information-security-at-korea-university-hcrl-under-prof-huy-kang-kim-supported-by-the-bk21-four-graduate-research-fellowship",
          title: '🎓 Started my M.S. in Information Security at Korea University (HCRL) under Prof....',
          description: "",
          section: "News",},{id: "news-filed-two-korean-patent-applications-on-adversarial-example-restoration-for-autonomous-driving-and-cyber-attack-detection-in-uav-environments",
          title: '💡 Filed two Korean patent applications on adversarial example restoration for autonomous driving...',
          description: "",
          section: "News",},{id: "news-technical-report-autoencoder-based-denoising-defense-against-adversarial-attacks-on-object-detection-is-out-on-arxiv",
          title: '📄 Technical report Autoencoder-based Denoising Defense against Adversarial Attacks on Object Detection is...',
          description: "",
          section: "News",},{id: "news-started-the-nrf-project-threat-modeling-and-cyber-attack-defense-simulation-for-future-unmanned-vehicles-developing-rl-based-attack-defense-agents",
          title: '🚗 Started the NRF project Threat Modeling and Cyber Attack Defense Simulation for...',
          description: "",
          section: "News",},{id: "projects-cyber-attack-defense-simulation-for-unmanned-vehicles",
          title: 'Cyber Attack Defense Simulation for Unmanned Vehicles',
          description: "Threat modeling and RL-based attack/defense agents · NRF · 2026–",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-core-security-for-unmanned-vehicles",
          title: 'Core Security for Unmanned Vehicles',
          description: "Adversarial attacks &amp; defenses on AV perception · NRF · 2026–",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-autohack-can-attack-dataset",
          title: 'AutoHack CAN Attack Dataset',
          description: "Real-vehicle CAN attack dataset for automotive security · 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-ml-anomaly-detection-for-file-system-metadata",
          title: 'ML Anomaly Detection for File System Metadata',
          description: "Metadata preprocessing &amp; ML anomaly detection · NSR · 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%6A%64%67%75%73%30%34%32%35@%6B%6F%72%65%61.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Jeonghyun516", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/rendercv/rendercv_output/Jeonghyun_Sim_CV.pdf", "_blank");
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
