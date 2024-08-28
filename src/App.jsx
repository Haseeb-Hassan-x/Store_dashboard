import Footer from "./components/Footer"
import Overview from "./components/Overview"
import Sidebar from "./components/Sidebar"
import Table from "./components/Table"
import Topbar from "./components/Topbar"
import Transactions from "./components/Transactions"


function App() {

  return (
    <div className="bg-slate-100">
      <Sidebar />

      <div className="border-b border-black-150 md:pl-56 bg-white-500">
        <Topbar />
      </div>
      
      <div className=" m-5 mb-0 md:ml-64 grid gap-8">
        <Overview />
        <div className="grid gap-6">
          <Transactions />
          <Table />
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default App