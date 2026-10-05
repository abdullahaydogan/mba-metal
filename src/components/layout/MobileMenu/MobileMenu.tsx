import {
    useEffect,
} from 'react';

import {
    Box,
    IconButton,
    Typography,
} from '@mui/material';

import {
    ArrowRight,
    ArrowUpRight,
    Moon,
    Sun,
    X,
} from 'lucide-react';

import {
    AnimatePresence,
    motion,
} from 'motion/react';

import {
    useTranslation,
} from 'react-i18next';

import {
    Link,
    useLocation,
} from 'react-router-dom';

import {
    Logo,
} from '../../common/Logo';

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

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

export function MobileMenu({
    open,
    onClose,
}: MobileMenuProps) {
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

    /* ============================================================
       BODY SCROLL LOCK
    ============================================================ */

    useEffect(() => {
        if (!open) {
            return;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow =
            'hidden';

        return () => {
            document.body.style.overflow =
                previousOverflow;
        };
    }, [open]);

    /* ============================================================
       ESC CLOSE
    ============================================================ */

    useEffect(() => {
        if (!open) {
            return;
        }

        const handleKeyDown = (
            event: KeyboardEvent
        ) => {
            if (
                event.key ===
                'Escape'
            ) {
                onClose();
            }
        };

        window.addEventListener(
            'keydown',
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                'keydown',
                handleKeyDown
            );
        };
    }, [
        open,
        onClose,
    ]);

    /* ============================================================
       ACTIVE ROUTE
    ============================================================ */

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

    const handleLanguageToggle =
        () => {
            void toggleLanguage();
        };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* ============================================
                        BACKDROP
                    ============================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        onClick={
                            onClose
                        }
                        style={{
                            position:
                                'fixed',

                            inset: 0,

                            zIndex: 1290,

                            background:
                                'rgba(3, 10, 7, 0.62)',

                            backdropFilter:
                                'blur(8px)',

                            WebkitBackdropFilter:
                                'blur(8px)',
                        }}
                    />

                    {/* ============================================
                        DRAWER
                    ============================================= */}

                    <motion.div
                        initial={{
                            x: '100%',
                        }}
                        animate={{
                            x: 0,
                        }}
                        exit={{
                            x: '100%',
                        }}
                        transition={{
                            duration:
                                0.46,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        style={{
                            position:
                                'fixed',

                            top: 0,
                            right: 0,
                            bottom: 0,

                            width:
                                'min(94vw, 460px)',

                            zIndex: 1300,
                        }}
                    >
                        <Box
                            sx={{
                                position:
                                    'relative',

                                width:
                                    '100%',

                                height:
                                    '100%',

                                display:
                                    'flex',

                                flexDirection:
                                    'column',

                                bgcolor:
                                    'background.paper',

                                color:
                                    'text.primary',

                                borderLeft:
                                    '1px solid',

                                borderColor:
                                    'divider',

                                overflow:
                                    'hidden',

                                /*
                                 * Üst teknik çizgi.
                                 */
                                '&::before':
                                    {
                                        content:
                                            '""',

                                        position:
                                            'absolute',

                                        top: 0,
                                        left: 0,

                                        width:
                                            '42%',

                                        height:
                                            '2px',

                                        bgcolor:
                                            'primary.main',

                                        zIndex: 5,
                                    },

                                /*
                                 * Arka plandaki
                                 * ambient ışık.
                                 */
                                '&::after':
                                    {
                                        content:
                                            '""',

                                        position:
                                            'absolute',

                                        width:
                                            360,

                                        height:
                                            360,

                                        right:
                                            -190,

                                        top:
                                            -120,

                                        borderRadius:
                                            '50%',

                                        background:
                                            'radial-gradient(circle, rgba(27, 128, 87, 0.13) 0%, rgba(27, 128, 87, 0) 68%)',

                                        pointerEvents:
                                            'none',
                                    },
                            }}
                        >
                            {/* =====================================
                                HEADER
                            ====================================== */}

                            <Box
                                sx={{
                                    position:
                                        'relative',

                                    zIndex: 2,

                                    minHeight:
                                        82,

                                    px: {
                                        xs: 2.25,
                                        sm: 3.25,
                                    },

                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'space-between',

                                    gap: 2,

                                    borderBottom:
                                        '1px solid',

                                    borderColor:
                                        'divider',

                                    flexShrink: 0,
                                }}
                            >
                                <Logo
                                    size="medium"
                                    onClick={
                                        onClose
                                    }
                                />

                                <IconButton
                                    onClick={
                                        onClose
                                    }
                                    aria-label={
                                        language ===
                                        'tr'
                                            ? 'Menüyü kapat'
                                            : 'Close menu'
                                    }
                                    sx={{
                                        width: 44,

                                        height: 44,

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
                                            'border-color 180ms ease, background-color 180ms ease, color 180ms ease, transform 180ms ease',

                                        '&:hover':
                                            {
                                                borderColor:
                                                    'primary.main',

                                                bgcolor:
                                                    'action.hover',

                                                color:
                                                    'primary.main',

                                                transform:
                                                    'rotate(4deg)',
                                            },
                                    }}
                                >
                                    <X
                                        size={
                                            19
                                        }
                                        strokeWidth={
                                            1.7
                                        }
                                    />
                                </IconButton>
                            </Box>

                            {/* =====================================
                                SCROLL AREA
                            ====================================== */}

                            <Box
                                sx={{
                                    position:
                                        'relative',

                                    zIndex: 2,

                                    flex: 1,

                                    minHeight: 0,

                                    overflowY:
                                        'auto',

                                    display:
                                        'flex',

                                    flexDirection:
                                        'column',

                                    scrollbarWidth:
                                        'thin',

                                    '&::-webkit-scrollbar':
                                        {
                                            width:
                                                4,
                                        },

                                    '&::-webkit-scrollbar-thumb':
                                        {
                                            bgcolor:
                                                'divider',

                                            borderRadius:
                                                999,
                                        },
                                }}
                            >
                                {/* =================================
                                    NAVIGATION
                                ================================== */}

                                <Box
                                    component="nav"
                                    aria-label={
                                        language ===
                                        'tr'
                                            ? 'Mobil navigasyon'
                                            : 'Mobile navigation'
                                    }
                                    sx={{
                                        px: {
                                            xs: 2.25,
                                            sm: 3.25,
                                        },

                                        pt: {
                                            xs: 3,
                                            sm: 3.5,
                                        },

                                        pb: 3,
                                    }}
                                >
                                    {/* SECTION LABEL */}

                                    <Box
                                        sx={{
                                            display:
                                                'flex',

                                            alignItems:
                                                'center',

                                            gap: 1.25,

                                            mb: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 30,

                                                height:
                                                    '1px',

                                                bgcolor:
                                                    'primary.main',
                                            }}
                                        />

                                        <Typography
                                            sx={{
                                                color:
                                                    'text.secondary',

                                                fontSize:
                                                    '0.62rem',

                                                fontWeight:
                                                    800,

                                                letterSpacing:
                                                    '0.16em',

                                                textTransform:
                                                    'uppercase',
                                            }}
                                        >
                                            {language ===
                                            'tr'
                                                ? 'Menü'
                                                : 'Menu'}
                                        </Typography>
                                    </Box>

                                    {/* NAVIGATION ITEMS */}

                                    <Box>
                                        {navigationItems.map(
                                            (
                                                item,
                                                index
                                            ) => {
                                                const active =
                                                    isActiveRoute(
                                                        item.href
                                                    );

                                                return (
                                                    <motion.div
                                                        key={
                                                            item.id
                                                        }
                                                        initial={{
                                                            opacity: 0,

                                                            x: 24,
                                                        }}
                                                        animate={{
                                                            opacity: 1,

                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay:
                                                                0.05 +
                                                                index *
                                                                    0.04,

                                                            duration:
                                                                0.38,

                                                            ease: [
                                                                0.22,
                                                                1,
                                                                0.36,
                                                                1,
                                                            ],
                                                        }}
                                                    >
                                                        <Box
                                                            component={
                                                                Link
                                                            }
                                                            to={
                                                                item.href
                                                            }
                                                            onClick={
                                                                onClose
                                                            }
                                                            sx={{
                                                                position:
                                                                    'relative',

                                                                minHeight:
                                                                    62,

                                                                display:
                                                                    'flex',

                                                                alignItems:
                                                                    'center',

                                                                justifyContent:
                                                                    'space-between',

                                                                gap: 2,

                                                                borderBottom:
                                                                    '1px solid',

                                                                borderColor:
                                                                    'divider',

                                                                color:
                                                                    active
                                                                        ? 'primary.main'
                                                                        : 'text.primary',

                                                                textDecoration:
                                                                    'none',

                                                                transition:
                                                                    'color 200ms ease, padding-left 220ms cubic-bezier(0.22, 1, 0.36, 1)',

                                                                '&::before':
                                                                    {
                                                                        content:
                                                                            '""',

                                                                        position:
                                                                            'absolute',

                                                                        left: 0,

                                                                        top:
                                                                            '50%',

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
                                                                            'primary.main',

                                                                        pl: active
                                                                            ? 0
                                                                            : 0.75,

                                                                        '& .mobile-nav-arrow':
                                                                            {
                                                                                transform:
                                                                                    'translateX(4px)',
                                                                            },
                                                                    },
                                                            }}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    pl: active
                                                                        ? 2
                                                                        : 0,

                                                                    fontSize:
                                                                        {
                                                                            xs: '1.02rem',

                                                                            sm: '1.08rem',
                                                                        },

                                                                    fontWeight:
                                                                        active
                                                                            ? 700
                                                                            : 550,

                                                                    letterSpacing:
                                                                        '-0.02em',

                                                                    transition:
                                                                        'padding-left 200ms ease',
                                                                }}
                                                            >
                                                                {t(
                                                                    item.labelKey
                                                                )}
                                                            </Typography>

                                                            <Box
                                                                className="mobile-nav-arrow"
                                                                sx={{
                                                                    width: 32,

                                                                    height: 32,

                                                                    display:
                                                                        'flex',

                                                                    alignItems:
                                                                        'center',

                                                                    justifyContent:
                                                                        'center',

                                                                    border:
                                                                        '1px solid',

                                                                    borderColor:
                                                                        active
                                                                            ? 'primary.main'
                                                                            : 'divider',

                                                                    borderRadius:
                                                                        '7px',

                                                                    color:
                                                                        active
                                                                            ? 'primary.main'
                                                                            : 'text.secondary',

                                                                    transition:
                                                                        'transform 200ms ease, border-color 200ms ease, color 200ms ease',
                                                                }}
                                                            >
                                                                <ArrowRight
                                                                    size={
                                                                        14
                                                                    }
                                                                    strokeWidth={
                                                                        1.6
                                                                    }
                                                                />
                                                            </Box>
                                                        </Box>
                                                    </motion.div>
                                                );
                                            }
                                        )}
                                    </Box>

                                    {/* =================================
                                        QUOTE CTA
                                    ================================== */}

                                    <motion.div
                                        initial={{
                                            opacity: 0,

                                            y: 16,
                                        }}
                                        animate={{
                                            opacity: 1,

                                            y: 0,
                                        }}
                                        transition={{
                                            delay:
                                                0.24,

                                            duration:
                                                0.4,
                                        }}
                                    >
                                        <Box
                                            component={
                                                Link
                                            }
                                            to={
                                                routes.quote
                                            }
                                            onClick={
                                                onClose
                                            }
                                            sx={{
                                                position:
                                                    'relative',

                                                mt: 3.5,

                                                minHeight:
                                                    62,

                                                px: 2,

                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'space-between',

                                                gap: 2,

                                                overflow:
                                                    'hidden',

                                                bgcolor:
                                                    'primary.main',

                                                color:
                                                    'primary.contrastText',

                                                textDecoration:
                                                    'none',

                                                borderRadius:
                                                    '8px',

                                                boxShadow:
                                                    '0 12px 30px rgba(16,96,67,0.20)',

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
                                                            'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.14) 50%, transparent 80%)',

                                                        transform:
                                                            'translateX(-120%)',

                                                        transition:
                                                            'transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
                                                    },

                                                '&:hover':
                                                    {
                                                        transform:
                                                            'translateY(-2px)',

                                                        boxShadow:
                                                            '0 16px 38px rgba(16,96,67,0.27)',

                                                        '&::before':
                                                            {
                                                                transform:
                                                                    'translateX(120%)',
                                                            },

                                                        '& .mobile-quote-arrow':
                                                            {
                                                                transform:
                                                                    'translate(2px, -2px)',
                                                            },
                                                    },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position:
                                                        'relative',

                                                    zIndex: 1,
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        mb: 0.15,

                                                        fontSize:
                                                            '0.68rem',

                                                        fontWeight:
                                                            600,

                                                        opacity:
                                                            0.72,

                                                        letterSpacing:
                                                            '0.08em',

                                                        textTransform:
                                                            'uppercase',
                                                    }}
                                                >
                                                    MBA Metal
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize:
                                                            '0.88rem',

                                                        fontWeight:
                                                            750,
                                                    }}
                                                >
                                                    {t(
                                                        'common.getQuote'
                                                    )}
                                                </Typography>
                                            </Box>

                                            <Box
                                                className="mobile-quote-arrow"
                                                sx={{
                                                    position:
                                                        'relative',

                                                    zIndex: 1,

                                                    width: 38,

                                                    height: 38,

                                                    display:
                                                        'flex',

                                                    alignItems:
                                                        'center',

                                                    justifyContent:
                                                        'center',

                                                    border:
                                                        '1px solid rgba(255,255,255,0.24)',

                                                    borderRadius:
                                                        '7px',

                                                    transition:
                                                        'transform 200ms ease',
                                                }}
                                            >
                                                <ArrowUpRight
                                                    size={
                                                        17
                                                    }
                                                    strokeWidth={
                                                        1.7
                                                    }
                                                />
                                            </Box>
                                        </Box>
                                    </motion.div>
                                </Box>

                                {/* =================================
                                    BOTTOM AREA
                                ================================== */}

                                <Box
                                    sx={{
                                        mt: 'auto',

                                        px: {
                                            xs: 2.25,
                                            sm: 3.25,
                                        },

                                        pt: 1,

                                        pb: {
                                            xs: 2.5,
                                            sm: 3,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            pt: 2.5,

                                            borderTop:
                                                '1px solid',

                                            borderColor:
                                                'divider',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                mb: 1.5,

                                                color:
                                                    'text.secondary',

                                                fontSize:
                                                    '0.6rem',

                                                fontWeight:
                                                    800,

                                                letterSpacing:
                                                    '0.14em',

                                                textTransform:
                                                    'uppercase',
                                            }}
                                        >
                                            {language ===
                                            'tr'
                                                ? 'Tercihler'
                                                : 'Preferences'}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display:
                                                    'grid',

                                                gridTemplateColumns:
                                                    'repeat(2, minmax(0, 1fr))',

                                                gap: 1,
                                            }}
                                        >
                                            {/* LANGUAGE */}

                                            <Box
                                                component="button"
                                                type="button"
                                                onClick={
                                                    handleLanguageToggle
                                                }
                                                sx={{
                                                    minHeight:
                                                        52,

                                                    px: 1.5,

                                                    display:
                                                        'flex',

                                                    alignItems:
                                                        'center',

                                                    justifyContent:
                                                        'space-between',

                                                    gap: 1,

                                                    border:
                                                        '1px solid',

                                                    borderColor:
                                                        'divider',

                                                    borderRadius:
                                                        '7px',

                                                    bgcolor:
                                                        'transparent',

                                                    color:
                                                        'text.primary',

                                                    cursor:
                                                        'pointer',

                                                    font:
                                                        'inherit',

                                                    transition:
                                                        'border-color 180ms ease, background-color 180ms ease',

                                                    '&:hover':
                                                        {
                                                            borderColor:
                                                                'primary.main',

                                                            bgcolor:
                                                                'action.hover',
                                                        },
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize:
                                                            '0.72rem',

                                                        fontWeight:
                                                            700,
                                                    }}
                                                >
                                                    {language ===
                                                    'tr'
                                                        ? 'English'
                                                        : 'Türkçe'}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color:
                                                            'primary.main',

                                                        fontSize:
                                                            '0.64rem',

                                                        fontWeight:
                                                            800,

                                                        letterSpacing:
                                                            '0.08em',
                                                    }}
                                                >
                                                    {language ===
                                                    'tr'
                                                        ? 'EN'
                                                        : 'TR'}
                                                </Typography>
                                            </Box>

                                            {/* THEME */}

                                            <Box
                                                component="button"
                                                type="button"
                                                onClick={
                                                    toggleTheme
                                                }
                                                sx={{
                                                    minHeight:
                                                        52,

                                                    px: 1.5,

                                                    display:
                                                        'flex',

                                                    alignItems:
                                                        'center',

                                                    justifyContent:
                                                        'space-between',

                                                    gap: 1,

                                                    border:
                                                        '1px solid',

                                                    borderColor:
                                                        'divider',

                                                    borderRadius:
                                                        '7px',

                                                    bgcolor:
                                                        'transparent',

                                                    color:
                                                        'text.primary',

                                                    cursor:
                                                        'pointer',

                                                    font:
                                                        'inherit',

                                                    transition:
                                                        'border-color 180ms ease, background-color 180ms ease',

                                                    '&:hover':
                                                        {
                                                            borderColor:
                                                                'primary.main',

                                                            bgcolor:
                                                                'action.hover',
                                                        },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display:
                                                            'flex',

                                                        alignItems:
                                                            'center',

                                                        gap: 0.75,
                                                    }}
                                                >
                                                    {mode ===
                                                    'dark' ? (
                                                        <Sun
                                                            size={
                                                                15
                                                            }
                                                            strokeWidth={
                                                                1.7
                                                            }
                                                        />
                                                    ) : (
                                                        <Moon
                                                            size={
                                                                15
                                                            }
                                                            strokeWidth={
                                                                1.7
                                                            }
                                                        />
                                                    )}

                                                    <Typography
                                                        sx={{
                                                            fontSize:
                                                                '0.72rem',

                                                            fontWeight:
                                                                700,
                                                        }}
                                                    >
                                                        {mode ===
                                                        'dark'
                                                            ? language ===
                                                              'tr'
                                                                ? 'Açık'
                                                                : 'Light'
                                                            : language ===
                                                                'tr'
                                                              ? 'Koyu'
                                                              : 'Dark'}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Typography
                                            sx={{
                                                mt: 2,

                                                color:
                                                    'text.secondary',

                                                fontSize:
                                                    '0.6rem',

                                                fontWeight:
                                                    650,

                                                letterSpacing:
                                                    '0.11em',

                                                textTransform:
                                                    'uppercase',
                                            }}
                                        >
                                            MBA METAL ·{' '}
                                            {language ===
                                            'tr'
                                                ? 'ENDÜSTRİYEL ÜRETİM'
                                                : 'INDUSTRIAL MANUFACTURING'}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;