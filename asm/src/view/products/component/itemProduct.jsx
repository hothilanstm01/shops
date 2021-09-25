import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import Header from '../../header';
import Modal from '../../modal/modal';
import { GlobalStyle } from '../../../globalStyles';
import {useCart} from 'react-use-cart'
import { addtoCart } from '../../cart/cartSlide';
import { useDispatch } from 'react-redux';



const BoxContent = styled.div`
       
        width: calc(80%/3);
        margin: 30px;
        font-size: 30px;
        text-align: center;
        .modal{
            position: fixed;
            z-index: 2;

        }
       .item{
        position: relative;
        z-index: 1;
        .title{
            text-align: left;
            padding: 10px;
            padding-left: 20px;
            margin: 0;
           
               a{
                    font-family: "Montserrat", sans-serif;
                    /* color: #151515; */
                    text-decoration:none;
                    color: #fff;
                    font-size: 1.7rem;
                    line-height:22px;
               }
           }
        .boxcart{
            display: flex;
            flex-wrap: nowrap;
            position: relative;
            width: 100%;
            padding-left: 20px;
            padding-bottom: 10px;
            color: #999;
            font-family: "Montserrat", sans-serif;
            
            .addcart{
                position: absolute;
                left: -20px;
                opacity: 0;
                transform :translateX(0%);
                cursor: pointer;
               
                button{
                    border: 0;
                    background: none;
                    color: #999;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 1rem;
                }
            }
            .price{
                font-size: 1rem;
                opacity: 1;
                transition: all .3s ease;
                will-change: transform;
                transform :translateX(0%);
            }

        }
        
        &:hover {
            .img{
                .info{
                    transform :translateY(0%);
                    
                }
            }

            .boxcart{

                .addcart{
                   opacity: 1;
                   transition: all .4s ease;
                   left: 20px;
                   transform :translateX(0%);
                }

                .price{
                    opacity: 0;
                    transform :translateX(20%);
                }
            }
           
        }
        
        .img{
            position: relative;
            overflow:hidden;

            img{
                width: 100%;
            }
            .info{
                position: absolute;
                bottom: 10px;
                left: 25%;
                transform :translateY(100%);
                transition: all .4s linear;
                
                .text{
                    display: inline-block;
                    height: 25px;
                    button{
                        border: 0;
                        background-color: #151515;
                        color: #fff;
                        padding: 1px 15px 0;
                        font-size: 10px;
                        font-weight: 700;
                        line-height: 25px;
                        text-transform: uppercase;
                        letter-spacing: 2px; 
                    }
                    
                }
                .like{
                    width: 26px;
                    text-align: center;
                    display: inline-block;
                    button{
                        border: 0;
                        width: 26px;
                        height: 25px;
                        margin: 0;
                        background-color: #555;
                        margin: 0px;
                        font-size: 11px;
                        color: #fff;
                        cursor: pointer;

                        i{
                            &.red{
                                color: red;
                            }
                        }
                    }
                }
            }
        }
       }
            
        
`

const ItemProduct = (props) => {
    const {data} = props;
    const [like, setlike] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const {addItem} = useCart();

    const handleClickLike = ()=>{
        setlike(!like);
      }
    const openModal = () => {
        setShowModal(prev => !prev);
    };
    const [cart, setCart] = useState([]);

    const dispatch = useDispatch();


    const Addcart = (item,quantity)=>{
        const action = addtoCart({
            id:item.id,
            product:item,
            quantity:quantity
        });
        console.log(action);
        dispatch(action)
        }
    

    // const addToCart = (product) => {
    //     console.log(cart.quantity);
    //     if(cart.quantity===undefined){
    //         cart.quantity=1;
    //         console.log(1);
    //         setCart([...cart, product]);
    //     }
    //     if(cart.quantity>0){
    //         product.quantity=cart.quantity+1;
    //         setCart([...cart, product]);
    //     }
    //     console.log(cart);
    // }

    return (
        <BoxContent>
            <div className="item">
                      <div className="img">
                          <Link to={`/shop/${data.id}`}>
                              <img src={`../../img/${data.urlhinh}`} alt="" />
                          </Link>
                          
                          <div className="info">
                              <div className="text">
                                  <button onClick={openModal}> Xem Thêm</button>
                                  
                              </div>
                              <div className="like">
                              {like ?
                                    <button onClick={handleClickLike}><i class="fal fa-check"></i></button>
                                    :
                                    <button onClick={handleClickLike}><i class="fas fa-heart "></i></button>
                                }
                              </div>
                          </div>
                      </div>
                      <h5 className="title">
                              <Link to={`/shop/${data.id}`}>{data.name}</Link>
                          </h5>
                      <div className="boxcart">
                      
                      <div className="addcart">
                          <Link to='/cart'>
                          <button onClick={() => Addcart(data,1)} >
                              addtocart
                          </button></Link>
                      </div>
                      <div className="price">{data.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                  </div>
                      
                    </div>

                    <div className="modal">
                        <Modal data={data} className="modal" showModal={showModal} setShowModal={setShowModal}/>
                        
                    </div>
              
        </BoxContent>
    )
        
    
}
export default ItemProduct;