console.log('hello from post');
let theme = localStorage.getItem('theme');
console.log(theme);

if(theme === 'purple'){
    document.getElementById('theme-style').href='/css/_postPurple.css'
}
else if(theme === 'blue'){
    document.getElementById('theme-style').href='/css/_postBlue.css'

}else if(theme === 'green'){
    document.getElementById('theme-style').href='/css/_postGreen.css'
}else if(theme == 'light'){
    document.getElementById('theme-style').href='/css/_postLight.css'
}