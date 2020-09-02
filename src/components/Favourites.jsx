import React from 'react';
import { useContext } from 'react';
import { Context } from './DataCenter/Datacenter';
import { useState } from 'react';

const Favourites = () => {

    const {favourites}=useContext(Context)
  

    return (
        <div className="container">
            <div className="row">
            {favourites.map(profile=>(

                <div className="col-md-4 mt-4">
                    <div className="card" style={{width: 18+'rem'}}>
                            <img className="card-img-top" src={profile.avatar_url} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{profile.login}</h5>
                            <a href={profile.html_url}><button className="btn btn-primary">Visit my repository</button></a>
                        </div>
                    </div>
                </div>

                ))}
            </div>
        </div>
    );
}

export default Favourites;
