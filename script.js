// const jokeEl = document.getElementById('joke');
// const get_joke = document.getElementById('get_joke');


// get_joke.addEventListener('click', ___);

// function generateJoke(){
//     // call the icanhaz API
//      fetch('https://icanhazdadjoke.com')
//     // set the new joke
// }


// PROMOSES ??
// GET https://icanhazdadjoke.com

const jokeElement = document.getElementById('joke');
const jokeButton = document.getElementById('jokeBtn');



// const generateJoke = ()=>{

//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res)=> res.json())
//     .then((data) =>{
//         jokeElement.innerHTML = data.joke;

//     })

// }

const generateJoke = async ()=>{

    try {
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
    
       const res = await fetch('https://icanhazdadjoke.com', setHeader);
    
       const data = await res.json();
       jokeElement.innerHTML = data.joke;
    }catch(error){
        console.log(`the error is ${error}`)
    }

    
}

jokeButton.addEventListener('click', generateJoke);
generateJoke();