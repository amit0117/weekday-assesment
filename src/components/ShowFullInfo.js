import React from 'react'

function ShowFullInfo({detailedInfo,onClose}) {
    
  return (
    <div className='my-[20%] mx-auto border-[2px] overflow-scroll flex-col gap-1 justify-start items-start'
     
    >
        <div className='' onClick={()=>onClose()}>
         {detailedInfo}
        </div>
        <button type='button' className='border-[1px] px-2 py-1 rounded-lg'>
            cancel
        </button>
    </div>
  )
}

export default ShowFullInfo
