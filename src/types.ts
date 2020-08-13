export interface IEmploymentHistory {
    jobTitle: string,
    company: string,
    location: string,
    dates: string,
    summary: string,
    accomplishments: string[]
}

export interface ISkill {
    title: string,
    subtitle: string
}

export interface IEducation {
    title: string,
    center: string
}

export interface ILinks {
    title: string,
    url: string
}

export interface IProjects {
    title: string,
    subtitle: string,
    description: string,
    links: ILinks[]
}

export interface IAbout {
    summary: string[]
}

export interface IInterests {
    interests: string[]
}