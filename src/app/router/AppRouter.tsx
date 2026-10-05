import { createBrowserRouter, RouterProvider,} from 'react-router-dom';

import { PageLayout,} from '../../components/layout/PageLayout';
import {Home,} from '../../pages/Home';
import {About,} from '../../pages/About';
import { WhyUs,} from '../../pages/WhyUs';
import { Capabilities,} from '../../pages/Capabilities';
import { Industries,} from '../../pages/Industries';
import {IndustryDetail,} from '../../pages/IndustryDetail';
import { Quality,} from '../../pages/Quality';
import { Projects,} from '../../pages/Projects';
import { Contact,} from '../../pages/Contact';
import { Quote,} from '../../pages/Quote';
import { NotFound,} from '../../pages/NotFound';

const router = createBrowserRouter([
        {
            element:
                <PageLayout />,

            children: [
                {
                    path: '/',
                    element:<Home />,
                },

                {
                    path: '/hakkimizda',
                    element: <About />,
                },

                {
                    path: '/neden-mba-metal',
                    element: <WhyUs />,
                },

                {
                    path:'/uretim-kabiliyetleri',
                    element: <Capabilities />,
                },

                {
                    path:'/sektorler',
                    element: <Industries />,
                },

                {
                    path: '/sektorler/:industrySlug',
                    element: <IndustryDetail />,
                },

                {
                    path:'/kalite',
                    element:<Quality />,
                },

                {
                    path:'/projeler',
                    element: <Projects />,
                },

                {
                    path: '/iletisim',

                    element:<Contact />,
                },

                {
                    path:'/hizli-teklif',
                    element: <Quote />,
                },

                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
    ]);

export default function AppRouter() {
    return (
        <RouterProvider
            router={router}
        />
    );
}