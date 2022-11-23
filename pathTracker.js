let myInp = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("save-tab");


inputBtn.addEventListener("click", function() {
        myInp.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myInp",JSON.stringify(myInp));
        renderInp(myInp);
    });

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myInp.push(tabs[0].url);
        localStorage.setItem("myInp",JSON.stringify(myInp));
        renderInp(myInp); 
    });
});

const inpFromLocalStorage = JSON.parse(localStorage.getItem("myInp"));

function renderInp(myArr){
    let listItems = "";
    for( let i=0; i< myArr.length ; i++){
        listItems += `<li>
                        <a href="${myArr[i]}"  target="_blank">
                            ${myArr[i] }
                        </a>
                      </li>`;
    }
    ulEl.innerHTML = listItems;
}


if(inpFromLocalStorage){
    myInp = inpFromLocalStorage;
    renderInp(myInp);
}


deleteBtn.addEventListener("dblclick" , function(){
    localStorage.clear();
    myInp = [];
    renderInp(myInp);
});

//  function renderInp(){
//      let listItems = "";
//      for( let i=0; i< myInp.length ; i++){
//          listItems += `<li>
//                          <a href="${myInp[i]}"  target="_blank">
//                              ${myInp[i] }
//                          </a>
//                        </li>`;
//      }
//      ulEl.innerHTML = listItems;
// }





