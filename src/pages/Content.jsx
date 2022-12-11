import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Content({items, setitems, handleDelete, handleDeleteAll}) {
  return (
    <div>
    <div className='bg-indigo-900 px-4 md:px-16 mt-6 rounded-lg'>
      {
        items.map((item,i) => {
          return(
            <div className='text-center'>
              <h1 className='pt-4 pb-4'>{item} <span className='px-4 cursor-pointer'><DeleteForeverIcon onClick={() => handleDelete(i)}/></span></h1>
            </div>
          )
        })
      }  
    </div>
    <div className="flex justify-between mt-6">
    <h3 className='mr-12 font-medium capitalize'>items: <span className='font-black text-lg'>{items.length}</span></h3>
    <button 
      onClick={() => handleDeleteAll()}
      className="font-medium capitalize"
    >
      clear all
    </button>

  </div>
  </div>
  )
}

export default Content