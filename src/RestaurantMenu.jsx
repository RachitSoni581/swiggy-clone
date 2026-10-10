import { useParams } from "react-router";
import { useState,useEffect } from "react";

export default function RestaurantMenu(){
    let {id} = useParams();
    console.log(id);
    const [RestData,setRestData] = useState(null);
     useEffect(() => {
            async function fetchData() {
                const proxyServer = "https://cors-anywhere.herokuapp.com/";
                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.717&lng=75.8337&restaurantId=${id}`;
                const response = await fetch(proxyServer + swiggyAPI);
                const data = await response.json();
    
                setRestData(
                    data
                );
            }
    
            fetchData();
        }, [])
        console.log(RestData);
    return(
        <>
       <h1>hello  coder army</h1>
       <h2>{id}</h2>          

        </>
    );
}