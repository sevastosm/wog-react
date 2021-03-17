import {
    AllSeriesPage,
    ContactPage,
    CookiesPage,
    HelpPage,
    HistoryPage,
    LinksPage,
    HomePage,
    Newsletter,
    WogInfoPage
} from './pages'

import {route} from './constants/'

const routes = [
    {
        component: HomePage,
        exact: true,
        path: `/`
    },
    {
        component: AllSeriesPage,
        exact: true,
        path: `/${route.ALL_SERIES}/:id`
    },
    {
        component: ContactPage,
        exact: true,
        path: `/${route.CONTACT}/:id`
    },
    {
        component: CookiesPage,
        exact: true,
        path: `/${route.COOKIES}/:id`
    },
    {
        component: HelpPage,
        exact: true,
        path: `/${route.HELP}/:id`
    },
    {
        component: HistoryPage,
        exact: true,
        path: `/${route.HISTORY}/:id`
    },
    {
        component: LinksPage,
        exact: true,
        path: `/${route.LINK}/:id`
    },
    {
        component: Newsletter,
        exact: true,
        path: `/${route.NEWSLETTER}/:id`
    },
    {
        component: WogInfoPage,
        exact: true,
        path: `/${route.ABOUT}/:id`
    }
]

export default routes
