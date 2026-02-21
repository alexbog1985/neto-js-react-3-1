import type {MainImageModel} from "../../types/MainImageModel.ts";

interface ProductCardProps {
    listing_id: number;
    url: string;
    MainImage?: MainImageModel;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

export function ProductCard({ url, MainImage, title, currency_code, price, quantity}: ProductCardProps) {
    const displayedTitle = title.length > 50 ? title.slice(0, 50) + '…' : title;

    let code: string;
    switch (currency_code) {
        case "USD":
            code = '$';
            break;
        case "EUR":
            code = '€';
            break;
        case "GBP":
            code = '£';
            break;
        default:
            code = currency_code + ' ';
    }

    let stockClass = 'stock-medium';
    if (quantity <= 10) stockClass = 'stock-low';
    if (quantity > 20) stockClass = 'stock-high';

    const handleClick = () => {
        window.location.href=url
    }


    return (
        <div className="product-card" onClick={handleClick}>
            <img src={MainImage?.url_570xN}
                 alt="" className="product-image"/>
            <div className="product-info">
                <h3 className="product-title">{displayedTitle}</h3>
                <div className="price-container">
                    <div className="product-price">{code}{price}</div>
                    <span className={"stock-badge " + stockClass}>{quantity} left</span>
                </div>
            </div>
        </div>
    )
}