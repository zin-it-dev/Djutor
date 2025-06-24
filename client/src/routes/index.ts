import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Doctors from "@/pages/Doctors";
import Home from "@/pages/Home";
import LogIn from "@/pages/LogIn";

type RouteType = {
    path: string;
    component: any;
};

export const publicRoutes: RouteType[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/login",
        component: LogIn,
    },
    {
        path: "/doctors",
        component: Doctors,
    },
];
