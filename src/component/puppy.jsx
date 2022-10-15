import React, { useEffect, useState } from "react";
import axios from "axios"
import { useLocation } from "react-router-dom";

export const Puppy = () => {

    const [image , setImage] = useState()
    const location = useLocation();

    useEffect(() => {
        getdata()
    },[])


    const getdata = () => {
        axios.get(`https://dog.ceo/api/breed/${location && location.state && location.state.name}/images`).then(function(res){
            setImage(res.data.message)
        })
    }

    return(
        <div>
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
