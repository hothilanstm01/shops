import React, { useEffect, useRef, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Swal from 'sweetalert2'


const ChiTiet =() => {  
    const [Sach, setSach] = useState([])
    const math = useRouteMatch()
    const id = math.params.id;
    console.log(id);
    useEffect(() => {
        let url=`https://60feb346257411001707873b.mockapi.io/api/products/${id}`;
        const fetchSach = async () => {
           const res = await fetch(url);
           const data = await res.json();
           setSach(data)
        }

        fetchSach()
    }, [])

 

    console.log(Sach);
    return (
    <div className="chitiet m-2">
      <p className="img">
        <img src={`../../img/${Sach.urlhinh}`} alt="" />
      </p>
      <div className="text">
        <h2>{Sach.tensach}</h2>
        <p className="gia">Giá: {Sach.gia} VNĐ</p>
        <p className="view"><i class="fas fa-eye"></i> {Sach.xem}</p>
        <p className="view1">{Sach.hot==1?"Sản phẩm hot":""}</p>
        <p className="view1">{Sach.moi==1?"Sản phẩm mới":""}</p>
      </div>
      
    </div>
  )}

export default ChiTiet;