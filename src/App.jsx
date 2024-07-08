import { useState } from 'react'
import './App.css'
import './components/ContactList.jsx'

function App() {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log("Contacts: ", contacts);

  return (
    <>

    </>
  )
}

export default App
