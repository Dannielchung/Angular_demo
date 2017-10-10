(function () {
    var sum = function (arg1, arg2) { return arg1 + arg2; };
    alert("sum is " + sum(1, 2));
    var myarray = [1, 2, 3, 4, 5, 6];
    alert(myarray.filter(function (value) { return value % 2 == 0; }));
    function getStock(name) {
        var _this = this;
        this.name = name;
        setInterval(function () {
            console.log("name is " + _this.name);
        }, 1000);
    }
    var stock = new getStock("IBM");
    //傳統匿名函式所造成this variable的錯誤
    function getStock2(name) {
        this.name = name;
        setInterval(function () {
            console.log("name2 is " + this.name); // undefined
        }, 1000);
    }
    var stock2 = new getStock2("IBM");
});
//# sourceMappingURL=anymousex.js.map