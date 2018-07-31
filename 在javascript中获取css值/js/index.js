window.onload=function(){
    const element = document.querySelector('.element');

    const fontSize = element.style.fontSize;
    console.log(fontSize);

    const color = element.style.color;
    console.log(color);
    

    const style = getComputedStyle(element);
    console.log(style)

    const backgroundColor = style.backgroundColor;
    console.log(backgroundColor)
}