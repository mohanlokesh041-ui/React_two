import './App.css';
import String from './components/String'
import Number from './components/Number'
import Ternary_operator from './components/Ternary_operator'
import Nullish from './components/Nullish'
import Optional from './components/Optional'
import Map from './components/Map'
const App = () => {

  return (
    <>
      <section>
        <h1>This is string content</h1>
        <String />
        </section>

      <section>
        <h1>This is number content</h1>
        <Number />
      </section>

      <section>
        <h1>This is Ternary_operator content</h1>
        <Ternary_operator />
      </section>

      <section>
        <h1>This is Nullish content</h1>
        <Nullish />
      </section>

      <section>
         <h1>This is Optional content</h1>
        <Optional />
      </section>

      <section>
         <h1>This is Map content</h1>
        <Map />
      </section>

    </>
  )

}

export default App;