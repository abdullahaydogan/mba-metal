import { Box, alpha } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { navigationItems } from '../../../config/navigation.config';
import { routes } from '../../../constants/routes';

export function Navbar() {
    const location = useLocation();
    const { t } = useTranslation();

    const isActiveRoute = (href: string) => {
        if (href === routes.home) {
            return location.pathname === routes.home;
        }

        return (
            location.pathname === href ||
            location.pathname.startsWith(`${href}/`)
        );
    };

    return (
        <Box
            component="nav"
            aria-label={t('common.mainNavigation')}
            sx={{
                position: 'relative',
                zIndex: 2,
                display: { xs: 'none', lg: 'flex' },
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 0,
                px: { lg: 2, xl: 3 },
            }}
        >
            <Box
                component="ul"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { lg: 0.25, xl: 0.5 },
                    m: 0,
                    p: 0,
                    listStyle: 'none',
                }}
            >
                {navigationItems.map((item) => {
                    const active = isActiveRoute(item.href);

                    return (
                        <Box component="li" key={item.id} sx={{ display: 'flex' }}>
                            <Box
                                component={Link}
                                to={item.href}
                                aria-current={active ? 'page' : undefined}
                                sx={(theme) => {
                                    const isDark = theme.palette.mode === 'dark';

                                    return {
                                        position: 'relative',
                                        height: 40,
                                        px: { lg: 1.25, xl: 1.6 },
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '7px',
                                        color: active
                                            ? 'text.primary'
                                            : 'text.secondary',
                                        bgcolor: active
                                            ? alpha(
                                                  theme.palette.primary.main,
                                                  isDark ? 0.14 : 0.07
                                              )
                                            : 'transparent',
                                        textDecoration: 'none',
                                        whiteSpace: 'nowrap',
                                        fontSize: { lg: '0.76rem', xl: '0.82rem' },
                                        fontWeight: 600,
                                        letterSpacing: '-0.005em',
                                        transition:
                                            'color 180ms ease, background-color 180ms ease',

                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: '50%',
                                            bottom: 4,
                                            width: 18,
                                            height: 2,
                                            borderRadius: '2px',
                                            bgcolor: 'primary.main',
                                            opacity: active ? 1 : 0.5,
                                            transform: `translateX(-50%) scaleX(${active ? 1 : 0})`,
                                            transformOrigin: 'center',
                                            transition:
                                                'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease',
                                        },

                                        '&:hover': {
                                            color: 'text.primary',
                                            bgcolor: alpha(
                                                theme.palette.primary.main,
                                                active
                                                    ? isDark
                                                        ? 0.18
                                                        : 0.1
                                                    : isDark
                                                      ? 0.1
                                                      : 0.05
                                            ),
                                            '&::before': {
                                                transform:
                                                    'translateX(-50%) scaleX(1)',
                                            },
                                        },

                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                            outlineOffset: -2,
                                        },

                                        '@media (prefers-reduced-motion: reduce)': {
                                            transition: 'none',
                                            '&::before': { transition: 'none' },
                                        },
                                    };
                                }}
                            >
                                {t(item.labelKey)}
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

export default Navbar;