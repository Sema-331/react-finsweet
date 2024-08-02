 window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    })
    document.querySelector('.menu__closest').addEventListener('click', function () {
      document.querySelector('#menu').classList.remove('is-active')
    })
})
document.body.addEventListener('click', e => {
  if (!e.target.matches('img')) return
  document.querySelector('.blog__list-block-img .blog__img').src = e.target.dataset.src
  
  document.querySelectorAll('img').forEach(btn => btn.classList.remove('active__img-block'))
  e.target.classList.add('active__img-block')
})


/*const searching = document.querySelector('.btn')
const search = document.querySelector('.nav__picture')
searching.onclick = function() {
  searching.classList.toggle('activee')
}
search.onclick = function() {
      document.getElementById('mySearch').value = '';
}
*/


/*console.log('test')
const tabs = document.querySelectorAll('.tag__business-block-content')
const content = document.querySelectorAll('.tag__block-cols')
for(let i = 0; i < tabs.length;i++) {
  tabs[i].addEventListener('click', (event) => {
    /*alert('test')
    //Удаляем класс
    let tbs = event.target.parentElement.children;
    for (let t=0; t < tbs.length; t++) {
      tbs[t].classList.remove('tag__business-list-item-active')
    }

    //Добавляем класс
    event.target.classList.add('tag__business-list-item-active')

    let tbsContent = event.target.parentElement.nextElementSibling.children;
    for (let c=0; c < tbsContent.length; c++) {
      tbsContent[c].classList.remove('tag__business-list-item-active')
    }

    //Добавляем класс
    content[i].classList.add('hidden-tab-content')
  })
}

let abcd = document.querySelectorAll('.tag__business-block-content')
let bcda = document.querySelectorAll('.tag__block-cols')
abcd.forEach(function(elem) {
  elem.addEventListener('click', activeTab)
})
function activeTab() {
  abcd.forEach(function(elem) {
    elem.classList.remove('tag__business-list-item-active')
  })
  this.classList.add('tag__business-list-item-active')
  let name = this.getAttribute('data-tab')
  console.log(name)

  activeTabContent(name)
}

function activeTabContent(name) {
  bcda.forEach(function(item) {
    if (item.classList.contains(name)) {
      item.classList.add('tag__business-list-item-active');
    } else {
      item.classList.remove('tag__business-list-item-active')
    }
  })
}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tag__business-block-header').forEach(function(tabsbtn) {
    tabsbtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.tag__block-cols').forEach(function(tabcontent) {
        tabcontent.classList.remove('tag__business-list-item-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tag__business-list-item-active')
    })
  })
})
*/

// ========== Переменные для "tabo'v" ==========
const tabsTitle = document.querySelectorAll('.tag__business-block-content');
const tabsContent = document.querySelectorAll('.tag__block-cols');


// Перебираем все заголовки табов и вешаем на них click
tabsTitle.forEach(item => item.addEventListener('click', event => {
    
    // Получаем атрибут заголовка на который мы кликнули конкретно!
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    // Удаляем от всех заголовков класс active-tab
    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    // Добавляем всем tab__content класс hidden-tab-content, который скрывает содержимое!
    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    // Добавляем класс active-tab, заголовку который нажали в данный момент!
    item.classList.add('active-tab');

    // Удаляем класс hidden-tab-content, чтобы показывалось его содержимое!
    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));

// Мы указываем, какая конктретно вкладка должна быть активна при загрузке страницы со старта,
// если нужно, чтобы все вкладки ыли скрыты изначально, то удалите код ниже!
document.querySelector('[data-tab="tab-2"]').classList.add('active-tab');
document.querySelector('#tab-2').classList.remove('hidden-tab-content');

/*const button = document.querySelectorAll('.tag__tags-list-item')
button.addEventListener('click', function() {
  this.classList.add('active__btn')
})
*/
onload = function ()
{
function Mout ()
   {
   this.style.backgroundColor = 'white';
   this.style.color = this.currentStyle ? this.currentStyle.borderTopColor
                    : getComputedStyle (this, null).getPropertyValue ('border-top-color');
   }
for (var B = document.querySelectorAll ('.btn.btn-primary'), j = 0, J = B.length; j < J; j++)
with (B [j]) onmouseover = function ()
                           {
                           this.style.backgroundColor = this.currentStyle ? this.currentStyle.borderTopColor
                                                      : getComputedStyle (this, null).getPropertyValue ('border-top-color');
                           this.style.color = 'white';
                           },
             onmouseout = Mout,
             onclick = function ()
                       {
                       if (this.onmouseout && !this.getAttribute ('tmr')) this.onmouseout = '', this.setAttribute ('tmr', +new Date);
                       else if (this.getAttribute ('tmr') && (+new Date - this.getAttribute ('tmr') > 2000)) onmouseout = Mout, this.setAttribute ('tmr', '');
                       this.blur ();
                       }
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
/*const tabTitle = document.querySelectorAll('.blog__btn-back');
const tabContent = document.querySelectorAll('.blog__second-block');


// Перебираем все заголовки табов и вешаем на них click
tabsTitle.forEach(item => item.addEventListener('click', event => {
    
    // Получаем атрибут заголовка на который мы кликнули конкретно!
    const tabTitleTarget = event.target.getAttribute('data-tab');

    // Удаляем от всех заголовков класс active-tab
    tabTitle.forEach(element => element.classList.remove('active-tab'));

    // Добавляем всем tab__content класс hidden-tab-content, который скрывает содержимое!
    tabContent.forEach(element => element.classList.add('hidden-btn-content'));

    // Добавляем класс active-tab, заголовку который нажали в данный момент!
    item.classList.add('active-tab');

    // Удаляем класс hidden-tab-content, чтобы показывалось его содержимое!
    document.getElementById(tabTitleTarget).classList.remove('hidden-btn-content');

}));
document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');
        

const icons = document.querySelector('.icon')
const search = document.querySelector ('.search')
const clean = document.querySelector ('.clear')
icons.onclick = function() {
  search.classList.toggle('active')
}
clean.onclick = function() {
  document.getElementById('my__searsh').value = '';
}
*/