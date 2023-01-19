import React from 'react';
import CatalogItem from "../catalog-item/catalog-item";


export default function Catalog(props) {
    console.log(props.products.products)
    return (
        <section className="catalog">
            <h1 className="catalog__main-header">Ты сегодня покормил кота?</h1>
            <ul className="catalog__list">
                {
                    props.products.products.map((product) => {
                        return (
                            <CatalogItem
                            key={product.id}
                            additive={product.additive}
                            promoInfo={product.promoInfo}
                            isAvailable={product.isAvailable}
                            width={product.width}
                            description={product.description}
                        />
                        )
                    })
                }
            </ul>
        </section>
)
}