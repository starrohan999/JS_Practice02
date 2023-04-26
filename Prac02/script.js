console.log("hello world")
const getColor = ()=>
{
    const randomNumber=Math.floor(Math.random()*1677215);
    const randomCode="#"+randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-el").textContent=randomCode
    console.log(randomNumber,randomCode);
}
// here is our event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//init call
getColor();

