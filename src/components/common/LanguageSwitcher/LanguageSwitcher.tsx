import {
    Box,
    ButtonBase,
    alpha,
} from '@mui/material';

import {
    useLanguage,
} from '../../../hooks/useLanguage';

import type {
    Language,
} from '../../../features/language/LanguageContext';

import trFlag from '../../../assets/images/flags/tr.svg';
import enFlag from '../../../assets/images/flags/en.jpg';
import deFlag from '../../../assets/images/flags/de.svg';
import ruFlag from '../../../assets/images/flags/ru.svg';

/* =========================================================
   TYPES
========================================================= */

interface LanguageOption {
    code: Language;
    label: string;
    name: string;
    flag: string;
}

interface LanguageSwitcherProps {
    compact?: boolean;
}

/* =========================================================
   LANGUAGE OPTIONS
========================================================= */

const languageOptions: LanguageOption[] = [
    {
        code: 'tr',
        label: 'TR',
        name: 'Türkçe',
        flag: trFlag,
    },
    {
        code: 'en',
        label: 'EN',
        name: 'English',
        flag: enFlag,
    },
    {
        code: 'de',
        label: 'DE',
        name: 'Deutsch',
        flag: deFlag,
    },
    {
        code: 'ru',
        label: 'RU',
        name: 'Русский',
        flag: ruFlag,
    },
];

/* =========================================================
   LANGUAGE SWITCHER
========================================================= */

export function LanguageSwitcher({
    compact = false,
}: LanguageSwitcherProps) {
    const {
        language,
        setLanguage,
    } = useLanguage();

    const handleSelect = (
        code: Language
    ) => {
        if (code === language) {
            return;
        }

        void setLanguage(code);
    };

    return (
        <Box
            component="div"
            role="group"
            aria-label="Language"
            sx={{
                display:
                    'flex',

                alignItems:
                    'center',

                justifyContent:
                    compact
                        ? 'flex-start'
                        : 'center',

                gap: compact
                    ? 0.5
                    : 0.35,

                width:
                    compact
                        ? '100%'
                        : 'auto',

                flexWrap:
                    compact
                        ? 'wrap'
                        : 'nowrap',
            }}
        >
            {languageOptions.map(
                (option) => {
                    const active =
                        option.code ===
                        language;

                    return (
                        <ButtonBase
                            key={
                                option.code
                            }
                            lang={
                                option.code
                            }
                            aria-label={
                                option.name
                            }
                            aria-pressed={
                                active
                            }
                            title={
                                option.name
                            }
                            onClick={() =>
                                handleSelect(
                                    option.code
                                )
                            }
                            sx={(
                                theme
                            ) => ({
                                position:
                                    'relative',

                                height:
                                    compact
                                        ? 44
                                        : 40,

                                minWidth:
                                    compact
                                        ? 70
                                        : 62,

                                px:
                                    compact
                                        ? 1.15
                                        : 1,

                                display:
                                    'inline-flex',

                                alignItems:
                                    'center',

                                justifyContent:
                                    'center',

                                gap:
                                    0.8,

                                flex:
                                    compact
                                        ? '1 1 70px'
                                        : '0 0 auto',

                                border:
                                    '1px solid',

                                borderColor:
                                    active
                                        ? alpha(
                                              theme.palette.primary.main,
                                              0.55
                                          )
                                        : 'transparent',

                                borderRadius:
                                    '7px',

                                bgcolor:
                                    active
                                        ? alpha(
                                              theme.palette.primary.main,
                                              theme.palette.mode ===
                                                  'dark'
                                                  ? 0.16
                                                  : 0.08
                                          )
                                        : 'transparent',

                                color:
                                    active
                                        ? 'primary.main'
                                        : 'text.secondary',

                                font:
                                    'inherit',

                                cursor:
                                    'pointer',

                                transition:
                                    [
                                        'color 180ms ease',
                                        'background-color 180ms ease',
                                        'border-color 180ms ease',
                                        'transform 180ms ease',
                                    ].join(
                                        ','
                                    ),

                                '&:hover': {
                                    color:
                                        'primary.main',

                                    bgcolor:
                                        alpha(
                                            theme.palette.primary.main,
                                            theme.palette.mode ===
                                                'dark'
                                                ? 0.1
                                                : 0.05
                                        ),

                                    borderColor:
                                        alpha(
                                            theme.palette.primary.main,
                                            active
                                                ? 0.65
                                                : 0.2
                                        ),
                                },

                                '&:active': {
                                    transform:
                                        'scale(0.97)',
                                },

                                '&.Mui-focusVisible': {
                                    outline:
                                        '2px solid',

                                    outlineColor:
                                        'primary.main',

                                    outlineOffset:
                                        2,
                                },

                                '@media (prefers-reduced-motion: reduce)': {
                                    transition:
                                        'none',
                                },
                            })}
                        >
                            {/* =============================================
                                COUNTRY FLAG
                            ============================================= */}

                            <Box
                                component="span"
                                aria-hidden="true"
                                sx={{
                                    position:
                                        'relative',

                                    width:
                                        compact
                                            ? 27
                                            : 25,

                                    height:
                                        compact
                                            ? 18
                                            : 17,

                                    display:
                                        'inline-flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'center',

                                    flexShrink:
                                        0,

                                    overflow:
                                        'hidden',

                                    borderRadius:
                                        '2px',

                                    bgcolor:
                                        'background.paper',

                                    boxShadow:
                                        '0 0 0 1px rgba(0,0,0,0.10)',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={
                                        option.flag
                                    }
                                    alt=""
                                    sx={{
                                        display:
                                            'block',

                                        width:
                                            '100%',

                                        height:
                                            '100%',

                                        objectFit:
                                            'cover',

                                        userSelect:
                                            'none',

                                        pointerEvents:
                                            'none',
                                    }}
                                />
                            </Box>

                            {/* =============================================
                                LANGUAGE CODE
                            ============================================= */}

                            <Box
                                component="span"
                                sx={{
                                    display:
                                        'inline-flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'center',

                                    fontSize:
                                        compact
                                            ? '0.73rem'
                                            : '0.7rem',

                                    fontWeight:
                                        active
                                            ? 800
                                            : 700,

                                    letterSpacing:
                                        '0.06em',

                                    lineHeight:
                                        1,

                                    color:
                                        'inherit',
                                }}
                            >
                                {
                                    option.label
                                }
                            </Box>

                            {/* =============================================
                                ACTIVE INDICATOR
                            ============================================= */}

                            {active && (
                                <Box
                                    aria-hidden="true"
                                    sx={{
                                        position:
                                            'absolute',

                                        left:
                                            '50%',

                                        bottom:
                                            3,

                                        width:
                                            16,

                                        height:
                                            '2px',

                                        borderRadius:
                                            999,

                                        bgcolor:
                                            'primary.main',

                                        transform:
                                            'translateX(-50%)',

                                        opacity:
                                            0.9,
                                    }}
                                />
                            )}
                        </ButtonBase>
                    );
                }
            )}
        </Box>
    );
}

export default LanguageSwitcher;