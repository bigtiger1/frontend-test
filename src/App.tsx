import React from "react"
import "./App.css"
import Popover from "./components/Popover"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Popover placement='right' title='Title' content='Content'>
          <div>Click</div>
        </Popover>
      </header>
    </div>
  )
}

export default App
