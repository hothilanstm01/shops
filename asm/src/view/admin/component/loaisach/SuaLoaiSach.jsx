import React, { useEffect, useRef, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Swal from 'sweetalert2'



const SuaLoaiSach =() => {  
    const [Sach, setSach] = useState([])
    const math = useRouteMatch()
    const id = math.params.id;
    console.log(id);
    useEffect(() => {
        let url=`https://60feb346257411001707873b.mockapi.io/api/catalogs/${id}`;
        const fetchSach = async () => {
           const res = await fetch(url);
           const data = await res.json();
           setSach(data)
        }

        fetchSach()
    }, [])

    const reften = useRef("");
    const refthutu = useRef("");
    const refanhien = useRef("");

    const  hamSuaLoaiSach = () => {  
        let loaisach = {
          id: id,
          name: reften.current.value,
          thutu: refthutu.current.value,
          anhien: refanhien.current.value,      
        }
        console.log(loaisach);
    
        let url=`https://60feb346257411001707873b.mockapi.io/api/catalogs/${id}`;    
        fetch(url, {  method:"PUT", 
                      body:JSON.stringify(loaisach), 
                      headers:{'Content-Type':'application/json'}
                   } 
        )
        .then(res => res.json())
        .then( d => Swal.fire('ê...', 'sửa thành công!', 'success').then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/loaisach"
            }
          }));    
    }

    console.log(Sach);
    return (
    <div className="suaLoaiSach m-2">
       <div className="mb-3">
        <input className="form-control" placeholder="Tên loại sách" 
         ref={reften} defaultValue={Sach.name} />
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Thứ tự"
        ref={refthutu} defaultValue={Sach.thutu}/>
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Ẩn hiện"
        ref={refanhien} defaultValue={Sach.anhien}/>
       </div>
       <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={hamSuaLoaiSach}>
          Sửa Loại Sách
          </button>
        </div>
    </div>
  )}

export default SuaLoaiSach;