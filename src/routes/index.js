
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Config from 'pages/Config';
import Music from 'pages/Music';
import Splash from 'components/Splash';
import Card from 'pages/Card';
import Error404 from 'pages/errors/Error404';

const publicRoutes = [
    { path: `/*`, component: Error404, layout: null },
    {
        path: '/auth',
        component: Auth,
        layout: null
    },
    {
        path: '/:uuid',
        component: Splash,
        layout: null
    },
    {
        path: '/',
        component: Splash,
        layout: null
    },
    {
        path: '/card/:nickName',
        component: Card,
        layout: null
    }

]
const privateRoutes = [
    {
        path: '/config',
        component: Config,
    },
    {
        path: '/music',
        component: Music,

    },

    {
        path: '/home',
        component: Home
    }
]
export { publicRoutes, privateRoutes }