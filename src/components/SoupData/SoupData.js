export function formatPrice (price){
    return price.toLocaleString('en-SE', {
        style: 'currency',
        currency: 'SEK'
    })
}

export const soupTypes = [
    {
        name: 'Chicken Corn Soup',
        img: '/img/chikensoup.jpg',
        section: 'Top rated',
        price: 119
    },
    {
        name: 'Shrimp Soup',
        img: '/img/shrimpsoup.jpg',
        section: 'Top rated',
        price: 139
    },
    {
        name: 'Chicken Pasta Soup',
        img: '/img/chickenPasta.jpg',
        section: 'Non Veg',
        price: 129
    },
    {
        name: 'Butternut Soup',
        img: '/img/butterNUt.jpg',
        section: 'Non Veg',
        price: 119
    },
    {
        name: 'Beans Soup',
        img: '/img/beansoup.jpg',
        section: 'Vegan',
        price: 99
    },
    {
        name: 'Mashroom Soup',
        img: '/img/brocolimashroom.jpg',
        section: 'Top rated',
        price: 119
    },
    {
        name: 'Vegitable Soup',
        img: '/img/vegitable.jpg',
        section: 'Vegan',
        price: 99
    },
    {
        name: 'Chicken Keto Soup',
        img: '/img/chickenketo.jpg',
        section: 'Non Veg',
        price: 119
    },
    {
        name: 'Green Herbs Soup',
        img: '/img/herbsoup.jpg',
        section: 'Top rated',
        price: 99
    },
    {
        name: 'Mutton Soup',
        img: '/img/muttonsoup.jpg',
        section: 'Top rated',
        price: 139
    },
    {
        name: 'Chicken Cream Soup',
        img: '/img/chickencreamsoup.jpg',
        section: 'Non Veg',
        price: 119
    },
    {
        name: 'Vegan Soup',
        img: '/img/vegansoup.jpg',
        section: 'Vegan',
        price: 99
    },
    {
        name: 'Dumplink Soup',
        img: '/img/dumplink.jpg',
        section: 'Vegan',
        price: 119
    },
    
];

export const soups = soupTypes.reduce((res, soup)=>{
    if(!res[soup.section]){
        res[soup.section] = [];
    }
    res[soup.section].push(soup);
    return res;

}, {});