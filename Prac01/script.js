function changeTheImage()
{
    let newImg=document.getElementById("img1");
    if (newImg.src.match("./Img1.png")) 
    {
        newImg.src = "./Img2.png";

    } 
    else
    {
        newImg.src = "./Img1.png";
    }
}