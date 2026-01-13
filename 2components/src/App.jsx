import './App.css'
import ClassBasedComponents from './components/class-based-component'
import ConetxtButtonComponent from './components/context-concept/button'
import ConetxtTextComponent from './components/context-concept/text'
import FunctionalComponents from './components/functional-components'
import ProductList from './components/products'
import UseReducerExample from './components/use-reducer-example'
import Users from './components/users'

const dummyProductData = ['Product 1', 'Product 2', 'Product 3']

function App() {
  return (
    <div>
      <h1>React JS Concepts</h1>
      {/* <ClassBasedComponents/> */}
      {/* <FunctionalComponents/> */}

      {/* <ProductList listOfProducts={dummyProductData} name="Sangam" city="Delhi"/> */}

      {/* <Users/> */}
      {/* <ConetxtButtonComponent/>
      <ConetxtTextComponent/> */}

      <UseReducerExample/>
    </div>
  )
}

export default App


