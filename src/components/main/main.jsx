import React from 'react';
import Catalog from "../catalog/catalog";

export default function Main(products) {
    return (
        <main>
            <Catalog
                products={products}
            />
        </main>
    )
}
