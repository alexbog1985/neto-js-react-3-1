import { Listing } from './components/Listing/Listing.tsx';
import './App.css'
import etsyData from './assets/data/etsy.json'
import type {Product} from "./types/Product.ts";


function App() {
    const data: Product[] = etsyData.filter((item) => item.state === "active")
    .map(({ listing_id, url, MainImage, title, currency_code, price, quantity }) => ({
        listing_id,
        url: url || 'ссылка на несуществующую страницу',
        image: MainImage?.url_570xN || 'ссылка на картинку по умолчанию',
        title: title || 'Нет названия',
        currency_code: currency_code || '',
        price: price || '0.00',
        quantity: quantity || 0,
    }));
    return (
        <Listing products={data} />
    )
}

export default App
