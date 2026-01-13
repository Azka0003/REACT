import { useEffect } from "react";
import { useState } from "react"
import classes from './styles.module.css'
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {

  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true)
      const apiResponse = await fetch('https://dummyjson.com/todos')
      const result = await apiResponse.json();

      console.log(result);

      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos)
        setLoading(false)
        setErrorMsg('')
      } else {
        setTodoList([]);
        setLoading(false)
        setErrorMsg('')

      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Some error occured");
    }
  }

  async function fetchDetailsCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId);

    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
      const details = await apiResponse.json();
      console.log(details);

      if (details) {
        setTodoDetails(details)
        setOpenDialog(true)
      } else {
        setTodoDetails(null)
        setOpenDialog(false)
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} />;

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo APP Using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ?
            todoList.map(todoItem => (
            <TodoItem
              fetchDetailsCurrentTodo={fetchDetailsCurrentTodo}
              todo={todoItem}
               />)) :
            null
        }
      </div>
      <TodoDetails
      setOpenDialog={setOpenDialog}
      openDialog={openDialog}
      todoDetails={todoDetails}
      setTodoDetails={setTodoDetails}
      />

    </div>
  )
}

export default App




