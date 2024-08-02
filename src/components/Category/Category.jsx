import React, { useEffect, useState } from "react";
import black from './../../image/mainImage/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.png'
import white from './../../image/mainImage/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.png'
import walk from './../../image/mainImage/photo-of-people-walking-on-hallway-3182811.png'
import contents from './../../image/mainImage/content.png'
import concrete from './../../image/mainImage/white-concrete-building-1838640.png'
import business from './../../image/icons/business-and-trade 1.png'
import build from './../../image/icons/Icon.png'
import rocket from './../../image/icons/Icon.png'
import arrow from './../../image/icons/icons.png'
import photo from './../../image/mainImage/photo-of-woman-wearing-eyeglasses-3184405.png'
import blackCrew from './../../image/mainImage/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.png'
import look from './../../image/mainImage/photo-of-woman-looking-at-man-3183173.png'
import ground from './../../image/mainImage/ground-group-growth-hands-461049.png'
import closeUp from './../../image/mainImage/close-up-photography-of-man-wearing-sunglasses-1212984.png'


function Category() {

    const [state, setState] = useState(true)

    useEffect(() => {
        document.addEventListener('click', handleClickChangeColor)
        return () => {
            document.removeEventListener('click', handleClickChangeColor)
        }
    },['.btn', state])

    useEffect(() => {
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
    }, ['.tag__business-block-content', 'active-tab'])

    const handleClickChangeColor = () => {
        const a = document.querySelectorAll('.btn')
        a.forEach((e) => {
            e.onclick = function() {
                if(state === false) {
                setState(!state)
                this.style.color = '#fff'
                this.style.backgroundColor = '#ff9900'
                this.classList.add('black')
                console.log(state)
            } else if (state === true) {
                setState(!state) 
                this.style.color = '#000'
                this.style.backgroundColor = '#fff'
                console.log(state)
            }
        }
        }) 
    }

    return(
        <main>
        <section className= "group">
            <div className="container">
                <div className="group__block">
                    <div className="group__block-description">
                        <h2 className="group__header">
                            Business
                        </h2>
                        <p className="group__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <p className="group__description-end">
                            Blog Business
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="tag" id="first__category">
            <div className="container">
                <div className="tag__block">
                    <div className="tag__block-cols hidden-tab-content" id = "tab-1">
                        <ul className="tag__list-box"> 
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={black} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Startup
                                        </p>
                                        <h2 className="tag__header">
                                            Top 6 free website mockup tools 2022
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={black} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Startup
                                        </p>
                                        <h2 className="tag__header">
                                            Step-by-step guide to choosing great font pairs
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={white} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Startup
                                        </p>
                                        <h2 className="tag__header">
                                            Ten free foogle fonts that you should use
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={walk} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Startup
                                        </p>
                                        <h2 className="tag__header">
                                            What did I learn from doing 50+ design sprints?
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tag__block-cols hidden-tab-content" id = "tab-2">
                        <ul className="tag__list-box">
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={contents} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Business
                                        </p>
                                        <h2 className="tag__header">
                                            Top 6 free website mockup tools 2022
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={contents} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Business
                                        </p>
                                        <h2 className="tag__header">
                                            Step-by-step guide to choosing great font pairs
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={contents} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Business
                                        </p>
                                        <h2 className="tag__header">
                                            Ten free foogle fonts that you should use
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={contents} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Business
                                        </p>
                                        <h2 className="tag__header">
                                            What did I learn from doing 50+ design sprints?
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tag__block-cols hidden-tab-content" id = "tab-3">
                        <ul className="tag__list-box">
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={contents} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Economy
                                        </p>
                                        <h2 className="tag__header">
                                            Top 6 free website mockup tools 2022
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={concrete} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Economy
                                        </p>
                                        <h2 className="tag__header">
                                            Step-by-step guide to choosing great font pairs
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={photo} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Economy
                                        </p>
                                        <h2 className="tag__header">
                                            Ten free foogle fonts that you should use
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={look} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Economy
                                        </p>
                                        <h2 className="tag__header">
                                            What did I learn from doing 50+ design sprints?
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tag__block-cols hidden-tab-content" id = "tab-4">
                        <ul className="tag__list-box">
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={ground} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Technology
                                        </p>
                                        <h2 className="tag__header">
                                            Top 6 free website mockup tools 2022
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={closeUp} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Technology
                                        </p>
                                        <h2 className="tag__header">
                                            Step-by-step guide to choosing great font pairs
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={contents} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Technology
                                        </p>
                                        <h2 className="tag__header">
                                            Ten free foogle fonts that you should use
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="tag__list-item">
                                <div className="tag__block-list-item">
                                    <div className="tag__block-img-content">
                                        <img src={blackCrew} alt="Картинка:(" className="tag__img" />
                                    </div>
                                    <div className="tag__block-description-content">
                                        <p className="tag__description-start">
                                            Technology
                                        </p>
                                        <h2 className="tag__header">
                                            What did I learn from doing 50+ design sprints?
                                        </h2>
                                        <p className="tag__description-end">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tag__business-block" >
                        <h2 className="tag__business-header">
                            Categories
                        </h2>
                        <ul className="tag__business-list-box">
                            <li className="tag__business-list-item" tabindex="0">
                                <div className="tag__business-block-content" data-tab="tab-1">
                                    <img src={build} alt="Картинка:(" className="tag__business-first-img" />
                                    <button className="tag__business-block-header" data-tab="tab-1">
                                        Startup
                                    </button>
                                </div>
                            </li>
                            <li className="tag__business-list-item" tabindex="0">
                                <div className="tag__business-block-content tag__business-list-item-active" data-tab="tab-2">
                                    <img src={rocket} alt="Картинка:(" className="tag__business-img" />
                                    <button className="tag__business-block-header" data-tab="tab-2">
                                        Business 
                                    </button>
                                </div>
                            </li>
                            <li className="tag__business-list-item" tabindex="0">
                                <div className="tag__business-block-content" data-tab="tab-3">
                                    <img src={arrow} alt="Картинка:(" className="tag__business-img" />
                                    <button className="tag__business-block-header" data-tab="tab-3">
                                        Economy
                                    </button>
                                </div>
                            </li>
                            <li className="tag__business-list-item" tabindex="0">
                                <div className="tag__business-block-content" data-tab="tab-4">
                                    <img src={business} alt="Картинка:(" className="tag__business-img" />
                                    <button className="tag__business-block-header" data-tab="tab-4">
                                        Technology
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <h2 className="tag__header-tags">
                            All Tags
                        </h2>
                        <ul className="tag__tags-list-box">
                            <li className= "tag__tags-list-item tag__tags-list-item" data-color = "#FFD050" tabindex="0"> 
                                    <button type="button" className='btn btn-primary button_active' style={{border: 'solid 0px #FFD050',  borderRadius: '10px'}}>
                                        Business
                                    </button>
                            </li>
                            <li className="tag__tags-list-item tag__tags-list-item-second" data-color = "#FFD050" tabindex="0">
                                    <button type="button" className="btn btn-primary button_active" style={{border: 'solid 0px #FFD050',  borderRadius: '10px'}}>
                                        Experience
                                    </button>
                            </li>
                            <li className="tag__tags-list-item tag__tags-list-item-third" data-color = "#FFD050" tabindex="0">
                                    <button type="button" className="btn btn-primary button_active" style={{border: 'solid 0px #FFD050',  borderRadius: '10px'}}>
                                        Screen
                                    </button>
                            </li>
                            <li className="tag__tags-list-item tag__tags-list-item-fird" data-color = "#FFD050" tabindex="0">
                                    <button type="button" className="btn btn-primary button_active" style={{border: 'solid 0px #FFD050',  borderRadius: '10px'}}>
                                        Technology
                                    </button>
                            </li>
                            <li className="tag__tags-list-item tag__tags-list-item-fifth" data-color = "#FFD050" tabindex="0">
                                <button type="button" className="btn btn-primary button_active" style={{border: 'solid 0px #FFD050',  borderRadius: '10px'}}>
                                        Marketing
                                    </button>
                            </li>
                            <li className="tag__tags-list-item tag__tags-list-item-sixth" data-color="#FFD050" tabindex="0">
                                    <button type="button" className="btn btn-primary button_active" style={{border: 'solid 0px #FFD050',  borderRadius: '10px'}}>
                                        Life
                                    </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
//tag__tags-active

export default Category