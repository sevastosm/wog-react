import {
  AllSeriesPage,
  ContactPage,
  CookiesPage,
  HelpPage,
  HistoryPage,
  LinksPage,
  HomePage,
  Newsletter,
  WogInfoPage,
} from "./pages";

import { route } from "./constants/";

const routes = [

  {
    component: HomePage,
    exact: true,
    path: `/:lang`,
  },

  {
    component: AllSeriesPage,
    exact: true,
    sensitive: true,
    path: `/:lang/${route.ALL_SERIES}`,
  },
  {
    component: ContactPage,
    exact: true,
    path: `/:lang/${route.CONTACT}/`,
  },
  {
    component: CookiesPage,
    exact: true,
    path: `/:lang/${route.COOKIES}/`,
  },
  {
    component: HelpPage,
    exact: true,
    path: `/:lang/${route.HELP}/`,
  },
  {
    component: HistoryPage,
    exact: true,
    path: `/:lang/${route.HISTORY}/`,
  },
  {
    component: LinksPage,
    exact: true,
    path: `/${route.LINK}/`,
  },
  {
    component: Newsletter,
    exact: true,
    path: `/:lang/${route.NEWSLETTER}/`,
  },
  {
    component: WogInfoPage,
    exact: true,
    path: `/:lang/${route.ABOUT}/`,
  },
];

export default routes;
