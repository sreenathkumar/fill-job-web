import React from 'react';
import * as Realm from 'realm-web'
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';



//initializing the MongoDB App
export const app = new Realm.App({ id: process.env.REACT_APP_ID! });

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
