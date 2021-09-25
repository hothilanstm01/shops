import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import ThoiTiet from './ThoiTiet';



function TrangChu() {
    const [weather,setweather]=useState([]);

    useEffect(() => {
        const FetchApi = async ()=>{
        var apiKey = "6ee66f2fb60cbce26f2222ab9a482dc8";
        var lat = 10.691647;  //10.792858;
        var long =106.204834; // 106.618599;
        var url= `http://api.openweathermap.org/data/2.5/weather?lang=vi&lat=${lat}&lon=${long}&appid=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        setweather(data);
    }

    FetchApi();

    },[])
  console.log(weather);
    return (
        <div>
           {weather.length===0?
              <LinearProgress/>
            :
            <ThoiTiet data={weather} />
            }
        </div>
    )
}

export default TrangChu
