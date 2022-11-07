console.log("loaded");

const beerComponent = (name, price, rating) => `<div class="beer">
<h2>${name}</h2>
<h3>${price}</h3>
<h4>${rating}</h4>
</div>`


fetch("/beers")
.then(res => res.json())
.then(resJson => console.log(resJson));