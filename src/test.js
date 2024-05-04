let state = [];
let index = 0;

function useState(initialState) {
  // Freeze the index, to make the 'setters'(setCount/setName) work
  const localIndex = index;
  if (typeof state[localIndex] === "undefined")
    state[localIndex] = initialState;

  index++;
  return [state[localIndex], (newState) => (state[localIndex] = newState)];
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  return {
    count: `Count is ${count}`,
    setCount,
    name: `Name is ${name}`,
    setName,
  };
}

let Rendered = App();
console.log(Rendered.count);
console.log(Rendered.name);
Rendered.setCount(10);
Rendered.setName("Mark");
console.log("state is", state);
index = 0; //Set the index to 0
Rendered = App(); //re-render after state change
console.log(Rendered.count);
console.log(Rendered.name);
