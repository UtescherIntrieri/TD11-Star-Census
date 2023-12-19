let result = document.getElementById('result')
let searchRes = document.getElementById('searchRes')

async function printData(){
  
  let res = await fetch('https://swapi.dev/api/planets/')
  let {results} = await res.json()
  console.log(results);
  
  results.forEach(planet => {
    let li = document.createElement('li')
    li.innerHTML = `
    <div>
    <button>${planet.name}</button>
    </div>`
    result.appendChild(li)
  })
}
async function searchPlanet(){
  let search = document.getElementById('search').value
  let res = await fetch(`https://swapi.dev/api/planets/?search=${search}`)
  let {results} = await res.json()
  let planet = results[0]

  console.log(search)
  console.log(planet)
}

window.onload = printData()