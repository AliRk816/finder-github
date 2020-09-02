import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from './DataCenter/Datacenter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Profile = (props) => {

    const {fav,favourites}=useContext(Context)


    const sendDC=(e)=>{
        e.preventDefault()
        fav(props.profile.id)
    }

    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    
    // favourites.map(data=>data.id==props.profile.id?isExist=true:isExist=false)
   const danger="ml-5 text-danger fa fa-heart fa-2x"
   const intial="ml-5  fa fa-heart-o fa-2x"
   
    return (
        <div className="col-md-4 mt-5">
            <div data-aos="flip-left" className="card" style={{width: 18+'rem'}}>
                    <img className="card-img-top" src={props.profile.avatar_url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.profile.login}</h5>
                    <a href={props.profile.html_url}><button className="btn btn-primary">Visit my repository</button></a>
                    <a href="#">
                    <i onClick={sendDC} className={favourites.filter(data=>data.id==props.profile.id).length>0?danger:intial}></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile;
