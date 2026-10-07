import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import {
    PageLayout,
} from '../../components/layout/PageLayout';

import {
    routes,
} from '../../constants/routes';

import {
    Home,
} from '../../pages/Home';

import {
    About,
} from '../../pages/About';

import {
    WhyUs,
} from '../../pages/WhyUs';

import {
    Capabilities,
} from '../../pages/Capabilities';

import {
    Industries,
} from '../../pages/Industries';

import {
    IndustryDetail,
} from '../../pages/IndustryDetail';


import {
    Contact,
} from '../../pages/Contact';

import {
    NotFound,
} from '../../pages/NotFound';

/* =========================================================
   ROUTER
========================================================= */

const router =
    createBrowserRouter([
        {
            element:
                <PageLayout />,

            children: [
                {
                    path:
                        routes.home,

                    element:
                        <Home />,
                },

                {
                    path:
                        routes.about,

                    element:
                        <About />,
                },

                {
                    path:
                        routes.whyUs,

                    element:
                        <WhyUs />,
                },

                {
                    path:
                        routes.capabilities,

                    element:
                        <Capabilities />,
                },

                {
                    path:
                        routes.industries,

                    element:
                        <Industries />,
                },

                {
                    path:
                        routes.industryDetail,

                    element:
                        <IndustryDetail />,
                },

                {
                    path:
                        routes.contact,

                    element:
                        <Contact />,
                },

                {
                    path:
                        '*',

                    element:
                        <NotFound />,
                },
            ],
        },
    ]);

/* =========================================================
   APP ROUTER
========================================================= */

export default function AppRouter() {
    return (
        <RouterProvider
            router={router}
        />
    );
}