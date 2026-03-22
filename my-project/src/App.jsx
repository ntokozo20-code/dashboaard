import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar" // when you create it

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Right side (Header + Content) */}
      <div className="flex-1">
        <Header />

        <main className="p-6">
          <h1 className="text-2xl font-bold">Welcome</h1>

          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Count is {count}
          </button>
        </main>
      </div>

    </div>
  )
}

export default App;
