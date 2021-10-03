//Переменные 
let language = "eng";
let menu_nav = "Home";
let staus_active = false;

    


//переключение на русский язык
function select_language_ru(){
    if(language == "ru"){
        console.log("И так установлен русский язык");
        return; 
    }
    let Element = document.querySelector("#HomeID");
    Element.textContent = "Гланая";

    Element = document.querySelector("#AboutID");
    Element.textContent = "Обо мне";

    Element = document.querySelector("#SkillsID");
    Element.textContent = "Умения";

    Element = document.querySelector("#PortfolioID");
    Element.textContent = "Портфолио";

    Element = document.querySelector("#ContactsID");
    Element.textContent = "Контакты";

    Element = document.querySelector(".MainText-aboutme");
    Element.textContent = "Обо мне";

    Element = document.querySelector(".Skills-mainText");
    Element.textContent = "Умения";

    Element = document.querySelector(".portfolio-maintext");
    Element.textContent = "Портфолио";

    Element = document.querySelector(".contacts");
    Element.textContent = "Контакты";
   
    Element = document.querySelector(".footer-button");
    Element.textContent = "Отправить сообщение";

    Element = document.querySelector(".textDesigner");
    Element.textContent = "UX|UI Дизайнер";

    Element = document.querySelector(".YearsOldMe");
    Element.textContent = "24 года, Минск";

    Element = document.querySelector(".footer-text");
    Element.textContent = "Хотите узнать больше или просто поболтать?";

    Element = document.querySelector(".Skills-Text");
    Element.textContent = "Я работаю в таких программах как";

    Element = document.querySelector(".head-name");
    Element.textContent = "Денис Новик";

    Element = document.querySelector(".text-aboutme_part_1");
    Element.textContent = "Привет, я Денис - UX / UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.";

    Element = document.querySelector(".text-aboutme_part_2");
    Element.textContent = "Я учусь на курсах «Веб и мобильный дизайн интерфейсов» в IT-Академии.";

    Element = document.querySelector(".text-aboutme_part_3");
    Element.textContent = "Готовы реализовывать отличные проекты с замечательными людьми.";

    
    let ElementENG = document.querySelector(".eng-head");
    let ElementRU = document.querySelector(".ru-head");
    ElementENG.style.color = "#828282";
    ElementRU.style.color = "#070707";

    let ElementENG_mobile = document.querySelector(".eng");
    let ElementRU_mobile = document.querySelector(".ru");
    ElementENG_mobile.style.color = "#828282";
    ElementRU_mobile.style.color = "#070707";

    language = "ru";
    console.log("Язык изменен на русский");
}

//переключение на английский язык
function select_language_eng(){
    if(language == "eng"){
        console.log("И так установлен английский язык");
        return; 
    }

    let Element = document.querySelector("#HomeID");
    Element.textContent = "Home";

    Element = document.querySelector("#AboutID");
    Element.textContent = "About me";

    Element = document.querySelector("#SkillsID");
    Element.textContent = "Skills";

    Element = document.querySelector("#PortfolioID");
    Element.textContent = "Portfolio";

    Element = document.querySelector("#ContactsID");
    Element.textContent = "Contacts";

    Element = document.querySelector(".MainText-aboutme");
    Element.textContent = "About me";

    Element = document.querySelector(".Skills-mainText");
    Element.textContent = "Skills";

    Element = document.querySelector(".portfolio-maintext");
    Element.textContent = "Portfolio";

    Element = document.querySelector(".contacts");
    Element.textContent = "Contacts";

    Element = document.querySelector(".footer-button");
    Element.textContent = "Send message";

    Element = document.querySelector(".textDesigner");
    Element.textContent = "UX|UI designer";

    Element = document.querySelector(".YearsOldMe");
    Element.textContent = "24 years old, Minsk";

    Element = document.querySelector(".footer-text");
    Element.textContent = "Want to know more or just chat? You are welcome!";

    Element = document.querySelector(".Skills-Text");
    Element.textContent = "I work in such programs as";

    Element = document.querySelector(".head-name");
    Element.textContent = "Denis Novik";

    Element = document.querySelector(".text-aboutme");
    Element.innerHTML = `<span class="text-aboutme_part_1">Hi, I'm Denis – UX/UI designer from Minsk.<br>I'm interested in design and everything connected with it.<br></span><div class="marginAboutMe text-aboutme_part_2"> I'm studying at courses "Web and mobile design <br>interfaces" in IT-Academy.</div> <span class="text-aboutme_part_3">Ready to implement excellent projects<br> with wonderful people.</span>`


    let ElementENG = document.querySelector(".eng-head");
    let ElementRU = document.querySelector(".ru-head");
    ElementRU.style.color = "#828282";
    ElementENG.style.color = "#070707";


    let ElementENG_mobile = document.querySelector(".eng");
    let ElementRU_mobile = document.querySelector(".ru");
    ElementRU_mobile.style.color = "#828282";
    ElementENG_mobile.style.color = "#070707";

    language = "eng";
    console.log("Язык изменен на Английский");
}


