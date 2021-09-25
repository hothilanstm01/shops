import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { addtoCart } from '../cart/cartSlide';
import { useDispatch } from 'react-redux';


const Background = styled.div`
  position:fixed;
  
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  position: relative;
  border-radius: 10px;
`;

const ModalImg = styled.div`
  width: 50%;
  height: 100%;
  object-fit: cover;
  
  background: #000;
  img{
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
  }
`;

const ModalContent = styled.div`
  width:50%;
  padding: 51px 50px 49px;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  background: #fff;
  .summary-content{
    text-align: left;
    .title{
      display: block;
      margin: 0 0 12px;
      font-weight: 700;
      font-size: 19px!important;
      font-family: "Montserrat",sans-serif;
      color: #151515;
    }
    .price{
      display: block;
      margin: 0 0 38px;
      line-height: 1;
      color: #151515;
      font-size: 19px!important;
      font-family: "Montserrat",sans-serif;
      font-weight: 700;
    }
    .short-des{
      display: inline-block;
      width: 100%;
      vertical-align: middle;
      margin: 0 0 30px;
      p{
        margin: 0;
        font-weight: 500;
        color: #999;
        font-size:13px;
        font-family: "Montserrat",sans-serif;
        line-height: 25px;
      }
    }
    .cart{
      position: relative;
      display: inline-block;
      width: 100%;
      vertical-align: middle;
      margin: 0 0 40px;
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
            margin-right: 20px;
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
        padding: 8px 20px;
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
 
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const BoxContentModal = styled.div`
  position:fixed;
  top: 0;
  left :0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background: rgba(0,0,0,.68);
`

 const Modal = ({ showModal, setShowModal,data }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  const [count,setCount]=useState(1);

  const upCount = ()=>{
    setCount(count+1)
  }

  const downCount = ()=>{
    setCount(count-1)
  }
  const {addItem} = useCart();

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


  return (
    <>
      {showModal ? (
        <BoxContentModal  onClick={closeModal} ref={modalRef}>
            <Background className="abc"  /* onClick={closeModal}  *//* ref={modalRef} */>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalImg>
                  <img src={`./img/${data.urlhinh}`} alt="" />
                </ModalImg>
                <ModalContent>
                  <div className="summary-content">
                      <h4 className="title">{data.name}</h4>
                      <p className="price">{data.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                      <div className="short-des">
                        <p>{data.description}
                        </p>
                      </div>
                      <form className="cart">
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
                       <button type="button" onClick={() => Addcart(data,count)} className="btn-add-cart">Add to cart</button>
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
                </ModalContent>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
        </BoxContentModal>
      ) : null}
    </>
  );
  
};
export default Modal;