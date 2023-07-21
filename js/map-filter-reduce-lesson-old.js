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
            let housesTwoBeds = houses.filter(house => {
                const numOfBeds = parseFloat(house.beds);
                const numOfBaths = parseFloat(house.baths)
                return numOfBeds >= 5 && numOfBaths >= 2
            });
            console.log(housesTwoBeds)


            let housesPriceRange = houses.map(house => {
                const priceRange = 200_000
                const canBuy = parseFloat(house.price) > priceRange ? 'no' : 'yes';
                if(parseFloat(house.price) < priceRange) {
                    const newValue = `Address: ${house.address}\ncan i afford it: ${canBuy}`
                    return newValue
                }
            }).filter(house => {
                return house
            })
            const largestPrice = houses.reduce((accumulator, house, index) => {
                let price = parseFloat(house.price);
                if (price> accumulator) {
                    accumulator = price;
                }
                return accumulator
            }, 0)
            console.log(largestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))


        })


})();

