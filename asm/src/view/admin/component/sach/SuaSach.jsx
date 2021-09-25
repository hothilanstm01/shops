import React, { useEffect, useRef, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Swal from 'sweetalert2'


const SuaSach =() => {  
    const [Sach, setSach] = useState([])
    const math = useRouteMatch()
    const id = math.params.id;
    console.log(id);
    useEffect(() => {
        let url=`http://localhost:3500/sach/${id}`;
        const fetchSach = async () => {
           const res = await fetch(url);
           const data = await res.json();
           setSach(data)
        }

        fetchSach()
    }, [])

    const reften = useRef("");
    const refgia = useRef("");
    const refhinh = useRef("");
    const refxem = useRef("");
    const  hamSuaLoaiSach = () => {  
        let loaisach = {
          id: id,
          tensach: reften.current.value,
          gia: refgia.current.value,
          urlHinh: refhinh.current.value,
          xem: refxem.current.value,      
        }
        console.log(loaisach);
    
        let url=`http://localhost:3500/sach/${id}`;    
        fetch(url, {  method:"PUT", 
                      body:JSON.stringify(loaisach), 
                      headers:{'Content-Type':'application/json'}
                   } 
        )
        .then(res => res.json())
        .then( d => Swal.fire('ê...', 'sửa thành công!', 'success').then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/sach"
            }
          }));    
    }

    console.log(Sach);
    return (
    <div className="suaLoaiSach m-2">
       <div className="mb-3">
        <input className="form-control" placeholder="Tên sách" 
         ref={reften} defaultValue={Sach.tensach} />
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Giá"
        ref={refgia} defaultValue={Sach.gia}/>
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Hình"
        ref={refhinh} defaultValue={Sach.urlHinh}/>
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Xem"
        ref={refxem} defaultValue={Sach.xem}/>
       </div>
       <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={hamSuaLoaiSach}>
          Sửa Sách
          </button>
        </div>
    </div>
  )}

export default SuaSach;