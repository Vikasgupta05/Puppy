import React, { useEffect, useState } from "react";
import axios from "axios"

export const Search = () => {

    const [search , setSearch] = useState()
    const [image , setImage] = useState()


    
    console.log(image)

    useEffect(() => {
        getdata()
    },[search])

    const getdata = () => {
        axios.get(`https://dog.ceo/api/breed/${search}/images`).then(function(res){
            console.log( "reA" , res.data.message)
            setImage(res.data.message)
        })
    }


    return(
        <div>
            <label>Search</label>
            <input 
                type="text" 
                placeholder="Seaarch"
                onChange={((el) => {
                    setSearch(el.target.value)
                })}
            />
             <br /><br /> 
            {
                image?.map((el) => {
                    return(
                        <div>
                            <img src={el} alt="not fount"  width={"400px"} height={"300px"}/>  
                        </div>
                    )
                })
            }
        </div>
    )
}
