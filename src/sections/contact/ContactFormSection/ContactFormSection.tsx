import {
    useState,
    type ChangeEvent,
    type FormEvent,
} from 'react';

import {
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
    Check,
    MessageCircle,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

import { contactConfig } from '../../../config/contact.config';

import { contactPageData } from '../../../data/contact/contact.data';

/* =========================================================
   TYPES
========================================================= */

interface ContactFormValues {
    fullName: string;
    company: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
}

/* =========================================================
   INITIAL VALUES
========================================================= */

const initialValues: ContactFormValues = {
    fullName: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
};

/* =========================================================
   COMPONENT
========================================================= */

export function ContactFormSection() {
    const { t } = useTranslation();

    const [values, setValues] =
        useState<ContactFormValues>(
            initialValues
        );

    const handleChange =
        (
            field: keyof ContactFormValues
        ) =>
        (
            event: ChangeEvent<
                HTMLInputElement |
                    HTMLTextAreaElement
            >
        ) => {
            setValues(current => ({
                ...current,
                [field]:
                    event.target.value,
            }));
        };

    /* =====================================================
       WHATSAPP
    ===================================================== */

    const whatsappPhone =
        contactConfig.whatsapp.value.replace(
            /\D/g,
            ''
        );

    const createWhatsappMessage =
        () => {
            const company =
                values.company.trim()
                    ? values.company.trim()
                    : '-';

            const email =
                values.email.trim()
                    ? values.email.trim()
                    : '-';

            return [
                'Merhaba MBA Metal,',
                '',
                'Web siteniz üzerinden iletişime geçiyorum.',
                '',
                `Ad Soyad: ${values.fullName.trim()}`,
                `Firma: ${company}`,
                `Telefon: ${values.phone.trim()}`,
                `E-posta: ${email}`,
                '',
                `Konu: ${values.subject.trim()}`,
                '',
                'Proje / Talep:',
                values.message.trim(),
                '',
                'Konu hakkında bilgi almak istiyorum.',
            ].join('\n');
        };

    const handleSubmit = (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const message =
            createWhatsappMessage();

        const whatsappUrl =
            `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
                message
            )}`;

        window.open(
            whatsappUrl,
            '_blank',
            'noopener,noreferrer'
        );
    };

    const directWhatsappUrl =
        `https://wa.me/${whatsappPhone}`;

    /* =====================================================
       FIELD STYLE
    ===================================================== */

    const fieldSx = {
        '& .MuiInputLabel-root': {
            fontSize: '0.68rem',

            fontWeight: 700,

            letterSpacing: '0.13em',

            textTransform: 'uppercase',

            color: 'text.secondary',

            transition:
                'color 180ms ease',
        },

        '& .MuiInputLabel-root.Mui-focused':
            {
                color: 'primary.main',
            },

        '& .MuiInput-root': {
            fontSize: {
                xs: '0.95rem',
                md: '1rem',
            },

            color: 'text.primary',
        },

        '& .MuiInputBase-input': {
            pb: 1.3,
        },

        '& .MuiInput-root:before': {
            borderBottom:
                '1px solid',

            borderBottomColor:
                'divider',
        },

        '& .MuiInput-root:hover:not(.Mui-disabled):before':
            {
                borderBottomColor:
                    'text.secondary',
            },

        '& .MuiInput-root:after': {
            borderBottomColor:
                'primary.main',

            borderBottomWidth: 1,
        },
    } as const;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                overflow: 'hidden',

                py: {
                    xs: 8,
                    md: 12,
                    lg: 15,
                },

                bgcolor:
                    'background.default',

                /* subtle technical grid */

                backgroundImage: theme => `
                    linear-gradient(
                        ${theme.palette.divider} 1px,
                        transparent 1px
                    ),
                    linear-gradient(
                        90deg,
                        ${theme.palette.divider} 1px,
                        transparent 1px
                    )
                `,

                backgroundSize:
                    '72px 72px',

                '&::before': {
                    content: '""',

                    position: 'absolute',

                    inset: 0,

                    pointerEvents: 'none',

                    background: theme => `
                        linear-gradient(
                            90deg,
                            ${theme.palette.background.default} 0%,
                            transparent 20%,
                            transparent 80%,
                            ${theme.palette.background.default} 100%
                        )
                    `,
                },
            }}
        >
            <Container>
                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 1,

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(380px, 0.82fr) minmax(0, 1.18fr)',
                        },

                        minHeight: {
                            lg: 760,
                        },

                        bgcolor:
                            'background.paper',

                        border:
                            '1px solid',

                        borderColor:
                            'divider',

                        boxShadow: theme =>
                            theme.palette.mode ===
                            'light'
                                ? '0 30px 80px rgba(20, 40, 30, 0.07)'
                                : '0 30px 80px rgba(0, 0, 0, 0.22)',
                    }}
                >
                    {/* =================================================
                        LEFT / IMAGE
                    ================================================= */}

                    <Box
                        sx={{
                            position:
                                'relative',

                            minHeight: {
                                xs: 460,
                                md: 560,
                                lg: '100%',
                            },

                            overflow:
                                'hidden',

                            bgcolor: '#07110c',
                        }}
                    >
                        <Box
                            component="img"
                            src={
                                contactPageData
                                    .form.image
                            }
                            alt={t(
                                'contactPage.form.imageAlt'
                            )}
                            sx={{
                                position:
                                    'absolute',

                                inset: 0,

                                width: '100%',
                                height: '100%',

                                objectFit:
                                    'cover',

                                transform:
                                    'scale(1.01)',
                            }}
                        />

                        {/* IMAGE OVERLAY */}

                        <Box
                            sx={{
                                position:
                                    'absolute',

                                inset: 0,

                                background: `
                                    linear-gradient(
                                        180deg,
                                        rgba(4, 12, 8, 0.08) 0%,
                                        rgba(4, 12, 8, 0.18) 35%,
                                        rgba(4, 12, 8, 0.92) 100%
                                    )
                                `,
                            }}
                        />

                        {/* LEFT TOP INDEX */}

                        <Box
                            sx={{
                                position:
                                    'absolute',

                                top: {
                                    xs: 26,
                                    md: 36,
                                },

                                left: {
                                    xs: 26,
                                    md: 38,
                                },

                                display: 'flex',

                                alignItems:
                                    'center',

                                gap: 1.5,
                            }}
                        >
                            <Typography
                                sx={{
                                    color:
                                        'rgba(255,255,255,0.55)',

                                    fontSize:
                                        '0.65rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.16em',
                                }}
                            >
                                01
                            </Typography>

                            <Box
                                sx={{
                                    width: 36,
                                    height: 1,

                                    bgcolor:
                                        'rgba(255,255,255,0.35)',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        'rgba(255,255,255,0.7)',

                                    fontSize:
                                        '0.65rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.16em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                MBA METAL
                            </Typography>
                        </Box>

                        {/* IMAGE BOTTOM CONTENT */}

                        <Box
                            sx={{
                                position:
                                    'absolute',

                                left: {
                                    xs: 28,
                                    md: 42,
                                },

                                right: {
                                    xs: 28,
                                    md: 42,
                                },

                                bottom: {
                                    xs: 30,
                                    md: 44,
                                },

                                color: '#fff',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 42,
                                    height: 2,

                                    mb: 2.5,

                                    bgcolor:
                                        'primary.main',
                                }}
                            />

                            <Typography
                                sx={{
                                    mb: 1.4,

                                    color:
                                        'rgba(255,255,255,0.58)',

                                    fontSize:
                                        '0.68rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.17em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                MBA METAL
                            </Typography>

                            <Typography
                                sx={{
                                    maxWidth: 430,

                                    fontSize: {
                                        xs: '2.1rem',
                                        md: '2.7rem',
                                    },

                                    fontWeight: 600,

                                    lineHeight: 1.04,

                                    letterSpacing:
                                        '-0.05em',

                                    color: '#fff',
                                }}
                            >
                                {t(
                                    'contactPage.form.imageTitle'
                                )}
                            </Typography>

                            <Box
                                sx={{
                                    display:
                                        'flex',

                                    flexWrap:
                                        'wrap',

                                    gap: 1,

                                    mt: 3,
                                }}
                            >
                                {[
                                    'Tel',
                                    'Boru',
                                    'Kaynak',
                                    'OEM',
                                ].map(
                                    item => (
                                        <Box
                                            key={
                                                item
                                            }
                                            sx={{
                                                px: 1.4,
                                                py: 0.7,

                                                border:
                                                    '1px solid rgba(255,255,255,0.18)',

                                                bgcolor:
                                                    'rgba(255,255,255,0.04)',

                                                backdropFilter:
                                                    'blur(6px)',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize:
                                                        '0.62rem',

                                                    fontWeight: 700,

                                                    letterSpacing:
                                                        '0.1em',

                                                    textTransform:
                                                        'uppercase',

                                                    color:
                                                        'rgba(255,255,255,0.72)',
                                                }}
                                            >
                                                {
                                                    item
                                                }
                                            </Typography>
                                        </Box>
                                    )
                                )}
                            </Box>
                        </Box>
                    </Box>

                    {/* =================================================
                        RIGHT / FORM
                    ================================================= */}

                    <Box
                        component="form"
                        onSubmit={
                            handleSubmit
                        }
                        sx={{
                            position:
                                'relative',

                            p: {
                                xs: 3.5,
                                sm: 5,
                                md: 6,
                                lg: 7,
                            },

                            display: 'flex',

                            flexDirection:
                                'column',

                            justifyContent:
                                'center',
                        }}
                    >
                        {/* FORM NUMBER */}

                        <Typography
                            sx={{
                                position:
                                    'absolute',

                                top: {
                                    xs: 24,
                                    md: 34,
                                },

                                right: {
                                    xs: 24,
                                    md: 34,
                                },

                                fontSize:
                                    '0.65rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.16em',

                                color:
                                    'text.secondary',

                                opacity: 0.55,
                            }}
                        >
                            02 / CONTACT
                        </Typography>

                        {/* EYEBROW */}

                        <Box
                            sx={{
                                display: 'flex',

                                alignItems:
                                    'center',

                                gap: 1.4,

                                mb: 2.2,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 7,
                                    height: 7,

                                    borderRadius:
                                        '50%',

                                    bgcolor:
                                        'primary.main',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        'primary.main',

                                    fontSize:
                                        '0.7rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.16em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    'contactPage.form.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        {/* TITLE */}

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 620,

                                fontSize: {
                                    xs: '2.7rem',
                                    sm: '3.3rem',
                                    md: '4rem',
                                },

                                fontWeight: 700,

                                lineHeight: 0.96,

                                letterSpacing:
                                    '-0.06em',

                                color:
                                    'text.primary',
                            }}
                        >
                            {t(
                                'contactPage.form.title'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 590,

                                mt: 2.5,
                                mb: {
                                    xs: 5,
                                    md: 6,
                                },

                                color:
                                    'text.secondary',

                                fontSize: {
                                    xs: '0.95rem',
                                    md: '1rem',
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            {t(
                                'contactPage.form.description'
                            )}
                        </Typography>

                        {/* =================================================
                            FIELDS
                        ================================================= */}

                        <Box
                            sx={{
                                display: 'grid',

                                gridTemplateColumns:
                                    {
                                        xs: '1fr',

                                        md:
                                            'repeat(2, minmax(0, 1fr))',
                                    },

                                columnGap: 4,

                                rowGap: 4.5,
                            }}
                        >
                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                autoComplete="name"
                                label={t(
                                    'contactPage.form.fields.fullName'
                                )}
                                value={
                                    values.fullName
                                }
                                onChange={handleChange(
                                    'fullName'
                                )}
                                sx={
                                    fieldSx
                                }
                            />

                            <TextField
                                fullWidth
                                variant="standard"
                                autoComplete="organization"
                                label={t(
                                    'contactPage.form.fields.company'
                                )}
                                value={
                                    values.company
                                }
                                onChange={handleChange(
                                    'company'
                                )}
                                sx={
                                    fieldSx
                                }
                            />

                            <TextField
                                required
                                fullWidth
                                type="tel"
                                variant="standard"
                                autoComplete="tel"
                                label={t(
                                    'contactPage.form.fields.phone'
                                )}
                                value={
                                    values.phone
                                }
                                onChange={handleChange(
                                    'phone'
                                )}
                                sx={
                                    fieldSx
                                }
                            />

                            <TextField
                                fullWidth
                                type="email"
                                variant="standard"
                                autoComplete="email"
                                label={t(
                                    'contactPage.form.fields.email'
                                )}
                                value={
                                    values.email
                                }
                                onChange={handleChange(
                                    'email'
                                )}
                                sx={
                                    fieldSx
                                }
                            />

                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                label={t(
                                    'contactPage.form.fields.subject'
                                )}
                                value={
                                    values.subject
                                }
                                onChange={handleChange(
                                    'subject'
                                )}
                                sx={{
                                    ...fieldSx,

                                    gridColumn: {
                                        md:
                                            '1 / -1',
                                    },
                                }}
                            />

                            <TextField
                                required
                                fullWidth
                                multiline
                                minRows={4}
                                variant="standard"
                                label={t(
                                    'contactPage.form.fields.message'
                                )}
                                value={
                                    values.message
                                }
                                onChange={handleChange(
                                    'message'
                                )}
                                sx={{
                                    ...fieldSx,

                                    gridColumn: {
                                        md:
                                            '1 / -1',
                                    },
                                }}
                            />
                        </Box>

                        {/* =================================================
                            WHATSAPP SEND AREA
                        ================================================= */}

                        <Box
                            sx={{
                                mt: 6,

                                pt: 3,

                                borderTop:
                                    '1px solid',

                                borderColor:
                                    'divider',

                                display: 'flex',

                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },

                                alignItems: {
                                    xs: 'stretch',
                                    sm: 'center',
                                },

                                justifyContent:
                                    'space-between',

                                gap: 3,
                            }}
                        >
                            {/* DIRECT WHATSAPP */}

                            <Button
                                component="a"
                                href={
                                    directWhatsappUrl
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={
                                    <MessageCircle
                                        size={
                                            17
                                        }
                                        strokeWidth={
                                            1.7
                                        }
                                    />
                                }
                                sx={{
                                    px: 0,

                                    justifyContent:
                                        'flex-start',

                                    color:
                                        'text.secondary',

                                    fontSize:
                                        '0.8rem',

                                    fontWeight: 600,

                                    textTransform:
                                        'none',

                                    '&:hover':
                                        {
                                            bgcolor:
                                                'transparent',

                                            color:
                                                'primary.main',
                                        },
                                }}
                            >
                                {t(
                                    'contactPage.form.whatsapp'
                                )}
                            </Button>

                            {/* SUBMIT */}

                            <Button
                                type="submit"
                                variant="contained"
                                startIcon={
                                    <MessageCircle
                                        size={
                                            17
                                        }
                                        strokeWidth={
                                            1.8
                                        }
                                    />
                                }
                                endIcon={
                                    <ArrowUpRight
                                        size={
                                            17
                                        }
                                    />
                                }
                                sx={{
                                    position:
                                        'relative',

                                    minHeight: 56,

                                    px: {
                                        xs: 3,
                                        md: 3.8,
                                    },

                                    borderRadius:
                                        '3px',

                                    boxShadow:
                                        'none',

                                    fontSize:
                                        '0.84rem',

                                    fontWeight: 700,

                                    textTransform:
                                        'none',

                                    transition:
                                        'transform 180ms ease, box-shadow 180ms ease',

                                    '&:hover':
                                        {
                                            boxShadow:
                                                '0 12px 30px rgba(18, 94, 64, 0.18)',

                                            transform:
                                                'translateY(-2px)',
                                        },
                                }}
                            >
                                {t(
                                    'contactPage.form.submit'
                                )}
                            </Button>
                        </Box>

                        {/* INFO */}

                        <Box
                            sx={{
                                display: 'flex',

                                alignItems:
                                    'center',

                                gap: 1,

                                mt: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'grid',

                                    placeItems:
                                        'center',

                                    width: 18,
                                    height: 18,

                                    borderRadius:
                                        '50%',

                                    bgcolor:
                                        'primary.main',

                                    color:
                                        'primary.contrastText',
                                }}
                            >
                                <Check
                                    size={11}
                                    strokeWidth={
                                        2
                                    }
                                />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize:
                                        '0.72rem',

                                    lineHeight: 1.5,

                                    color:
                                        'text.secondary',
                                }}
                            >
                                Form bilgileriniz
                                WhatsApp mesajına
                                otomatik olarak
                                aktarılır.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactFormSection;