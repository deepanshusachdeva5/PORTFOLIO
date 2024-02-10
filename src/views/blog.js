import React from "react";
import { useLocation } from "react-router-dom";

const Blog = (props)=>{

        const location = useLocation();

        return (

            <div>
                <iframe src={location.state.url} title="description"></iframe>
        </div>
        )

}

export default Blog;