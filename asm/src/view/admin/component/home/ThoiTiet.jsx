import React from 'react'
import styled from 'styled-components';

const BoxContent = styled.div`
    .sec{
        background-image: url("https://cdn2.cache.vn/assets/backgrounds/68abee5573567d1a6c8a413196cbb0b4.webp");
        background-size: 100% 100%;
    }
    .thoitiet{
  color: #fff;
  display: flex;
}
.thoitiet .namett{
  font-size: 2rem;
  font-weight: bold;
}
.thoitiet .gio{
  color: #ccc;
  font-weight: bold;
  font-size: 1.5rem;
}
.thoitiet .do{
  font-size: 10rem;
  font-weight: bold;
}
.thoitiet .trangthai{
  font-weight: bold;
}
.thoitiet .gio span{
  background: #fff;
  padding:  5px 10px;
  border-radius:10px;
  color: #333;
  margin-right: 20px;
  font-size: 1rem;
}
.search{
  padding: 50px 0;
  width: 100%;
  text-align: center;
}
.search input{
  width: 50%;
  height: 50px;
  border: 0;
  border-radius: 20px;
  padding: 0 20px;
}
.right{
  width: 30%;
  margin-left: 280px;
  text-align: center;
}
.right img{
  width:100%;
}
.right p {
  font-weight: bold;
  font-size: 1.5rem;
}
.lan{
  color: #fff;
}
.lan h5{
  font-size: 2rem;
}
`
export default class ThoiTiet extends React.Component {
    render() {
        const kq = 
        <BoxContent>
            <div className="sec">
                <div className="weather">
                <div className="search">
                <input type="text" placeholder="Tìm thành phố"/>
                </div>
                <div className="thoitiet col-10 m-auto">
                    <div className="left">
                        <div className="namett">Thời tiết {this.props.data.name}</div>
                        
                        <div className="gio">Kể từ 11:53 ICT</div>

                        <h1 className="do">31°</h1>

                        <h1 className="trangthai">{this.props.data.weather.map(item=>item.description)}</h1>
                        
                        <div className="gio">
                            <span>WS: {this.props.data.wind.speed} </span> <span>WD:{this.props.data.wind.deg} </span> <span>WS:{this.props.data.wind.gust} </span>
                        </div>
                    </div>
                    <div className="right">
                        <img src="./may.png"/>
                        <p>31°/26°</p>
                    </div>
                </div>
                
            </div>
            
            </div>
        </BoxContent>
        return (kq);
    }
}