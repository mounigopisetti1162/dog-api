document.body.innerHTML=`<div class="heading"> <h4 id="intro">GET YOUR DOG</h4>
<img class="image" src="https://tse1.mm.bing.net/th?id=OIP.SlnjMSdNaDSG00NjiyOZEQHaFD&pid=Api&rs=1&c=1&qlt=95&w=141&h=96">
<br><button class="DOG" onclick="getdog()">BOWWWWWWWW </button>
</div>
<div id="main"></div>`


async function getdog()
{
let data=await fetch("https://dog.ceo/api/breeds/image/random")
let dog=await data.json()
main.innerHTML=`<div class="image"> <img  class="dogimage" src=${dog.message}>
</div>`
}