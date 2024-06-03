import React from "react";
import "./Buy.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function func() {
  var e = document.getElementById("select1");
  var value = e.value;
  var name = document.getElementById("name").value;
  var item = document.getElementById("item").innerHTML;

alert (`Thank you ${name} for buying ${value} ${item}s.`);
}


export default function Buy() {
  const {item} = useParams()
  return (
    <>
    <div className="buy">
      <div className="buy_container">
        <div className="buy_content">
          <Link to="/order">
            <button className="button-28 buy_back">
              <i class="fa-solid fa-arrow-left"></i> GO BACK
            </button>
          </Link>
          <form className="buy_form" onSubmit={func}>
            <p id="item" hidden>{item}</p>
            <div>
              <input id="name"
                placeholder="Your Name"
                className="buy_input"
                maxlength="35"
                required
                type="text"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Address"
                className="buy_input"
                maxlength="35"
                required
                type="text"
              />
            </div>
            <div>
              <label>
                <select required id="select1" name="select1">
                  <option value="" disabled selected hidden>
                    No of Items
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>
            <button className="button-28 buy_submit" >
              BUY
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}