//Навигиция по меню для полной версии
function menu_navigation_full(nav){
    if(nav == menu_nav)
    {
        console.log("Кнопка уже нажата");
        return;
    }

    if(nav == "About"){
        window.scrollTo({
            top: 750,
            left: 0,
            behavior:"smooth"
        }); 
        $('.header_burger, .header-menu, body').removeClass('active');
        staus_active = false
    }

    if(nav == "Skills"){
        window.scrollTo({
            top: 1250,
            left: 0,
            behavior:"smooth"
        }); 
        $('.header_burger, .header-menu, body').removeClass('active');
        staus_active = false
    }

    if(nav == "Portfolio"){
        window.scrollTo({
            top: 1850,
            left: 0,
            behavior:"smooth"
        }); 
        $('.header_burger, .header-menu, body').removeClass('active');
        staus_active = false
    }

    if(nav == "Contacts"){
        window.scrollTo({
            top: 6000,
            left: 0,
            behavior:"smooth"
        });
        $('.header_burger, .header-menu, body').removeClass('active');
        staus_active = false
    }
}

//Навигиция по меню для адаптивной версии
function menu_navigation_min(nav){
    if(nav == menu_nav)
    {
        console.log("Кнопка уже нажата");
        return;
    }

    if(nav == "About"){
        window.scrollTo({
            top: 650,
            left: 0,
            behavior:"smooth"
        }); 
        $('.header_burger, .header-menu, body').removeClass('active');
        staus_active = false
    }

    if(nav == "Skills"){
        window.scrollTo({
            top: 1350,
            left: 0,
            behavior:"smooth"
        }); 
        $('.header_burger, .header-menu, body').removeClass('active');
        staus_active = false
    }

    if(nav == "Portfolio"){
        window.scrollTo({
            top: 2850,
            left: 0,
            behavior:"smooth"
        }); 
        $('.header_burger, .header-menu, body').removeClass('active');
        staus_active = false
    }

    if(nav == "Contacts"){
        window.scrollTo({
            top: 6000,
            left: 0,
            behavior:"smooth"
        });
        $('.header_burger, .header-menu, body').removeClass('active');
        staus_active = false
    }
}

//Функция навигации по меню 
function menu_navigation(nav){
    
    const windowHeight = document.documentElement.scrollHeight;
    console.log(windowHeight)
    
    if(windowHeight == 4705 || windowHeight == 4726)
    {
        menu_navigation_full(nav)
    }else{
        menu_navigation_min(nav)
    }
}


//Функции бургера
$(document).ready(function(){
    $('.header_burger').click(function(event){
        if(!staus_active)
        {
            $('.header_burger, .header-menu, body').addClass('active');
            staus_active = true;
        }
        else{
            $('.header_burger, .header-menu, body').removeClass('active');
            staus_active = false
        }
    })
});

