import { BrowserRouter, Route, Link  } from 'react-router-dom'
import TrangChu from './component/home/Home';
import ListLoaiSach from './component/loaisach/LoaiSach';
import SuaLoaiSach from './component/loaisach/SuaLoaiSach';
import ChiTiet from './component/sach/ChiTiet';
import Sach from './component/sach/Sach';
import SuaSach from './component/sach/SuaSach';
import styled from 'styled-components';
import FormTimHinh from './component/home/FormTimHinh';
import BaoCao from './component/home/BaoCao';

const Header = styled.header`
    background: #151515;
    padding: 20px 0;
    .nav-link{
        font-size: 1.8rem;
        margin-right: 50px;
        color: #eaeaea;
    }
`
const Main = styled.main`
    width: 90%;
    min-height: 700px;
    margin: 0 auto;
    padding-top: 20px;
    color: #151515;
`
function Admin() {
  return (
   <div className="">
    <BrowserRouter>
    
     <Header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link active" aria-current="page" to="/admin"><i class="fas fa-home"></i></Link>
                <Link class="nav-link" to="/admin/sach"><i class="fas fa-folder"></i></Link>
                <Link class="nav-link" to="/admin/loaisach"><i class="fab fa-shopify"></i></Link>
                <Link class="nav-link" to="/admin/hinh"><i class="fas fa-images"></i></Link>
                <Link class="nav-link" to="/admin/baocao"><i class="far fa-sticky-note"></i></Link>
            </div>
            </div>
        </div>
        </nav>
     </Header>
      
      <Main>
        <Route exact path="/admin">
            <TrangChu/>
        </Route>
        <Route exact path="/admin/hinh">
            <FormTimHinh/>
        </Route>
        <Route exact path="/admin/baocao">
            <BaoCao/>
        </Route>
        <Route exact path="/admin/loaisach">
            <ListLoaiSach/>
        </Route>
        <Route path="/admin/loaisach/:id">
            <SuaLoaiSach/>
        </Route>
        <Route exact path="/admin/sach">
            <Sach/>
        </Route>
        <Route path="/admin/sach/:id">
            <SuaSach/>
        </Route>
        <Route path="/admin/chitiet/:id">
            <ChiTiet/>
        </Route>
      </Main>
    </BrowserRouter>
    </div>
  );
}
export default Admin;