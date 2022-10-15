import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export const Home = () => {

    const [data ,setdata] = useState([])
    const [name , setname] = useState()
    
    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get("https://dog.ceo/api/breeds/list/all").then(function(res){
            console.log(res.data.message)
            setdata(res.data.message)
        })
    }


  
    
    return(
            <div>
                {
                    Object.keys(data)?.map((key, index) => {
                        return(
                            <div key={index}>
                                <h2><Link to={`/puppy/${key}`} state={{name:key}}> {key} </Link> </h2>
                            </div>
                        )
                    })
                }
            </div>
    )
}

