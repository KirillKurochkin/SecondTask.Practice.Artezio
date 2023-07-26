function getCount(el)
{
    var count = el.value.length;
    var answer = document.getElementById("countId");
    answer.innerHTML = count;
}

function getSecondCount(el)
{
    var count = el.value.length;
    var answer = document.getElementById("secondCountId");
    console.log("Количество символов");
    answer.innerHTML = count;
    console.log(answer);
}

function getWordsCount(el)
{
    var wordCountArray = el.value.split(' ');
    var answer = document.getElementById("wordCountId");
    answer.innerHTML = wordCountArray.length;

    console.log("Количество слов");
    console.log(answer);
}

function getStringCount(el)
{
    var wordCountRowArray = el.value.split('\n');
    var answer = document.getElementById("stringCountId");
    answer.innerHTML = wordCountRowArray.length;

    console.log("Количество строк");
    console.log(answer);
}

function getAllCount(el)
{
    getSecondCount(el);
    getWordsCount(el);
    getStringCount(el);
}

function validInput(el, textareaId){
    var answer = document.getElementById(textareaId);
    var value = 10 - el.value.length;

    if(value < 0)
    {
        answer.style.color = "red";
        answer.innerHTML = "&#10006 Превышено символов: " + value * (-1);
    }
    else 
    {
        answer.style.color = "black";
        answer.innerHTML = "Отсталось символов: " + value;
    }

    console.log("Проверка ввода");
    console.log(answer)
}

var lastWordCount = 0;
var maxValue = 10;

function validInputWitchRestriction(el){
    var checkboxItem = document.getElementById("checkboxInputId");
    var sizeElement = el.value.length;

    if(!checkboxItem.checked)
    {
        validInput(el, 'remainingInputCharactersId');

        lastWordCount = sizeElement;
    }
    else
    {
        if(sizeElement <= maxValue)
        {
            validInput(el, "remainingInputCharactersId");
        }
        else 
        {
            if(sizeElement < lastWordCount)
            {
                validInput(el, 'remainingInputCharactersId');   

                lastWordCount = el.value.length;
            }
            else
            {
                el.value = el.value.slice(0, (lastWordCount - 1));
            }
        }
    }

    console.log("Проверка ввода");
}

new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

const today = new Date();

function getNowData(el){
    const date = document.getElementById("nowTimeId");
    date.innerHTML = today;
}

for(let date = today.getFullYear(); date >= 1900; date--)
{
    const option = document.createElement('option');
    option.value = date;
    option.text = date + 'г.';

    year.append(option);
}

for(let monthNum = 1; monthNum <= 12; monthNum++)
{
    const date = new Date();
    date.setMonth(monthNum  - 1);
    
    var monthName = date.toLocaleString('ru-ru',{
        month: 'long',
    });

    const option = document.createElement('option');
    option.value = monthNum;
    option.text = monthName;

    month.append(option);
}

for(let monthNum = 1; monthNum <= 12; monthNum++){
    const date = new Date();
    date.setMonth(monthNum-1);
    var monthName = date.toLocaleString('ru-ru',{
        month: 'long',
    });

    const option = document.createElement('option');
    option.value = monthNum;
    option.text = monthName;

    month.append(option);
}

addDays(1);

function getDaysInMonth(monthNum){
    return new Date(0,monthNum,0).getDate();
}

function addDays(monthNum){
    for (let days = 1; days <= getDaysInMonth(monthNum); days++) {
    const option = document.createElement('option');
    option.value = days;
    option.text = days;

    day.append(option);
    }
}

function dropDays(){
    var length = day.options.length;

    var length = day.options.length;
    for (i = length-1; i >= 0; i--) {
        day.options[i] = null;
    }
}

month.onchange = function(){
    let index = month.selectedIndex;
    let option = month.options; 
    let value = option[index].value;

    let dayIndex = day.selectedIndex;

    dropDays();
    addDays(value);

    if(dayIndex <= getDaysInMonth(value)){
        day.selectedIndex = dayIndex;
    }
}

var rectangle = document.getElementById('rectangle');
var activeRectangle = false;

rectangle.addEventListener('click', function(){
    if(activeRectangle){
        activeRectangle = false;

        rectangle.style.border = '2px grey solid';
        rectangle.style.borderRadius = '0px';
    } else{
        activeRectangle = true;

        rectangle.style.border = '5px black solid';
        rectangle.style.borderRadius = '4px';
    }
});

document.addEventListener('keydown', function(event){
    let height = rectangle.offsetHeight;
    let width = rectangle.offsetWidth;

    //event.preventDefault();
    
    if(activeRectangle){
        switch(event.code){
            case 'ArrowUp':
                rectangle.style.height = height + "px";
                break;
            case 'ArrowDown':
                rectangle.style.height = height - 20+ "px";
                break;
            case 'ArrowLeft':
                rectangle.style.width = width -20 + "px";
                break;
            case 'ArrowRight':
                rectangle.style.width = width  + "px";
                break;
            case 'Digit1':
                rectangle.style.backgroundColor = '#e74949';
                break;
            case 'Digit2':
                rectangle.style.backgroundColor = '#50cb45';
                break;
            case 'Digit3':
                rectangle.style.backgroundColor = '#e19743';
                break;
            case 'Digit4':
                rectangle.style.backgroundColor = '#eb82f7';
                break;
            case 'Digit5':
                rectangle.style.backgroundColor = '#f2f044';
                break;
            case 'Digit6':
                rectangle.style.backgroundColor = '#6c6af2';
                break;
            case 'Digit7':
                rectangle.style.backgroundColor = '#ffb5e5';
                break;
            case 'Digit8':
                rectangle.style.backgroundColor = '#cbffb5';
                break;
            case 'Digit9':
                rectangle.style.backgroundColor = '#83f4c9';
                break;
            case 'Digit0':
                rectangle.style.backgroundColor = '#ffffff';
                break;
        }
    }
});

