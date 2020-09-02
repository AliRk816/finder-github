import React from 'react';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { Context } from './components/DataCenter/Datacenter';

const Navbar = () => {
    const {favourites}=useContext(Context)
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                    <Link to='/' className="navbar-brand">Home</Link>
                    <Link to='/Fav' className="navbar-brand">favourites({favourites.length})</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#">Disabled</a>
                        </div>
                    </div>
            </nav>
        </div>
    );
}

export default Navbar;
