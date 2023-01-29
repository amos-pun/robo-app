import React from "react";
import Card from "./Cards";

const CardList = ({ robots }) => {
  return (
    <div>
      <div className="row">
        <div className="d-flex flex-wrap justify-content-evenly">
          {robots.map((user, i) => {
            return (
              <div className="col-xl-3" key={i}>
                <Card
                  key={i}
                  id={robots[i].id}
                  name={robots[i].name}
                  username={robots[i].username}
                  city={robots[i].address.city}
                  company={robots[i].company.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardList;
