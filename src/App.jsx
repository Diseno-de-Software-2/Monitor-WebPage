import { useState } from 'react'
import './App.css'
import axios from 'axios'
import SwitchBankService from './components/SwitchBankService'
import InstanceCard from './components/InstanceCard'
function App() {

  const [running, setRunning] = useState(false)
  const [consult, setConsult] = useState(true)
  const [transactions, setTransactions] = useState(true)

  const handleConsult = () => {
    axios.post('http://localhost:5000/switch', {
      service: 'consultas',
      enabled: !consult
    }).then(res => {
      setConsult(!consult)
    }).catch(err => {
      alert(err)
    })
  }

  const handleTransactions = () => {
    axios.post('http://localhost:5000/switch', {
      service: 'transacciones',
      enabled: !transactions
    }).then(res => {
      setTransactions(!transactions)
    }).catch(err => {
      alert(err)
    })
  }



  return (
    <div className="App">
      {
        <div className='text-left'>
          <h1>
            EduPay
          </h1>
          <div>
            <h2>
              API Bank
            </h2>
            <div className='flex gap-5'>
              <SwitchBankService estado={consult} setEstado={handleConsult} nombre={'Consultas'} />
              <SwitchBankService estado={transactions} setEstado={handleTransactions} nombre={'Transacciones'} />
            </div>
          </div>
          <h2>
            Instancias
          </h2>
          <h3>
            Accounts
          </h3>
          <h3>
            Pay
          </h3>
          <h3>
            Auth
          </h3>
          <h3>
            Balance
          </h3>
          <h3>
            Query
          </h3>
        </div>
        // (running) ? (

        // ) : (
        //   <>
        //     <h1>
        //       EduPay
        //     </h1>
        //     <button className='bg-blue-500 w-52 h-20 mt-20 text-2xl font-bold text-white rounded-xl shadow-xl hover:bg-blue-600' onClick={handleRunning}>Empezar</button>
        //   </>
        // )
      }
    </div>
  )
}

export default App
