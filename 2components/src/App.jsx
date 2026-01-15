import './App.css'
import ClassBasedComponents from './components/class-based-component'
import ConetxtButtonComponent from './components/context-concept/button'
import ConetxtTextComponent from './components/context-concept/text'
import FormComponent from './components/form'
import FunctionalComponents from './components/functional-components'
import LoginComponent from './components/login'
import ProductList from './components/products'
import UseReducerExample from './components/use-reducer-example'
import Users from './components/users'
import RegisterComponent from './register'

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

      {/* <UseReducerExample/> */}
      {/* <FormComponent/> */}

      <div style={{display:'flex',gap:'20px'}}>
        <LoginComponent/>
        <RegisterComponent/>
      </div>
    </div>
  )
}

export default App


