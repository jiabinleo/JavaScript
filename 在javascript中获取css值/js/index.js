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


    const pseudoElementStyle = getComputedStyle(element,'::before');
    console.log(pseudoElementStyle.content)
    console.log(pseudoElementStyle.color)
}
// 小结
// 在JavaScript中获取CSS的值
// 1.style 属性(property)。
// 2.getComputedStyle。
// style属性仅检索内联CSS值，而getComputedStyle样式检索计算的CSS值