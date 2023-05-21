import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Life from "./category/life/Life";
import Detail from "./detail/Detail";
import Education from "./category/education/Education";
import CurrentEvents from "./category/current_events/CurrentEvents";

export const appRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        path: "life",
        element: <Life/>
    },
        {
            path: "education",
            element: <Education/>
        },
        {
            path: "current-events",
            element: <CurrentEvents/>
        },
        {
            path: "news/:link",
            element: <Detail/>,
        }]
}]);