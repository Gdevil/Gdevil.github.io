```
class A {
    update () {
        // ...
        requestAnimationFrame(this.update());
    }
}
```
上面这种请求会报堆栈溢出错误，`Maximum call stack size exceeded`
应使用下方的代码
```
class A {
    update () {
        // ...
        requestAnimationFrame(this.update.bind(this));
    }
}
```
或者用ES6写法：
```
class A {
    update () {
        // ...
        requestAnimationFrame(() => this.update())
    }
}
```
参考：[https://stackoverflow.com/questions/6065169/requestanimationframe-with-this-keyword](https://stackoverflow.com/questions/6065169/requestanimationframe-with-this-keyword)