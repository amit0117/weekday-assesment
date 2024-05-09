import React,{useState,useEffect} from 'react'
import ShowFullInfo from './ShowFullInfo';
const JobCard = ({ job }) => {
    const [showFull,setShowFull]=useState(false);
    const handleShowFull=()=>{
        setShowFull(true);
    }
    const handleHideFull=()=>{
        setShowFull(false);
    }
    const companyDetails = job.jobDetailsFromCompany;
    const getFirst30Words = () => {
        const words = companyDetails.split(' ');
        return words.length > 25 ? words.slice(0, 25).join(' ') + '...' : companyDetails;
    };
    const a=job.jobDetailsFromCompany.length;
    
    return (
        <div className='text-black border-[2px] rounded-2xl shadow-lg m-2 relative p-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl' style={{ width: '17rem', height: '22rem' }}>
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
                {job.jobDetailsFromCompany>25&&
                showFull&&<ShowFullInfo detailedInfo={job.jobDetailsFromCompany} onClose={handleHideFull}/>
                }
                <button type='buttom' className='text-center px-3 py-1' onClick={handleShowFull}>See More...</button>
            <div className='flex'>

                {job.jobDetailsFromCompany>25&&
                !showFull&&<button type='buttom' className='text-center px-3 py-1'>See More...</button>
            }
            </div>
                <div className='text-md'>Experience required: <span className='text-[10px]'>{job.minExp}-{job.maxExp} Years</span></div>
                <div className='flex justify-between items-center absolute w-[90%]' >
                    <a href={job.jdLink} className='w-full py-2 mt-3 text-center border-[2px] rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-600 hover:no-underline hover:text-inherit' style={{marginBottom:'5px'}}>
                        Easy Apply
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JobCard
