import {
    Box,
} from '@mui/material';

import {
    Outlet,
} from 'react-router-dom';

import {
    ScrollToTop,
} from '../../feedback/ScrollToTop';

import {
    Header,
} from '../Header';

import {
    Footer,
} from '../Footer';

export function PageLayout() {
    return (
        <Box
            sx={{
                minHeight:
                    '100vh',

                display: 'flex',

                flexDirection:
                    'column',

                bgcolor:
                    'background.default',
            }}
        >
            <ScrollToTop />

            <Header />

            <Box
                component="main"
                sx={{
                    flex: 1,
                }}
            >
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}

export default PageLayout;