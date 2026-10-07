import { routes } from '../constants/routes';

export type HeaderVariant =
    | 'light'
    | 'dark';

interface HeaderRouteConfig {
    path: string;
    variant: HeaderVariant;
}

export const headerRouteConfig:
    HeaderRouteConfig[] = [
        {
            path: routes.home,
            variant: 'light',
        },

        {
            path: routes.about,
            variant: 'light',
        },

        {
            path: routes.whyUs,
            variant: 'light',
        },

        {
            path: routes.capabilities,
            variant: 'dark',
        },

        {
            path: routes.industries,
            variant: 'light',
        },

        {
            path: routes.contact,
            variant: 'light',
        },

    ];

export function getHeaderVariant(
    pathname: string
): HeaderVariant {
    const route =
        headerRouteConfig.find(
            (item) => {
                if (
                    item.path ===
                    routes.home
                ) {
                    return (
                        pathname ===
                        routes.home
                    );
                }

                return pathname.startsWith(
                    item.path
                );
            }
        );

    return route?.variant ?? 'light';
}