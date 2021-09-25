import LinearProgress from '@material-ui/core/LinearProgress';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header';
import ItemProduct from '../products/component/itemProduct';

const Cata = (props) => {
  const [product,setproduct] = useState([])
    const  match = useRouteMatch();
    const id  = match.params.id
    console.log(match.params.id);
  
  useEffect(() => {
     const  url="https://60feb346257411001707873b.mockapi.io/api/";

     const fetchAllProduct =async() =>{
        const res = await fetch(url + "/products");
        const data = await res.json();
        setproduct(data.filter(item=>(item.idLoai==id)));
     }

     fetchAllProduct();
  },[id])
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
                        product.map((item)=>(
                        <ItemProduct data={item} >
                            
                        </ItemProduct>
                        ))
                        
                    }
                    
                        
                        
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
   
    
    export default Cata;