$(() => {

    const openWeather = OPEN_WEATHER_MAPID
    const map = initializeMap()
    let citySearch = document.querySelector('#searchBox')
    let lat = map.getCenter()


    function printAddress(map) {
        const coords = map.getCenter()
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
            if (citySearch.value === '') {
                document.querySelector('h1').innerHTML = `${data}`
            } else {
                document.querySelector('h1').innerHTML = citySearch.value()

            }
        })
    }

    // function createMarker() {
    //     return new mapboxgl.Marker()
    //         .setLngLat([lat.lat, lat.lng])
    //         .addTo(map);
    // }
    // createMarker()
    //NEED SO DATA CAN LOAD ON START UP

    updateTodaysWeather();
    updateFiveDays();
    // weatherIcons();
    function goToInput() {
        let searchedCity = citySearch.value
        geocode(searchedCity, MAPBOX_TOKEN).then((data) => {
            map.setCenter(data);
            updateTodaysWeather()
            updateFiveDays()
            printAddress()

        })

    }

    //
    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: openWeather,
    //     lat: lat.lat,
    //     lon: lat.lng,
    //     units: "imperial"
    // }).done(function (data) {
    //     console.log('The entire response 1:', data);
    //     console.log('Diving in - here is current information: ', data.current);
    //     console.log('A step further - information for tomorrow: ', data.daily[1]);
    //     document.getElementById('currentDate').innerHTML = `${Date(data.current.dt)}`
    //     document.getElementById('currentTemp').innerHTML = `tempeture: ${data.current.temp}°F`
    //     // document.getElementById('currentWeatherIcon').innerHTML = `${data.list[0].weather[0].icon}`
    //     // console.log(data.list[0])
    //     // document.getElementById('dayOneMax').innerHTML = `${minMaxTemps[0].max}`
    //
    // });

     function updateFiveDays () {
         let lat = map.getCenter()
         $.get("https://api.openweathermap.org/data/2.5/forecast", {
             APPID: openWeather,
             lat: lat.lat,
             lon: lat.lng,
             units: "imperial"
         }).done(function (data) {
             const minMaxTemps = returnMinMaxTemps(data);
             console.log(minMaxTemps)
             console.log('5 day forecast', data);
             console.log('The entire response:', data);
             console.log('Diving in - here is current information: ', data.current);
             console.log('looking for...', data.list[0].weather[0].icon)

             // day one
             document.getElementById('dayOne').innerHTML = `${minMaxTemps[0].date.slice(5)}`
             document.getElementById('dayOneMin').innerHTML = `Min: ${Math.round(minMaxTemps[0].min)}°F`
             document.getElementById('dayOneMax').innerHTML = `Max: ${Math.round(minMaxTemps[0].max)}°F`
             document.getElementById('dayOneHumidity').innerHTML = `Humidity: ${data.list[0].main.humidity}`
             document.getElementById('dayOneFeelsLike').innerHTML = `Feels Like: ${data.list[0].main.feels_like}`
             document.getElementById('icon-holder').innerHTML = `<img src = http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png>`



             // day two
             document.getElementById('dayTwo').innerHTML = `${minMaxTemps[1].date.slice(5)}`
             document.getElementById('dayTwoMin').innerHTML = `Min: ${Math.round(minMaxTemps[1].min)}°F`
             document.getElementById('dayTwoMax').innerHTML = `Max: ${Math.round(minMaxTemps[1].max)}°F`
             document.getElementById('dayTwoHumidity').innerHTML = `Humidity: ${data.list[1].main.humidity}`
             document.getElementById('dayTwoFeelsLike').innerHTML = `Feels Like: ${data.list[1].main.feels_like}`
             document.getElementById('icon-holder2').innerHTML = `<img src = http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png>`




             // day three
             document.getElementById('dayThree').innerHTML = `${minMaxTemps[2].date.slice(5)}`
             document.getElementById('dayThreeMin').innerHTML = `Min: ${Math.round(minMaxTemps[2].min)}°F`
             document.getElementById('dayThreeMax').innerHTML = `Max: ${Math.round(minMaxTemps[2].max)}°F`
             document.getElementById('dayThreeHumidity').innerHTML = `Humidity: ${data.list[2].main.humidity}`
             document.getElementById('dayThreeFeelsLike').innerHTML = `Feels Like: ${data.list[2].main.feels_like}`
             document.getElementById('icon-holder3').innerHTML = `<img src = http://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png>`




             // day four
             document.getElementById('dayFour').innerHTML = `${minMaxTemps[3].date.slice(5)}`
             document.getElementById('dayFourMin').innerHTML = `Min: ${Math.round(minMaxTemps[3].min)}°F`
             document.getElementById('dayFourMax').innerHTML = `Max: ${Math.round(minMaxTemps[3].max)}°F`
             document.getElementById('dayFourHumidity').innerHTML = `Humidity: ${data.list[3].main.humidity}`
             document.getElementById('dayFourFeelsLike').innerHTML = `Feels Like: ${data.list[3].main.feels_like}`
             document.getElementById('icon-holder4').innerHTML = `<img src = http://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png>`




             //day five
             document.getElementById('dayFive').innerHTML = `${minMaxTemps[4].date.slice(5)}`
             document.getElementById('dayFiveMin').innerHTML = `Min: ${Math.round(minMaxTemps[4].min)}°F`
             document.getElementById('dayFiveMax').innerHTML = `Max: ${Math.round(minMaxTemps[4].max)}°F`
             document.getElementById('dayFiveHumidity').innerHTML = `Humidity: ${data.list[4].main.humidity}`
             document.getElementById('dayFiveFeelsLike').innerHTML = `Feels Like: ${data.list[4].main.feels_like}`
             document.getElementById('icon-holder5').innerHTML = `<img src = http://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png>`




             console.log('5days')
         });
     }

    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v11',
            zoom: 5,
            center: [-95.39913654442385, 29.74513398836472],
        }
        return new mapboxgl.Map(mapOptions);
    }




    function updateTodaysWeather () {
        let lat = map.getCenter()
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeather,
            lat:    lat.lat,
            lon:   lat.lng,
            units: "imperial"
        }).done(function(data) {
            console.log('The entire response 1:', data);
            console.log('Diving in - here is current information: ', data.current);
            console.log('A step further - information for tomorrow: ', data.daily[1]);
            document.getElementById('currentDate').innerHTML = `${Date(data.current.dt).slice(0, -32)}`
            document.getElementById('currentTemp').innerHTML = `Tempeture: ${data.current.temp}°F`
            document.getElementById('currentHumidity').innerHTML = `Humidity: ${data.current.humidity}°F`
            document.getElementById('currentFeelsLike').innerHTML = `Feels Like: ${data.current.feels_like}°F`


            printAddress()

        });
    }

    function randomLocation(){

            geocode('Great Wall Of china', MAPBOX_TOKEN).then((data) => {
                map.setCenter(data);
                updateTodaysWeather()
                updateFiveDays()
                printAddress()

            })

    }




    document.querySelector('#reverse-geocode-button').addEventListener('click', ()=>{
        printAddress(map);
    })
    document.querySelector('#load-weather').addEventListener('click', ()=> {
        updateTodaysWeather(), updateFiveDays();
    })
    document.querySelector('#search-city').addEventListener('click', () => {
        goToInput(), updateTodaysWeather(), updateFiveDays();
    })
    document.querySelector('#random-place').addEventListener('click', () => {
        randomLocation()
    })


})

