import React, { useState } from "react";

import NavBar from "./NavBar";
import style from "./Style/Home.module.css"

export default function Home() {
    const [list, setList] = useState([]);
    var count =0
    return (
        <div>

            <NavBar list={list} setList={setList}></NavBar>


            <div className={style.styleForm}>
                <ul>
                    {
                        list.map((el) => (

                            <li key={count++}>{el.text}   - Palindromo  {el.palindrome?"✅" : "❌"}</li>
                        ))
                        
                    }

                </ul>
            </div>
        </div>


    )
}