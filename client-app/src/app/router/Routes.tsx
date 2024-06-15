import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/detailes/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/Activities',
                element: <ActivityDashboard />,
            },
            {
                path: '/Activities/:id',
                element: <ActivityDetails />,
            },
            {
                path: '/CreateActivity',
                element: <ActivityForm key='create'/>,
            },
            {
                path: '/manage/:id',
                element: <ActivityForm key='manage'/>,
            }
        ]
    }
];

export const router = createBrowserRouter(routes)