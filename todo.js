let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Remove";
    delBtn.classList.add("Remove");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("removed");
    }
});
// // let delBtns = document.querySelectorAll(".Remove");
// // for(delBtn of delBtns){
// //     delBtn.addEventListener("click", function(){
// //         let par = this.parentElement;
// //         console.log(par);
// //         par.remove();
// //     });
// }