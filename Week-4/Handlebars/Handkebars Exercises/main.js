
//***********************Ex1***************************//

// const items = [
//     { item: "cheese", price: 15 },
//     { item: "arak", price: 68 },
//     { item: "hummus", price: 15 },
//     { item: "pita", price: 5 }
//   ]
  
//   const source = $('#store-template').html();
//   const template = Handlebars.compile(source);
  
//   for(let item of items){
//     let newHTML = template(item);
//     $('.items').append(newHTML);  
//   }


  //***********************Ex2***************************//
//   const classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ],
//     classmates1: [
//         {name: "That on gal", description: "Always has the ansswer"}
//     ]
// }

// const source1 = $('#students-template').html();
//   const template = Handlebars.compile(source1);
//   let newHTML = template(classData);
//   $(".students").append(newHTML)


  //***********************Ex3***************************//
//   const menuData = {
//     menu: [
//       { name: "Google", link: "http://google.com", socialNetwork:true },
//       { name: "Facebook", link: "http://facebook.com",  socialNetwork:false },
//       { name: "Instagram", link: "http://nstagram.com",  socialNetwork:true },
//       { name: "Twitter", link: "http://twitter.com" ,  socialNetwork:false},
//     ]
//   };
  
//   const source = $('#menu-template').html();
//   const template = Handlebars.compile(source);
//   const newHTML = template(menuData);
  
//   // append our new html to the page
//   $('.menu').append(newHTML);

  //***********************Ex4***************************//
const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const source1 = $('#first-template').html();
const template = Handlebars.compile(source1);
let newHTML = template(animals);
$("body").append(newHTML)


