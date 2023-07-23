// write your code here

// Fetch
function fetchRamens(){
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => displayRamens(data))
    .catch(error => console.log(error))
}
// Run the fetch()
fetchRamens()


// Update our DOM
function displayRamens(ramens){
    let ramensMenu = document.querySelector('#ramen-menu')
    for (ramen of ramens){
        ramensMenu.innerHTML = `<p>ID: ${ramen.id}`
    }
}
