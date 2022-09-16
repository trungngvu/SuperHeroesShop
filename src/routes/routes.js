import Home from '../page/Home/home';
import Comics from '../page/Comics/Comics';
import Profile from '../page/Profiles/profiles';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/comic',
        component: Comics,
    },
];
const privateRoutes = [
    {
        path: '/profile',
        component: Profile,
    },
];
export { publicRoutes, privateRoutes };
