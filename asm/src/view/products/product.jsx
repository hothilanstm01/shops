import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../header';
import { Link, NavLink } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import ItemProduct from './component/itemProduct';

const Product = (props) => {
  const [product,setproduct] = useState([])

 
  
  useEffect(() => {
     const  url="https://60feb346257411001707873b.mockapi.io/api/";

     const fetchAllProduct =async() =>{
        const res = await fetch(url + "/products");
        const data = await res.json();
        setproduct(data);
     }

     fetchAllProduct();
  },[])

  console.log(product);

    return (
        <BoxContent>
          
         <div className="container">
         <Header nav={props.nav} />
         <Body>
           <div className="container-inner">
            <div className="list-product">
                
                <h3>Sản phẩm</h3>
                    <ListSp>
                    {product.length ===0 ?
                    <div className="loading">
                        <LinearProgress />
                    </div>
                        :
                        product.map((item,idx)=>(
                        <ItemProduct data={item} key={idx} >
                            
                        </ItemProduct>
                        ))
                        
                    }
                    
                        {/* <div className="item">
                            <div className="img">
                                <a href="/">
                                    <img src="./img/1.jpg" alt="" />
                                </a>
                                
                                <div className="info">
                                    <div className="text">
                                        <button onClick={openModal}> QUICK LOOK</button>
                                        
                                    </div>
                                    <div className="like">
                                        <button><i class="fas fa-heart"></i></button>
                                    </div>
                                </div>
                            </div>
                            <h5 className="title">
                                    <a href="/">Jisoo</a>
                                </h5>
                            <div className="boxcart">
                                
                                <div className="addcart">
                                    <a href="/">
                                        addtocart
                                    </a>
                                </div>
                                <div className="price">$300</div>
                            </div>
                                
                        </div>
                        <div className="item">3</div>
                        <div className="item">4</div>
                        <div className="item">5</div>
                        <div className="item">6</div> */}
                        
                    </ListSp>
    
            </div>
            
           </div>
            
            </Body>
         
         </div>
        
        </BoxContent>
        
      );
    }
    const BoxContent = styled.div`
    position: relative;
    width: 1492px;
    height: 720px;
    background: rgba(0, 0, 0,0.6);
    font-family: "Montserrat", sans-serif;
        
        .container{
            float: left;
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 6;
            overflow: auto;
          
          .list-product{
              position: relative;
              width: 80%;
              margin: 0 auto;
              padding-top: 80px;
              h3{
                
                font-size: 19px;
                text-align: left;
                padding-left: 30px;
                color: #151515
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
    }
    `
    const ListSp = styled.div`
    display: flex;
    padding: 10px;
    flex-wrap: wrap;

    .loading{
    position: absolute; top:50%;
      width: 100%;
      height: 100px;
    }
    
 
`
   
    
    export default Product;