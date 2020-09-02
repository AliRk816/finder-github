import React from 'react';
import axios from 'axios'
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Context=createContext()

const Datacenter = (props) => {

    // const token = '54929c7cc8a7d744b716b8f0fdeebaead49681bd';

    const[profiles,setprofiles]=useState()
    const[favourites,setfavourites]=useState([])
    const [toggel,settoggel]=useState(false)

    useEffect(()=>{
        setTimeout(() => {
            axios.get('https://api.github.com/users?since=XXX/')
            .then(users=>setprofiles(users.data))
        }, 2000);
       
    }, [])

    const search  = async (login)=>{
        const rem = await  axios.get(`https://api.github.com/users/${login}`)
            setprofiles([rem.data])
        console.log(rem);
            }

    const fav  = async (id)=>{
        const isFined=favourites.filter(data=>data.id==id)
        if(isFined.length==0)
        {
            const filter = profiles.filter((data)=>data.id==id)
            setfavourites([...filter,...favourites])
       }
       else{
           setfavourites(favourites.filter(data=>data.id!=id))
       }
      
      
        
    }
            
        if(!profiles)
        return <img src='https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg' style={{display:'block',margin:'0 auto'}}></img>

    return (
        <div>
            <Context.Provider value={{profiles,search,favourites,fav}}>
                {props.children}
            </Context.Provider>
        </div>
    );
}

export default Datacenter;
