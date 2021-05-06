const searchEl = document.querySelector('#keyword');
const searchbtn = document.querySelector('.searchBtn');
const results = document.querySelector('.results');
const showCon = document.querySelector('#showCon')
let userShows = [];

function callApi(){
    const searchWord = searchEl.value

    const search = searchWord.replace(" ", "%20")

    const tvAPI = 'http://api.tvmaze.com/singlesearch/shows?q=' + search;
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
            //for (let i = 0; i < data.length ; i++) {
                let showName = data.name;
                let showSum = data.summary
                console.log(showName)
                const showsContainer = `<div id="show"><h2>${showName}</h2> ${showSum}<button class="add-show" type="button">Add Show</button></div>`
                results.innerHTML += showsContainer;
                let addShowbtn = document.querySelector('.add-show');
                addShowbtn.addEventListener('click', async () =>{
                    const response = await fetch(`/api/show-routes`, {
                        method: 'POST',
                        body: JSON.stringify({
                          show_name: showName
                        }),
                        headers: {
                          'Content-Type': 'application/json',
                        },
                    });
                    if (response.ok) {
                        document.location.replace('/');
                      } else {
                        console.log('not working');
                      }
                })
                
           //}
        return;
    })
    
}


searchbtn.addEventListener('click', () => {
    callApi();
});