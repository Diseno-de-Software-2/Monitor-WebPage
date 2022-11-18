import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SwitchBankService from './components/SwitchBankService'
import registry from '../../API-Gateway-EduPay/routes/registry.json'

function App() {

  const [consult, setConsult] = useState(true)
  const [transactions, setTransactions] = useState(true)

  const services = registry.services

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

  const handleService = (service) => {
    axios.post(`http://localhost:3000/switch/${service.apiName}`, {
      url: service.url,
      enabled: !service.enabled
    }).catch(err => {
      alert(err)
    })
  }

  console.log(services)
  console.log(Object.keys(services))
  console.log(services['auth'].instances)

  return (
    <div className="App">
      <div>
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
        <div className='text-left text-2xl'>
          {
            Object.keys(services).map((service, index) => {
              return (
                <div key={index}>
                  <h3>
                    {service}
                  </h3>
                  <div className='flex gap-5'>
                    {
                      services[service].instances.map((instance, index) => {
                        return (
                          <SwitchBankService key={index} estado={instance.enabled} setEstado={() => handleService(instance)} nombre={'port: ' + instance.port} />
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
