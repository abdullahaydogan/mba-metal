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
    Menu,
    Moon,
    Sun,
} from 'lucide-react';

import {
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
    LanguageSwitcher,
} from '../../common/LanguageSwitcher';

import {
    MobileMenu,
} from '../MobileMenu';

import {
    Navbar,
} from '../Navbar';

import {
    useThemeMode,
} from '../../../hooks/useThemeMode';

/* =========================================================
   HEADER
========================================================= */

export function Header() {
    const location =
        useLocation();

    const {
        t,
    } = useTranslation();

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
        const handleScroll =
            () => {
                setScrolled(
                    window.scrollY >
                        20
                );
            };

        handleScroll();

        window.addEventListener(
            'scroll',
            handleScroll,
            {
                passive:
                    true,
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
        setMobileMenuOpen(
            false
        );
    }, [
        location.pathname,
    ]);

    return (
        <>
            <Box
                component="header"
                sx={{
                    position:
                        'fixed',

                    top:
                        0,

                    left:
                        0,

                    right:
                        0,

                    zIndex:
                        1200,

                    width:
                        '100%',

                    pt: {
                        xs:
                            1,

                        sm:
                            1.25,

                        lg:
                            scrolled
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
                                xs:
                                    64,

                                sm:
                                    68,

                                lg:
                                    scrolled
                                        ? 68
                                        : 76,
                            },

                            px: {
                                xs:
                                    1.25,

                                sm:
                                    1.5,

                                lg:
                                    1.5,

                                xl:
                                    1.75,
                            },

                            display:
                                'flex',

                            alignItems:
                                'center',

                            border:
                                '1px solid',

                            borderColor:
                                (
                                    theme
                                ) =>
                                    theme
                                        .palette
                                        .mode ===
                                    'dark'
                                        ? scrolled
                                            ? 'rgba(255,255,255,0.12)'
                                            : 'rgba(255,255,255,0.09)'
                                        : scrolled
                                          ? 'rgba(13,52,36,0.13)'
                                          : 'rgba(13,52,36,0.09)',

                            borderRadius: {
                                xs:
                                    '12px',

                                lg:
                                    '10px',
                            },

                            bgcolor:
                                (
                                    theme
                                ) =>
                                    theme
                                        .palette
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
                                (
                                    theme
                                ) =>
                                    theme
                                        .palette
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
                            ].join(
                                ','
                            ),

                            /* =================================================
                               TOP INDUSTRIAL ACCENT
                            ================================================= */

                            '&::before': {
                                content:
                                    '""',

                                position:
                                    'absolute',

                                top:
                                    0,

                                left:
                                    0,

                                width: {
                                    xs:
                                        90,

                                    lg:
                                        150,
                                },

                                height:
                                    '2px',

                                bgcolor:
                                    'primary.main',

                                opacity:
                                    0.9,
                            },

                            /* =================================================
                               AMBIENT LIGHT
                            ================================================= */

                            '&::after': {
                                content:
                                    '""',

                                position:
                                    'absolute',

                                width:
                                    260,

                                height:
                                    160,

                                right:
                                    -90,

                                top:
                                    -90,

                                borderRadius:
                                    '50%',

                                background:
                                    'radial-gradient(circle, rgba(24,125,85,0.10) 0%, rgba(24,125,85,0) 70%)',

                                pointerEvents:
                                    'none',
                            },
                        }}
                    >
                        {/* =================================================
                            BRAND
                        ================================================= */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                zIndex:
                                    2,

                                display:
                                    'flex',

                                alignItems:
                                    'center',

                                flexShrink:
                                    0,

                                pr: {
                                    lg:
                                        2.5,

                                    xl:
                                        3,
                                },
                            }}
                        >
                            <Logo
                                size="medium"
                            />
                        </Box>

                        {/* =================================================
                            BRAND DIVIDER
                        ================================================= */}

                        <Box
                            aria-hidden="true"
                            sx={{
                                display: {
                                    xs:
                                        'none',

                                    lg:
                                        'block',
                                },

                                width:
                                    '1px',

                                alignSelf:
                                    'stretch',

                                my:
                                    1.75,

                                bgcolor:
                                    (
                                        theme
                                    ) =>
                                        theme
                                            .palette
                                            .mode ===
                                        'dark'
                                            ? 'rgba(255,255,255,0.09)'
                                            : 'rgba(17,54,39,0.10)',
                            }}
                        />

                        {/* =================================================
                            DESKTOP NAVIGATION
                        ================================================= */}

                        <Navbar />

                        {/* =================================================
                            DESKTOP UTILITIES
                        ================================================= */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                zIndex:
                                    2,

                                display: {
                                    xs:
                                        'none',

                                    lg:
                                        'flex',
                                },

                                alignItems:
                                    'center',

                                gap:
                                    0.5,

                                flexShrink:
                                    0,
                            }}
                        >
                            {/* LANGUAGE */}

                            <LanguageSwitcher />

                            {/* THEME */}

                            <Tooltip
                                title={
                                    mode ===
                                    'dark'
                                        ? t(
                                              'common.lightTheme'
                                          )
                                        : t(
                                              'common.darkTheme'
                                          )
                                }
                            >
                                <IconButton
                                    onClick={
                                        toggleTheme
                                    }
                                    aria-label={
                                        mode ===
                                        'dark'
                                            ? t(
                                                  'common.lightTheme'
                                              )
                                            : t(
                                                  'common.darkTheme'
                                              )
                                    }
                                    sx={{
                                        width:
                                            38,

                                        height:
                                            38,

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
                        </Box>

                        {/* =================================================
                            MOBILE ACTIONS
                        ================================================= */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                zIndex:
                                    2,

                                display: {
                                    xs:
                                        'flex',

                                    lg:
                                        'none',
                                },

                                alignItems:
                                    'center',

                                ml:
                                    'auto',

                                gap:
                                    0.5,
                            }}
                        >
                            <LanguageSwitcher
                                compact
                            />

                            <IconButton
                                onClick={() =>
                                    setMobileMenuOpen(
                                        true
                                    )
                                }
                                aria-label={t(
                                    'common.openMenu'
                                )}
                                sx={{
                                    width:
                                        42,

                                    height:
                                        42,

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
                                    size={
                                        19
                                    }
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