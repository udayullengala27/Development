import React from 'react'
import { Activity, Info, Lock, MapPin } from 'react-feather'
import './App.css'

const App = () => {
  return (
    <>
        <div className='col-md-4'>
            <div className='card hover-card-active' style={{width: '100%', minHeight: '100%'}} >
                <div className='card-body'>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className='d-flex'>
                            <h4 className='mb-0  fw-bolder'>
                                Infiniti
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
                                Get to know your customer better & recommend products that are fit for them!
                            </p>
                        <div className='icon'>
                            <img className='w-100 h-100' src="https://cdn.dribbble.com/users/1979827/screenshots/6748175/dribbble_shot_hd__3__4x.png?compress=1&resize=400x300&vertical=center" alt="logo" />
                        </div>
                    </div>
                    <div className="hidden-section">
                        <div style={{ fontSize: '0.9rem'}}>
                            <Activity size={15}/>
                            <span className='ms-1 fw-light'>Moderate | 4 mins to go</span>
                        </div>
                        <div style={{ fontSize: '0.9rem'}}>
                            <MapPin size={15}/>
                            <span className='ms-1 fw-light'>Home Page</span>
                        </div>
                        <div className="hover-card d-flex justify-content-end"
                            style={{
                                cursor: 'pointer',
                                position: 'absolute',
                                bottom: '-5px',
                                right: '15px',
                                transform: `translate(0%, 100%)`,
                                transition: 'box-shadow 0.25s ease',
                                zIndex: '1000'
                                }}>
                            <button className="btn btn-primary hover-button">Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App