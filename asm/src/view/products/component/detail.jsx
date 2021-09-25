import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import { addtoCart } from '../../cart/cartSlide';
import Header from '../../header';
import ItemProduct from './itemProduct';
import SimpleTabs from './tab';
import { useDispatch , useSelector } from 'react-redux';



const BoxContent = styled.section`
    position: relative;
    width: 1492px;
    height: 720px;
    background-color: #ccc;
    font-family: "Montserrat",sans-serif;
    font-weight: 300;
    font-size: 13px;
    color: #999;
    .container {
        float: left;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 6;
        overflow: auto;
    }
`
const Body = styled.div`
        width: 100%;
        margin: 0 auto;
        position: relative;
       
        z-index: 1 ;
    .container-inner{
        float: left;
        width: 100%;
        position: relative;
        z-index: 7;
        .detail{
            padding-top: 100px;
            width: 100%;
            z-index: 100;
            position: relative;
        }
    }
`
const ListDetail = styled.div`
    padding: 0!important;
    width: 1300px;
    margin: 0 auto;
`
const ProductDetail = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    float: none;
    margin: 0 0 5px;
`
const ProductContent = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    clear: both;
    height: 500px;
    
    .noidung{
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        height: 100%;
        .img{
            width: 50%;
            height: 100%;
            img{
                width: 100%;
                object-fit: cover;
                display: block;
                height: 100%;
            }
        }
        .content{
            
            width: 50%;
            padding: 0 0 0 100px;
            float: left;
            box-sizing: border-box;
            text-align: left;
            h4{
                display: block;
                margin: 0 0 13px;
                color: #151515;
                font-size: 19px;
            }
            .price{
                position: relative;
                display: block;
                margin: 0 0 39px;
                line-height: 1;
                color: #151515;
                font-size: 19px;
                font-family: "Montserrat",sans-serif;
                font-weight: 700;
            }
            .shortdes{
                position: relative;
                display: inline-block;
                width: 98%;
                vertical-align: middle;
                margin: 0 0 37px;
            }
            .cart{
            position: relative;
            display: inline-block;
            width: 100%;
            vertical-align: middle;
            margin: 0 0 39px;
            .quantity{
                position: relative;
                display: inline-block;
                vertical-align: middle;
                background-color: #fff;
                border: 1px solid #e1e1e1;
                box-sizing: border-box;
                line-height: 47px;
                height: 50px;
                padding: 0 10px 0 16px;
                margin: 0 -4px 0 0;
                .quantity-label{
                    margin-right: 50px;
                    font-size: 12px;
                    font-family: "Montserrat",sans-serif;
                    display: inline-block;
                    vertical-align: middle;
                    color: #999;
                    background-color: transparent;
                    border: 0;
                    text-align: center;
                    box-sizing: border-box;
                }
                .left{
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;
                    height: 22px;
                    line-height: 22px;
                    font-size: 10px;
                    color: #080808;
                    letter-spacing: .14em;
                    border-left: 0;
                    cursor: pointer;
                }
                .right{
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;
                    height: 22px;
                    line-height: 22px;
                    font-size: 10px;
                    color: #080808;
                    letter-spacing: .14em;
                    border-left: 0;
                    cursor: pointer;
                    background-color: transparent;
                    border: 0;
                    text-align: center;
                    box-sizing: border-box;
                }
                .input-text{
                    position: relative;
                    width: 27px;
                    padding: 0;
                    margin: 0;
                    font-family: inherit;
                    outline: 0;
                    display: inline-block;
                    vertical-align: middle;
                    color: #999;
                    background-color: transparent;
                    border: 0;
                    text-align: center;
                    box-sizing: border-box;
                    font-size: 12px;
                    line-height: 18px;
                }
            }
            .btn-add-cart{
                font-family: inherit;
                position: relative;
                padding: 7px 41px;
                height: 50px;
                line-height: 30px;
                display: inline-block;
                vertical-align: middle;
                width: auto;
                outline: 0;
                line-height: 20px;
                letter-spacing: .13em;
                font-weight: 600;
                text-transform: uppercase;
                box-sizing: border-box;
                margin: 0;
                font-size: 12px;
                color: #fff;
                background-color: #151515;
                border: 2px solid transparent;
                white-space: nowrap;
                cursor: pointer;
                z-index: 3;
                border-radius: 0;
            }
            }
            .share{
     
            position: relative;
            display: inline-block;
            width: 100%;
            vertical-align: middle;
            margin: 0 0 30px;
            .icons{
            display: flex;
            line-height: 25px;
                span{
                font-size: 12px;
                color: #151515;
                padding: 0 9px 0 0;
                font-weight: 700;
                font-family: "Montserrat",sans-serif;
                }
                .icon{
                display: table-cell;
                vertical-align: top;
                line-height: 22px;
                font-family: "Montserrat",sans-serif;
                ul{
                    list-style: none;
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    li{
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;
                    padding: 0;
                    margin: 0 13px 3px 0;
                    a{
                        font-size: 12px;
                        color: #151515;
                        span{
                        padding: 0;
                        }
                    }
                    }
                }
                }
            }
        }
        }
    }
`
const TabDetail = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    margin-top: 60px;
`
const Related = styled.section`
    margin: 56px 0 60px;
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    text-align: left;
    h2{
        display: block;
        margin: 32px 0 25px;
        font-size: 19px;
        line-height: 40px;
        letter-spacing: 0;
        color: #151515;
        font-weight: 700;
    }
