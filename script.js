let barsleftcontent = document.querySelector('#bars-left-content')
let  navbar = document.querySelector('.navbar')
let closeicone = document.querySelector('.close-icone')

    barsleftcontent.addEventListener('click', function(){
      navbar.classList.toggle('active')
    })
    closeicone.addEventListener('click', function(){
      navbar.classList.remove('active')
    })

    // --------shopping navbar drop down sec ----

// let questionfaq = document.querySelectorAll('#question-faq')

// questionfaq.forEach(function(clickbuttons){
   
//   clickbuttons.addEventListener('click', function(){
//     clickbuttons.classList.contains('active')
//  if(clickbuttons > 0){
//   clickbuttons.classList.remove('active')
//  }else{
//   clickbuttons.classList.add('active')
//  }
    
//   })
  
// })

let questionfaq = document.querySelectorAll('#question-faq')

questionfaq.forEach((clickbuttons) =>{
 
      clickbuttons.addEventListener('click', () =>{
        let isActive = clickbuttons.classList.contains('active');

        questionfaq.forEach((el) =>{
            
            el.classList.remove('active')
        })

        if(isActive > 0) clickbuttons.classList.remove('active')
        else clickbuttons.classList.add('active')

      });
});

let daysitem = document.querySelector('#days')
let hoursitem = document.querySelector('#hours')
let minuteitem = document.querySelector('#minutes')
let seconditem = document.querySelector('#seconds')

let countDown = () =>{
  let futureDate = new Date('30 oct 2025');
  let currentDate  = new Date();
  let myDate = futureDate - currentDate;
  if(myDate < 0)return;
  // console.log(myDate)
  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(myDate / 1000 / 60) % 60;
  let seconds = Math.floor(myDate / 1000) % 60;

  daysitem.innerHTML = days;
  hoursitem.innerHTML = hours;
   minuteitem.innerHTML = minutes;
   seconditem.innerHTML = seconds;

}
countDown();
setInterval (countDown, 1000)



let days = document.querySelector('#days1')
let hours = document.querySelector('#hours1')
let minute = document.querySelector('#minutes1')
let seconds = document.querySelector('#seconds1')

let countingDown = () =>{
  let futureDate = new Date('30 september 2025');
  let currentDate  = new Date();
  let myDate = futureDate - currentDate;
  if(myDate < 0)return;
  // console.log(myDate)
  let days1 = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours1 = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let minutes1 = Math.floor(myDate / 1000 / 60) % 60;
  let seconds1 = Math.floor(myDate / 1000) % 60;

  days.innerHTML = days1;
  hours.innerHTML = hours1;
   minute.innerHTML = minutes1;
   seconds.innerHTML = seconds1;

}
countingDown();
setInterval (countingDown, 1000)

function changeImage(x,image)
{
  if(x == 1){
    image.src = 'images/products/jacket-4.jpg';
  }
  if(x == 2){
    image.src = 'images/products/jacket-3.jpg';
  }
}

function changeimage(x,image)
{
  if(x == 1){
    image.src = 'images/products/shirt-2.jpg';
  }
  if(x == 2){
    image.src = 'images/products/shirt-1.jpg';
  }
}


function Changeimage(x,image)
{
  if(x == 1){
    image.src = 'images/products/jacket-6.jpg';
  }
  if(x == 2){
    image.src = 'images/products/jacket-5.jpg';
  }
}

function CHangeimage(x,image)
{
  if(x == 1){
    image.src = 'images/products/clothes-4.jpg';
  }
  if(x == 2){
    image.src = 'images/products/clothes-3.jpg';
  }
}

function CHAngeimage(x,image)
{
  if(x == 1){
    image.src = 'images/products/shoe-2_1.jpg';
  }
  if(x == 2){
    image.src = 'images/products/shoe-2.jpg';
  }
}

function CHANgeimage(x,image)
{
  if(x == 1){
    image.src = 'images/products/watch-4.jpg';
  }
  if(x == 2){
    image.src = 'images/products/watch-3.jpg';
  }
}

function CHANGeimage(x,image)
{
  if(x == 1){
    image.src = 'images/products/watch-2.jpg';
  }
  if(x == 2){
    image.src = 'images/products/watch-1.jpg';
  }
}

function CHANGEimage(x,image)
{
  if(x == 1){
    image.src = 'images/products/shorts-2.jpg';
  }
  if(x == 2){
    image.src = 'images/products/shorts-1.jpg';
  }
}

function CHANGEImage(x,image)
{
  if(x == 1){
    image.src = 'images/products/jacket-2.jpg';
  }
  if(x == 2){
    image.src = 'images/products/jacket-1.jpg';
  }
}

function CHANGEIMage(x,image)
{
  if(x == 1){
    image.src = 'images/products/sports-4.jpg';
  }
  if(x == 2){
    image.src = 'images/products/sports-2.jpg';
  }
}

function CHANGEIMAge(x,image)
{
  if(x == 1){
    image.src = 'images/products/shoe-1_1.jpg';
  }
  if(x == 2){
    image.src = 'images/products/shoe-1.jpg';
  }
}


