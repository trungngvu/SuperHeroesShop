import Home from '../page/Home/home';
import Comics from '../page/Comics/Comics';
import Profile from '../page/Profiles/profiles';
const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: '',
    },
    {
        path: '/comic',
        component: Comics,
        layout: '',
    },
];
const privateRoutes = [
    {
        path: '/profile',
        component: Profile,
        layout: '',
    },
];
export { publicRoutes, privateRoutes };
