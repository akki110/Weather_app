import React, { useState } from 'react'
import axios from 'axios';

function App() {

  // Fetching geolocation

  

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&exclude=current&appid=866751a88d17af21947cbb8948acd680`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=22.5608837&lon=72.9364483&units=metric&exclude=current&appid=866751a88d17af21947cbb8948acd680`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url)
      .then((Response) => {
        setData(Response.data);
        console.log(Response.data);
      })
      setLocation('');
    }
  }

  

  return (
    <>
  <div className="app">
    <div className="search">
      <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Enter a location' type="text" />
    </div>

    <div className="container">
      {/* Top */}
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
                 
        <div className="temp">
          {data.main ? <h1>{data.main.temp}°C</h1> : null}
        </div>
            
        <div className="discription">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>


      {/* Bottom */}

      {data.name != undefined && 
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}°C</p> : null}
              <p>Feels Like</p>
          </div>
                  
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}</p> : null}
              <p>Humidity</p>
          </div>
                
          <div className="wind">
            {data.wind ? <p>{data.wind.speed} KPH</p> : null}
              <p>Winds</p>
          </div>
        </div>

      }
                    
    </div>
  </div>
  </>  
);
}

export default App
