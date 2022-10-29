import React from 'react'
import { useState} from 'react'
import { useDispatch } from 'react-redux';
import  { addToCart } from '../features/cartSlice'
import { useNavigate } from 'react-router';

import { useGetAllProductsQuery } from '../features/productsApi';
const Products = () => {
    const { data, error, isLoading } = useGetAllProductsQuery()
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const [filter, setFilter] = useState(data);

const handleAddToCart = (Product) =>{
dispatch(addToCart(Product))
navigate("/Cart")
}


    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-3" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-3" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-3" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-3" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-3" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {filter?.map((Product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={Product.id} >
                                    <img src={Product.image} className="card-img-top" alt={Product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{Product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${Product.price}</p>
                                        <button onClick={() =>handleAddToCart(Product) } className="btn btn-outline-dark me-3" >Buy Now</button>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5 ">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1><hr />

                    </div>

                </div>

                <div className="row justify-cotent-center">
                    {<ShowProducts />}
                </div>
            </div>
        </div>
    );

    //     return (
    //         <div className="home-container">
    //             {isLoading ? (<p>Loading...</p>) : error ? (<p>An error Occured...</p>)
    //                 : (
    //                     <>
    //                         <h2>Latest Products</h2>
    //                         <div className="products">
    //                             {data?.map(product => <div key={product.id} className="product">
    //                                 <h3>{product.name}</h3>
    //                                 <img src={product.image} alt={product.title} />
    //                                 <div className="details">
    //                                     <span>{product.title}</span>
    //                                     <span className="price">${product.price}</span>
    //                                 </div>
    //                                 <button>Add to cart</button>
    //                             </div>)}
    //                         </div>
    //                     </>
    //                 )}
    //         </div>
    //     );
    // }
}
export default Products;