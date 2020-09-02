import React from 'react';
import { useContext, useState } from 'react';
import { Context } from './DataCenter/Datacenter';
import Profile from './Profile'


const Profiles = () => {

    const {profiles,search}=useContext(Context)

    const [profile,setprofile]=useState({
        login:''
    })

    const change=(e)=>{
        setprofile({
            
            [e.target.name]:e.target.value
        })
    }

    const sendToDatacenter=(e)=>{
        e.preventDefault()
        search(profile.login)
    }




    return (
        <div className="container mt-5">
            <form className="form-inline my-2 my-lg-0">
                <input onChange={change} name="login" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button onClick={sendToDatacenter} className="btn btn-primary" type="submit">Search</button>
            </form>
            <div className='row'>
                {profiles.map(profile=>(
                    <Profile key={profile.id} profile={profile} />
                ))}
            </div>
        </div>
    );
}

export default Profiles;
