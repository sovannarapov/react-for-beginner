// Learn how to pass Props from parent to child component
import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {

  const greetParent = (childText) => {
    alert(`Hello, this is a text from parent component. ${childText}`)
  }

  return <ChildComponent greetHandler={greetParent} />
}