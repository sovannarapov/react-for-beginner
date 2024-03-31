// Learn how to use Props
const Greet = (props) => { // Able to use what name you mostly props or payload
  return (
    <div>
      <h1>Hello my name is { props.name } or you can call me { props.heroName }</h1>
      { props.children }
    </div>
  )
}

export default Greet