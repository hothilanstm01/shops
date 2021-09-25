import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardTravel from '@material-ui/icons/CardTravel';
import Home from '@material-ui/icons/Home';
import { BrowserRouter, Route, Link  } from 'react-router-dom'

import ListLoaiSach from './component/loaisach/LoaiSach';
import SuaLoaiSach from './component/loaisach/SuaLoaiSach';
import Sach from './component/sach/Sach';
import SuaSach from './component/sach/SuaSach';
import ChiTiet from './component/sach/ChiTiet';
import TrangChu from './component/home/Home';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
       <Link to="/admin/"> <BottomNavigationAction label="Home" value="recents" icon={<Home />} /></Link>
        <Link to="/admin/sach"><BottomNavigationAction label="Sản phẩm" value="folder" icon={<FolderIcon />} /></Link>
        <Link to="/admin/loaisach"><BottomNavigationAction label="Danh mục" value="favorites" icon={<FavoriteIcon />} /></Link>
        <Link to="/admin/cart"> <BottomNavigationAction label="Cart" value="nearby" icon={<CardTravel />} /></Link>
        
      </BottomNavigation>

      <main className=" container">
      <Route exact path="/admin/">
        <TrangChu/>
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
      <Route exact path="/admin/sach/:id">
        <SuaSach/>
      </Route>
      <Route exact path="/admin/chitiet/:id">
        <ChiTiet/>
      </Route>
     </main>
    </BrowserRouter>
   
  );
}