`
const ListSp = styled.div`
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
`
const Detail = (props) => {
    const {details} = props;
    const [count,setCount]=useState(1);

    const upCount = ()=>{
        setCount(count+1)
    }

    const downCount = ()=>{
        setCount(count-1)
    }
    const [product,setproduct] = useState([]);
    const [detail,setdetail] = useState({});
    
    const match = useRouteMatch();
    useEffect(() => {
        const  url="https://60feb346257411001707873b.mockapi.io/api/products";

        const fetchProductDetail =async() =>{
            const res = await fetch(url+`/${match.params.id}`);
            const data = await res.json();
            setdetail(data);
         }
    
        fetchProductDetail ();

        const fetchAllProduct =async() =>{
           const res = await fetch(url);
           const data = await res.json();
           setproduct(data);
        }
   
        fetchAllProduct();
        },[match])

        const dispatch = useDispatch()
        const ListCart = useSelector(state => state.cart);
        console.log(ListCart.cartItem);

        const handleAddtocart =(detail)=>{
            console.log("SubmitCart",detail);
            const action = addtoCart({
                id:detail.id,
                product:detail,
                quantity:count
            });
            console.log(action);
            dispatch(action)
        }

        console.log(product);

        
    return (
        <BoxContent>
            <div className="container">
                <Header/>
                <Body>
                    <div className="container-inner">
                        <div className="detail">
                            <ListDetail>
                                <ProductDetail>
                                    <ProductContent>
                                        <div className="noidung">
                                            <div className="img">
                                                <img src={`../../img/${detail.urlhinh}`} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4>{detail.name}</h4>
                                                <div className="price">
                                                    ${detail.price}
                                                </div>
                                                <div className="shortdes">
                                                    {detail.short} 
                                                </div>
                                                <form className="cart" >
                                                    <div className="quantity">
                                                        <span className="quantity-label">Số lượng</span>
                                                        {count===0 ?
                                                        <span className="left"><i class="fal fa-arrow-left"></i></span>
                                                        :
                                                        <span className="left" onClick={downCount}><i class="fal fa-arrow-left"></i></span>
                                                        }
                                                        <input type="text" step="1" min="1" max="" name="quantity" value={count} title="Qty" className="input-text" ></input>
                                                        <span className="right" onClick={upCount}><i class="fal fa-arrow-right"></i></span>
                                                    </div>
                                                    <button type="button" onClick={() => handleAddtocart(detail)} className="btn-add-cart">Add to cart</button>
                                                </form>
                                                <div className="share">
                                                    <div className="icons">
                                                        <span>Share:</span>
                                                        <div className="icon">
                                                            <ul>
                                                            <li>
                                                                <a href="/">
                                                                <span>
                                                                    <i class="fab fa-facebook-f"></i>
                                                                </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                <span>
                                                                <i class="fab fa-twitter"></i>
                                                                </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                <span>
                                                                <i class="fab fa-google"></i>
                                                                </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                <span>
                                                                <i class="fab fa-pinterest"></i>
                                                                </span>
                                                                </a>
                                                            </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                            </div>
                                        </div>
                                    </ProductContent>
                                    <TabDetail>
                                        <SimpleTabs data={detail}/>
                                    </TabDetail>
                                    <Related>
                                        <h2>Sản phẩm liên quan</h2>
                                        <ListSp>
                                        {product.length ===0 ?
                                            <div className="loading">
                                                <LinearProgress />
                                            </div>
                                                :
                                                product.filter(product => product.hot === 1).map(item=>(
                                                    <ItemProduct data={item} >
                            
                                                    </ItemProduct>
                                                
                                                ))
                            
                                            } 
                                        </ListSp>
                                    </Related>
                                </ProductDetail>
                            </ListDetail>
                        </div>
                    </div>
                </Body>
            </div>
        </BoxContent>
    )
        
    
}
export default Detail;