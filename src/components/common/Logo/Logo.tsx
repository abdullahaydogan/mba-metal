import { Box } from '@mui/material';

import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo/Logo.png';

import { routes } from '../../../constants/routes';

interface LogoProps {
    size?: 'small' | 'medium' | 'large';
    link?: boolean;
    onClick?: () => void;
}

const sizes = {
    small: {
        width: 64,
    },

    medium: {
        width: 82,
    },

    large: {
        width: 104,
    },
} as const;

export function Logo({
    size = 'medium',
    link = true,
    onClick,
}: LogoProps) {
    const image = (
        <Box
            component="img"
            src={logo}
            alt="MBA Metal"
            draggable={false}
            sx={{
                display: 'block',

                width: sizes[size].width,
                maxWidth: '100%',
                height: 'auto',

                objectFit: 'contain',

                userSelect: 'none',
                pointerEvents: 'none',

                transition:
                    'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
        />
    );

    if (!link) {
        return image;
    }

    return (
        <Box
            component={Link}
            to={routes.home}
            onClick={onClick}
            aria-label="MBA Metal ana sayfa"
            sx={{
                display: 'inline-flex',

                alignItems: 'center',
                justifyContent: 'center',

                flexShrink: 0,

                textDecoration: 'none',

                outline: 'none',

                transition:
                    'opacity 180ms ease',

                '&:hover': {
                    opacity: 0.9,

                    '& img': {
                        transform:
                            'scale(1.025)',
                    },
                },

                '&:focus-visible': {
                    outline: '2px solid',
                    outlineColor:
                        'primary.main',
                    outlineOffset: 5,
                },
            }}
        >
            {image}
        </Box>
    );
}

export default Logo;