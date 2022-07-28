// const items = Array.from(document.querySelectorAll('.item'))

// items.forEach((item, index) => {
//   item.addEventListener('click', (e) => {
//     console.log(e.target)
//     const target = e.target

//     target.innerText = `Hola mundo soy el item ${index+1} `
//   })
// })

import users from './data.js'
import CardUser from './components/CardUser.js'

// Cómo funciona por dentro un foreach
// const names = ['juan', 'pepe', 'luis']

// const myOwnForEach = (fn, array) => {
//   for (let i = 0; i < array.length; i++) {
//     fn(array[i])
//   }
// }

// myOwnForEach(item => {
//  console.log(CardUser(item))
// }, users)

const app = document.getElementById('app')

// Desestructurando el objeto

// const cardUser = getUser => {
//   return `
//     <div>
//       <p>Name: ${getUser.userName} </p>
//       <p>Age: ${getUser.age}</p>
//       <p>Married: ${getUser.married}</p>
//     </div>
//   `
// }

// const arrayCards = []

// users.forEach(user => {
//   arrayCards.push(cardUser(user))
// })

// map nos devuelve una copia del array original con la modificación que hayamos hevho
const arrayCards = users.map(user => CardUser(user))

app.innerHTML = arrayCards.join('')

// Desustructuración
// const user = {
//   userName: 'Luisita',
//   age: 21,
//   married: true,
// }
// const { userName, age, married } = user

// const names = ['juan', 'pepe', 'luis']

// const [,,user3] = names

// console.log(user3);
