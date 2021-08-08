import IndexPage from "../pages";

const routes = [
  {
    path: "/",
    title: "Home",
    component: IndexPage,
    showOnNavbar: true,
    showOnFooter: false,
  },
  {
    path: "/remaininglifetime",
    title: "Remaining Lifetime",
    showOnNavbar: true,
    showOnFooter: false,
  },
  {
    path: "/historyofme",
    title: "History of Me",
    showOnNavbar: true,
    showOnFooter: false,
  },
  {
    path: "/privacy",
    title: "Privacy",
    showOnNavbar: false,
    showOnFooter: true,
  },
];

export default routes;
