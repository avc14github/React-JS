import React from "react";
import { useParams } from "react-router-dom";

export default function User(){

    const {userid} = useParams()

    return(
        <div className="bg-gray-700 text-white text-3xl p-4 text-center">
            user : {userid}
        </div>
    )
} 