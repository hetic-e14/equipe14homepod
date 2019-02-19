const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.landing_Page_Slider')
const sliderImages = document.querySelectorAll('.landing_Page_Slider img')
const step = 1300 // definit le décalage
let pos = 0 // définit la position en cours.
let action
let paginationContent = '';//Ici c'est la variable du contenu de .sliderPagination
const sliderPagination = document.querySelector('.landing_Page_Slider_Page') //c'est noeud du .sliderPagination

playSlider()

leftButton.addEventListener('click',leftSlide)
rightButton.addEventListener('click',rightSlide)

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

leftButton.addEventListener('mouseover',stopSlider)
leftButton.addEventListener('mouseout',playSlider)
rightButton.addEventListener('mouseover',stopSlider)
rightButton.addEventListener('mouseout',playSlider)

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
