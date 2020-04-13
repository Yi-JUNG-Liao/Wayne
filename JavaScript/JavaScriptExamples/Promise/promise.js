const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Success');
    }, 300);
});

promise1.then(function (value) {
    console.log(value);
}, function (ex) {
    console.log("失敗原因:" + ex);
});

console.log(promise1);