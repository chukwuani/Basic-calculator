let screen = document.querySelector('.screen');

function calculate(number){
    screen.value += number;
}

function result(){
    try{
        screen.value = eval(screen.value)
    }
    catch(err){
        screen.value = ('Enter Valid Input')
    }
}

function clr(){
    screen.value = " ";
}

function del(){
    screen.value = screen.value.slice(0, -1);
}