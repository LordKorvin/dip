import addToBranch from "./addToBranch";
import getRequest from "../server/getRequest.js";
import salesLabel from "../clockSales/salesLabel.js";

export default function catalog() {
  let request = getRequest("goods");
  if (request.status == 200) {
    let responseObj = new Map(JSON.parse(request.object));
    for (let i = 0; i < responseObj.size; i += 4) {
      //loading catalog with random elements (if not searching)
      let li = document.createElement("li");
      let ul = document.getElementById("catalog");
      ul.appendChild(li);
      li.innerHTML = `<img src="${responseObj.get(String(i + 1)).src}.png"</img>
            <div>
                <h3>${responseObj.get(String(i + 1)).name}</h3>
                <div class="counter">
                    <span class="arrow arrLeft" id="arrLeft${
                      i + 1
                    }"><i class="fas fa-chevron-left"></i></span>
                    <input type="text" value="1" pattern="^[ 0-9]+$" required></input>
                    <span class="arrow arrRight" id="arrRight${
                      i + 1
                    }"> <i class="fas fa-chevron-right"></i></span>
                </div>
                <h3>Price per one item: ${
                  responseObj.get(String(i + 1)).price
                }$</h3>
                <h3>Made in ${responseObj.get(String(i + 1)).country}</h3>
                <div class="btn" id="btnBranch${
                  responseObj.get(String(i + 1)).id
                }">Add into Branch</div>
                <div class="divSale" id="divSale${i + 1}">
                </div>
            </div>`;
      addToBranch(`btnBranch${responseObj.get(String(i + 1)).id}`);
      if (responseObj.get(String(i + 1)).sales != "No") {
        salesLabel(responseObj.get(String(i + 1)), i + 1);
      }
    }
  } else if (request.status == 404) {
    console.log("Ресурс не найден");
  } else {
    console.log(String(request.status));
  }
}
