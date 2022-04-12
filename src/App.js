import './App.css';

function App() {
  const title = "App Component";
  const likes = 50;
  
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* We can print boolean and object in react template */}
      </div>
    </div>
  );
}

export default App;
