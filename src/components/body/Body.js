import React, { useState, Suspense } from 'react'
import routes from '../../routes'

import { Redirect, Route, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Banner from '../banner/Banner'
import Loading from '../loading/Loading'

import { signInPath, signUpPath, homePath } from "../../constants"

import '../../styles/body.scss'

const Body = () => {
  const pathname = `/${useLocation().pathname.split("/")[1]}`

  return (
    <div className="body">
        <Banner />
        <Suspense fallback={Loading}>
          <Routes>
            {routes.map((route, index) => (
              <Route path={route.path} element={<route.component type={pathname===signUpPath ? 1 : 2}/>} key={index} />
            ))}
          </Routes>
        </Suspense>
    </div>
  )
}

export default Body