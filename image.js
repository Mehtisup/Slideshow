<!DOCTYPE html>
<html>
<head>
<title>$UP</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
    box-sizing:border-box;
}
body {
    font-family:Arial, Helvetica, sans-serif;
}
.content {
    position:relative;
    max-width: 1000px;
    margin:auto;
}
.item {
    position: absolute;
    transition: 0.5s;
}
img {
    height: 400px;
}

.prev , .next {
    background-color: rgb(0, 122, 128);
    color:white;
    font-size: 40px;
    width:auto;
    text-decoration: none;
    top: 93%;
    color:white;
    margin-top: 130px;
    font-weight:bold;
    position: absolute;
    z-index:99 ;
    transition:0.5s;
    cursor: pointer;
    padding: 10px;
    border-radius:0px 3px 3px 0px;
}
.next {
    border-radius:3px 0px 0px 3px;
    right: 0;
}
</style> 
</head>
<body>

<div class="content">
    <div class="item">
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" style="width:100%">
    </div>
    <div class="item">
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%">
    </div>

    <a href="#" class="prev" onclick="moveFun(-1)"><</a>
    <a href="#" class="next" onclick="moveFun(1)">></a>



</div>




<script>
let x = 1;
showSlides(x);

function moveFun(n) {
    showSlides(x += n);
}

function showSlides(n) {
    let i;
    let faa = document.getElementsByClassName("fak");
    let sli = document.getElementsByClassName("item");
    if (n > sli.length) {x = 1}
    if (n < 1) {x = sli.length}
    for (i = 0 ; i < sli.length ; i++) {
        sli[i].style.transition = "0.5s";
        sli[i].style.width = "100%";
    } 
    sli[x-1].style.width = "0%";
    sli[x-1].style.transition = "0.5s";
}
</script>

</body>
</html>
