

document.addEventListener('DOMContentLoaded', () => {
     fetchData() 
})

const fetchData = async () => {
     try {
          loadingData(true)
          const res = await fetch('https://rickandmortyapi.com/api/character')
          const data = await res.json()
          pintarCard(data)




     } catch (error) {
          console.log(error)
     } finally {
          loadingData(false)
     }
}

const loadingData = estado => {
     const loading = document.getElementById('loading')
     if (estado) {
          loading.classList.remove('d-none')
     } else {
          loading.classList.add('d-none')
     }
          
    

}


const pintarCard = data => {
     const cards = document.getElementById('card-dinamicas')
     const templateCard = document.getElementById('template-card').content
     const fragment = document.createDocumentFragment()
     data.results.forEach(element => {
          console.log(element)
          const clone = templateCard.cloneNode(true)
          clone.querySelector('h5').textContent = element.name
          clone.querySelector('p').textContent = element.species
          clone.querySelector('.card-img-top').setAttribute('src',element.image) 
        
          fragment.appendChild(clone)

     });

     cards.appendChild(fragment)
}
