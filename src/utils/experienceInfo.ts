
export interface ExperienceItem {
    company:string,
    title: string,
    description: string,
    time: string,
    location: string,
    link: string,
    skills?: string,
}

export const experienceInfo: ExperienceItem[] = [
    {
        company: "Nimbus Labs",
        title: "Undergraduate Research Assistant",
        description: "",
        time: "Feb 2023 - May 2023 & Aug 2024 - Present",
        location: "Lincoln, NE",
        link: "https://nimbus.unl.edu/",
        skills: "C++"
    },

    {
        company: "Hudl",
        title: "Software Engineering Intern",
        description: "At Hudl, I contributed across multiple teams to improve internal tooling and build new product features. I redesigned and refactored the internal employee sign-up tool, enabling streamlined creation of test environments with schools, teams, and users. I also migrated the payment portal front-end to a monorepo, helping standardize development practices across Hudl products. On the product side, I developed full-stack features in C# and TypeScript for the Hudl Ticketing platform, including a ticketed event draft state to simplify onboarding. I also exposed key ticketing data through GraphQL to support real-time counts and ticket type management.",
        time: "May 2023 - Aug 2023 & May 2024 - Aug 2024",
        location: "Lincoln, NE",
        link: "https://www.hudl.com/",
    },

    {
        company: "Scoular",
        title: "IT Analytics Intern",
        description: "",
        time: "May 2022 - Aug 2022",
        location: "Omaha, NE",
        link: "https://www.scoular.com/",
    },

    {
        company: "UNL School of Computing",
        title: 'SWE III Teaching Assistant',
        description: "",
        time: "Aug 2023 - Dec 2023",
        location: "Lincoln, NE",
        link: "https://computing.unl.edu/",
    }
]