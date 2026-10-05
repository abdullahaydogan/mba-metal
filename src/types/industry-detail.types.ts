export interface IndustryApplication {
    titleKey: string;
    descriptionKey: string;
    image: string;
}

export interface IndustryRequirement {
    titleKey: string;
    descriptionKey: string;
}

export interface IndustryProductionItem {
    needKey: string;
    solutionKey: string;
}

export interface IndustryDetail {
    slug: string;

    translationKey: string;

    heroImage: string;

    overviewImage: string;

    applications: IndustryApplication[];

    requirements: IndustryRequirement[];

    productionItems: IndustryProductionItem[];
}