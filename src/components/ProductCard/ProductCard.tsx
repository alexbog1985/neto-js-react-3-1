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

export function ProductCard({ MainImage, title, currency_code, price, quantity}: ProductCardProps) {
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

    return (
        <div className="product-card">
            <img src={MainImage?.url_570xN}
                 alt="item.title" className="product-image"/>
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <div className="price-container">
                    <div className="product-price">{code}{price}</div>
                    <span className="stock-badge stock-medium">{quantity} left</span>
                </div>
            </div>
        </div>
    )
}