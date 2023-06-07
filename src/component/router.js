import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Life from "./category/life/Life";
import Detail from "./detail/Detail";
import Education from "./category/education/Education";
import CurrentEvents from "./category/current_events/CurrentEvents";
import Business from "./category/business/Business";
import Sport from "./category/sport/Sport";
import Entertainment from "./category/entertainment/Entertainment";
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

export const appRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{path: "life", element: <Life/>},
        {path: "education", element: <Education/>},
        {path: "current-events", element: <CurrentEvents/>},
        {
            path: "business", element: <Business/>, children: [

            ]
        },
        {path: "business/finance", element: <Finance/>},
        {path: "business/invest", element: <Invest/>},
        {path: "business/market", element: <Market/>},
        {path: "business/businessmen", element: <Businessmen/>},
        {path: "business/finance-support", element: <FinanceSupport/>},
        {path: "sport", element: <Sport/>},
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
        {path: "entertainment/tv", element: <TV/>},
        {path: "news/:link", element: <Detail/>,}],
}]);