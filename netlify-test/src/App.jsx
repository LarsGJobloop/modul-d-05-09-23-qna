import { LayoutBase } from "./layout/LayoutBase/LayoutBase"
import {Counter} from "./components/Counter/Counter"
import './App.css'

function App() {
  return (
    <LayoutBase>

      <main className="content-container">
        <h1>Stateful Applications</h1>

        <section>
          <h2>Simple state</h2>

          <Counter />

        </section>
      </main>

    </LayoutBase>
  )
}

export default App
