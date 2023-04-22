document.body.innerHTML=`<div class="heading"> <h4 id="intro">GET YOUR DOG</h4>

<div class="head">

<div class="btn">
<button class="dogbtn" onclick="getdog()">BOWWWWWWWW </button>
<div id="main">

</div>


</div>
</div>
</div>`



async function getdog()
{
let data=await fetch("https://dog.ceo/api/breeds/image/random")
let dog=await data.json()
main.innerHTML=`<div class="image"> <img  class="dogimage" src=${dog.message}>
</div>`
}