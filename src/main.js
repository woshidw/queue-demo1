const divScree = document.querySelector('#screen') ;
//取到屏幕div
const btnCreatNumber = document.querySelector('#creatNumber');
const btnCallNumber = document.querySelector('#callNumber');
//当前号码对应的空的span
const spanNewNumber = document.querySelector('#newNumber');
const spanQueue = document.querySelector('#queue');


//然后要监听用户取号时做什么


let n =0;
let queue = [];

btnCreatNumber.onclick = ()=>{
    n += 1;
    //queue.push(n);
    queue.push.call(queue,n);
    spanNewNumber.innerText= n;
    spanQueue.innerText = JSON.stringify(queue);
};

btnCallNumber.onclick= () =>{
    if(queue.length === 0){
        alert("木有人了都，还叫呢")
        return;
    }
    //const m =queue.shift()
    const m = queue.shift.call(queue)
    divScree.innerText = `请 ${m} 号就餐`;
    spanQueue.innerText = JSON.stringify(queue);
}