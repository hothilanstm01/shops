import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../header';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "687773267943-a4esjabt6565d3gc78h2k8b922sft495.apps.googleusercontent.com";

const Login = () => {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const  [user,setuser]= useState({})

    const onLoginSuccess = (res) => {
        console.log('Đăng nhập thành công:', res.profileObj);
        const setjson=JSON.stringify( res.profileObj);
        localStorage.setItem("user", setjson);
        setuser(res.profileObj)
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Đăng nhập thất bại:', res);
    };

    const onSignoutSuccess = () => {
        alert("Đăng xuất?");
        console.clear();
        localStorage.setItem("user", null);
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
    
    console.log(user);  
    return (
    
        <BoxContent>
        
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <Box>
            <Header />
                <div className="square"></div>
                <div className="square"></div>
                <div className="square" ></div>
                <div className="square" ></div>
                <div className="square"></div>
                <div className="container">
                    <div className="form">
                        <h2> Login Form</h2>
                        <form>
                            <div className="inputBox">
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="inputBox">
                                <button type="button">Login</button>
                            </div>
                            <div className="input">
                            { showloginButton ?
                                <GoogleLogin className="login"
                                    clientId={clientId}
                                    buttonText="Đăng nhập"
                                    onSuccess={onLoginSuccess}
                                    onFailure={onLoginFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                /> : null}

                            { showlogoutButton ?
                                <GoogleLogout
                                    clientId={clientId}
                                    buttonText={user.name}
                                    onLogoutSuccess={onSignoutSuccess}
                                >
                                </GoogleLogout> : null
                            }
                            </div>
                        </form>
                    </div>
                </div>
            </Box>
        </BoxContent>
      );
    }
    const BoxContent = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height:100vh;
        background: linear-gradient(to bottom,rgb(148,53,185),rgb(39,58,226));
        .color{
            position: absolute;
            filter: blur(150px);
        }
        .color:nth-child(1){
            top: -350px;
            left: 50px;
            width: 800px;
            height: 800px;
            background: rgb(203,81,228);
        }
        .color:nth-child(2){
            top: 400px;
            left: -50px;
            width: 800px;
            height: 250px;
            background: rgb(14,89,187);
        }
        .color:nth-child(3){
            top: 200px;
            right: 100px;
            width: 600px;
            height: 400px;
            background: rgb(34,9,104);
        }
    `;
    const Box= styled.div`
        position: relative;
        .square {
            position: absolute;
            backdrop-filter: blur(5px);
            box-shadow: 5px 10px 10px 5px rgb(0, 0, 0, 0,30);
            border: 1px solid rgb(255,255,255,0.5);
            border-right: 1px solid rgb(255,255,255,0.2);
            border-bottom: 1px solid rgb(255,255,255,0.1);
            background: rgba(255,255,255,0.20);
            border-radius: 10px;
            animation: animate 10s linear infinite;
            color: rgb(255,255,255);
            &:nth-child(1){
                top: -50px;
                right:-60px;
                width: 100px;
                height: 100px;
            }
            &:nth-child(2){
                top: 150px;
                left:-100px;
                width: 120px;
                height: 120px;
                z-index: 2;
            }
            &:nth-child(3){
                bottom: 50px;
                right:-60px;
                width: 80px;
                height: 80px;
                z-index: 2;
            }
            &:nth-child(4){
                bottom: -80px;
                left:100px;
                width: 50px;
                height: 50px;
                
            }
            &:nth-child(5){
                top: -80px;
                left:140px;
                width: 60px;
                height: 60px;
            }
        }
        @keyframes animate{
            0%,100% 
            {
                transform:translateY(-40px);

            }
            50% 
            {
                transform:translateY(40px);

            }
        }
        .container{
            position: relative;
            width: 400px;
            min-height: 400px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255,255,255,0.5);
            border-right: 1px solid rgba(255,255,255,0.2);
            border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        .form{
            position: relative;
            width: 100%;
            height: 100%;
            padding: 40px;
            h2{
                text-align: left;
                position: relative;
                color: #fff;    
                font-size: 24px;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 40px;
                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -10px;
                    width: 80px;
                    height: 4px;
                    background: #fff;
                }
            }
            .inputBox{
                width: 100%;
                margin-top: 20px;
                input,button{
                    width: 100%;
                    background: rgba(255, 255, 255,0.2);
                    border: none;
                    outline: none;
                    padding: 10px 20px;
                    border-radius: 35px;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-right: 1px solid rgba(255,255,255,0.2);
                    border-bottom: 1px solid rgba(255,255,255,0.2);
                    font-size: 1rem;
                    letter-spacing: 1px;
                    color: #fff;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    &::placeholder{
                        color: #fff;
                    }
                }
                button{
                    background: #fff;
                    color: #666;
                    max-width: 100px;
                    cursor: pointer;
                    margin-bottom: 20px;
                    font-weight: 600;
                }
               
            }
        }
    `
    
    export default Login;