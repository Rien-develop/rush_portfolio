const popClose = document.querySelector('.pop_close')
const pop = document.querySelector('.pop')

popClose.addEventListener('click', function () {
  pop.style.display = 'none'
})


// top으로 이동

const toTop = document.querySelector('#top')

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    toTop.classList.add('toTop')
  } else {
    toTop.classList.remove('toTop')
  }
  if (window.scrollY > 0) {
    header.classList.add('header')
  } else {
    header.classList.remove('header')
  }
})

toTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


// 베스트 메뉴 슬라이드

const on = document.querySelectorAll('#roll a')
const bMenu = document.querySelectorAll('.b_menu')

for (let i = 0; i < on.length; i++) {

  on[i].addEventListener('click', List);


  function List(e) {
    for (let i = 0; i < on.length; i++) {
      on[i].classList.remove('on')
      bMenu[i].classList.remove('active')
    }

    bMenu[i].classList.add('active')
    on[i].classList.add('on')
    e.preventDefault()
  }
}

let btnNum = 0
const notMove = setInterval(function () {
  btnNum++
  if (btnNum > 2) {
    btnNum = 0
  }
  on[btnNum].click()
}, 5000)

// 메인배너 슬라이드


$('.slide_banner').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 5000,
  slidesToShow:1,
  slidesToScroll:1,
  arrows: false
})