
//log in log out pages 
//profiles 

//TV API 
const searchEl = document.querySelector('#keyword');
const searchbtn = document.querySelector('.btn');
const results = document.querySelector('.results');
//remember to add or change these based on class/id we use in the page

function callApi(){
    const searchWord = searchEl.value

    const search = searchWord.replace(" ", "%20")

    const tvAPI = 'http://api.tvmaze.com/search/shows?q=' + search;
    //we will have to see how it fetches and stores data
    //singlesearch brings up the #1 just search brings them all 

    console.log(searchWord);
    console.log(search);
    console.log(tvAPI);

    fetch(tvAPI)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        results.innerHTML = '';
            for (let i = 0; i < data.length ; i++) {
                let showName = data[i].show.name;
                let showSum = data[i].show.summary
                console.log(showName)
                const showsContainer = `<div id="show${i}"><h2>${showName}</h2> ${showSum}<button class="add-show" type="button">Add Show</button></div>`
                results.innerHTML += showsContainer;
                const addShowbtn = document.querySelector('.add-show');
                addShowbtn.addEventListener('click', () =>{
                    //code to select the show
                })
           }
            return;
    })

    
}


searchbtn.addEventListener('click', () => {
    callApi();
});

