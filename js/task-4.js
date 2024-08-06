function getShippingCost(country) {
    const countryPriceList = {
        'china': 100,
        'chile': 250,
        'australia': 170,
        'jamaica': 120
    }
    switch (country) {
        case 'China':
            return `Shipping to ${country} will const ${countryPriceList[country.toLowerCase()]} credits`;
        case 'Chile':
            return `Shipping to ${country} will const ${countryPriceList[country.toLowerCase()]} credits`;
        case 'Australia':
            return `Shipping to ${country} will const ${countryPriceList[country.toLowerCase()]} credits`;
        case 'Jamaica':
            return `Shipping to ${country} will const ${countryPriceList[country.toLowerCase()]} credits`;
        default:
            return `Sorry, there is no delivery to your country`;
    }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
