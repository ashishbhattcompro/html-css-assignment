async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(1);
    return data;
}

let postDataPromise = getData();
let rand = Math.floor(Math.random() * 100);

async function randomPost(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${rand}`);
    const data = await response.json();
    console.log(3);
    return data;
}

async function randomComment(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${rand}/comments`);
    const data = await response.json();
    console.log(4);
    return data;
}


// async function serial(){
//     const res1 = await getData();
//     console.log(res1);
//     const res2 = await randomPost();
//     console.log(res2);
//     const res3 = await randomComment();
//     console.log(res3);
// }

async function serial(){
    const res1 = await getData();
    console.log(res1);
    await Promise.all([
        (async()=>console.log(await randomPost()))(),
        (async()=>console.log(await randomComment()))()
    ]);
}

// postDataPromise.then((data)=>{
// 	console.log(data);
//     console.log(2);
//   return randomPost();
// }).then((data)=>{
// 	console.log(data);
// 	return randomComment();
// }).then((data)=>{
// 	console.log(data);
// });

serial();