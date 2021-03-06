import React from 'react'
import styled from 'styled-components';
import Header from '../header';


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
        .checkout{
            padding-top: 100px;
            width: 100%;
            z-index: 100;
            position: relative;
            h2{
                text-align: left;
                color: #151515;
                width: 1300px;
                margin: 0 auto;
        
            }
        }
    }
`
const Listcheckout = styled.div`
    padding: 0!important;
    width: 1300px;
    margin: 0 auto;
    text-align: left;
    color: #151515;
    display: flex;
    .text{
        padding-left:100px;
        p{
            line-height: 2rem;
        }
    }
    form{
        
        width: 55%;
        margin: 20px 0;
        .col{
            margin-top: 40px;
        }
        .col1{
            display: flex;
            margin-bottom: 20px;
            label{
                font-size: 14px;
            }
            .name{
                width: 50%;
                padding-right: 20px;
                input{
                    margin-top: 10px;
                    width: 100%;
                    height: 45px;
                    background: none;
                    border: 1px solid #151515;
                    outline: none;
                    padding: 10px 20px;
                }
            }
            .thongtin{
                width: 40%;
            }
            .email{
                width: 100%;
            }
            .dathang{
                width: 30%;
                input{
                    line-height: 20px;
                    letter-spacing: .13em;
                    font-weight: 600;
                    text-transform: uppercase;
                    box-sizing: border-box;
                    color: #fff;
                    background-color: #151515;
                }
            }
        }
    }
`

function Checkout() {
    return (
        <BoxContent>
            <div className="container">
                <Header/>
                <Body>
                    <div className="container-inner">
                        <div className="checkout">
                        <h2>Chi ti???t thanh to??n</h2>
                            <Listcheckout>
                                
                                <form >
                                    <div className="col1">
                                        <div className="name">
                                            <label htmlFor="">T??n*</label><br />
                                            <input type="text"  />
                                        </div>
                                        <div className="name">
                                            <label htmlFor="">H???*</label><br />
                                            <input type="text"  />
                                        </div>
                                       
                                    </div>
                                    <div className="col1">
                                        <div className="name">
                                            <label htmlFor="">S??? ??i???n tho???i*</label><br />
                                            <input type="text"  />
                                        </div>
                                        <div className="name">
                                            <label htmlFor="">?????a ch???*</label><br />
                                            <input type="text"  />
                                        </div>
                                        
                                    </div>
                                    <div className="col1">
                                        <div className="name email">
                                            <label htmlFor="">?????a ch??? email*</label><br />
                                           <input type="email" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="col1">
                                        <div className="name email">
                                            <label htmlFor="">M?? b??u/Zip</label><br />
                                           <input type="text" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="col1 col">
                                        <div className="name dathang">
                                            
                                           <input type="submit" value="?????t h??ng" />
                                        </div>
                                    </div>
                                </form>
                                <div className="text">
                                    <h3> Vui l??ng ki???m tra th??ng tin tr?????c khi thanh to??n</h3>
                                    <p>* Uy t??n h??ng ?????u</p> 
                                    <p>* Ch???t l?????ng s???n ph???m cao </p>
                                    <p>* Ship COD to??n qu???c </p>
                                    <p>* ?????i tr??? s???n ph???m d??? d??ng</p>
                                </div>
                            </Listcheckout>
                        </div>
                    </div>
                </Body>
            </div>
        </BoxContent>
    )
    
}

export default Checkout;
