// Learn how to receive Props from parent component
export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('Hey, this is a text from child component')}>
        Child Button
      </button>
    </div>)
}