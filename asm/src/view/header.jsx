import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {useCart} from 'react-use-cart';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';
import { cartItemCountSelector } from './cart/selector';



const  Header = (props) => {

    const totalItems = useSelector(cartItemCountSelector);
    const [catalog,setcatalog] = useState([])
    const [user, Setuser] = useState(null);
  
    useEffect(() => {
        const  url="https://60feb346257411001707873b.mockapi.io/api/";
       
        const fetchAllCatalog =async() =>{
            const res = await fetch(url + "/catalogs");
            const data = await res.json();
            setcatalog(data);
        }

        fetchAllCatalog();

        const storage = localStorage.getItem('user');

        if(storage){
            Setuser(JSON.parse(storage))
        }else{
            localStorage.setItem('user', null);
        }
    },[])

    console.log(catalog.length);
    return(
        <BoxContent className={props.nav?"active":""}>
            <Logo>
                <div className="logo">
                    <Link to="/" alt="Home">
                        <img src="../../lg.png" alt="home"/>
                    </Link>
                </div>
            </Logo>
            <Right>
                <div className="menu">
                    <ul>
                        <li><NavLink exact to="/"><i class="fas fa-home"></i></NavLink></li>
                        <li>
                            <NavLink exact to="/shop"><i class="fas fa-briefcase"></i></NavLink>
                            <ul className="listmenu">
                                {
                                    catalog.length===0?
                                    <div className="loading">
                                        <LinearProgress />
                                    </div>
                                        :
                                        catalog.map((cata) => (
                                            <li><a href={`/shop/cata/${cata.id}`}>{cata.name}</a></li>
                                        ))
                                }
                                {/* <li><a href="/">Unique</a></li>
                                <li><a href="/">Fall/2017</a></li>
                                <li><a href="/">Bags</a></li>
                                <li><a href="/">Urque</a></li> */}
                            </ul>
                        </li>
                        <li><NavLink exact to="/cart"><i class="fas fa-cart-plus"></i>({totalItems})</NavLink></li>
                        
                        <li><NavLink exact to="/login">
                            {user ===null?
                                <i class="fas fa-sign-in-alt"></i>
                                :
                                <>
                                {user.name}
                                </>
                            }
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Right>
        </BoxContent>
    )
}
const BoxContent = styled.section`
    width: 100%;
    height: 100px;
    display: flex;
    &.active{
        background-color:#fff;
    }
`;
const Logo = styled.div`
    width: 15%;
    position: fixed;
    top: 40px;
    left: 60px;
    z-index: 10;
   .logo{
       width: 60%;
       a{
           img{
               width:100%;
           }
       }
   }
`;
const Right = styled.div`
    position: fixed;
    top: 40px;
    right: 60px;
    z-index: 10;
    ul{
       
        li{
            list-style: none;
            display: inline-block;
            padding: 20px 40px;
            position: relative;
            cursor: pointer;
            a{
                text-decoration: none;
                color: #fff;
                font-weight: bold;
                font-size: 1.8rem;
                font-family: 'Dancing Script', cursive;
                outline: none;
               
                &.active{
                    color: rgba(18, 27, 68, 1);
                    border-bottom: 5px solid rgba(18, 27, 68, 1);
                }
            }
            
            .listmenu{      
                height: 0;
                padding: 0;
                overflow: hidden;
                position: absolute;
                text-align: left;
                top: 100%;
                left:50%;
                width: 200px;
                transition: all .5s ease;
                background-color:rgba(250, 250, 245, 0.19);
                transform: translateX(-50%) ;
                z-index: 999;
                li{
                    padding: 20px;
                    display: flex;
                    flex-wrap: wrap;
                    &:hover {
                        background: rgba(250, 250, 245, 0.3);
                    }
                    a{
                        font-family: 'Roboto', sans-serif;
                        font-weight: normal;
                        color: #fff;
                        font-size: 13px;
                        outline:none;
                    }
                }
            }
            
        }
        li:hover .listmenu{
            height:350px;
           
        }
    }
` 
export default Header;