const CardUser = ({ userName, age, married }) => {
  return `
    <div>
      <p>Name: ${userName} </p>
      <p>Age: ${age}</p>
      <p>Married: ${married}</p>
    </div>
  `
}

export default CardUser