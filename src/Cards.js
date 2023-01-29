import React from "react";

const Card = ({name , username, city, company, id}) => {
    return (
        <div className="container">
                <div className="bg-danger shadow-lg m-2 text-center hover flex-wrap cols-md-12">
                    <img src={`https://robohash.org/${id}`} height={"200px"} alt="img.."/>
                    <div style={{height: '180px'}} >
                        <h2 className="p-1 d-flex flex-wrap justify-content-center">{name}</h2>
                        <h5 className="p-1" >{username}</h5>
                        <h5 className="p-1">{city}</h5>
                        <h5 className="p-1">{company}</h5>
                    </div>
                </div>
        </div>
    )
}

export default Card