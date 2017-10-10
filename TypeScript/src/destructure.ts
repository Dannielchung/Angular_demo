//析構表達式
function getStock() {
    return {
        code:"IBM",
        price:{
            price1: 100,
            price2: 200
        },
        aaa: "xxxx",
        bbb:4444
    }
}
var stock = getStock();
var code = stock.code;
var price = stock.price;

alert(`code is ${code} , price is ${price} `);
var { code: codex, price: { price2: pricex } } = getStock();
alert(`code is ${codex} , price is ${pricex} `);

var array1 = [1, 2, 3, 4];
var [, , num1, num2] = array1;
var [num3, num4,...others] = array1;
alert(`get first : ${num1}, ${num2}`);
alert(`get others : ${others}`);

function doOther([num, numa, ...otherx]) {
    alert(`num: ${num}, numa: ${numa}, otherx: ${otherx}`);
}
doOther(array1);
