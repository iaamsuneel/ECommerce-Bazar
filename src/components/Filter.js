
import { useDispatch, useSelector } from "react-redux";
import { getAttributeByIdAction, GetProductAction } from "../store/actions/actions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Filter = () => {
    const { slug } = useParams()
    const [checkedUser, setCheckedUSer] = useState([])
    const [checkCondtion, setCheckCondtion] = useState([])

    const dispatch = useDispatch()
    const productListData = useSelector((state) => state.productListReducer?.productListData)
    const attributeByCatData = useSelector((state) => state.attributeCatByIdReducer?.attributeByCatData)
    console.log("attributeByCatData=", attributeByCatData)
    /* const { slug } = useParams() */
    const FilterData = productListData?.FilterData
    const categoryId = productListData?.data[0]?.categoryData?._id
    useEffect(() => {
        getAttributeByIdAction(dispatch, { FilterData, browser_ip: '49.249.246.150', categoryId })
        // GetProductAction(dispatch, { brand: [brand_Id], category: [slug] })
    }, [productListData])
    const brand_Id = attributeByCatData?.brand ? attributeByCatData?.brand[0]._id : null
    // console.log('BrandId', brand_Id)
    // for Brand CheckBox 
    const checkBoxBrandFilter = (e) => {
        if (e.target.checked) {
            setCheckedUSer([...checkedUser, e.target.value])
        }
        else {
            setCheckedUSer(checkedUser.filter(id => id !== e.target.value));
        }
    }
    console.log("Iddd", checkedUser)
    useEffect(() => {
        GetProductAction(dispatch, { brand: [...checkedUser], category: [slug], condition: [...checkCondtion] })
    }, [checkedUser, checkCondtion])
    // for conditions Check Box 
    const checkBoxConditionFilter = (e) => {
        /*       console.log("Condtonsss", e.target.value) */
        if (e.target.checked) {
            setCheckCondtion([...checkCondtion, e.target.value])
        }
        else {
            setCheckCondtion(checkCondtion.filter(id => id !== e.target.value));
        }
    }
    console.log("conditions", checkCondtion)
    /* useEffect(() => {
        GetProductAction(dispatch, { brand: [...checkedUser], category: [slug] , brand:[...checkCondtion]})
    }, [checkCondtion]) */

    return (<>
        <div className="plp-category" style={{ width: '33', float: 'left' }}>
            <div className="category-attr-block cat-box"><button
                className="accordian-header fal fa-angle-right active">Category</button>
                <div className="accordian-panel expanded">

                    <div className="category-head"><a href="javascript:void(0)">{attributeByCatData?.category ? attributeByCatData?.category[0]?.CategoryName : null}</a>

                        <ul className="sub-cat-head">
                            {/* {
                                attributeByCatData ? attributeByCatData?.category?.map((item) => {
                                  return  <li className="sub-cat-act">{ item.SubCategory}</li>
                                }) : null
                            } */}
                            {
                                attributeByCatData ? attributeByCatData?.category?.map((item) => {
                                    console.log(item.Subcategory)
                                }) : null
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="brand-attr-block cat-box"><button className="accordian-header fal fa-angle-right active">brand</button>
                <div className="accordian-panel expanded">
                    <ul>
                        <div className="brand-input"><input type="text" placeholder="Search" className="brand-input" /></div>
                        {
                            attributeByCatData ? attributeByCatData?.brand?.map((item, index) => {
                                return <li key={index}><input value={item._id} onChange={checkBoxBrandFilter} type="checkbox" /><label>{item.name}</label></li>
                            }) : null
                        }
                        {/*  {console.log("Checked", checked)} */}

                    </ul>
                </div>
            </div>
            <div className="condition-attr-block cat-box"><button
                className="accordian-header fal fa-angle-right active">condition</button>
                <div className="accordian-panel expanded">
                    <ul>
                        {
                            attributeByCatData ? attributeByCatData?.condition?.map((item, index) => {
                                return <li key={index}><input type="checkbox" value={item.name} onChange={checkBoxConditionFilter} /><label>{item.name}</label></li>
                            }) : null
                        }
                    </ul>

                </div>
            </div>
            <div className="-attr-block cat-box"><button className="accordian-header fal fa-angle-right active">delivery</button>
                <div className="accordian-panel expanded"><label className="price-lable"><span><input name="priceOptions"
                    type="radio" /></span>
                    {
                        attributeByCatData ? attributeByCatData?.delivery?.map((item, index) => {
                            return <div 
                            
                            key={index} className="price-input">{item.value}</div>
                        }) : null
                    }
                </label></div>
            </div>
            <div className="price-sec"><button className="accordian-header fal fa-angle-right active">Price</button>
                <div className="accordian-panel expanded">
                    <div aria-disabled="false" className="input-range"><span
                        className="input-range__label input-range__label--min"><span
                            className="input-range__label-container">{attributeByCatData?.price?.minimum}</span></span>
                        <div className="input-range__track input-range__track--background">
                            <div className="input-range__track input-range__track--active" style={{ left: '0%', width: '100%' }}></div>
                            <span className="input-range__slider-container" style={{ position: 'absolute', left: '0%' }}><span
                                className="input-range__label input-range__label--value"><span
                                    className="input-range__label-container"></span></span>
                                <div aria-valuemax="4500" aria-valuemin="400" aria-valuenow="400"
                                    className="input-range__slider" draggable="false" role="slider" tabindex="0"></div>
                            </span><span className="input-range__slider-container" style={{ position: 'absolute', left: '100%' }}><span
                                className="input-range__label input-range__label--value"><span
                                    className="input-range__label-container">{attributeByCatData?.price?.maximum}</span></span>
                                <div aria-valuemax="4500" aria-valuemin="400" aria-valuenow="4500"
                                    className="input-range__slider" draggable="false" role="slider" tabindex="0"></div>
                            </span>
                        </div><span className="input-range__label input-range__label--max"><span
                            className="input-range__label-container">{attributeByCatData?.price?.maximum}</span></span>
                    </div>
                </div>
            </div>
            <div className="apply-buttons-wrap">
                <div className="header-sell apply">Apply</div>
                <div className="header-sell">Reset</div>
            </div>
        </div>


    </>
    )

}
export default Filter;