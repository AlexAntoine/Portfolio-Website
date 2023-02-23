console.log('hello');

let theme = localStorage.getItem('theme');

console.log('the theme is', theme);

if(theme === null){
    setTheme('light');
    console.log('first line');

}else{
    console.log('second line');
    setTheme(theme);
    
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length > i; i++){

    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Clicked: ', mode)
        setTheme(mode);
    });
}

function setTheme(mode){
    if(mode === 'light'){
        document.getElementById('theme-style').href = '/css/default.css'
    }

    if(mode === 'blue'){
        document.getElementById('theme-style').href='/css/blue.css'
    }

    if(mode === 'purple'){
        document.getElementById('theme-style').href='/css/purple.css'
    }

    if(mode === 'green'){
        document.getElementById('theme-style').href='/css/green.css'
    }

    localStorage.setItem('theme', mode);

}