const getpeople_promise = (fetch) =>{
    return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data =>{
        // console.log(data.count);
        return{
        count: data.count,
        results: data.results
        }
    })
}

async function getpeople_async (fetch) {
    const data = await fetch('https://swapi.dev/api/people');
    const parseddata = await data.json();
    // console.log(parseddata);
    return{
        count : parseddata.count,
        results : parseddata.results,
    }
}

// async function run() {
//     const a = await getpeople_async(fetch);
//     console.log(a.count); 
// }
// run();



module.exports = {getpeople_async,getpeople_promise};

// const data = fetch('https://swapi.dev/api/people');
// data.then(response => response.json())
// .then(data =>{
//     console.log(data);
// })

// const getpeople = ()=>{
//     const data = fetch('https://swapi.dev/api/people');
//     data.then(response => response.json())
//     .then(data =>{
//     console.log(data);
// })
// }