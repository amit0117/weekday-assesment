import React from 'react'

function ShowFullInfo({detailedInfo,onClose}) {
    console.log("in full infor");
  return (
    <div className='mx-auto border-[2px] overflow-scroll flex flex-col gap-1 justify-start items-center p-4'
     style={{minWidth:'400px'}}
    >
        <div className='mb-3' onClick={()=>onClose()}>
         {detailedInfo}
        </div>
        <button type='button' className='border-[1px] px-2 py-1 rounded-lg text-center bg-red-400' onClick={onClose}>
            cancel
        </button>
    </div>
  )
}
export default ShowFullInfo
