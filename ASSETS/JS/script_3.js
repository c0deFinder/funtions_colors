function pintar(ele ,color = "green"){
    ele.style.backgroundColor = color;
}
let ele  = document.getElementById("ele1");
let color = "yellow";

ele.addEventListener("click", () => pintar(ele,color));