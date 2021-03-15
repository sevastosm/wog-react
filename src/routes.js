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
        path: `/${route.ALL_SERIES}`
    },
    {
        component: ContactPage,
        exact: true,
        path: `/${route.CONTACT}`
    },
    {
        component: CookiesPage,
        exact: true,
        path: `/${route.COOKIES}`
    },
    {
        component: HelpPage,
        exact: true,
        path: `/${route.HELP}`
    },
    {
        component: HistoryPage,
        exact: true,
        path: `/${route.HISTORY}`
    },
    {
        component: LinksPage,
        exact: true,
        path: `/${route.LINK}`
    },
    {
        component: Newsletter,
        exact: true,
        path: `/${route.NEWSLETTER}`
    },
    {
        component: WogInfoPage,
        exact: true,
        path: `/${route.ABOUT}`
    }
]

export default routes
