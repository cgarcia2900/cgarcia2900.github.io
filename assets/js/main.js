const rootStyles = getComputedStyle(document.documentElement);
const bgColour = rootStyles.getPropertyValue('--bgColour').trim();
const mainColourDark = rootStyles.getPropertyValue('--mainColourDark').trim();
let skillsTyped = false;

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= $('#skills').offset().top ){
        $("#skills").css("background-color", mainColourDark);
        if(!skillsTyped){
            typeSkillsSequentially();
            skillsTyped = true;
        }
        $("#skillsTitle").css("color", bgColour)
    }else{
        $("#skills").css("background-color", bgColour);
        $("#skillsTitle").css("color", 'black')
    }

});

function typeText(element, text, speed = 75, callback) {
    let i = 0;
    function typeChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        } else if (callback) {
            setTimeout(callback, 100);
        }
    }
    typeChar();
}

function typeSkillsSequentially() {
    const items = document.querySelectorAll('.typed');

    function typeNext(index) {
        if (index < items.length) {
            const el = items[index];
            const text = el.dataset.text;
            el.classList.add('cursor');
    
            typeText(el, text, 50, () => {
                if (index < items.length - 1){
                    el.classList.remove('cursor');
                }
                typeNext(index + 1);
            });

            
        }
    }

    typeNext(0);
}

//document.addEventListener('DOMContentLoaded', typeSkillsSequentially);