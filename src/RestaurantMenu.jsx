import { useParams } from "react-router";
import { useState,useEffect } from "react";
import MenuCard from "./MenuCard";

export default function RestaurantMenu(){
    let {id} = useParams();
    console.log(id);
    const [RestData,setRestData] = useState([]);
     useEffect(() => {
            async function fetchData() {
                const proxyServer = "https://cors-anywhere.herokuapp.com/";
                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.717&lng=75.8337&restaurantId=${id}`;
                const response = await fetch(proxyServer + swiggyAPI);
                const data = await response.json();
                const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                const filterData = tempData.filter((items)=>'title' in items?.card?.card)
                setRestData(
                    filterData
                );
            }
    
            fetchData();
        }, [])
        console.log(RestData);
    return(
       <div className="w-[80%] mx-auto mt-20 ">{
        RestData.map((menuItems, index)=><MenuCard key={index} menuItems={menuItems?.card?.card}></MenuCard>)
       }

       </div>
    );
}