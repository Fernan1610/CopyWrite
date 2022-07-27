import React from "react";
import {useState}from "react";
import axios from 'axios';
import style from "./Style/NavBar.module.css"
import bootstrap from "bootstrap";
export default function NavBar ({list,setList}){
    const [send,setSend]=useState("")

    
    function handleChange(e){
        e.preventDefault();
        setSend(e.target.value);
        
    }
    async function handleSubmit(e){
        e.preventDefault();
        const {data}= await axios(`http://localhost:3000/iecho?text=${send}`);
        document.getElementById("searchInput").value="";
        return setList([...list,data]);


    }
    return(
        
         <nav  >
         <div className={style.styleNav} >
             <a className="navbar-brand">CopyWrite</a>
              <form className={style.form}  onSubmit={handleSubmit}>
                  <input id="searchInput" className={style.input} type="text" placeholder="Text" aria-label="Text" onChange={handleChange} />
                  <button className={style.button} type="submit"  >Send</button>
              </form>
          </div>
     </nav>
     )
}