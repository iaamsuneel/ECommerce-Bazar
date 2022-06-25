
import React, { useEffect } from "react";
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux';
import { getBrandsAction, getCategoryAction, getHomeDataAction, getHomePageAction, getMyProfileAction } from '../store/actions/actions';
import { Link } from "react-router-dom";
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
};
const Home = () => {
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state.homeReducer?.homeData)
    const brandData = useSelector((state) => state.brandReducer?.brandData)
    // const categoryData = useSelector((state) => state.categoryReducer?.categoryData)
    const homeCategoryData = useSelector((state) => state.homeDataReducer?.homeCategoryData)
    console.log('HomeData', homeData)
    console.log('BrandsData', brandData);
    // console.log("categoryData", categoryData)
    console.log('homeCategoryData', homeCategoryData)
    useEffect(() => {
        getHomePageAction(dispatch);
        getBrandsAction(dispatch)
        getCategoryAction(dispatch)
        getMyProfileAction(dispatch)
    }, [dispatch])
    useEffect(() => {
        homeData?.forEach(element => {
            getHomeDataAction(dispatch, { block_name: element.block_name, id: element._id })
        });

    }, [homeData, dispatch])
    /*  homeData?.forEach(element => {
         getHomeDataAction(dispatch, { block_name: element.block_name, id: element._id })
     }); */
    return (
        <div>
            {/*  <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
                {
                    categoryData ? categoryData.data.map((e, index) => {
                        return <div key={index}>
                            <li>
                                <Link to={`/${e.name}`}>{e.name}</Link>
                            </li>
                        </div>
                    }) : null
                }</ul> */}
            <div className="trends-list">
                <Slider {...settings}>
                    {
                        brandData ? brandData.data.map((e, index) => {
                            return <div className="trend-gallery" key={index}>
                                <Link to="/" className="trend-img">

                                    <img style={{ width: '100px' }} src={e.mobilebrandlogo} alt="brand" />
                                </Link>
                                <strong>{e.name}</strong>
                            </div>
                        }) : null
                    }
                </Slider>
            </div>
        </div>
    )

}
export default Home;