//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice =  Math.floor(Math.random() * 898) + 1
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}/`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const pokemonType = data.types.map(i => {
          let typeName = i.type.name
          return typeName.charAt(0).toUpperCase() + typeName.slice(1)
        })

        const pokemonStats = data.stats.map(i => {
          let statName = i.stat.name
          let statValue = i.base_stat
          return `${statName}: ${statValue} `
        })

        document.querySelector('h1').innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        document.querySelector('.pokemon-id').innerHTML = `#${data.id}`
        document.querySelector('img').src = data.sprites.other['official-artwork'].front_default
        document.querySelector('#type').innerHTML = `Type: ${pokemonType.join(' | ')}`
        // document.querySelector('#description').innerHTML = data.species.url
        
        // const currentStats = document.querySelectorAll('li')
        // currentStats.forEach(stat => stat.remove());

        // pokemonStats.forEach(stat => {
        //   let statList = document.createElement('li')
        //   statList.innerText = stat
        //   document.querySelector('#stats').appendChild(statList)

        // })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

