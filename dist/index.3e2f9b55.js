window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === "string") elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) {
        console.log("是数组");
        elements = selectorOrArray;
    }
    return {
        //es6前的写法addClass: function (className)
        //es6新语法 把 :function 省略了
        addClass (className) {
            for(let i = 0; i < elements.length; i++)elements[i].classList.add(className);
            //返回这个对象，方便链式调用
            return this;
        },
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++){
                // console.log(elements[i]);
                const x = elements[i].querySelectorAll(selector);
                const elements2 = Array.from(x);
                array = array.concat(elements2);
            }
            return jQuery(array);
        }
    };
};

//# sourceMappingURL=index.3e2f9b55.js.map
