import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'swiper/components/navigation/navigation.min.css';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    EffectCoverflow, Navigation, Pagination
} from 'swiper/core';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Header from '../header';
import ItemProduct from '../products/component/itemProduct';




SwiperCore.use([ EffectCoverflow,Pagination,Navigation]);

const  Home = (props) => {
    const {item} = props;
    const [like, setlike] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleClickLike = ()=>{
        setlike(!like);
      }
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    const [product,setproduct] = useState([])

 
  
    useEffect(() => {
     const  url="https://60feb346257411001707873b.mockapi.io/api/";

     const fetchAllProduct =async() =>{
        const res = await fetch(url+ "/products");
        const data = await res.json();
        setproduct(data);
     }

     fetchAllProduct();
     },[])

  console.log(product);
  console.log(props.nav);
    return(
        <BoxContent >
            
            <audio src="./hylt.mp3" autoPlay loop id="player"></audio>
            
            
            <Content>
               
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 120,
                "stretch": 0,
                "depth": 2100,
                "modifier": 1,
                "slideShadows": true
                }}
               
                
                pagination={false} navigation className="mySwiper">
                    <Header nav={props.nav}/>
                <SwiperSlide className="slide-bg">
                    <div className="overlay hmoov"></div>
                    <div className="container">
                        {/* <Header className="header"/> */}
                        <Body>
                       
                            <div className="container-inner ">
                                <div className="section-decor"></div>
                                <div className="content-holder">
                                    <div className="about">
                                        <h3>V??? Ch??ng T??i</h3>
                                        <h4> N??ng cao ch???t l?????ng cu???c s???ng c???a ng?????i Vi???t</h4>
                                        <p>Ch??ng t??i cam k???t ????ng g??p v??o s??? th???nh v?????ng c???a Vi???t Nam v?? n??ng cao ch???t l?????ng cu???c s???ng c???a ng?????i Vi???t.
                                        Ch??ng t??i l??m cho cu???c s???ng kh??ch h??ng d??? d??ng h??n nh??? v??o ?????i ng?? nh??n vi??n nhi???t huy???t, ???????c trao quy???n t????ng t??c hi???u qu??? tr??n n???n t???ng h???p t??c v?? t?? duy kh???i nghi???p.
                                        Kh??ng gian mua s???m hi???n ?????i, ti???n nghi.?????i ng?? nh??n vi??n chuy??n nghi???p, l???ch s???, lu??n bi???t l???ng nghe v?? h??? tr??? kh??ch h??ng.H??ng h??a ch??nh h??ng, uy t??n, ??a d???ng.Ch??nh s??ch d???ch v??? kh??ch h??ng t???n t??m.
                                        K??nh mua s???m Online hi???n ?????i, d??? d??ng, thu???n ti???n, ph???c v??? 24/24.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </Body>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-bg">
                    <div className="overlay hmoov"></div>
                    <div className="container">
                    {/* <Header className="header"/> */}
                        <Body>
                       
                            <div className="container-inner">
                                <div className="section-decor"></div>
                                <div className="content-holder width">
                                    <div className="about">
                                        <h3>S???n ph???m n???i b???t</h3>
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
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="container-inner container-inner-right ">
                                <div className="container-inner section-decor-right"></div>
                                <div className="container-inner content-holder-right">
                                    <div className="about">
                                        <h3>S???n ph???m m???i</h3>
                                        <ListSp>
                                        {product.length ===0 ?
                                            <div className="loading">
                                                <LinearProgress />
                                            </div>
                                                :
                                                product.filter(product => product.moi === 1).map(item=>(
                                                    <ItemProduct data={item}>
                            
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
                               
                            </div>
                            
                            
                        </Body>
                    
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="slide-bg">
                    <div className="overlay hmoov"></div>
                    <div className="container">
                        {/* <Header className="header"/> */}
                        <Body>
                       
                            <div className="container-inner">
                                <div className="section-decor"></div>
                                <div className="content-holder">
                                    <div className="contact">
                                        <h3>Li??n h???</h3>
                                        <p> M???i v???n ????? th???c m???c vui l??ng li??n h??? v???i ch??ng t??i qua :</p>
                                        <div className="contact-info-holder">
                                            <ul className="contact-info">
                                                <li>
                                                    <a>
                                                        <i className="fa fa-phone"></i>
                                                        +1 (000) 123456
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                    <i class="fad fa-envelope"></i>
                                                        yourmail@yuormail.com 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <i className="fa fa-globe"></i>
                                                        &copy;hothilan
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </Body>
                    </div>
                </SwiperSlide>

                </Swiper>
            </Content>
        </BoxContent>
    )
}
const BoxContent = styled.section`
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
    height: 100%;
    margin: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
    color: #fff;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    background: #484F55;
`;
const Content = styled.div`
.swiper-container {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: relative;
    cursor: -webkit-grab;
}
.swiper-slide:nth-child(1){
    background: url("./1.jpg");
}
.swiper-slide:nth-child(2){
    background: url("./2.jpg");
}
.swiper-slide:nth-child(3){
    background: url("./3.jpg");
}
.slide-bg{
    background-size: cover !important;
    background-attachment: scroll!important;
}
.swiper-wrapper{
    width: 4476px;
    height: 720px;
    transition-duration: 1500ms!important;
}
.swiper-slide {
    position: relative;
    width: 1492px;
    height: 720px;
    transition-duration: 1500ms!important; 
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: #292929;
        opacity: 0.6;
    }
    .hmoov:before {
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        -moz-box-shadow: inset 0 0 0 44px #5F6061;
        -webkit-box-shadow: inset 0 0 0 44px #5F6061;
        box-shadow: inset 0 0 0 44px #5F6061;
        opacity:0.7;
    }
    .container{
        float: left;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 6;
        overflow: auto;
    }
}
.swiper-slide img {
    display: block;
    width: 100%;
}
.swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 50%;
    margin-top: -22px;
    line-height: 44px;
    color: #fff;
    font-size: 26px;
    width: 44px;
    height: 44px;
    z-index: 5;
}
.swiper-button-next{
    right: 52px;
}
.swiper-button-prev{
    left: 52px;
}

`
const Body = styled.section`
    width: 80%;
    margin: 0 auto;
    position: relative;
    padding-top: 180px;
    z-index: 1 ;
    .container-inner-right {
        float: right;
        width: 100%;
        position: relative;
        z-index: 7;
    }
    .container-inner{
        float: left;
        width: 100%;
        position: relative;
        z-index: 7;
        .section-decor-right{
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background: rgba(255,255,255,0.21);
            &:before{
                content:'';
                position:absolute;
                top:43px;
                left:-2px;
                width:5px;
                height:50px;
                background:#fff;
            }
        }
        .section-decor{
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 100%;
            background: rgba(255,255,255,0.21);
            
        }
        
        .section-decor:before {
            content:'';
            position:absolute;
            top:43px;
            left:-2px;
            width:5px;
            height:50px;
            background:#fff;
        }
        .width{max-width:100%!important;    width: 90%;}
        .content-holder-right {
            float:right;
            max-width:100%;
            width: 90%;
            position:relative;
            padding-right:50px;
            .transition{
                -webkit-transition: all 500ms linear;
                -moz-transition: all 500ms linear;
                -o-transition: all 500ms linear;
                -ms-transition: all 500ms linear;
                transition: all 500ms linear;
            }
            .hide-con-info {
                position:relative;
                top:0;
            }
            
            .about{
                h3{
                    font-size:32px;
                    font-weight:500;
                    margin:40px 0 30px;
                    text-transform:uppercase;
                    text-align:right;
                    position:relative;
                }
                
                
            }
        }
        .content-holder {
            float:left;
            max-width:600px;
            position:relative;
            padding-left:50px;
            .transition{
                -webkit-transition: all 500ms linear;
                -moz-transition: all 500ms linear;
                -o-transition: all 500ms linear;
                -ms-transition: all 500ms linear;
                transition: all 500ms linear;
            }
            .hide-con-info {
                position:relative;
                top:0;
            }
            .contact{
                p{
                    float:left;
                    text-align:left;
                    max-width:600px;
                    padding-bottom:20px;
                    margin: 0;
                }
                h3{
                    font-size:32px;
                    font-weight:500;
                    margin:40px 0 30px;
                    text-transform:uppercase;
                    text-align:left;
                    position:relative;
                }
                .contact-info-holder {
                    max-width:600px;
                }
                .contact-info li , .contact-info {
                    width:100%;
                    float:left;
                    padding:10px 0;
                }
                .contact-info li a {
                    float:left;
                    text-align:left;
                    position:relative;
                    color:#fff;
                }
                .contact-info li a i {
                    margin-right:20px;
                    font-size:22px;
                    line-height:50px;
                    color:#fff;
                    text-align:center;
                }
            }
            .about{
                h3{
                    font-size:32px;
                    font-weight:500;
                    margin:40px 0 30px;
                    text-transform:uppercase;
                    text-align:left;
                    position:relative;
                }
                h4{
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    text-align: left;
                    margin-bottom: 20px;
                }
                p{
                    float: left;
                    text-align: left;
                    max-width: 600px;
                    padding-bottom: 20px;
                    font-size: 13px;
	                line-height: 22px;
                }
            }
        }
    }
`;
const ListSp = styled.div`
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    .item .img .info{
        bottom: 0;
    }
    .loading{
        position: absolute; top:50%;
        width: 100%;
        height: 100px;
    }
   
`
export default Home;