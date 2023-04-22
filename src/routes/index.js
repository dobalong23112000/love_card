
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Loading from 'components/Loading';
import Config from 'pages/Config';
import Music from 'pages/Music';

const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/auth',
        component: Auth,
        layout: null
    },
    {
        path: '/splash',
        component: Loading,
        layout: null

    },
    {
        path: '/config',
        component: Config,
    },
    {
        path: '/music',
        component: Music,

    }
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }