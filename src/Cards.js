import React from "react";

const Card = ({name , age, id}) => {
    return (
        <div className="bg-danger shadow-lg m-2 text-center hover">
            <img src={`https://robohash.org/${id}`} height={"200px"} alt="img.."/>
            <div>
                <h2>{name}</h2>
                <h5>Age: {age}</h5>
            </div>
        </div>
    )
}

export default Card