/* Chapter 14 Promise */

// 构造中的resolve,reject并不会终止执行，建议在其前面加return



// 两个Promise状态依赖及结果传递
/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({m: 'mmm', n: 'nnnnn'}), 3000);
});
let p2 = new Promise((resolve, reject) => {
    resolve(p1);
});
p2
    .then(result => console.log(result.m))
    .catch(err => console.log(err.n));
*/



// 请求参数前后依赖的顺序异步请求
function fetch(url) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status ===200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });
    return promise;
}
function post(url, postData) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8");
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(postData);

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status ===200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });
    return promise;
}
fetch('/train/getCode')
    .then(({code}) => fetch(`/train/getValue?code=${code}`))
    .then(({value}) => fetch(`/train/getMessage?value=${value}`))
    .then(({message}) => console.log(message))
    .catch((err) => console.log(err));






post('/train/doPost','user=Jaaaaadsfsdfasdfl&age=asdfafs')
    .then(({message}) => console.log(message));







