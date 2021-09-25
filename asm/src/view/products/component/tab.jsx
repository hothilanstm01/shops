import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import HoverRating from './rating';
import { useRouteMatch } from 'react-router-dom';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [user, Setuser] = React.useState({name:""});
  const [ListCmt, Setcmt] = React.useState([]);
  const {data} = props;
  const match = useRouteMatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 const refname = useRef('')
 const refContent = useRef('')

 const handleForm = async()=>{
    const dataCmt={};
    console.log(match);
    dataCmt.nameUser=(refname.current.value);
    dataCmt.avataUser=user.imageUrl;
    dataCmt.idProduct=match.params.id;
    dataCmt.content=(refContent.current.value);
    console.log(dataCmt);

    const url="https://60feb346257411001707873b.mockapi.io/api/comments";
     await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(dataCmt) // body data type must match "Content-Type" header
    });
 }

 const handleAlert =() =>{
   alert("Vui lòng đăng nhập! ")
 }
    useEffect(() => {
      const storage = localStorage.getItem('user');

      if(storage){
          Setuser(JSON.parse(storage))
      }else{
          localStorage.setItem('user', null);
      }
      const url="https://60feb346257411001707873b.mockapi.io/api/comments";

      const fetchCmt = async()=>{
        const res = await fetch(url);
        const data = await res.json();
        const datacmt = await data.filter(item=>item.idProduct==match.params.id);
        Setcmt(datacmt);
      }

      fetchCmt();

    }, [])
//  Setuser(JSON.parse(localStorage.getItem('user')));
//  console.log(user);
console.log(ListCmt.length);

  return (
      <>
    <BoxContent>
         <AppBar className="tab" position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      <TabPanel className="tab-item" value={value} index={0}>
       <h2>Description</h2>
       <p>
       {data.description}
       </p>
      </TabPanel>
      <TabPanel className="tab-item" value={value} index={1}>
        <h2>Reviews</h2>

       {ListCmt.length ===0?
        "Chưa có bình luận!"
        :
        ListCmt.map((item)=>(
          <div className="BoxCmt">
            <img src={item.avataUser} alt="" />
            <div className="nd">
              <h3>{item.nameUser}</h3>
              <p>{item.content}</p>
            </div>
          </div>
          ))
        }
        <p>Đánh giá của bạn về sản phẩm</p>
        <div className="comment">
            
            {
              user === null ?

              <form action="" className="comment-form">
                <div className="rating">
                <HoverRating rate={0}/>
                   
                    <p className="name">
                    <label for="author">Name <span class="required">*</span></label><br />
                        <input id="author" name="author"  type="text" size="30" aria-required="true" required=""  />


                      
                    </p>
                    <p className="comment">
                        <label for="comment">Your review <span class="required">*</span></label>
                        <textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required=""></textarea>
                    </p>
                    <p className="submit">
                    <input name="submit" type="button" id="submit" className="submit" value="Submit" onClick={handleAlert}/>
                    </p>
                </div>
            </form>
            :
            <form action="" className="comment-form">
            <div className="rating">
            <HoverRating rate={0}/>
               
                <p className="name">
                <label for="author">Name <span class="required">*</span></label><br />
                    <input id="author" name="author" value={`${user.name}`} type="text" size="30" aria-required="true" required="" ref={refname} />
                </p>
                <p className="comment">
                    <label for="comment">Your review <span class="required">*</span></label>
                    <textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required="" ref={refContent}></textarea>
                </p>
                <p className="submit">
                <input name="submit" type="button" id="submit" className="submit" value="Submit" onClick={handleForm}/>

                </p>
            </div>
        </form>

            }
        </div>
      </TabPanel>
    </BoxContent>
    </>
  );
}
const BoxContent = styled.div`

font-family: "Montserrat",sans-serif;
    .tab{
        background: none;
        box-shadow: none;
        button{
           
            .MuiTab-wrapper{
                color: #fff;
                
            }
            
        
        }
        .PrivateTabIndicator-colorSecondary-4 {
            background-color: #333;
        }
    }
    .tab-item{
        text-align: left;
        padding: 60px 0;
        border-top: 1px solid #e1e1e1;
        border-bottom: 1px solid #e1e1e1;
        .BoxCmt{
          display: flex;
          margin-bottom: 30px;
          img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 20px;
          }
          .nd{
            color: #151515;
            p{
              margin: 0;
              font-weight: 400;
            }
          }
        }
        h2{
            font-size: 14px;
            line-height: 25px;
            margin: 8px 0 18px;
            color: #080808;
        }
        p{
            font-size: 16px;
            margin: 10px 0;
            font-weight: 500;
        }
        .comment{
            margin-top: 15px;
            
            form{
                .rating{
                    font-size: 14px;
                    color: #151515;
                    font-weight: 400;
                    margin-bottom: 4px;
                    
                }
                
                .name{
                    font-size: 16px;
                    margin: 10px 0;
                    font-weight: 500;
                    
                    label{
                        color: #151515;
                        font-weight: 400;
                        margin-bottom: 4px;
                    }
                    input{
                        padding: 15px 20px;
                        width: 50%;
                        margin: 4px 0 15px;
                        font-family: "Montserrat",sans-serif;
                        font-size: 16px;
                        color: #151515;
                        background-color: transparent;
                        border: 1px solid #fff;
                        border-radius: 0;
                        outline: 0;
                        -webkit-appearance: none;
                        box-sizing: border-box;
                        line-height: 21px;
                        font-weight: 300;
                    }
                }
                .comment{
                    font-size: 16px;
                    margin: 10px 0;
                    font-weight: 500;
                    label{
                        display: block;
                        margin: 0 0 10px;
                        font-size: 14px;
                        color: #151515;
                    }
                    textarea{
                        width: 50%;
                        display: block;
                        padding: 21px 24px;
                        height: 180px;
                        margin: 4px 0 15px;
                        font-family: "Montserrat",sans-serif;
                        font-size: 16px;
                        color: #151515;
                        background-color: transparent;
                        border: 1px solid #fff;
                        border-radius: 0;
                        outline: 0;
                        -webkit-appearance: none;
                        box-sizing: border-box;
                        line-height: 21px;
                        font-weight: 300;

                    }

                }
                .submit{
                    margin-top: 20px;
                    font-size: 16px;
                    margin: 7px 0 0;
                    font-weight: 500;
                    input{
                        color: #fff;
                        background-color: #2c2c2c;
                        font-family: inherit;
                        position: relative;
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
                        border: 2px solid transparent;
                        padding: 7px 41px;
                        white-space: nowrap;
                        cursor: pointer;
                        z-index: 3;
                        border-radius: 0;
                    }
                }
            }
        }
    }
`
