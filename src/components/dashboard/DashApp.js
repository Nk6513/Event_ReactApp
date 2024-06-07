import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import './css/materialicons.css';
import './css/robofonts.css';

function DashApp() {
  return (
<div>
  <h1>Dashapp</h1>
</div>

  )
}

export default DashApp

function Child1(){
    return(
        <div><h1>Child 1</h1></div>
    )
}

// export default Child1;