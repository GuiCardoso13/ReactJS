
import './App.css'

function sayHello(){
  alert("Hello, how are you?")
}

function App() {
  

  return (
    <>
      <button onClick={sayHello}>Clique Aqui</button>
    </>
  )
}

export default App
