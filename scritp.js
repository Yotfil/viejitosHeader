// const app = document.querySelectorAll('app')
const items = Array.from(document.querySelectorAll('.item'))

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    console.log(e.target)
    const target = e.target

    target.innerText = `Hola mundo soy el item ${index+1} `
  })
})
