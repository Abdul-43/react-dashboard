import React from "react";
import { topDealUsers } from "../../data";
import "./topBox.scss"
function TopBox() {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((list) => (
          <div className="listItem" key={list.id}>
            <div className="user">
              <img className="user-img" src={list.img} alt="" />
              <div className="userText">
                <span className="userName">{list.username}</span>
                <span className="email">{list.email}</span>
              </div>
            </div>
            <div className="amount">${list.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
