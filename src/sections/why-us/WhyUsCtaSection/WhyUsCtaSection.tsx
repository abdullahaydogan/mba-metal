import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import {
    ArrowRight,
    MessageCircle,
} from 'lucide-react';

import { motion } from 'motion/react';

import { Link } from 'react-router-dom';

import { Container } from '../../../components/common/Container';

import {
    whyUsCtaData,
} from '../../../data/why-us/why-us.data';

const MotionDiv = motion.div;

export function WhyUsCtaSection() {
    const {
        eyebrow,
        title,
        description,
        primaryAction,
        secondaryAction,
    } = whyUsCtaData;

    return (
        <Box
            component="section"
            sx={{
                bgcolor: '#0c120f',
                color: '#fff',

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },
            }}
        >
            <Container>
                <MotionDiv
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            display: 'block',
                            mb: 3,
                            color: 'primary.light',
                        }}
                    >
                        {eyebrow}
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',
                                lg: '1.2fr 0.8fr',
                            },

                            gap: {
                                xs: 5,
                                lg: 12,
                            },

                            alignItems: 'end',
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 820,

                                fontSize: {
                                    xs: '3rem',
                                    sm: '4rem',
                                    md: '5rem',
                                    lg: '5.6rem',
                                },

                                fontWeight: 700,
                                lineHeight: 0.94,
                                letterSpacing:
                                    '-0.06em',
                            }}
                        >
                            {title}
                        </Typography>

                        <Box>
                            <Typography
                                sx={{
                                    maxWidth: 520,

                                    color:
                                        'rgba(255,255,255,0.62)',

                                    fontSize: {
                                        xs: '1rem',
                                        md: '1.05rem',
                                    },

                                    lineHeight: 1.8,
                                }}
                            >
                                {description}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1.5,
                                    mt: 4,
                                }}
                            >
                                <Button
                                    component={Link}
                                    to={
                                        primaryAction.href
                                    }
                                    variant="contained"
                                    endIcon={
                                        <ArrowRight
                                            size={18}
                                        />
                                    }
                                    sx={{
                                        px: 3.5,
                                        py: 1.5,

                                        borderRadius:
                                            '999px',

                                        textTransform:
                                            'none',

                                        fontWeight: 600,
                                    }}
                                >
                                    {
                                        primaryAction.label
                                    }
                                </Button>

                                <Button
                                    component={Link}
                                    to={
                                        secondaryAction.href
                                    }
                                    variant="outlined"
                                    startIcon={
                                        <MessageCircle
                                            size={18}
                                        />
                                    }
                                    sx={{
                                        px: 3.5,
                                        py: 1.5,

                                        borderRadius:
                                            '999px',

                                        textTransform:
                                            'none',

                                        fontWeight: 600,

                                        color: '#fff',

                                        borderColor:
                                            'rgba(255,255,255,0.28)',

                                        '&:hover': {
                                            borderColor:
                                                '#fff',

                                            bgcolor:
                                                'rgba(255,255,255,0.05)',
                                        },
                                    }}
                                >
                                    {
                                        secondaryAction.label
                                    }
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </MotionDiv>
            </Container>
        </Box>
    );
}