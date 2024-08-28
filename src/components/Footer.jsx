import React from 'react'

function Footer() {
    return (
        <div className='flex justify-center items-center flex-col text-black-300 mb-6 gap-2'>
            <div>
                ----- Made By<a className='pl-1 text-slate-800 font-medium'>Haseeb</a>-----
            </div>
            <div  className='text-black-300 underline' >
                <a href="https://github.com/Syntax-Sage-x/store_dashboard">Get the source code</a>
                </div>
        </div>
    )
}

export default Footer