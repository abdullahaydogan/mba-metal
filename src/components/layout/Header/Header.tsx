import {
    useEffect,
    useState,
} from 'react';

import {
    Box,
    IconButton,
    Tooltip,
} from '@mui/material';

import {
    ArrowUpRight,
    Menu,
    Moon,
    Sun,
} from 'lucide-react';

import {
    Link,
    useLocation,
} from 'react-router-dom';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../common/Container';

import {
    Logo,
} from '../../common/Logo';

import {
    MobileMenu,
} from '../MobileMenu';

import {
    navigationItems,
} from '../../../config/navigation.config';

import {
    routes,
} from '../../../constants/routes';

import {
    useLanguage,
} from '../../../hooks/useLanguage';

import {
    useThemeMode,
} from '../../../hooks/useThemeMode';

export function Header() {
    const location =
        useLocation();

    const {
        t,
    } = useTranslation();

    const {
        language,
        toggleLanguage,
    } = useLanguage();

    const {
        mode,
        toggleTheme,
    } = useThemeMode();

    const [
        scrolled,
        setScrolled,
    ] = useState(false);

    const [
        mobileMenuOpen,
        setMobileMenuOpen,
    ] = useState(false);

    /* =========================================================
       SCROLL
    ========================================================= */

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(
                window.scrollY > 20
            );
        };

        handleScroll();

        window.addEventListener(
            'scroll',
            handleScroll,
            {
                passive: true,
            }
        );

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll
            );
        };
    }, []);

    /* =========================================================
       ROUTE CHANGE
    ========================================================= */

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    /* =========================================================
       ACTIVE ROUTE
    ========================================================= */

    const isActiveRoute = (
        href: string
    ) => {
        if (
            href === routes.home
        ) {
            return (
                location.pathname ===
                routes.home
            );
        }

        return (
            location.pathname === href ||
            location.pathname.startsWith(
                `${href}/`
            )
        );
    };

    /*
     * Desktop'ta Ana Sayfa linkini göstermiyoruz.
     * Logo zaten ana sayfaya yönlendiriyor.
     */

    const desktopNavigationItems =
        navigationItems;

    const handleLanguageToggle =
        () => {
            void toggleLanguage();
        };

    return (
        <>
            <Box
                component="header"
                sx={{
                    position: 'fixed',

                    top: 0,
                    left: 0,
                    right: 0,

                    zIndex: 1200,

                    width: '100%',

                    pt: {
                        xs: 1,
                        sm: 1.25,
                        lg: scrolled
                            ? 1
                            : 1.5,
                    },

                    transition:
                        'padding 260ms cubic-bezier(0.22, 1, 0.36, 1)',

                    pointerEvents:
                        'none',
                }}
            >
                <Container>
                    <Box
                        sx={{
                            position:
                                'relative',

                            minHeight: {
                                xs: 64,
                                sm: 68,
                                lg: scrolled
                                    ? 68
                                    : 76,
                            },

                            px: {
                                xs: 1.25,
                                sm: 1.5,
                                lg: 1.5,
                                xl: 1.75,
                            },

                            display: 'flex',

                            alignItems:
                                'center',

                            border:
                                '1px solid',

                            borderColor:
                                (theme) =>
                                    theme.palette
                                        .mode ===
                                        'dark'
                                        ? scrolled
                                            ? 'rgba(255,255,255,0.12)'
                                            : 'rgba(255,255,255,0.09)'
                                        : scrolled
                                            ? 'rgba(13,52,36,0.13)'
                                            : 'rgba(13,52,36,0.09)',

                            borderRadius: {
                                xs: '12px',
                                lg: '10px',
                            },

                            bgcolor:
                                (theme) =>
                                    theme.palette
                                        .mode ===
                                        'dark'
                                        ? scrolled
                                            ? 'rgba(9,16,13,0.94)'
                                            : 'rgba(9,16,13,0.82)'
                                        : scrolled
                                            ? 'rgba(255,255,255,0.96)'
                                            : 'rgba(255,255,255,0.88)',

                            backdropFilter:
                                'blur(24px) saturate(150%)',

                            WebkitBackdropFilter:
                                'blur(24px) saturate(150%)',

                            boxShadow:
                                (theme) =>
                                    theme.palette
                                        .mode ===
                                        'dark'
                                        ? scrolled
                                            ? '0 16px 45px rgba(0,0,0,0.28)'
                                            : '0 12px 35px rgba(0,0,0,0.16)'
                                        : scrolled
                                            ? '0 18px 50px rgba(17,54,39,0.10)'
                                            : '0 12px 35px rgba(17,54,39,0.06)',

                            overflow:
                                'hidden',

                            pointerEvents:
                                'auto',

                            transition: [
                                'min-height 260ms cubic-bezier(0.22, 1, 0.36, 1)',
                                'background-color 220ms ease',
                                'border-color 220ms ease',
                                'box-shadow 220ms ease',
                            ].join(','),

                            /*
                             * Navbar'ın üst tarafındaki
                             * ince endüstriyel vurgu.
                             */
                            '&::before': {
                                content:
                                    '""',

                                position:
                                    'absolute',

                                top: 0,
                                left: 0,

                                width: {
                                    xs: 90,
                                    lg: 150,
                                },

                                height: '2px',

                                bgcolor:
                                    'primary.main',

                                opacity: 0.9,
                            },

                            /*
                             * Sağ tarafta çok hafif
                             * teknik ışık.
                             */
                            '&::after': {
                                content:
                                    '""',

                                position:
                                    'absolute',

                                width: 260,
                                height: 160,

                                right: -90,
                                top: -90,

                                borderRadius:
                                    '50%',

                                background:
                                    'radial-gradient(circle, rgba(24,125,85,0.10) 0%, rgba(24,125,85,0) 70%)',

                                pointerEvents:
                                    'none',
                            },
                        }}
                    >
                        {/* =====================================
                            BRAND
                        ====================================== */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                zIndex: 2,

                                display:
                                    'flex',

                                alignItems:
                                    'center',

                                flexShrink: 0,

                                pr: {
                                    lg: 2.5,
                                    xl: 3,
                                },
                            }}
                        >
                            <Logo
                                size="medium"
                            />
                        </Box>

                        {/* =====================================
                            BRAND DIVIDER
                        ====================================== */}

                        <Box
                            aria-hidden="true"
                            sx={{
                                display: {
                                    xs: 'none',
                                    lg: 'block',
                                },

                                width: '1px',

                                alignSelf:
                                    'stretch',

                                my: 1.75,

                                bgcolor:
                                    (theme) =>
                                        theme.palette
                                            .mode ===
                                            'dark'
                                            ? 'rgba(255,255,255,0.09)'
                                            : 'rgba(17,54,39,0.10)',
                            }}
                        />

                        {/* =====================================
                            DESKTOP NAVIGATION
                        ====================================== */}

                        <Box
                            component="nav"
                            aria-label={
                                language ===
                                    'tr'
                                    ? 'Ana navigasyon'
                                    : 'Main navigation'
                            }
                            sx={{
                                position:
                                    'relative',

                                zIndex: 2,

                                display: {
                                    xs: 'none',
                                    lg: 'flex',
                                },

                                flex: 1,

                                alignItems:
                                    'center',

                                justifyContent:
                                    'center',

                                minWidth: 0,

                                px: {
                                    lg: 2,
                                    xl: 3,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'center',

                                    gap: {
                                        lg: 0.5,
                                        xl: 1,
                                    },
                                }}
                            >
                                {desktopNavigationItems.map(
                                    (
                                        item
                                    ) => {
                                        const active =
                                            isActiveRoute(
                                                item.href
                                            );

                                        return (
                                            <Box
                                                key={
                                                    item.id
                                                }
                                                component={
                                                    Link
                                                }
                                                to={
                                                    item.href
                                                }
                                                sx={{
                                                    position:
                                                        'relative',

                                                    height:
                                                        44,

                                                    px: {
                                                        lg: 1.15,
                                                        xl: 1.5,
                                                    },

                                                    display:
                                                        'inline-flex',

                                                    alignItems:
                                                        'center',

                                                    justifyContent:
                                                        'center',

                                                    color:
                                                        active
                                                            ? 'text.primary'
                                                            : 'text.secondary',

                                                    textDecoration:
                                                        'none',

                                                    whiteSpace:
                                                        'nowrap',

                                                    fontSize:
                                                    {
                                                        lg: '0.72rem',
                                                        xl: '0.78rem',
                                                    },

                                                    fontWeight:
                                                        active
                                                            ? 700
                                                            : 600,

                                                    letterSpacing:
                                                        '-0.01em',

                                                    transition:
                                                        'color 180ms ease',

                                                    /*
                                                     * Küçük aktif
                                                     * durum göstergesi.
                                                     */
                                                    '&::before':
                                                    {
                                                        content:
                                                            '""',

                                                        position:
                                                            'absolute',

                                                        left:
                                                            active
                                                                ? 10
                                                                : 14,

                                                        right:
                                                            active
                                                                ? 10
                                                                : 'calc(100% - 14px)',

                                                        bottom: 5,

                                                        height:
                                                            '1px',

                                                        bgcolor:
                                                            'primary.main',

                                                        transition:
                                                            'left 240ms cubic-bezier(0.22, 1, 0.36, 1), right 240ms cubic-bezier(0.22, 1, 0.36, 1)',
                                                    },

                                                    /*
                                                     * Aktif linkte küçük
                                                     * endüstriyel marker.
                                                     */
                                                    '&::after':
                                                    {
                                                        content:
                                                            '""',

                                                        position:
                                                            'absolute',

                                                        left: 1,

                                                        top: '50%',

                                                        width:
                                                            active
                                                                ? 4
                                                                : 0,

                                                        height:
                                                            active
                                                                ? 4
                                                                : 0,

                                                        borderRadius:
                                                            '50%',

                                                        bgcolor:
                                                            'primary.main',

                                                        transform:
                                                            'translateY(-50%)',

                                                        transition:
                                                            'width 180ms ease, height 180ms ease',
                                                    },

                                                    '&:hover':
                                                    {
                                                        color:
                                                            'text.primary',

                                                        '&::before':
                                                        {
                                                            left: 10,
                                                            right: 10,
                                                        },
                                                    },
                                                }}
                                            >
                                                {t(
                                                    item.labelKey
                                                )}
                                            </Box>
                                        );
                                    }
                                )}
                            </Box>
                        </Box>

                        {/* =====================================
                            DESKTOP UTILITIES
                        ====================================== */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                zIndex: 2,

                                display: {
                                    xs: 'none',
                                    lg: 'flex',
                                },

                                alignItems:
                                    'center',

                                gap: 0.5,

                                flexShrink: 0,
                            }}
                        >
                            {/* LANGUAGE */}

                            <Tooltip
                                title={
                                    language ===
                                        'tr'
                                        ? 'English'
                                        : 'Türkçe'
                                }
                            >
                                <Box
                                    component="button"
                                    type="button"
                                    onClick={
                                        handleLanguageToggle
                                    }
                                    aria-label={
                                        language ===
                                            'tr'
                                            ? 'Switch to English'
                                            : 'Türkçeye geç'
                                    }
                                    sx={{
                                        height: 38,

                                        px: 1.25,

                                        display:
                                            'inline-flex',

                                        alignItems:
                                            'center',

                                        justifyContent:
                                            'center',

                                        border: 0,

                                        borderRadius:
                                            '7px',

                                        bgcolor:
                                            'transparent',

                                        color:
                                            'text.secondary',

                                        cursor:
                                            'pointer',

                                        font:
                                            'inherit',

                                        fontSize:
                                            '0.64rem',

                                        fontWeight:
                                            800,

                                        letterSpacing:
                                            '0.1em',

                                        transition:
                                            'background-color 180ms ease, color 180ms ease',

                                        '&:hover':
                                        {
                                            bgcolor:
                                                'action.hover',

                                            color:
                                                'primary.main',
                                        },
                                    }}
                                >
                                    {language ===
                                        'tr'
                                        ? 'EN'
                                        : 'TR'}
                                </Box>
                            </Tooltip>

                            {/* THEME */}

                            <Tooltip
                                title={
                                    mode ===
                                        'dark'
                                        ? language ===
                                            'tr'
                                            ? 'Açık tema'
                                            : 'Light theme'
                                        : language ===
                                            'tr'
                                            ? 'Koyu tema'
                                            : 'Dark theme'
                                }
                            >
                                <IconButton
                                    onClick={
                                        toggleTheme
                                    }
                                    aria-label={
                                        mode ===
                                            'dark'
                                            ? 'Light theme'
                                            : 'Dark theme'
                                    }
                                    sx={{
                                        width: 38,
                                        height: 38,

                                        borderRadius:
                                            '7px',

                                        color:
                                            'text.secondary',

                                        transition:
                                            'background-color 180ms ease, color 180ms ease',

                                        '&:hover':
                                        {
                                            bgcolor:
                                                'action.hover',

                                            color:
                                                'text.primary',
                                        },
                                    }}
                                >
                                    {mode ===
                                        'dark' ? (
                                        <Sun
                                            size={
                                                16
                                            }
                                            strokeWidth={
                                                1.7
                                            }
                                        />
                                    ) : (
                                        <Moon
                                            size={
                                                16
                                            }
                                            strokeWidth={
                                                1.7
                                            }
                                        />
                                    )}
                                </IconButton>
                            </Tooltip>

                            {/* DIVIDER */}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    width:
                                        '1px',

                                    height: 30,

                                    mx: {
                                        lg: 0.5,
                                        xl: 0.75,
                                    },

                                    bgcolor:
                                        'divider',
                                }}
                            />

                            {/* QUOTE */}

                            <Box
                                component={
                                    Link
                                }
                                to={
                                    routes.quote
                                }
                                sx={{
                                    position:
                                        'relative',

                                    minHeight: 44,

                                    px: {
                                        lg: 1.7,
                                        xl: 2,
                                    },

                                    display:
                                        'inline-flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'center',

                                    gap: 1,

                                    overflow:
                                        'hidden',

                                    bgcolor:
                                        'primary.main',

                                    color:
                                        'primary.contrastText',

                                    textDecoration:
                                        'none',

                                    whiteSpace:
                                        'nowrap',

                                    fontSize: {
                                        lg: '0.69rem',
                                        xl: '0.75rem',
                                    },

                                    fontWeight:
                                        750,

                                    letterSpacing:
                                        '0.01em',

                                    borderRadius:
                                        '7px',

                                    boxShadow:
                                        '0 8px 24px rgba(16,96,67,0.20)',

                                    transition:
                                        'transform 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms ease',

                                    '&::before':
                                    {
                                        content:
                                            '""',

                                        position:
                                            'absolute',

                                        inset: 0,

                                        background:
                                            'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)',

                                        transform:
                                            'translateX(-120%)',

                                        transition:
                                            'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                                    },

                                    '&:hover':
                                    {
                                        transform:
                                            'translateY(-2px)',

                                        boxShadow:
                                            '0 14px 34px rgba(16,96,67,0.27)',

                                        '&::before':
                                        {
                                            transform:
                                                'translateX(120%)',
                                        },

                                        '& .quote-arrow':
                                        {
                                            transform:
                                                'translate(2px, -2px)',
                                        },
                                    },

                                    '&:active':
                                    {
                                        transform:
                                            'translateY(0)',
                                    },
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        position:
                                            'relative',

                                        zIndex: 1,
                                    }}
                                >
                                    {t(
                                        'common.getQuote'
                                    )}
                                </Box>

                                <Box
                                    className="quote-arrow"
                                    sx={{
                                        position:
                                            'relative',

                                        zIndex: 1,

                                        display:
                                            'flex',

                                        transition:
                                            'transform 200ms ease',
                                    }}
                                >
                                    <ArrowUpRight
                                        size={
                                            15
                                        }
                                        strokeWidth={
                                            1.8
                                        }
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* =====================================
                            MOBILE ACTIONS
                        ====================================== */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                zIndex: 2,

                                display: {
                                    xs: 'flex',
                                    lg: 'none',
                                },

                                alignItems:
                                    'center',

                                ml: 'auto',

                                gap: 0.5,
                            }}
                        >
                            <Box
                                component="button"
                                type="button"
                                onClick={
                                    handleLanguageToggle
                                }
                                aria-label={
                                    language ===
                                        'tr'
                                        ? 'Switch to English'
                                        : 'Türkçeye geç'
                                }
                                sx={{
                                    minWidth: 40,

                                    height: 40,

                                    px: 1,

                                    display:
                                        'inline-flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'center',

                                    border:
                                        '1px solid',

                                    borderColor:
                                        'divider',

                                    borderRadius:
                                        '8px',

                                    bgcolor:
                                        'transparent',

                                    color:
                                        'text.secondary',

                                    cursor:
                                        'pointer',

                                    font:
                                        'inherit',

                                    fontSize:
                                        '0.63rem',

                                    fontWeight:
                                        800,

                                    letterSpacing:
                                        '0.08em',

                                    transition:
                                        'color 180ms ease, border-color 180ms ease, background-color 180ms ease',

                                    '&:hover':
                                    {
                                        color:
                                            'primary.main',

                                        borderColor:
                                            'primary.main',

                                        bgcolor:
                                            'action.hover',
                                    },
                                }}
                            >
                                {language ===
                                    'tr'
                                    ? 'EN'
                                    : 'TR'}
                            </Box>

                            <IconButton
                                onClick={() =>
                                    setMobileMenuOpen(
                                        true
                                    )
                                }
                                aria-label={
                                    language ===
                                        'tr'
                                        ? 'Menüyü aç'
                                        : 'Open menu'
                                }
                                sx={{
                                    width: 42,
                                    height: 42,

                                    border:
                                        '1px solid',

                                    borderColor:
                                        'divider',

                                    borderRadius:
                                        '8px',

                                    color:
                                        'text.primary',

                                    bgcolor:
                                        'transparent',

                                    transition:
                                        'border-color 180ms ease, background-color 180ms ease, color 180ms ease',

                                    '&:hover':
                                    {
                                        borderColor:
                                            'primary.main',

                                        bgcolor:
                                            'action.hover',

                                        color:
                                            'primary.main',
                                    },
                                }}
                            >
                                <Menu
                                    size={19}
                                    strokeWidth={
                                        1.7
                                    }
                                />
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <MobileMenu
                open={
                    mobileMenuOpen
                }
                onClose={() =>
                    setMobileMenuOpen(
                        false
                    )
                }
            />
        </>
    );
}

export default Header;