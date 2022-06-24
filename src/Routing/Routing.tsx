import React from 'react';
import {useRoutes} from "react-router-dom";
import {routingData} from "./routingData";



const Routing = () => {
    const routes: React.ReactElement | null = useRoutes(routingData)
    return routes
};

export default Routing;