function closeFunc(){
    document.querySelector(".navlist").style.display = "none";
}

function openMenuFunc(){
    document.querySelector(".navlist").style.display = "block";
}

function showSearch(){
    document.querySelector(".search-inp").style.display = "inline-block";
}

function searchFunc() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("srch-inp");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


////////////FOR ITEMS////////////////////////////////////////////////////////////////


