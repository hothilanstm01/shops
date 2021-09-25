import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BrowserRouter, Route, Link  } from 'react-router-dom';
import { Pagination } from "@material-ui/lab";
import { LinearProgress } from "@material-ui/core";

const  Sach =()=> {

  const [listsach, setlistsach] = useState(null);
  const [count, setcount] = useState(0)
  const [fillter, setfillter] = useState({
    page:1,
    limit:3
  })
  

  useEffect(() => {

    let url="https://60feb346257411001707873b.mockapi.io/api/products";
    fetch(url).then(res => res.json()).then(data => {     
      let start = (fillter.page-1)* fillter.limit; 
      let end = fillter.page* fillter.limit;
      let limit = 0;
      let count = 0;
      const newSach = []
      data.map((item)=>{
          limit ++ ;
          count ++;
          if(limit > start && limit<=end){
            newSach.push(item)
          }
        }
      )
      setcount(count)
      console.log(count);
      console.log(newSach);
      setlistsach(newSach)
    });


  }, [fillter])
     
   const  xoaLoaiSach=(id)=>{    
        Swal.fire({
            title: 'Mày có chắc muốn xóa sách chứ',
            text: 'Mày xóa rồi thì nó sẽ mất trên bảng sanh sách đấy',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy'
          })
          .then((result) => {
            if (result.isConfirmed) {
                    
                let url=`https://60feb346257411001707873b.mockapi.io/api/products/${id}`;
                fetch(url, {method:"DELETE"} ).then(res => res.json()).then(data => { 
                    let arr = this.state.listSach.filter( s => {
                    if (s.id===id) return false; else return true;
                    })
                    this.setState({listSach:arr});
                }).then( d => Swal.fire('Xóa Thành Công', 'Quết Định ngu ngốc!', 'success')
                    .then((result) => {
                    if (result.isConfirmed) {
                        window.location = "/admin/sach"
                    }
                  }));       
            
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Hủy',
                'Quyết Định sáng suốt đấy :)',
                'error'
              )
            }
          })        
    }
   const  suaLoaiSach=(id)=> { 
        window.location=(`/admin/sach/${id}`);
    }
    const  chiTiet=(id)=> { 
      window.location=(`/admin/chitiet/${id}`);
    }

    const handleChangePage=(e,page)=>{
      setfillter((fill)=>({
        ...fill,
        page:page
      }))
    }
    return(
      <>
      <h2 className="name">Sản phẩm</h2>
       <table className="table">
       
       <thead>
           <tr>
           <th scope="col">Name</th>
           <th scope="col">Giá</th>
           <th scope="col">Mô tả</th>
           <th scope="col">Hình</th>
           <th scope="col">Xem</th>
           <th scope="col">Xóa/Sửa</th>
           </tr>
       </thead>
       <tbody>
           { listsach === null ?

            <LinearProgress/>
            :
            listsach.map( item =>(
              
              <tr key={item.id}>
                  <td scope="row" onClick={()=>chiTiet(item.id)} >{item.name}</td>
                  <td>{item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                  <td>{item.description}</td>
                  <td><img width="100px" src={`../../../../img/${item.urlhinh}`} alt="" /></td>
                  <td>{item.xem}</td>
                  <td>
                      <button type="button" className="btn btn-danger" onClick={()=>xoaLoaiSach(item.id)} >Xoa</button>
                      <button type="button" className="btn btn-secondary" onClick={()=>suaLoaiSach(item.id)} >Sua</button>
                  </td>
              </tr>
          ))
             
              
           }
           
          </tbody>
          
       </table>
       <Pagination 
        count={Math.ceil(count/fillter.limit)} 
        page={fillter.page} 
        onChange={handleChangePage}
       />
       
     </>
    )     
};
export default Sach;

