import React from 'react'
import {Link , Route , Routes } from 'react-router-dom'
import Home from './pages/home'
import Admin from './pages/admin'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h1 className="text-lg font-semibold">Course Explorer</h1>
          <nav>
            <Link className="px-2" to="/">Home</Link>
            <Link className="px-2" to="/admin">Admin</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
