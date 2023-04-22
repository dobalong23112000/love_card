
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Loading from 'components/Loading';

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
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }