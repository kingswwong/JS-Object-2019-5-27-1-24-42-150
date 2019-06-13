//创建一个空对象，变量名为user；
let user = {};
//添加一个name属性，并设置值为John；
user.name = "John";
//添加一个surname属性，并设置其值为Mike；
user.surname = "Mike";
//将name属性的值改为Peter;
user.name = "Peter";
//删除user的name属性
delete user.name


var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
let count = 0;
for(let item in fruit){
    count += fruit[item]
}
console.log(count)
