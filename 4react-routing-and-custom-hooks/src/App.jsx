// import './App.css'
// import ReceipeList from './pages/recipes'
// import CommentsList from './pages/comments'
// import { Routes, Route, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import RecipeDetails from './pages/recipe-details'
// import NotfoundPage from './pages/not-found'

// function App() {

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>React routing, Custom hooks and more</h1>
//       {/* case 1:
//       <ReceipeList />
//       <CommentsList />
//       “Right now, both the Recipe and Comments pages are rendering on the same screen.
//       But I want only one page to be visible at a time — when I go to the Recipe page, only the Recipe page should show, and when I go to the Comments page, only the Comments page should show.
//       This is where the concept of routing is used.” */}

//       {/* case 2: hitting route manullay
//        <Routes>
//         <Route path='/recipe-list' element={<ReceipeList/>}/>
//         <Route path='/comments-list' element={<CommentsList/>}/>
//       </Routes>
//     */}
//       {/* case3:
//       now instead of going by hitting router manullay i want to do it from a button
//       in this we use hook naivaget that is use to navigate from one page to another 
//     */}

//       <div>
//  u can use List or navigate any thing
//         <Link to={'/recipe-list'}>Alternative way of navigating to recipe list page</Link>
//         <Link to={'/comments-list'}>Alternative way of navigating to comments list page</Link>
//       </div>
//       <button onClick={() => navigate('/recipe-list')} style={{ background: "black", color: "white" }}>Navigate to Recipe List page</button>
//       <button onClick={() => navigate('/comments-list')} style={{ background: "black", color: "white" }}>Navigate to Comments List page</button>

//       <Routes>
//         <Route path='/recipe-list' element={<ReceipeList />} />
//         <Route path='/comments-list' element={<CommentsList />} />
//         <Route path='/recipe-list/:id' element={<RecipeDetails />} />
//         <Route path='*' element={<NotfoundPage />} />
//         {/* give any wrote that doesnt exits then it will reaches to not found page */}
//       </Routes>

//     </div>
//   )
// }

// export default App


// how to handle the dynamic routing 
// imagine no of recipes 1 ,2 ,34,...10...
// each time u need to hit http://localhost:5173/recipe-list/1 to get reipe 1
// http://localhost:5173/recipe-list/1 to get reipe 1
// http://localhost:5173/recipe-list/2 to get reipe 2
// http://localhost:5173/recipe-list/3 to get reipe 3
// http://localhost:5173/recipe-list/4 to get reipe 4 this is dyanmic routing


// “Dynamic routing is used when a page depends on a variable value in the URL.
// For example, if we have multiple recipes with IDs like 1, 2, 3, 4, etc., we don’t create a separate route for each one.
// Instead, we use a dynamic route so that:
// /recipe-list/1 shows Recipe 1,
// /recipe-list/2 shows Recipe 2,
// /recipe-list/3 shows Recipe 3, and so on.
// The number in the URL changes, but the same component is used to display the corresponding recipe.”




// task:
//  now lets learn how u can create common layout using react router for this there is cool feature outlet
// for this imagine there is header that is importing again n again in files

// import './App.css'
// import ReceipeList from './pages/recipes'
// import CommentsList from './pages/comments'
// import { Routes, Route, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import RecipeDetails from './pages/recipe-details'
// import NotfoundPage from './pages/not-found'
// import Layout from './components/layout'

// function App() {

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>React routing, Custom hooks and more</h1>

//       <div>
//         <Link to={'home/recipe-list'}>Alternative way of navigating to recipe list page</Link>
//         <Link to={'home/comments-list'}>Alternative way of navigating to comments list page</Link>
//       </div>

//       <button onClick={() => navigate('home/recipe-list')} style={{ background: "black", color: "white" }}>Navigate to Recipe List page</button>
//       <button onClick={() => navigate('home/comments-list')} style={{ background: "black", color: "white" }}>Navigate to Comments List page</button>

//       <Routes>
//         <Route path='/home' element={<Layout />}>
//           {/* they r the children of home (Outlets) (Child Routes)*/}
//           <Route path='recipe-list' element={<ReceipeList />} />
//           <Route path='comments-list' element={<CommentsList />} />
//           <Route path='recipe-list/:id' element={<RecipeDetails />} />
//         </Route>
//         <Route path='*' element={<NotfoundPage />} />
//       </Routes>

//     </div>
//   )
// }

// export default App





// one more way
import './App.css'
import ReceipeList from './pages/recipes'
import CommentsList from './pages/comments'
import {useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import RecipeDetails from './pages/recipe-details'
import NotfoundPage from './pages/not-found'
import Layout from './components/layout'
import { useRoutes } from 'react-router-dom'
import ReactHookFormExamplePage from './pages/react-hook-form-example'
import Hooks from './pages/use-ref-example'
import UseMemoExample from './pages/use-memo-example'
import UseCallbackExample from './pages/use-callback-example'
import ReactQueryDemo from './pages/react-query/index'

function CustomRoutes() {
  const element = useRoutes([//array og objects
    {
      path: "/home",
      element: <Layout />,

      children: [
        {
          path: "recipe-list",
          element: <ReceipeList />,
        },
        { path: "comments-list", element: <CommentsList /> },
        { path: "recipe-list/:id", element: <RecipeDetails /> },
      ],
    },
    {
      path: "*",
      element: <NotfoundPage />,
    },
    {
      path:"/react-hook-form",
      element:<ReactHookFormExamplePage/>
    },
    {
      path:'/use-ref-example',
      element:<Hooks/>
    },
    {
      path:'/use-memo-ex',
      element: <UseMemoExample/>
    },
    {
      path:'/use-callback-ex',
      element: <UseCallbackExample/>
    },
    {
      path:'/react-query-demo',
      element: <ReactQueryDemo/>
    }

  ]);

  return element;
}

function App() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>React routing, Custom hooks and more</h1>

      <div>
        <Link to={'/home/recipe-list'}>Alternative way of navigating to recipe list page</Link>
        <Link to={'/home/comments-list'}>Alternative way of navigating to comments list page</Link>
      </div>

      <button onClick={() => navigate('/home/recipe-list')} style={{ background: "black", color: "white" }}>Navigate to Recipe List page</button>
      <button onClick={() => navigate('/home/comments-list')} style={{ background: "black", color: "white" }}>Navigate to Comments List page</button>

     <CustomRoutes/>

    </div>
  )
}
export default App


// now lets learn about custom hook where we learn useFetch() useWindowResize()
// Custom Hooks - Corrected Understanding
// What are Custom Hooks?
// Custom hooks increase reusability in your application by extracting and sharing common logic across multiple components.
// Problem Without Custom Hooks:
// Normally when making API calls, you write useEffect() and fetch function in every component separately.
//  If you need to fetch data in 10 different components (Recipe page, User page, Comments page, etc.), 
// you write the same logic 10 times. This causes code duplication and maintenance issues.
// Solution With Custom Hooks:
// You keep the logic in one central place (custom hook), so you don't need to write the same logic every time. 
// If you need to make API calls on multiple pages like Recipe page, Register page, User page - just call your 
// custom hook instead of rewriting fetch logic.


// Custom hooks are your own creations using built-in hooks inside them. You build useFetch using useState and useEffect. 
// You build useWindowResize using useState and useEffect. React doesn't provide these - you create them for YOUR specific needs!



