import React from 'react'
import { Lock } from 'react-feather'

const AppCom = ({ icon, title, data, button }) => {

  return (
    <>
        <div className='card hover-card-active'  >
            <div className='card-body'>
                <div className="d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <h4 className='mb-0  fw-bolder'>
                            {title}
                        </h4>
                        {/* <span
                            className=""
                            style={{cursor: 'pointer', position: 'absolute', top: '2px', left: '75px', transform: `translate(100%, 100%)`}}
                        >
                            <Info size={9} />
                        </span> */}
                    </div>
                    <div className='align-self-end'>
                        <Lock color='black' strokeWidth={1} size={16}/>
                    </div>
                </div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <p className="w-100 h-100 mt-1 fw-light" style={{ text: 'wrap' }}>
                            {data}
                        </p>
                    <div className='d-flex justify-content-end'>
                        {/* <img className='w-100 h-100' src="" alt="logo"></img> */}
                            {icon}
                    </div>
                </div>
                <div className="d-flex justify-content-end" style={{cursor: 'pointer', marginTop: '1rem' }}>
                    {button}
                </div>
            </div>
        </div>
    </>
  )
}

export default AppCom