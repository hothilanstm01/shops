import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../header';
import ItemCart from './itemCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemTotalSelector } from './selector';



const Cart = (props) => {

    const totalCart = useSelector(cartItemTotalSelector);

    const listCart = useSelector(state => state.cart);
    console.log(listCart.cartItem);

    return (
    
        <BoxContent>
         <div className="container">
            <Header></Header>
            <Body>
              <div className="container-inner">
                <div className="cart">
                  <ListCart>
                    <div className="cart-item">
                      <div className="item">
                        <form className="cart-form">
                            <h4>Giỏ hàng</h4>
                            <Table>
                              <thead>
                                <tr>
                                  <th className="product-remove">&nbsp;</th>
                                  <th className="product-thumbnail">&nbsp;</th>
                                  <th className="product-name">Product</th>
                                  <th className="product-price">Price</th>
                                  <th className="product-quantity">Quantity</th>
                                  <th className="product-subtotal">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                  {
                                   listCart.cartItem.length === 0?
                                    "giỏ hàng của bạn chưa có sản phẩm"
                                    :
                                    listCart.cartItem.map(item=>(
                                      <ItemCart item={item}></ItemCart>
                                    ))
                                  }
                              </tbody>
                            </Table>
                        </form>
                        <div className="cart-collaterals">
                            <CartTotal>
                            <h2>Tổng giỏ hàng</h2>
                              <table cellspacing="0" className="shop_table">
                                <tbody>
                                  
                                  <tr className="order-total">
                                    <th>Tổng tiền</th>
                                    <td data-title="Total">
                                      <strong>
                                        <span className="amount">
                                          
                                          {totalCart.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                        </span>
                                      </strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="checkout">
                              <Link exact to="/checkout" className="checkout-button">
                                Mua ngay
                              </Link>
                              </div>
                        
                            </CartTotal>
                        </div>
                      </div>
                      
                    </div>
                  </ListCart>
                </div>
              </div>
            </Body>
         </div>
            

        </BoxContent>
      );
    }
    const CartTotal = styled.div`
      margin: 0 0 13px;
      h2{
        position: relative;
        display: block;
        font-size: 19px;
        line-height: 36px;
        margin-top: 0;
        margin-bottom: 30px;
        margin: 20px 0;
        color: #151515;
        text-align: left;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
        vertical-align: middle;
        width: 100%;
        border: none;
        .cart-subtotal {
          border: 0;
          th {
            padding: 10px 0;
            text-align: left;
            vertical-align: top;
            padding-right: 30px;
            border: 0;
            font-size: 15px;
            color: #151515;
          }
          td {
              text-align: right;
              font-size: 14px;
              font-family: "Montserrat",sans-serif;
              font-weight: 400;
              span{
                color: #535353;
              }
            }
        }
        .order-total{
          border: 0;
          border-top: 1px solid #e1e1e1;
          th{
            padding-top: 23px;
            padding-bottom: 35px;
            padding-right: 30px;
            border: 0;
            font-size: 15px;
            color: #151515;
            padding: 10px 0;
            text-align: left;
            vertical-align: top;
          }
          td{
            font-size: 25px;
            color: #151515;
            text-align: right;
            font-weight: 400;
            padding-top: 23px;
            padding-bottom: 35px;
          }
        }
      }
      .checkout{
        a{
          color: #fff;
          background-color: #2c2c2c;
          width: 100%;
          text-align: center;
          height: 50px;
          line-height: 35px;
          padding: 0;
          font-family: inherit;
          position: relative;
          display: inline-block;
          vertical-align: middle;
         
          outline: 0;
          
          letter-spacing: .13em;
          font-weight: 600;
          text-transform: uppercase;
          box-sizing: border-box;
          margin: 0;
          font-size: 12px;
          
          border: 2px solid transparent;
          padding: 7px 41px;
          white-space: nowrap;
          cursor: pointer;
          z-index: 3;
          border-radius: 0;
        }
      }
    `
    const Table = styled.table`
      border-collapse: collapse;
      border-spacing: 0;
      vertical-align: middle;
      width: 100%;
      border: none;
      thead{
        display: none;
        tr{
          border: 1px solid #e1e1e1;
          th{
            border: 0;
            padding: 5px 7px;
            text-align: center;
          }
        }

      }
      tbody{
        tr{
          border: 0;
          td{
            padding: 23px 0;
            vertical-align: middle;
            text-align: center;
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
                display: inline-block;
                vertical-align: middle;
                color: #999;
                background-color: transparent;
                border: 0;
                text-align: center;
                box-sizing: border-box;
              }
              input{
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
              }
              .left, .right{
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
            }
          }
          .product-subtotal {
              font-weight: 600;
              font-size: 13px;
              font-family: "Montserrat",sans-serif;
          }
          .product-price{
            font-size: 13px;
            font-family: "Montserrat",sans-serif;
          }
          .product-name {
              text-align: left;
              padding-left: 20px;
              a{
                display: inline-block;
                font-size: 15px;
                line-height: 18px;
                font-weight: 700;
                color: #151515;
              }
          }
          .product-thumbnail {
              width: 92px;
              padding-left: 8px;
              padding-right: 8px;
              a{
                display: block;
                .img{
                  display: block;
                  max-width: 100%;
                  height: auto;
                }
              }
          }
          .product-remove{
            text-align: left;
            a{
              color: #999;
              display: inline-block;
              vertical-align: middle;
             
              color: inherit;
              font-family: ElegantIcons;
              font-size: 24px;
              font-style: normal;
              font-weight: 400;
              font-variant: normal;
              text-transform: none;
              text-rendering: auto;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
            }
          }
        }
        .cart-it{
          border-bottom: 1px solid #e1e1e1;
        }
      }
    `
    const BoxContent = styled.div`
        position: relative;
        width: 1492px;
        height: 720px;
   
        background: #919191;
        font-family: "Montserrat", sans-serif;
        .container{
            float: left;
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 6;
            overflow: auto;
          
          
        }
    `
    const ListCart = styled.div`
      padding-top: 80px;
      margin-left: -15px;
      margin-right: -15px;
      .cart-item{
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
        box-sizing: border-box;
        .item{
          position: relative;
          display: inline-block;
          width: 100%;
          vertical-align: middle;
          .cart-form{
              float: left;
              margin-bottom: 72px;
              width: 65%;
              h4{
                font-size: 19px;
                text-align: left;
              }
          }
          .cart-collaterals{
            float: right;
            margin-bottom: 100px;
            width: 30%;
            padding: 37px;
            box-sizing: border-box;
           border: 1px solid #eaeaea;
          }
        }
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
            .cart{
              margin: 0 auto;
              width: 1300px;
              
            }
        }
    `
    
    export default Cart;