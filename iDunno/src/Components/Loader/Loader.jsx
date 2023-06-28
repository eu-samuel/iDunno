import React from "react";
import { StyledLoader } from "./Styles";
import Load from '../../Images/loading.gif'

export const Loader = () => {

    return (
        <StyledLoader>
            <div className="loading-container">
                <img src={Load} alt="loading"/>
            </div>
        </StyledLoader>
    )
}