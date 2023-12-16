let delBtn = document.querySelector(".del-btn");
let popup = document.querySelector(".popup-box");
let profile = document.querySelector(".profile")

delBtn.addEventListener("click", function(){
    popup.style.display="block";
    delBtn.style.display="none";
    profile.style.display="none"
})

let cancel = document.querySelector(".cancel");
let delAc = document.querySelector(".delete");
let msg = document.querySelector(".delete-msg");

cancel.addEventListener("click", function(){
    popup.style.display= "none";
    delBtn.style.display="";
    profile.style.display="";
})
delAc.addEventListener("click", function(){
    popup.style.display= "none";
    msg.innerText="Your Account has been Permanently Deleted ✓"
    msg.style.color= "green"
})
