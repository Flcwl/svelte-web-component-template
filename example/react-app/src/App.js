import './App.css';

function Text ({ children }) {
  return <span>{children}</span>
}

function App() {
  return (
    <div className="App">
      <h1>Svelte Component in React App</h1>
      <counter-button count={3}>
        <Text>I am a text</Text>
      </counter-button>
    </div>
  );
}

export default App;
