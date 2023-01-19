
//имитация данных с сервервера
export const products = [
    {
        id: 1,
        additive: 'c фуа-гра',
        promoInfo: {
            value: '10 порций',
            present:'мышь в подарок',
            },
        width: 0.5,
        isAvailable: true,
        description: 'Печень утки разварная с артишоками.'
    },
    {
        id: 2,
        additive: 'с рыбой',
        promoInfo: {
            value: '40 порций',
            present:'2 мыши в подарок',
        },
        width: 2,
        isAvailable: true,
        description: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    },
    {
        id: 3,
        additive: 'с курой',
        promoInfo: {
            value: '100 порций',
            present:'5 мышей в подарок заказчик доволен',
        },
        width: 5,
        isAvailable: false,
        description: 'Филе из цыплят с трюфелями в бульоне.'
    }
]