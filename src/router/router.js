//router.js
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import ClassComponent from "../pages/test/ClassComponent";
import FunctionComponent from "../pages/test/FunctionComponent";


const routes = [
    {
        path: '/',
        component: Login,
        exact: true,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/test',
        component: Home,
        children: [
            {
                path: '/classComponent',
                component: ClassComponent,
            },
            {
                path: '/functionComponent',
                component: FunctionComponent,
            },
        ]
    },
]

export { routes };




