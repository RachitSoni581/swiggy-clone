import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {
    const [RestData, setRestData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.717&lng=75.8337&is-seo-homepage-enabled=true";

            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();

            setRestData(
                data?.data?.cards[1].card?.card?.gridElements.infoWithStyle.restaurants
            );
        }

        fetchData();
    }, []);
    //Shimmer Effect
    if(RestData.length==0)
        return <Shimmer></Shimmer>

    return (
        <div className="flex flex-wrap  w-[80%]  mt-12 gap-5 mx-auto ">
            {RestData.map((restInfo) => (
                <RestCard
                    key={restInfo.info.id}
                    restInfo={restInfo}
                />
            ))}
        </div>
    );
}