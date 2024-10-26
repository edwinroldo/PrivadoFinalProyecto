import { BrowserRouter, Routes, Route } from "react-router-dom"; //importa componentes para enrutamiento
import TaskForm from "./components/TaskForm"; //componente para crear tareas
import  TaskList from "./components/TaskList";  //componente para listar tareas
import Menu from "./components/Navbar";  //componete de navegación o MENU
import  { Container } from "@mui/material";  //Material UI para estructurar el Layout

//las diferentes rutas para hacer get, post y put
export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Menu />
          <Container>
            <Routes>
             
              <Route path='/' element={<TaskList />}  />
              <Route path='/tasks/new' element={<TaskForm />} />
              <Route path= '/tasks/:id_tarea/edit' element={<TaskForm />} />
            </Routes>
          </Container>
      </BrowserRouter>
    </div>
  )
}
