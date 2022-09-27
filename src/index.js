import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./Tugasreact/Routing/Home/Home"
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';
import Menu from './Tugasreact/Routing/Menu/Menu';
import Contact from './Tugasreact/Routing/Contact/Contact';
import Error from "./Tugasreact/Routing/Error/PageError"
import FormValidation from "./Tugasreact/FormValidation/Form"
import TugasComponent from "./Tugasreact/TugasKomponen/ClassComponent"
import KomponenProp from "./Tugasreact/TugasKomponen/KomponenProp"
import Hooks from "./Materi React/Hooks/pembahasan/Counter"
import Komponen from "./Materi React/Komponen/Pembahasan/FunctionalComponent"
import Routing from "./Materi React/Routing/Client/index"
import Styling from "./Materi React/Styling/Inline/index"
import Module from "./Materi React//Styling/Module"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Menu",
    element: <Menu />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
  {
    path: "/Error",
    element: <Error />
  },
  {
    path: "/FormValidation",
    element: <FormValidation />
  },
  {
    path: "/TugasComponent",
    element: <TugasComponent />
  },
  {
    path: "/KomponenProp",
    element: <KomponenProp />
  },
  {
    path: "/Hooks",
    element: <Hooks />
  },
  {
    path: "/Komponen",
    element: <Komponen />
  },
  {
    path: "/Routing",
    element: <Routing />
  },
  {
    path: "/Styling",
    element: <Styling />
  },
  {
    path: "/Module",
    element: <Module />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();