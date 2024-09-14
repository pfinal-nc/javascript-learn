## css3笔记

### css 方法

- attr() 用来选择到的元素的某一HTML属性值, 并用于其样式。

- calc() 通过计算来决定一个CSS属性的值了. PS: 运算符前后都需要保留一个空格

- counter  

```    
    counter-reset 属性创建或重置一个计数器，或者为一个计数器设置一个初始值。
    counter-increment 属性为一个计数器增加一个值。
    content 属性为一个计数器显示一个值。
    
    PS：counter-reset属性通常是和counter-increment属性，content属性一起使用

```

- cubic-bezier()  主要作用域动画和过度的运动曲线函数 animation-timing-function 和 transition-timing-function

- linear-gradient() 线性渐变 background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);

- repeating-linear-gradient() 重复线性渐变 background-image: repeating-linear-gradient(red, orange 10%, yellow 15%, green 20%, blue 25%, indigo 30%, violet 35%);

- radial-gradient() 径向渐变 background-image: radial-gradient(red, orange, yellow, green, blue, indigo, violet);


