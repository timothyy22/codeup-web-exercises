(() => {

    const url = 'data/houses.json'
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(houses => {
            console.log(houses)
            const housesTwoBeds = [];
            for (let house of houses) {
                const numOfBeds = parseFloat(house.beds)
                if(numOfBeds >= 2) {
                    housesTwoBeds.push(house)
                }
            }
            console.log(housesTwoBeds)
        })

    // reduce


})();