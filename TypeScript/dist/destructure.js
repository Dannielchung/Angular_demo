//析構表達式
function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 100,
            price2: 200
        },
        aaa: "xxxx",
        bbb: 4444
    };
}
var stock = getStock();
var code = stock.code;
var price = stock.price;
alert("code is " + code + " , price is " + price + " ");
var _a = getStock(), codex = _a.code, pricex = _a.price.price2;
alert("code is " + codex + " , price is " + pricex + " ");
var array1 = [1, 2, 3, 4];
var num1 = array1[2], num2 = array1[3];
var num3 = array1[0], num4 = array1[1], others = array1.slice(2);
alert("get first : " + num1 + ", " + num2);
alert("get others : " + others);
function doOther(_a) {
    var num = _a[0], numa = _a[1], otherx = _a.slice(2);
    alert("num: " + num + ", numa: " + numa + ", otherx: " + otherx);
}
doOther(array1);
//# sourceMappingURL=destructure.js.map