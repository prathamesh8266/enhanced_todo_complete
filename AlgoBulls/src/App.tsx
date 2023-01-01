import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTodo from "./components/addTodo/AddTodo";
import EditTodo from "./components/editTodo/EditTodo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/add",
      element: <AddTodo />,
    },
    {
      path: "/edit/:id",
      element: <EditTodo />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
