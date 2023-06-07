import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Life from "./category/life/Life";
import Detail from "./detail/Detail";
import Education from "./category/education/Education";
import CurrentEvents from "./category/current_events/CurrentEvents";
import Business from "./category/business/Business";
import Sport from "./category/sport/Sport";
import Entertainment from "./category/entertainment/Entertainment";
import Home from "./category/home/Home";
import Travel from "./category/travel/Travel";
import RealEstate from "./category/real_estate/RealEstate";
import SearchNews from "./search/SearchNews";
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
            path: "business",
            element: <Business/>
        },

        {
            path: "sport",
            element: <Sport/>
        },

        {
            path: "entertainment",
            element: <Entertainment/>
        },
        {
            path: "news/:link",
            element: <Detail/>,
        },
        {
            path: "",
            element: <Home/>,
        },
        {
            path: "travel",
            element: <Travel/>,
        },
        {
            path: "real-estate",
            element: <RealEstate/>,
        },
        {
            path: "search/:name",
            element: <SearchNews/>,
        },
        {
            path: "/search/news/:link",
            element: <Detail/>,
        }]
}]);