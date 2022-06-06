function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
        return response.json();
    }).then((data) => {
        console.log(1);
        return data;
    });
}

let postDataPromise = getData();

postDataPromise.then((data) => {
    console.log(data);
    console.log(2);
    return [randomPost(), randomComment()];
}).then((data) => {
    data[0].then((ele) => {
        console.log(ele);
    });
    data[1].then((ele)=>{
        console.log(ele);
    });
});



let rand = Math.floor(Math.random() * 100);

function randomPost() {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${rand}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(3);
        return data;
    });
}


function randomComment() {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${rand}/comments`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(4);
        return data;
    });
}