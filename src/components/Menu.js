import React from 'react'

function Menu() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="nav">
            <ul id="menu">
                <li><a href="#home" id="menuList" onClick={(e) => handleScroll(e, 'home')}>Главная</a></li>
                <li><a href="#about" id="menuList" onClick={(e) => handleScroll(e, 'about')}>Обо мне</a></li>
                <li><a href="#projects" id="menuList" onClick={(e) => handleScroll(e, 'projects')}>Проекты</a></li>
                <li><a href="#skills" id="menuList" onClick={(e) => handleScroll(e, 'skills')}>Навыки</a></li>
                <li><a href="#feedback" id="menuList" onClick={(e) => handleScroll(e, 'feedback')}>Отзывы</a></li>
                <li><a href="#callback" id="menuList" onClick={(e) => handleScroll(e, 'callback')}>Обратная связь</a></li>
                <li><a href="#order" id="menuList" onClick={(e) => handleScroll(e, 'order')}>Оставить заявку</a></li>
                <li><a href="#contacts" id="menuList" onClick={(e) => handleScroll(e, 'contacts')}>Контакты</a></li>
            </ul>
        </div>
    );
}

export default Menu