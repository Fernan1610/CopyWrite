import React, { useState } from "react";

import NavBar from "./NavBar";
import style from "./Style/Home.module.css"

export default function Home() {
    const [list, setList] = useState([]);
    var count =0
    return (
        <div className=" bg-secondary w-100 h-100 ">

            <NavBar list={list} setList={setList}></NavBar>


            <div className="container ">
                    
                    <h2 className="text-left ">Result:</h2>

                
                <ul className="list-group bg-light md-4">
                    {
                        list.map((el) => (

                            <li className="list-group-item m-3 border-secondary border " key={count++}>{el.text}   - Palindromo  {el.palindrome?"✅" : "❌"}</li>
                        ))
                        
                    }

                </ul>
            </div>
        </div>


    )
}