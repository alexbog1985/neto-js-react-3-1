import { Listing } from './components/Listing/Listing.tsx';
import './App.css'
import etsyData from './assets/data/etsy.json'


function App() {
    const data = etsyData.filter((item) => item.state === "active");

    return (
        <Listing products={data} />
    )
}

export default App
