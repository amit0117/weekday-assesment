import React from 'react'

const JobCard = ({ job }) => {
    const companyDetails = job.jobDetailsFromCompany;
    const getFirst30Words = () => {
        const words = companyDetails.split(' ');
        return words.length > 25 ? words.slice(0, 25).join(' ') + '...' : companyDetails;
    };
    return (
        <div className='text-black bodrer-[5px] rounded-md shadow-2xl m-2' style={{ width: '15rem', height: '22rem' }} >
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
                <div className='text-md'>Experience required: <span className='text-[10px]'>{job.minExp}-{job.maxExp} Years</span></div>
                <div className='flex justify-between items-center'>
                    <div href={job.jdLink} className='w-full px-2 py-2 mt-3 text-center border-[2px] rounded-lg'>
                        Easy Apply
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
