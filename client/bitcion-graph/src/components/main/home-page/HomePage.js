
    import React, { useEffect, useState } from "react";
    import axios from 'axios';
    import HomePageView from './HomePage.view'


    export default function HomePage(){
        const [data ,setData]=useState([]);
        const[filterDate, setFilterDate]=useState(364)

        useEffect(() => {
         
            async function getdateBitcoin() {
                try {
                    const url = `${process.env.REACT_APP_SERVER_URL}/bitcoinData/${filterDate}`;
                  
                    const response = await axios.get(url);
                    console.log("Data received:", response.data);
                    setData(response.data);
                } catch (e) {
                    console.error("Failed to fetch data:", e);
                }
            }
            getdateBitcoin();
        }, [filterDate]);
        

    return(
        <HomePageView
        data={data}
        setFilterDate={setFilterDate}
        filterDate={filterDate}
        />
    );
}