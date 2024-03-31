import "./App.css";
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import Greet from './components/Greet';
// import { Message } from './components/Message';
// import { ClickHandler } from './components/ClickHandler';
// import { ParentComponent } from './components/ParentComponent';
// import { UserList } from './components/UserList';
// import { StyleSheet } from './components/StyleSheet'
// import { Inline } from './components/Inline'
// import { Form } from "./components/Form";
// import { PostForm } from "./components/PostForm";
// import { PostList } from "./components/PostList";
import NAMES from "./components/data.json";
import { useState } from "react";
import { useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };

  const filterNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });

  return (
    <div className="App">
      {/* <Greet name="Name1" heroName="Hero1" />
      <Greet name="Name2" heroName="Hero2">
        <button>Hero2 Child</button>
      </Greet>
      <Greet name="Name3" heroName="Hero3" /> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserList /> */}
      {/* <StyleSheet />
      <Inline /> */}
      {/* <h1 className="success">App Styles</h1>
      <h2 className={styles.error}>App Styles Module</h2> */}
      {/* <Form /> */}
      {/* <PostForm />
      <PostList /> */}
      <h3>Search your name here!</h3>
      <input type="text" value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list...</p>}
      {filterNames.map((item) => {
        return (
          <p key={item.id}>
            {item.first_name} {item.last_name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
