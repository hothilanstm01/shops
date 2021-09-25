import React, { useState } from 'react';
import styled from 'styled-components';
import { removeFormCart } from './cartSlide';
import { useDispatch, useSelector } from 'react-redux';



const ItemCart = (props) => {
  const {item} = props;
  const dispatch = useDispatch();


  const remove = (id)=>{
    const action = removeFormCart(id);
    console.log(action);
    dispatch(action)

}

    return (
    
        <BoxContent className="cart-it">
                             
                                <td className="product-remove">
                                    <span  className="remove" aria-label="Remove this item" data-product_id="1208" data-product_sku="987-1-1-1" onClick={()=>{remove(item.id)}}>×</span> 
                                </td>
                                <td className="product-thumbnail">
                                  <a href="">
                                    <img width="115" height="142" src={`../img/${item.product.urlhinh}`} className="img" alt="d" loading="lazy"/>
                                  </a> 
                                </td>
                                <td className="product-name" data-title="Product">
                                  <a href="">{item.product.name}</a>
                                </td>
                                <td className="product-price" data-title="Price">
                                  <span className="amount">
                                    
                                    {item.product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                  </span> 
                                </td>
                                <td className="product-quantity" data-title="Quantity">
                                  <div className="quantity">
                                    <span className="quantity-label">{item.quantity}</span>
                                  </div> 
                                </td>
                                <td className="product-subtotal" data-title="Total">
                                  <span className="amount">
                                    
                                        {(item.quantity*item.product.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}  
                                  </span> 
                                </td>

        </BoxContent>
      );
    }

    const BoxContent = styled.tr`

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
        
        .cart-it{
          border-bottom: 1px solid #e1e1e1;
        }  
    `
    
    export default ItemCart;