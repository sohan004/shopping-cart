import React, { useEffect, useState } from 'react';
import { delet, getData, local } from '../Utiliti';
import Cart from './CartItem/Cart';
import Card from './Card/Card';

const Main = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json()).then(dataa => setData(dataa))
    }, [])

    const [allCart, setAllCart] = useState([])

    const cadd = (c) => {
        let newCard = []
        const exist = allCart.find(pd => pd.id === c.id)
        if (!exist) {
            c.quantity = 1
            newCard = [...allCart, c]
        }
        else {
            exist.quantity = exist.quantity + 1
            const reamaining = allCart.filter(pd => pd.id !== c.id)
            newCard = [...reamaining, exist]
        }
        setAllCart(newCard)
        local(c.id)
    }


    const caddDelet = d => {
        let newCard = []
        const exist = allCart.find(pd => pd.id === d.id)

        if (exist) {
            if (exist.quantity > 0) {
                exist.quantity = exist.quantity - 1
                const reamaining = allCart.filter(pd => pd.id !== d.id)
                newCard = [...reamaining, exist]
                setAllCart(newCard)
            }
        }
        delet(d.id)

    }


    useEffect(() => {
        let matchData = []
        const storeData = getData()
        if (storeData) {
            for (const id in storeData) {
                const findData = data.find(h => h.id === id)
                if (findData) {
                    findData.quantity = storeData[id]
                    matchData.push(findData)
                }
            }
        }
        setAllCart(matchData)

    }
        , [data])






    return (
        <div className='container'>
            <div className="row d-flex flex-column-reverse flex-md-row">
                <div className="col-12 col-md-9">
                    <div className="row g-1 g-md-3">
                        {data.map(d => <Card cadd={cadd} caddDelet={caddDelet} key={d.id} d={d}></Card>)}
                    </div>
                </div>


                <div className="col-12 col-md-3">
                    <Cart allCart={allCart}></Cart>

                </div>
            </div>

        </div>
    );
};

export default Main;