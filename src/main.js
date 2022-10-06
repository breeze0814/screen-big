jQuery(".test").addClass("red").addClass("green"); //链式操作
//每一个test都加上了red green blue

console.log("================================");
// //查找test1下的child并添加blue
// jQuery(".test1").find(".child").addClass("red");
// // console.log("数组调用");
// //调用后浏览器报错 Uncaught TypeError: elements[i].querySelectorAll is not a function
jQuery([".test2", ".test3"]).find(".child")
