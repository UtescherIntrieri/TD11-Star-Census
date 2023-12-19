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
  let span = document.createElement('span')
  span.innerHTML = `
  <p>Name: ${planet.name}</p>
  <p>Climate: ${planet.climate}</p>
  <p>Population: ${planet.population}</p>
  <p>Terrain: ${planet.terrain}</p>`

  searchRes.appendChild(span)

  console.log(search)
  console.log(planet)
}

window.onload = printData()