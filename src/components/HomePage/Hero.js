import React, { useContext } from 'react'
import "./Hero.css"
import {Api} from "../../App"
import { useQuery } from "react-query";
import axios from "axios";

export default function Hero() {

    const apiString = useContext(Api)
    
    const video = new useQuery(["video"], () => {
        return axios(`${apiString}video`)
                .then((res) => {
                    return res.data
                })
    })

    if (video.isLoading) {
        console.log("loading...")
    }
    
    if (video.isSuccess) {
        return (
            <div className='hero'>
                <video autoPlay muted loop className="myVideo">
                    <source src={video.data.url} type="video/mp4" />
                </video>
            </div>
        )
    }
    // console.log(video.data)
}