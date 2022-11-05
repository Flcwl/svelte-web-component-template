import './App.css';

function Text () {
  return <span>I am a text</span>
}

function App() {
  return (
    <div className="App">
      <h1>Svelte Component in React App</h1>
      <counter-button count={3}>
        <Text></Text>
      </counter-button>
    </div>
  );
}

export default App;
