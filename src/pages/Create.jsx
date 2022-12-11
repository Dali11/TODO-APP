import React, { useState } from 'react'
import Content from './Content'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Create() {
  const [ name, setname ] = useState('')
  const [ items, setitems ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name.length !== 0){
      setitems([...items, name])
    }
    setname('')

  }
  const handleDelete = (index) => {
    items.splice(index,1)
    setitems([...items])
  }
  const handleDeleteAll = (index) => {
    items.splice(index)
    setitems([...items])
  }
  return (
    <>
    <form onSubmit={handleSubmit} className='text-white border-indigo-900 '>
      <input
        className='bg-indigo-900 p-2 rounded-l-lg'
        type='text'
        name="items"
        placeholder='Create New Todo..'
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button className='bg-green-700 p-2 rounded-r-lg'>
        <AddCircleIcon />
      </button>
    </form>
    <Content items={items} setitems={setitems} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll}/>
    </>
  )
}

export default Create