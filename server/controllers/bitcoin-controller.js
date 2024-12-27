const router = require("express").Router();

const axios = require('axios');  


router.get("/:days", async (request, response, next) => {
  try {
    const { days } = request.params;

    const limit = days === "1" ? 24 : days === "7" ? 7 : days === "30" ? 30 : days === "364" ? 364 : 0;
    
    
    const endpoint = days === "1" ? "histohour" : "histoday"; 

    const result = await axios.get(
      `https://min-api.cryptocompare.com/data/v2/${endpoint}`, 
      {
        params: {
          fsym: "BTC", 
          tsym: "USD", 
          limit: limit,
          toTs: Math.floor(Date.now() / 1000),
        },
      }
    );

  
    const filteredData = result.data.Data.Data.map(({ time, close }) => ({
      date: endpoint === "histohour"
        ? new Date(time * 1000).toISOString().split("T")[1].slice(0, 5) 
        : new Date(time * 1000).toISOString().split("T")[0], 
      price: close, 
    }));

    response.send(filteredData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    next(error);
  }
});

module.exports = router;
