import React from 'react';

const Card = (props) => {
    const {img, name, price, seller, ratings} = props.d
    return (
        <>
            <div className="col-6 col-lg-4">
                <div className="card p-2 h-100 shadow-sm position-relative">
                    <img src={img} className="card-img-top img-fluid" alt="pic not available" />
                    
                        <h5 className="card-title my-2">{name}</h5>
                        <p className='fs-5 mb-5'>Price: {price}</p>
                        <p>Manufacturer: {seller}</p>
                        <p className='mb-5'>Rating : {ratings} start</p>
                        
                        <button onClick={() => props.cadd(props.d)} className="btn w-100 btn-primary position-absolute bottom-0 end-0">add to cart++</button>
                   
                </div>
            </div>

        </>
    );
};

export default Card