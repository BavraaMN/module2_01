'use strict'


// удаляем dıv ads 

const boxes = document.querySelectorAll('.ads');
//console.log(boxes);
boxes.forEach(box => {
  box.remove();
});



const item_one=document.querySelectorAll('.props__item_one');
const item_two=document.querySelectorAll('.props__item_two');
const item_three=document.querySelectorAll('.props__item_three');
const item_four=document.querySelectorAll('.props__item_four');
const item_five=document.querySelectorAll('.props__item_five');
const item_six=document.querySelectorAll('.props__item_six');

console.log(item_one);
console.log(item_two);
console.log(item_three);
console.log(item_four);
console.log(item_five);
console.log(item_six);

item_four[2].after(item_four[5]);

item_two[7].after(item_two[8]);
item_two[8].after(item_two[9]);


const itemsList = document.getElementsByClassName('item');

itemsList[3].after(itemsList[0]);

const itemTitles = document.getElementsByClassName('item__title');
itemTitles[0].after(itemTitles[3]);


const itemImages = document.getElementsByClassName('item__image');
itemImages[4].after(itemTitles[4]);
itemImages[5].after(itemTitles[0]);

const propsLists = document.querySelectorAll('.props__list');

propsLists[2].before(propsLists[4]);
itemTitles[3].after(propsLists[2]);



/* const lists=  document.querySelectorAll('.props__list');


const item_one=document.querySelectorAll('.props__item_one');
const item_two=document.querySelectorAll('.props__item_two');
const item_three=document.querySelectorAll('.props__item_three');
const item_four=document.querySelectorAll('.props__item_four');
const item_five=document.querySelectorAll('.props__item_five');
const item_six=document.querySelectorAll('.props__item_six');

console.log(item_one);
console.log(item_two);
console.log(item_three);
console.log(item_four);
console.log(item_five);
console.log(item_six);

//const mycontainer=document.querySelector('.container .props__list .props__item_four:nth-child(2)').remove();

item_four[2].after(item_four[5]);

item_two[7].after(item_two[8]);
item_two[8].after(item_two[9]);*/


//console.log(mycontainer);

//console.log(items);

/*items.forEach(item=>{
  //  console.log(item);
  //  item.remove();
})*/




//console.log(document);
//console.log(id);


//const propslist=document.querySelectorAll('.props__list');

//propslist.forEach(element =>element.remove());


//{console.log(element.childNodes[0]);
    
