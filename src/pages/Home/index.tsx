import React from "react";
import  "./styles.scss"
import { Sidebar } from "../../components/Sidebar/index.tsx";

export const HomePage = () => {
    return(
        <div className="home_page_wrapper">
            <Sidebar/>
        </div>
    )
}