import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import { Root } from "./routes/Root";
import { Cards } from "./routes/Cards";
import { AddCard } from "./routes/AddCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/cards" element={<Cards />} />
      <Route path="/addcard" element={<AddCard />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
