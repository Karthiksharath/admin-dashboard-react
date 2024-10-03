
import { Route, Routes } from "react-router-dom"

import Overviewpage from './pages/Overviewpage'
import Productspage from './pages/Productspage'
import Userspage from './pages/Userspage'
import Salespage from './pages/Salespage'
import Orderspage from './pages/Orderspage'
import Analyticspage from "./pages/Analyticspage"
import Settingspage from "./pages/Settingspage"


import Sidebar from './components/common/Sidebar'



function App() {
  return(
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">

      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-o backdrop-blur-sm"></div>
      </div>

      <Sidebar></Sidebar>

      <Routes>
        <Route path="/" element={<Overviewpage></Overviewpage>}></Route>
        <Route path="/products" element={<Productspage></Productspage>}></Route>
        <Route path="/users" element={<Userspage></Userspage>}></Route>
        <Route path="/sales" element={<Salespage></Salespage>}></Route>
        <Route path="/orders" element={<Orderspage></Orderspage>}></Route>
        <Route path="/analytics" element={<Analyticspage></Analyticspage>}></Route>
        <Route path="/settings" element={<Settingspage></Settingspage>}></Route>
      </Routes>
    </div>

  )
}
  


export default App
