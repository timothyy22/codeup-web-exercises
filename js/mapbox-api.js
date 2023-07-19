$(() => {

    //global variables
    const map = initializeMap()
    const marker = createMarker()
    const popup = createPopup()



    //functions
    //function that initializes the map
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

    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4253])
            .addTo(map);
    }

    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4253])
            .setHTML(`
                <div>
                    <h1>codeup</h1>
                    <p>blahhhh blahhh</p>
                </div>
            `)

    }

        function goToParis () {
            geocode('Paris', MAPBOX_TOKEN).then((data) => {
                console.log(data)
                map.setCenter(data);
            })

        }

        function printAdress() {
            const cords = map.getCenter()
            reverseGeocode(cords, MAPBOX_TOKEN).then((data) => {
                console.log(data)
                document.querySelector('h1').innerHTML = `${data}`
            })
        }

        function markAlamo () {
            geocode('The Alamo, san antonio', MAPBOX_TOKEN).then((data) => {
                const alamoPopup = new mapboxgl.Popup()
                    .setHTML(`<p>Remember the alamo</p>`)
                const alamoMarker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map)
                    .setPopup(alamoPopup)
                alamoPopup.addTo(map)
            })
        }

    function markWaffleBus() {
        geocode('waffle bus, houston texas', MAPBOX_TOKEN).then((data) => {
            const wafflePopup = new mapboxgl.Popup()
                .setHTML(`
                            <div>
                            <p>some of the best chicken sandwiches ever</p>
                            <!--<img src="../img/pizza1.jpeg" class="height: 100%">-->
                            </div>
                           `);
            const waffleMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(wafflePopup);
            wafflePopup.addTo(map);
        })
    }

    function changeZoom() {
        let zoomSelection = document.querySelector('#zoom-selection')
        if (zoomSelection.value === '5') {
            map.setZoom(5)
        }
        if (zoomSelection.value === '10') {
            map.setZoom(10)
        }
        if (zoomSelection.value === '15') {
            map.setZoom(15)
        }
        if (zoomSelection.value === '20') {
            map.setZoom(20)
        }
    }



    //events

    document.querySelector('#geocode-button').addEventListener('click', goToParis)
    document.querySelector('#reverse-geocode-button').addEventListener('click', printAdress)
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo)
    document.querySelector('#fav-restaurant').addEventListener('click', markWaffleBus)
    document.querySelector('#zoom-selection').addEventListener('change', changeZoom)






    // runs when the program loads
    map.setZoom(10);
    marker.setPopup(popup)




})