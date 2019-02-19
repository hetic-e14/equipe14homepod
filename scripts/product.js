const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.sliderContainer')
const sliderImages = document.querySelectorAll('.sliderContainer img')
const step = 960 // definit le décalage
let pos = 0 // définit la position en cours.
let action
let paginationContent = '';//Ici c'est la variable du contenu de .sliderPagination
const sliderPagination = document.querySelector('.sliderPagination') //c'est noeud du .sliderPagination

playSlider()

leftButton.addEventListener('click',leftSlide)
rightButton.addEventListener('click',rightSlide)


//Pour n allant de 0 au nombre d'image du slider-1
for(n=0; n<= sliderImages.length-1; n++){

  //On ajoute une div à la div .sliderPagination
  paginationContent = paginationContent + '<div class="slider'+ n +'"></div>'
  sliderPagination.innerHTML= paginationContent
}

//On récupère les noeuds des div  pagination
const paginationButton0 = document.querySelector('.slider0')
const paginationButton1 = document.querySelector('.slider1')
const paginationButton2 = document.querySelector('.slider2')
const paginationButton3 = document.querySelector('.slider3')
const paginationButton4 = document.querySelector('.slider4')
const paginationButton5 = document.querySelector('.slider5')


paginationButton0.addEventListener('click', function(){ paginationClick(0) })
paginationButton1.addEventListener('click', function(){ paginationClick(1) })
paginationButton2.addEventListener('click', function(){ paginationClick(2) })
paginationButton3.addEventListener('click', function(){ paginationClick(3) })
paginationButton4.addEventListener('click', function(){ paginationClick(4) })
paginationButton5.addEventListener('click', function(){ paginationClick(5) })


function paginationClick(slideNumber)
{
  pos = slideNumber
  setPosition(pos)
}

function leftSlide(){
  pos--
  if(pos<0){
    pos=sliderImages.length-1
  }
  setPosition(pos)
}

function rightSlide(){
  pos++
  if(pos>=sliderImages.length){
    pos=0
  }
  setPosition(pos)
}

slider.addEventListener('mouseover',stopSlider)
slider.addEventListener('mouseout',playSlider)

rightButton.addEventListener('mouseover',stopSlider)
leftButton.addEventListener('mouseover',stopSlider)


function setPosition(pos)
{
  slider.style.left = -pos*step+'px' // 960px
}

function stopSlider()
{
  clearInterval(action)
}


function playSlider()
{
  action = setInterval(
    function()
    {
      pos = (pos+1)%sliderImages.length
      setPosition(pos)
    },
    3000 // toutes les 3 secondes
  )
}
