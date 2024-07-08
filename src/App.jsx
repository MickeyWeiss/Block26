import { useState } from 'react'
import './App.css'
import Contact List from './components/ContactList.jsx'

function App() {
  const [selectedContactID, setSelectedContactID] = useState(null)

  return (
    <>
      {selectedContactID ? (
        <div>Selected Contact View</div>
      ) : (
        <contactList />
      )}
    </>
  )
}

export default App
