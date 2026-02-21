import type {Product} from "../../types/Product.ts";
import {ProductCard} from "../ProductCard/ProductCard.tsx";

// listing_id — уникальный идентификатор предложения, число;
// url — ссылка на предложение, строка;
// MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
// title — название предложения, строка;
// currency_code — код валюты, строка;
// price — цена, строка;
// quantity — доступное количество, число.

interface ListingProps {
    products: Product[]
}


export function Listing({products}: ListingProps) {
    return (
        <div className="container">
            <div className="product-grid">
                {products.map((item) =>
                    <ProductCard
                        key={item.listing_id}
                        listing_id={item.listing_id}
                        url={item.url}
                        MainImage={item.MainImage}
                        title={item.title}
                        currency_code={item.currency_code}
                        price={item.price}
                        quantity={item.quantity}
                    />
                )}
            </div>
        </div>
    )
}