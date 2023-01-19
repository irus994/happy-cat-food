import React, { useState } from 'react';
import photoCat from '../../img/cat.png'

export default function CatalogItem(props) {
    const {additive, promoInfo, width, isAvailable, description} = props;
    const [isActive, setIsActive] = useState(false);
    const changeActive = (evt) => {
        evt.preventDefault();
        console.log('test');
        setIsActive(!isActive);
        console.log(isActive);
    }

    return (
        <li className="catalog__item">
            <div onClick={changeActive} className={isAvailable ? isActive ? "product-card product-card--active" : "product-card" : "product-card product-card--disabled"}>
                <div className="product-card__header">
                    <div className="corner">
                    </div>
                    {
                        isActive && isAvailable
                            ?
                        <p className="product-card__header-text product-card__header-text--active">Котэ не одобряет?</p>
                            :
                        <p className="product-card__header-text">Сказочное заморское яство</p>
                    }

                </div>
                <div className="product-card__main">
                    <p className="product-card__name">Нямушка</p>
                    <p className="product-card__description">{additive}</p>
                    <div className="product-card__promotion"><span>{promoInfo.value}</span><br/><span>{promoInfo.present}</span></div>
                    <img className="product-card__img" src={photoCat}/>
                        <p className="product-card__sticker">
                            <span className="product-card__sticker--number">{width.toString().replaceAll('.',',')}</span>
                            <span className="product-card__sticker--kg">кг</span>
                        </p>
                </div>
            </div>
            {
                !isAvailable
                    ?
                 <p className="catalog__action-text catalog__action-text--disabled">Печалька, {additive} закончился.</p>
                    :
                    isActive
                        ?
                    <p className="catalog__action-text">{description}</p>
                        :
                    <p className="catalog__action-text">Чего сидишь? Порадуй котэ, <a onClick={changeActive} className="catalog__link" href="#">купи</a>.</p>
            }

        </li>
    )
}