import { useEffect, useState } from "react";
import { getRoutes } from "../api/routes";

export const useFetchRoutes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getRoutes().then((data) => setData(data));
    }, []);

    return data;
};
