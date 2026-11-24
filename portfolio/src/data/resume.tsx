import { Icons } from "@/components/icons";
import { SkillIcons } from "@/components/skill-icons";
import { ChartNoAxesColumn, GraduationCap, Database } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Dhruv Yadav",
  initials: "DY",
  role: "Java Backend Developer",
  status: "Open to Java Backend Internship",
  resumeUrl: "/resume.pdf",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I build secure REST APIs with Spring Boot, Spring Security and Spring Data JPA, backed by PostgreSQL and MongoDB. Looking for a Java Backend Internship.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#beyond-code). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  about: [
    "I'm a B.Tech student at [UIT RGPV Shivpuri](https://www.rgpv.ac.in), focused on **backend development** with [Java](https://dev.java) and [Spring Boot](https://spring.io/projects/spring-boot). I build **secure REST APIs** using [Spring Security](https://spring.io/projects/spring-security) ([JWT](https://jwt.io) and [Google OAuth](https://developers.google.com/identity/protocols/oauth2)) and [Spring Data JPA](https://spring.io/projects/spring-data-jpa), and deploy [my projects](/#projects) on [Render](https://render.com) and [Railway](https://railway.com).",
    "Alongside my studies, I did **freelance graphic design for 6 months** to support myself financially. When it started affecting my main goal of becoming a backend developer, I stopped and put my full focus on software development. I also [won 1st prize at my college's SIH 2026 internal hackathon](/#beyond-code).",
    "I use AI tools in my development workflow, and I make sure I **review, test and understand** what goes into my projects. I'm currently learning [Docker](https://www.docker.com), [Redis caching](https://redis.io) and [Swagger/OpenAPI](https://swagger.io), and working through the Spring Boot Backend track on [Hyperskill](https://hyperskill.org).",
  ],
  learning: [
    { name: "Docker", href: "https://www.docker.com" },
    { name: "Redis (Spring Cache)", href: "https://docs.spring.io/spring-boot/reference/io/caching.html" },
    { name: "Swagger / OpenAPI", href: "https://swagger.io" },
    { name: "Spring Boot Backend (Hyperskill)", href: "https://hyperskill.org", logoUrl: "/hyperskill-logo.png" },
  ] as { name: string; href: string; logoUrl?: string }[],
  avatarUrl: "/portfolio-profile.png",
  beyondCode: [
    {
      title: "SIH Internal Hackathon",
      tag: "1st Prize",
      logoUrl: "/sih-logo.jpg",
      certificateUrl: "",
      description:
        "Won **first prize** at the college-level Smart India Hackathon internal round with [BIS Smart Assistant](/#projects), a team project.",
    },
    {
      title: "Hackathons",
      tag: "5+ participated",
      logoUrl: "/beyond-code/hackathons.svg",
      certificateUrl: "",
      description:
        "Participated in **5+ hackathons**, building projects in teams under time pressure, including:",
      chips: ["SIH 2025", "SIH 2026", "IIIT Sri City", "Faraway", "CodeManthan"],
    },
    {
      title: "Speech Competition",
      tag: "Winner",
      logoUrl: "/uit-rgpv-logo.jpg",
      certificateUrl: "",
      description: "Won a **college-level speech competition**.",
    },
    {
      title: "Technoverse Club",
      tag: "Head Coordinator",
      logoUrl: "/technoverse-logo.jpg",
      description:
        "Lead the club team and organize technical events for students at a student-run technical club in UIT RGPV Shivpuri. Joined as a member in **first year** and became **Head Coordinator in third year**.",
    },
    {
      title: "Freelance Graphic Designer",
      tag: "6 months",
      logoUrl: "/beyond-code/design.svg",
      description:
        "Designed thumbnails and social media posts for clients using [Canva](https://www.canva.com), [Figma](https://www.figma.com) and [Photoshop](https://www.adobe.com/products/photoshop.html), alongside my studies. Stopped to focus on backend development.",
    },
  ],
  certifications: [
    {
      title: "Object-Oriented Programming in Java",
      issuer: "Scaler School of Technology",
      href: "https://www.scaler.com/school-of-technology/",
      logoUrl: "/scaler-logo.png",
    },
    {
      title: "Java",
      issuer: "Scaler School of Technology",
      href: "https://www.scaler.com/school-of-technology/",
      logoUrl: "/scaler-logo.png",
    },
    {
      title: "Spring Boot Backend",
      issuer: "Hyperskill",
      href: "https://hyperskill.org",
      status: "In progress",
      logoUrl: "/hyperskill-logo.png",
    },
  ] as {
    title: string;
    issuer: string;
    href: string;
    status?: string;
    logoUrl?: string;
  }[],
  profiles: [
    { name: "LinkedIn", href: "http://linkedin.com/in/dhruv-yadav-java", icon: Icons.linkedin, iconColor: "#0A66C2" },
    { name: "GitHub", href: "https://github.com/Dhruvyadav27", icon: Icons.github, iconColor: "#181717" },
    { name: "LeetCode", href: "https://leetcode.com/u/Dhruvyadav27/", icon: Icons.leetcode, iconColor: "#FFA116" },
    { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/ymulayamk77e", icon: Icons.gfg, iconColor: "#2F8D46" },
    { name: "CodeChef", href: "https://www.codechef.com/users/dhruvyadav27", icon: Icons.codechef, iconColor: "#5B4638" },
    { name: "Codolio", href: "https://codolio.com/profile/dhruv_yadav27", icon: ChartNoAxesColumn, iconColor: "#7C3AED", logoUrl: "/codolio-logo.png" },
    { name: "Hyperskill", href: "https://hyperskill.org/my-learning/634241032?preview=true", icon: GraduationCap, iconColor: "#F25F3A", logoUrl: "/hyperskill-logo.png" },
  ] as {
    name: string;
    href: string;
    iconColor: string;
    icon: React.ComponentType<{
      className?: string;
      style?: React.CSSProperties;
    }>;
    logoUrl?: string;
  }[],
  dsa: {
    solved: "150+",
    languages: ["Java", "C++"],
    covered: ["Arrays", "Linked Lists", "Recursion", "Backtracking", "Sorting", "Binary Search"],
    next: ["Hash Maps", "Stacks and Queues", "Trees", "Graphs", "Dynamic Programming"],
    profiles: [
      { name: "LeetCode", href: "https://leetcode.com/u/Dhruvyadav27/", icon: Icons.leetcode, iconColor: "#FFA116", logoUrl: undefined },
      { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/ymulayamk77e", icon: Icons.gfg, iconColor: "#2F8D46", logoUrl: undefined },
      { name: "Codolio", href: "https://codolio.com/profile/dhruv_yadav27", icon: ChartNoAxesColumn, iconColor: "#7C3AED", logoUrl: "/codolio-logo.png" },
    ],
  },
  skillGroups: [
    {
      title: "Languages",
      items: [
        { name: "Java", icon: Java, href: "https://dev.java", topics: ["OOP", "Collections", "Generics", "Exception Handling"] },
        { name: "SQL", icon: Database, href: "https://www.postgresql.org/docs/current/sql.html", topics: ["Joins", "Indexing", "Normalization"] },
        { name: "C++", icon: SkillIcons.cpp, href: "https://isocpp.org", topics: ["Fundamentals", "OOP"] },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Spring Boot", icon: SkillIcons.springboot, href: "https://spring.io/projects/spring-boot" },
        { name: "Spring Core & MVC", icon: SkillIcons.spring, href: "https://spring.io/projects/spring-framework" },
        { name: "Spring Data JPA", icon: SkillIcons.spring, href: "https://spring.io/projects/spring-data-jpa" },
        { name: "Hibernate", icon: SkillIcons.hibernate, href: "https://hibernate.org" },
        { name: "Spring Security", icon: SkillIcons.springsecurity, href: "https://spring.io/projects/spring-security" },
        { name: "JWT", icon: SkillIcons.jwt, iconColor: "#000000", href: "https://jwt.io" },
        { name: "OAuth 2.0 (Google Login)", icon: SkillIcons.google, href: "https://developers.google.com/identity/protocols/oauth2" },
        { name: "REST APIs", icon: Icons.globe, href: "https://restfulapi.net" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "PostgreSQL", icon: Postgresql, href: "https://www.postgresql.org" },
        { name: "MongoDB", icon: SkillIcons.mongodb, href: "https://www.mongodb.com" },
      ],
    },
    {
      title: "Testing & API Tools",
      items: [
        { name: "JUnit", icon: SkillIcons.junit, href: "https://junit.org" },
        { name: "Mockito", href: "https://site.mockito.org" },
        { name: "Postman", icon: SkillIcons.postman, href: "https://www.postman.com" },
      ],
    },
    {
      title: "DevOps & Deployment",
      items: [
        { name: "Git", icon: SkillIcons.git, href: "https://git-scm.com" },
        { name: "GitHub", icon: SkillIcons.github, iconColor: "#181717", href: "https://github.com/Dhruvyadav27" },
        { name: "Linux", icon: SkillIcons.linux, href: "https://www.kernel.org" },
        { name: "Maven", icon: SkillIcons.maven, href: "https://maven.apache.org" },
        { name: "Render", icon: SkillIcons.render, iconColor: "#46E3B7", href: "https://render.com" },
        { name: "Railway", icon: SkillIcons.railway, href: "https://railway.com" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "IntelliJ IDEA", icon: SkillIcons.intellij, iconColor: "#FE315A", href: "https://www.jetbrains.com/idea/" },
        { name: "VS Code", href: "https://code.visualstudio.com" },
      ],
    },
    {
      title: "Data Structures & Algorithms",
      items: [
        { name: "Arrays" },
        { name: "Linked Lists" },
        { name: "Recursion" },
        { name: "Backtracking" },
        { name: "Sorting" },
        { name: "Binary Search" },
      ],
    },
    {
      title: "Learning",
      items: [
        { name: "Docker", icon: SkillIcons.docker, href: "https://www.docker.com" },
        { name: "Redis", icon: SkillIcons.redis, href: "https://redis.io" },
        { name: "Swagger / OpenAPI", icon: SkillIcons.swagger, href: "https://swagger.io" },
      ],
    },
  ] as {
    title: string;
    note?: string;
    items: {
      name: string;
      href?: string;
      topics?: string[];
      iconColor?: string;
      icon?: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
      }>;
    }[];
  }[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/assistant", icon: Icons.assistant, label: "Portfolio Assistant" },
  ],
  contact: {
    email: "ymulayamyadav99@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dhruvyadav27",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/dhruv-yadav-java",
        icon: Icons.linkedin,

        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Dhruvyadav27/",
        icon: Icons.leetcode,
        navbar: true,
      },
      GeeksforGeeks: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/profile/ymulayamk77e",
        icon: Icons.gfg,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ymulayamyadav99@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "BIS Smart Assistant",
      href: "https://github.com/Dhruvyadav27/bis-backend",
      dates: "Government / Standards · Backend development",
      badge: "1st Prize, SIH 2026 internal hackathon",
      description:
        "A **multi-agent AI assistant** built for a Bureau of Indian Standards (BIS) problem statement for Smart India Hackathon 2026. **Seven specialized AI agents** each handle a different BIS-related problem, and an **admin panel** lets admins add new data and review flagged answers. The backend uses Spring Boot REST APIs, [Spring Security](https://spring.io/projects/spring-security) with JWT and Google OAuth, and [MongoDB](https://www.mongodb.com). The AI features (RAG with a vector database, [Gemini API](https://ai.google.dev)) were developed with AI-assisted tools, and I reviewed and tested the system end-to-end. Frontend by teammate Jigyasa Jha.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "Google OAuth",
        "MongoDB",
        "REST APIs",
        "RAG",
        "Gemini API",
      ],
      links: [
        { type: "Live Demo", href: "#", icon: <Icons.globe className="size-3" /> },
        { type: "GitHub", href: "https://github.com/Dhruvyadav27/bis-backend", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Ledger",
      href: "https://github.com/Dhruvyadav27/AI-ledger-backend",
      dates: "Productivity · Backend development",
      badge: "",
      description:
        "An **AI-powered daily planner** that generates a daily schedule and **automatically reschedules** it when plans change. The backend uses Spring Boot REST APIs secured with [Spring Security](https://spring.io/projects/spring-security) and [MongoDB](https://www.mongodb.com) for storage. Schedules are generated using the [Gemini API](https://ai.google.dev). Developed with AI assistance and tested by me.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "MongoDB",
        "REST APIs",
        "Gemini API",
      ],
      links: [
        { type: "Live Demo", href: "#", icon: <Icons.globe className="size-3" /> },
        { type: "GitHub", href: "https://github.com/Dhruvyadav27/AI-ledger-backend", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hospital Management System",
      href: "https://github.com/Dhruvyadav27/hospital-management-system",
      dates: "Healthcare · Backend development",
      badge: "In development",
      description:
        "A **hospital management backend** with secure REST APIs built on [Spring Data JPA](https://spring.io/projects/spring-data-jpa) ([Hibernate](https://hibernate.org)) and [PostgreSQL](https://www.postgresql.org). Authentication uses **JWT and Google OAuth login**. Developed with AI assistance and reviewed by me.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "Spring Security",
        "JWT",
        "Google OAuth",
        "PostgreSQL",
        "REST APIs",
      ],
      links: [
        { type: "GitHub", href: "https://github.com/Dhruvyadav27/hospital-management-system", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
