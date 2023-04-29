
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Config from 'pages/Config';
import Music from 'pages/Music';
import Splash from 'components/Splash';
import Card from 'pages/Card';

const publicRoutes = [

    {
        path: '/auth',
        component: Auth,
        layout: null
    },
    {
        path: '/splash',
        component: Splash,
        layout: null

    },
    {
        path: '/card',
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
        path: '/',
        component: Home
    }
]
export { publicRoutes, privateRoutes }