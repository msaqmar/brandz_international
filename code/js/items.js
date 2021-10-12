function itemFunc(){
    var val = document.querySelector("#view-products").value;
    if(val == "mask"){ 
        document.querySelector(".mask-section").style.display = "block";
        window.location.href = "/code/itemspage.html";  
    }
    
}