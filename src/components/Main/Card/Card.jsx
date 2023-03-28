import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Card.css'

const Card = (props) => {
    const { img, name, price, seller, ratings } = props.d
    return (
        <>
            <div className="col-6 col-lg-4">
                <div className="card p-2 h-100 shadow-sm position-relative">
                    <img src={img} className="card-img-top img-fluid" alt="pic not available" />

                    <h5 className="card-title my-2">{name}</h5>
                    <p className='fs-5 mb-5'>Price: {price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p className='mb-5'>Rating : {ratings} start</p>

                    <div className='d-flex gap-4 position-absolute card-btn'>
                        <button onClick={() => props.cadd(props.d)} className="btn  btn-primary ">
                            <FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
                        <button onClick={() => props.caddDelet(props.d)} className="btn  btn-danger ">
                            <FontAwesomeIcon icon={faTrash} /> remove</button>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Card