// import React,{useState,useEffect} from 'react'
// import ShowFullInfo from './ShowFullInfo';
// const JobCard = ({ job }) => {
//     const [showFull,setShowFull]=useState(false);
   
//     const handleShowFull=()=>{
//         setShowFull(true);
//     }
//     const handleHideFull=()=>{
//         setShowFull(false);
//     }
//     const companyDetails = job.jobDetailsFromCompany;
//     const getFirst30Words = () => {
//         const words = companyDetails.split(' ');
//         return words.length > 25 ? words.slice(0, 25).join(' ') + '...' : companyDetails;
//     };

//     return (
//         <div className='text-black border-[2px] rounded-2xl shadow-lg m-2 relative p-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl' style={{ width: '17rem', height: '24rem' }}>
//             <div className='flex-col justify-start items-center gap-1 my-2 p-2'>
//                 <div className='flex justify-start items-center gap-1 mb-2 p-1'>
//                     <img src={job.logoUrl} alt="img" style={{ width: '60px', height: '60px' }} />
//                     <div className='flex-col justify-start items-start gap-1 ml-8'>
//                         <div className='text-start text-md font-bold'>{job.companyName}</div>
//                         <div className='text-start text-sm font-medium'>{job.jobRole}</div>
//                         <div className='text-start text-sm font-light'>{job.location}</div>
//                     </div>
//                 </div>
//                 <div className='text-start text-[15px]'>
//                     Estimated Salary: <span className='text-[10px]'>{job.minJdSalary}{job.salaryCurrencyCode}{" - "}{job.maxJdSalary}{job.salaryCurrencyCode}</span>
//                 </div>
//                 <div>About Company:</div>
//                 <div className='text-sm font-light'>
//                     {getFirst30Words()}
//                 </div>
//                 {job.jobDetailsFromCompany.length>25&&
//                 showFull&&
//                 <div className="absolute flex items-center justify-center bg-gray-500 bg-opacity-75 text-black py-4">
//                 <div className="bg-white p-2  my-2 rounded-lg shadow  min-w-[60%]  overflow-scroll max-h-[80%]">
//                   <h2 className="text-lg font-bold mb-4 text-center">About Company</h2>
//                 <ShowFullInfo detailedInfo={job.jobDetailsFromCompany} onClose={handleHideFull}/>
//                 </div>
//               </div>
//                 }
//             <div className='flex justify-center items-center'>
//                 {(job.jobDetailsFromCompany.length>25&&
//                 !showFull)&&
//                 <div type='buttom' className='text-center px-3 py-1 mx-auto cursor-pointer' onClick={handleShowFull}>See More...</div>
//                 }
//             </div>
//                 <div className='text-md'>Experience required: <span className='text-[10px]'>{job.minExp}-{job.maxExp} Years</span></div>
//                 <div className='flex justify-between items-center absolute w-[90%]' >
//                     <a href={job.jdLink} className='w-full py-2 mt-3 text-center border-[2px] rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-600 hover:no-underline hover:text-inherit' style={{marginBottom:'10px',bottom:'20px'}}>
//                         Easy Apply
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default JobCard


import React, { useState } from 'react';
import ShowFullInfo from './ShowFullInfo';

const JobCard = ({ job }) => {
    const [showFull, setShowFull] = useState(false);

    const handleShowFull = () => {
        setShowFull(true);
    };

    const handleHideFull = () => {
        setShowFull(false);
    };

    const companyDetails = job.jobDetailsFromCompany;

    const getFirst30Words = () => {
        const words = companyDetails.split(' ');
        return words.length > 25 ? words.slice(0, 25).join(' ') + '...' : companyDetails;
    };

    const styles = {
        modal: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Semi-transparent background */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999, /* Ensure the modal is on top */
        },
        modalContent: {
            backgroundColor: '#fff', /* White background for the modal */
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '80%',
            maxHeight: '80%',
            overflowY: 'scroll', /* Enable scrolling if content exceeds modal height */
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', /* Drop shadow for the modal */
        }
    };

    return (
        <div className='text-black border-[2px] rounded-2xl shadow-lg m-2 relative p-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl' style={{ width: '17rem', height: '24rem' }}>
            <div className='flex-col justify-start items-center gap-1 my-2 p-2'>
                <div className='flex justify-start items-center gap-1 mb-2 p-1'>
                    <img src={job.logoUrl} alt="img" style={{ width: '60px', height: '60px' }} />
                    <div className='flex-col justify-start items-start gap-1 ml-8'>
                        <div className='text-start text-md font-bold'>{job.companyName}</div>
                        <div className='text-start text-sm font-medium'>{job.jobRole}</div>
                        <div className='text-start text-sm font-light'>{job.location}</div>
                    </div>
                </div>
                <div className='text-start text-[15px]'>
                    Estimated Salary: <span className='text-[10px]'>{job.minJdSalary}{job.salaryCurrencyCode}{" - "}{job.maxJdSalary}{job.salaryCurrencyCode}</span>
                </div>
                <div>About Company:</div>
                <div className='text-sm font-light'>
                    {getFirst30Words()}
                </div>
                {job.jobDetailsFromCompany.length > 25 &&
                    showFull &&
                    <div style={styles.modal}>
                        <div style={styles.modalContent}>
                            <h2 className="text-lg font-bold mb-4 text-center">About Company</h2>
                            <ShowFullInfo detailedInfo={job.jobDetailsFromCompany} onClose={handleHideFull} />
                        </div>
                    </div>
                }
                <div className='flex justify-center items-center'>
                    {(job.jobDetailsFromCompany.length > 25 &&
                        !showFull) &&
                        <div type='buttom' className='text-center px-3 py-1 mx-auto cursor-pointer' onClick={handleShowFull}>See More...</div>
                    }
                </div>
                <div className='text-md'>Experience required: <span className='text-[10px]'>{job.minExp}-{job.maxExp} Years</span></div>
                <div className='flex justify-between items-center absolute w-[90%]' >
                    <a href={job.jdLink} className='w-full py-2 mt-3 text-center border-[2px] rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-600 hover:no-underline hover:text-inherit' style={{ marginBottom: '10px', bottom: '20px' }}>
                        Easy Apply
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
