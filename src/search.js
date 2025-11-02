
import { content,header,searchzone} from "."
import getInfo from "./getinfo"
const Search = ()=>{
    content.innerHTML = ""
    header.innerHTML = ""
    searchzone.innerHTML = ""
    const searchBar = document.createElement("div")
    const search = document.createElement("input")
    search.type = "search"
    search.placeholder = "search location"
    search.id = "searchinput"
    searchBar.id = "searchbar"
    searchBar.appendChild(search)
    searchzone.appendChild(searchBar)
    search.addEventListener("search",()=>{
    let value = search.value.trim()
    if(value){
      getInfo(value).then((result)=>{
        if(!result){
          return
        }
        if (header.innerHTML !=""){
          header.innerHTML = ""
        }
        else{
          
        }
        if(content.innerHTML !=""){
          content.innerHTML = ""
        }
        const city = document.createElement("div")
        const time = document.createElement("div")
        const temprature = document.createElement("h1")
        const feelslike = document.createElement("div")
        const humidity = document.createElement("div")
        const windspeed = document.createElement("div")
        const visibility = document.createElement("div")
        const dew = document.createElement("div")
        const weather = document.createElement("div")
        
        time.id = "time"
        weather.textContent = `Weather: ${result.conditions.conditions}`
        dew.textContent = `Dew Point: ${result.conditions.dew}`
        visibility.textContent = `Visibility: ${result.conditions.visibility} km`
        windspeed.textContent = `Windspeed: ${result.conditions.windspeed} km/h`
        humidity.textContent = `Humidity: ${result.conditions.humidity} %`
        feelslike.textContent = `Feels Like: ${result.conditions.feelslike} °C`
        temprature.textContent = `${result.conditions.temp} °C`
        time.textContent = `Time: ${new Date(result.conditions.datetimeEpoch*1000).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}`
        const weathercards = [weather,dew,visibility,windspeed,humidity,feelslike]
        weathercards.forEach((child)=>{
          child.classList.add("weather-card")
        })
        
        function getSVG(type) {
          const weatherIcons = {
          "clear-day": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g fill="none" stroke="none">
            <circle cx="32" cy="32" r="12" fill="#FFD24C"/>
            <g stroke="#FFD24C" stroke-width="2.6" stroke-linecap="round" opacity="0.95">
              <line x1="32" y1="2"  x2="32" y2="12"/>
              <line x1="32" y1="52" x2="32" y2="62"/>
              <line x1="2"  y1="32" x2="12" y2="32"/>
              <line x1="52" y1="32" x2="62" y2="32"/>
              <line x1="12" y1="12" x2="18" y2="18"/>
              <line x1="46" y1="46" x2="54" y2="54"/>
              <line x1="46" y1="12" x2="54" y2="4"/>
              <line x1="12" y1="54" x2="18" y2="46"/>
            </g>
          </g>
        </svg>
          `,

          "clear-night": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g fill="none" stroke="none">
            <path d="M40 18a14 14 0 1 0-12 24 10 10 0 0 1 12-24z" fill="#F0D98B"/>
            <g fill="#FFF9E6" opacity="0.9">
              <circle cx="50" cy="12" r="1.5"/>
              <circle cx="44" cy="28" r="1"/>
              <circle cx="14" cy="20" r="1"/>
            </g>
          </g>
        </svg>
          `,

          "partly-cloudy-day": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g>
            <circle cx="18" cy="18" r="9" fill="#FFD46A"/>
            <g fill="#D6E6F7" stroke="#9FB0CF" stroke-width="0.9">
              <ellipse cx="38" cy="36" rx="16" ry="10"/>
              <ellipse cx="28" cy="36" rx="9" ry="7"/>
              <rect x="24" y="36" width="28" height="10" rx="5"/>
            </g>
          </g>
        </svg>
          `,

          "partly-cloudy-night": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g>
            <path d="M38 22a10 10 0 1 1-12.8-9.6 7 7 0 0 0 12.8 9.6z" fill="#E7D9A0"/>
            <g fill="#DDE8F7" stroke="#9BAFCC" stroke-width="0.8">
              <ellipse cx="38" cy="36" rx="16" ry="10"/>
              <ellipse cx="26" cy="36" rx="9" ry="7"/>
              <rect x="22" y="36" width="28" height="10" rx="5"/>
            </g>
          </g>
        </svg>
          `,

          "cloudy": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g fill="#DDE7F7" stroke="#9AAFCF" stroke-width="0.9">
            <ellipse cx="36" cy="30" rx="18" ry="12"/>
            <ellipse cx="22" cy="34" rx="10" ry="8"/>
            <rect x="14" y="34" width="36" height="10" rx="5"/>
          </g>
        </svg>
          `,

          "rain": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g>
            <g fill="#C6D7F0" stroke="#98B6D9" stroke-width="0.9">
              <ellipse cx="36" cy="24" rx="18" ry="10"/>
              <ellipse cx="24" cy="28" rx="10" ry="8"/>
              <rect x="18" y="28" width="36" height="10" rx="5"/>
            </g>
            <g transform="translate(0,6)" fill="#3DA5FF">
              <path d="M22 44c1.6-3.6 2.8-7 0-9 -2.6 2-2 5 0 9z"/>
              <path d="M32 46c1.6-4 2.8-8 0-11 -2.6 3-2 6 0 11z"/>
              <path d="M44 44c1.6-3.6 2.8-7 0-9 -2.6 2-2 5 0 9z"/>
            </g>
          </g>
        </svg>
          `,

          "thunderstorm": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g>
            <g fill="#E0E8F3" stroke="#9BAFCC" stroke-width="0.9">
              <ellipse cx="36" cy="22" rx="18" ry="10"/>
              <ellipse cx="24" cy="26" rx="10" ry="8"/>
              <rect x="18" y="26" width="36" height="10" rx="5"/>
            </g>
            <path d="M30 36 L24 48 L30 48 L26 60 L40 44 L34 44 L38 36 Z"
                  fill="#FFD24C" stroke="#F0A800" stroke-width="0.6" />
          </g>
        </svg>
          `,

          "snow": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g>
            <g fill="#F2F8FF" stroke="#B9D0EA" stroke-width="0.8">
              <ellipse cx="36" cy="22" rx="18" ry="10"/>
              <ellipse cx="24" cy="26" rx="10" ry="8"/>
              <rect x="18" y="26" width="36" height="10" rx="5"/>
            </g>
            <g stroke="#CDE7FF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" transform="translate(0,8)">
              <g transform="translate(22,44)">
                <line x1="0" y1="-3" x2="0" y2="3"/>
                <line x1="-3" y1="-1" x2="3" y2="1"/>
                <line x1="-3" y1="1" x2="3" y2="-1"/>
              </g>
              <g transform="translate(32,50)">
                <line x1="0" y1="-3" x2="0" y2="3"/>
                <line x1="-3" y1="-1" x2="3" y2="1"/>
                <line x1="-3" y1="1" x2="3" y2="-1"/>
              </g>
              <g transform="translate(44,44)">
                <line x1="0" y1="-3" x2="0" y2="3"/>
                <line x1="-3" y1="-1" x2="3" y2="1"/>
                <line x1="-3" y1="1" x2="3" y2="-1"/>
              </g>
            </g>
          </g>
        </svg>
          `,

          "fog": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g fill="#E1E9F5">
            <ellipse cx="28" cy="16" rx="16" ry="10"/>
            <ellipse cx="16" cy="20" rx="10" ry="8"/>
            <rect x="10" y="20" width="36" height="10" rx="5"/>
          </g>
          <g stroke="#A9B7C9" stroke-width="3" stroke-linecap="round" opacity="0.9" transform="translate(0,18)">
            <line x1="6"  y1="30" x2="58" y2="30" stroke-opacity="0.55"/>
            <line x1="12" y1="36" x2="52" y2="36" stroke-opacity="0.45"/>
          </g>
        </svg>
          `,

          "wind": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
          <g stroke="#59B6FF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M6 18 C16 12, 30 12, 38 18"/>
            <path d="M14 30 C28 24, 36 24, 50 30"/>
            <path d="M6 38 C18 32, 34 32, 54 38"/>
          </g>
          <g fill="#59B6FF">
            <circle cx="8" cy="18" r="1.6"/>
            <circle cx="20" cy="30" r="1.6"/>
            <circle cx="12" cy="38" r="1.6"/>
          </g>
        </svg>
          `
        };


          return weatherIcons[type] || weatherIcons["clear-day"];
        }

        const image = document.createElement("div")
        image.innerHTML = getSVG(result.conditions.icon)
        image.id = "weathericon"
        image.style.display = "flex";
        image.style.justifyContent = "center";
        image.style.alignItems = "center";
        image.style.width = "100px";
        image.style.height = "100px";

        const svg = image.querySelector("svg");
        if (svg) {
          svg.setAttribute("width", "80");
          svg.setAttribute("height", "80");
          svg.style.display = "block";
        }
        weathercards.forEach((child)=>{
          content.appendChild(child)
        })
        city.id = "cityname"
        city.textContent = result.address
        header.appendChild(temprature)
        header.appendChild(image)
        header.appendChild(city)
        header.appendChild(time)
        console.log(result)
      })
    }
    
})
}

export default Search