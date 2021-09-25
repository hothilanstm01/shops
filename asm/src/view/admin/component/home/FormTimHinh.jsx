import React from 'react';
import ReactDOM from 'react-dom';
 export default class FormTimHinh extends React.Component {
    constructor(){
        super();
        this.state = {images:[]};
        this.tukhoa = React.createRef();

    }
    timhinh = (e) => {
        let tk = this.tukhoa.current.value;
        console.log(tk);
        let page = 1;
        let per_page = 20;
        let yourKey = "Y_xAQeiLXgSXIqyWHdfuhCffBNG8BgJAZmV9SrWWujw";
        let url = "https://api.unsplash.com/search/photos";
        let fullUrl = `${url}?query=${tk}&page=${page}&per_page=${per_page}&client_id=${yourKey}`;
        fetch(fullUrl)
        .then(function(res) {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then(function(data) {
            let pictures = data.results;
            console.log(pictures);
            let listPic = [];
            pictures.forEach(function(p , index) {
                console.log(p.urls.regular);
                listPic.push(<img src={p.urls.regular} width="160" height="150"/>)
            })
            ReactDOM.render(listPic, document.querySelector('#kqSearchPic'));
        })
        .catch(function(error) {
            console.log('Liuliu : \n', error);
        });
    }
    render() {
        const kq = 
        <div>
            <form className="col-9 m-auto">
                <input ref={this.tukhoa} className="form-control"/>
                <br/>
                <button type="button" onClick={this.timhinh} className="btn btn-dark">Tim hinh</button>
            </form>
            <div className="col-10 m-auto" id="kqSearchPic"/>
        </div>
        return (kq);
    }
 }