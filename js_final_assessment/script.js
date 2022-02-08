'use strict';

//-------Selecting div element present in html------//

let cards=document.querySelector('.recipiesCard');
cards.classList.add('card');

//asynchronous function to fetch api data

const showRestaurents= async function(){
    try{
        const rest =await fetch(' https://6193976ed3ae6d0017da86a1.mockapi.io/api/restaurants '

      );
      const data= await rest.json();

      console.log(rest,data);

// TO store the data in local Storage

localStorage.setItem('data',JSON.stringify(data));
console.log(localStorage.getItem('data'));

// Accessing the data from localStorage

for(let i=0;i<=data.length-1;i++){
     const makeUp1=`     
<figure>
<img src="${data[i].img}"  alt="biryani"/>
<ul class="food">
  <li>
    <span class="tag-veg meal-tags">${data[i].foodType}</span>
  </li>
  <li><h3>${data[i].name}</h3> </li>
  <li> 
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
        
  <span class="text">${data[i].ratings} ratings</span>
  </li>
</ul>
</div>
</figure>        
 `;
 cards.insertAdjacentHTML('beforeend',makeUp1);
 cards.classList.add('food','shawdow');
}
 
    }
    catch(err){
        alert(err);
    }
}

showRestaurents();


//-------Storing data for menu option-------------
const dishes=document.getElementById('dish');
dishes.classList.add('hidden','food','card','recipesCard');
const secRest=document.getElementById('second');
secRest.classList.add('hidden','food','card','recipesCard');
const dish1=
    {
       img:'images/image--1.jpg ',
       dishName: "Chicken Biriyani ",
       price:499,
       id:1,
    };

const dish2= {
       img:"images/image--3.jpg ",
       dishName:"Pasta",
       price:200,
       id:2,
    };

const dish3= {
    img:"images/image--5.jpg ",
    dishName:"Chieese Pizza ",
    price:400,
    id:3,

    };
const dish4=
    {
       img:'images/cake--4.jpg ',
       dishName: "Choclate Cake ",
       price:699,
       id:4,
    };

const dish5=    {
       img:"images/cake--3.jpg ",
       dishName:"Red Velvet",
       price:587,
       id:5,

    };

const dish6= {
        img:"images/image--1.jpg ",
        dishName:"Chicken Biriyani ",
        price:570,
        id:6,

    };

   

const menu=[dish1,dish2,dish3,dish4,dish5,dish6];    
const menu1=[dish1,dish2,dish3];
//console.log(menu1);
localStorage.setItem('menu',JSON.stringify(menu));
console.log(localStorage.getItem('menu'));

dishes.classList.add('text')
secRest.classList.add('text');
const menu2=[dish4,dish5,dish6];

localStorage.setItem('menu1',JSON.stringify(menu1));
console.log(localStorage.getItem('menu1'));

//Creating Menus for first restaurent
for(let i=0;i<=menu1.length-1;i++){
  const  firstRestaurent=`     
<figure>

<ul class="food">
       <li><img src="${menu1[i].img}" class="shop-item-image" alt="biryani"/></li>
       <li><h3 class="shop-item-title">${menu1[i].dishName}</h3> </li>
       <li>
        <span class="text shop-item-price">${menu1[i].price}</span>
       </li>
       <li>
            <button class="shop-item-button">Add to cart </button> 
       <li>
</ul>
</div>
</figure>        
 `;
 dishes.insertAdjacentHTML('beforeend',firstRestaurent);
}
// <span> &#8377; </span>

localStorage.setItem('menu2',JSON.stringify(menu1));
console.log(localStorage.getItem('menu2'));

//Creating menu for Second restaurent

for(let i=0;i<=menu2.length-1;i++){
  const  secondRestaurent=`     
<figure>
  <ul class="food">
    <li>
    <img src="${menu2[i].img}" class="shop-item-image" alt="biryani"/>
    </li>
    <li>
      <h3>${menu2[i].dishName}</h3> 
    </li>
    <li>
      <span class="text">${menu2[i].price}</span>
    </li>
    <li>
      <button class="shop-item-button">Add to cart </button> 
    <li>
  </ul>

</figure>        
 `;
 secRest.insertAdjacentHTML('beforeend',secondRestaurent);
}


console.log(localStorage);
const firstMenu=document.getElementById('rest1');
const secondMenu=document.getElementById('rest2');
const restaurent=document.getElementById('rest');

function disp() {
  restaurent.classList.remove('hidden');
  cards.classList.add('hidden');
}


firstMenu.addEventListener('click',function()
{
    
    dishes.classList.remove('hidden');
    secRest.classList.add('hidden');
    secondMenu.classList.add('hidden');
    disp();
});

secondMenu.addEventListener('click',function()
{
    
    dishes.classList.add('hidden');
    secRest.classList.remove('hidden');
    firstMenu.classList.add('hidden');
    disp();
});

restaurent.addEventListener('click',function(){
    
  cards.classList.toggle('hidden');
  dishes.classList.add('hidden');
  secRest.classList.add('hidden');
  firstMenu.classList.remove('hidden');
  secondMenu.classList.remove('hidden');
  restaurent.classList.add('hidden');

})
//------login form-----
let name=localStorage.removeItem('name')? localStorage.getItem('name'):''
console.log(name);
if(name='')
{
  alert('you need to login first');
  window.location.href="ogin1.html";
}

//-----for user logout-----
function Logout()
{
  localStorage.removeItem('userOne.username');
  localStorage.removeItem('email');
  window.location.href="./singin.html"
}



