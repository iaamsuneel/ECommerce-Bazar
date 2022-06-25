import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
    /*  console.log("itemmmmm", item) */
    return (<>

        <div className="plp-wrap" style={{ float: 'right' }}>
            <div className="plp-product-screen">
                <div className="costume-box">
                    <div className="costume-block">
                        <div className="costume-action"><span className="wish"><i className="icon-wishlist "></i></span></div>
                        <Link
                            className="product-pack"
                            to={/* `/product/${item._id}` */ `/product/${item.categoryData.slug}/${item._id}/?cat=${item.categoryData.slug}`} ><img style={{ width: '100px' }} src={item.Image[0].original} />
                        </Link>
                    </div>
                    <div className="costume-info my-list">
                        <div className="product-name"><strong className="prod-name">{item.Title}</strong>
                            <div className="free-ship-wrap"></div>
                        </div>
                        <div className="brand"> {item.brandData.name}</div>
                        {/*   {console.log("brandData",item.brandData.name )} */}
                        <p>
                            <div className="costs-wrap"><span className="buy-info">{item.Price.current_store_price.$numberDecimal}</span><span className="old-price">{item.Price.sell_price.$numberDecimal}</span>
                            </div><span className="discount">11% OFF</span>
                        </p>
                    </div>

                </div>

            </div>
        </div>





    </>
    )
}
export default ProductCard;