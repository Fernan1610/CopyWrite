import React from "react";
import {useState}from "react";
import axios from 'axios';


export default function NavBar ({list,setList}){
    const [send,setSend]=useState("")

    
    function handleChange(e){
        e.preventDefault();
        setSend(e.target.value);
        
    }
    async function handleSubmit(e){
        e.preventDefault();
        const {data}= await axios(`https://back-copy-write.herokuapp.com/iecho?text=${send}`);
        document.getElementById("searchInput").value="";
        return setList([...list,data]);


    }
    return(
        
                <nav class="navbar bg-danger">
                    <div class="container-fluid">
                        <a class="navbar-brand">CopyWrite</a>
                        <form class="d-flex" onSubmit={handleSubmit} >
                            <input id= "searchInput" class="form-control me-2" type="text" placeholder="text.." aria-label="text.." onChange={handleChange}/>
                            <button class="btn btn-primary" type="submit">Send</button>
                         </form>
                     </div>
                </nav>
    //      <nav  >
    //      <div className={style.styleNav} >
    //          <a className="navbar-brand">CopyWrite</a>
             
    //           <form className={style.form}  onSubmit={handleSubmit}>
    //               <input id="searchInput" className={style.input} type="text" placeholder="Text" aria-label="Text" onChange={handleChange} />
    //               <button className={style.button} type="submit"  >Send</button>
    //           </form>
    //       </div>
    //  </nav>
     )
}