import {
    routes,
} from '../constants/routes';

export interface NavigationItem {
    id: string;
    labelKey: string;
    href: string;
}

export const navigationItems:
    NavigationItem[] = [
        {
            id: 'home',
            labelKey:
                'navigation.home',
            href:
                routes.home,
        },

        {
            id: 'about',
            labelKey:
                'navigation.about',
            href:
                routes.about,
        },

        {
            id: 'whyUs',
            labelKey:
                'navigation.whyUs',
            href:
                routes.whyUs,
        },

        {
            id: 'capabilities',
            labelKey:
                'navigation.capabilities',
            href:
                routes.capabilities,
        },

        {
            id: 'industries',
            labelKey:
                'navigation.industries',
            href:
                routes.industries,
        },
        {
            id: 'contact',
            labelKey:
                'navigation.contact',
            href:
                routes.contact,
        },
    ];