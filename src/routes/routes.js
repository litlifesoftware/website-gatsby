import IndexPage from "../pages";

const routes = [
  {
    path: "/",
    title: "Home",
    component: IndexPage,
    showOnNavbar: true,
    showOnFooter: false,
    isLegal: false,
  },
  {
    path: "/historyofme",
    title: "History of Me",
    showOnNavbar: false,
    showOnFooter: false,
    isLegal: false,
  },
  {
    path: "/apps",
    title: "Apps",
    showOnNavbar: true,
    showOnFooter: true,
    isLegal: false,
  },
  {
    path: "/packages",
    title: "Packages",
    showOnNavbar: false,
    showOnFooter: true,
    isLegal: false,
  },
  {
    path: "/privacy",
    title: "Privacy",
    showOnNavbar: false,
    showOnFooter: true,
    isLegal: true,
  },
];

export default routes;
