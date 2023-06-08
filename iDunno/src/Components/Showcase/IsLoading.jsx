import React from "react";
import { LoadStyle } from "../../Styles/LoadStyle";
import Load from '../../assets/loading.gif'

export const Loading = () => {

    return (
        <LoadStyle>
        <div className="loading-container">
         <img src={Load} alt="loading"/>
        </div>
        </LoadStyle>
    )
}