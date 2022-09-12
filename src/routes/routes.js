import Home from "../page/Home/home";
import Comics from "../page/Comics/Comics";
import Profile from "../page/Profiles/profiles";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/comic",
    component: Comics,
  },
  {
    path: "/profile",
    component: Profile,
    layout: null,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
