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
import Finance from "./category/business/Finance";
import Invest from "./category/business/Invest";
import Market from "./category/business/Market";
import Businessmen from "./category/business/Businessmen";
import FinanceSupport from "./category/business/FinanceSupport";
import InternationalFootball from "./category/sport/InternationalFootball";
import VNFootball from "./category/sport/VNFootball";
import TransferNews from "./category/sport/TransferNews";
import OtherSport from "./category/sport/OtherSport";
import Backstage from "./category/sport/Backstage";
import StarWorld from "./category/entertainment/StarWorld";
import Miss from "./category/entertainment/Miss";
import Fashion from "./category/entertainment/Fashion";
import Music from "./category/entertainment/Music";
import Movie from "./category/entertainment/Movie";
import TV from "./category/entertainment/TV";
import Family from "./category/life/Family";
import Story from "./category/life/Story";
import Cuisine from "./category/life/Cuisine";
import Youth from "./category/life/Youth";
import Tips from "./category/life/Tips";
import Confide from "./category/life/Confide";
export const appRouter = createBrowserRouter([{

    path: '/',
    element: <App/>,
    children: [{path: "life", element: <Life/>},
        {path: "education", element: <Education/>},
        {path: "current-events", element: <CurrentEvents/>},
        {path: "family", element: <Family/>},
        {path: "story", element: <Story/>},
        {path: "cuisine", element: <Cuisine/>},
        {path: "youth", element: <Youth/>},
        {path: "tip", element: <Tips/>},
        {path: "confide", element: <Confide/>},


        {
            path: "business", element: <Business/>, children: [
            ]
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
        },
        {path: "business/finance", element: <Finance/>},
        {path: "business/invest", element: <Invest/>},
        {path: "business/market", element: <Market/>},
        {path: "business/businessmen", element: <Businessmen/>},
        {path: "business/finance-support", element: <FinanceSupport/>},
        {path: "sport/international-football", element: <InternationalFootball/>},
        {path: "sport/vn-football", element: <VNFootball/>},
        {path: "sport/transfer-news", element: <TransferNews/>},
        {path: "sport/other-sport", element: <OtherSport/>},
        {path: "sport/backstage", element: <Backstage/>},
        {path: "entertainment", element: <Entertainment/>},
        {path: "entertainment/star-world", element: <StarWorld/>},
        {path: "entertainment/miss", element: <Miss/>},
        {path: "entertainment/fashion", element: <Fashion/>},
        {path: "entertainment/music", element: <Music/>},
        {path: "entertainment/movie", element: <Movie/>},
        {path: "entertainment/tv", element: <TV/>}]
}]);