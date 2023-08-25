import React from 'react'
import { Activity, Info, Lock, MapPin } from 'react-feather'
import AppCom from './components/Apps/Apps_comp/AppCom'

const App = () => {
  return (
    <>
        <div className='row match-height'>
            <div className='col-md-4'>
                <AppCom 
                    icon={<img src="https://cdn.dribbble.com/users/1979827/screenshots/6748175/dribbble_shot_hd__3__4x.png?compress=1&resize=400x300&vertical=center" className='w-100 h-100' alt="logo" />} 
                    title={'Infiniti'} 
                    button={
                    <button className="btn btn-primary hover-button">
                        Dashboard
                    </button>} 
                    data="Instant brand collaborations to retain customers & acquire new ones."
                />   
            </div>
            <div className='col-md-4'>
                <AppCom 
                    icon={<img src="https://cdn.dribbble.com/users/1979827/screenshots/6748175/dribbble_shot_hd__3__4x.png?compress=1&resize=400x300&vertical=center" className='w-100 h-100' alt="logo" />} 
                    title={'SuperLeadz'} 
                    button={
                    <button className="btn btn-primary hover-button">
                        Dashboard
                    </button>} 
                    data="Convert website leads into sales in the shortest time possible!"
                />   
            </div>
            <div className='col-md-4'>
                <AppCom 
                    icon={<img src="https://cdn.dribbble.com/users/1979827/screenshots/6748175/dribbble_shot_hd__3__4x.png?compress=1&resize=400x300&vertical=center" className='w-100 h-100' alt="logo" />} 
                    title={'Oh My Customer!'} 
                    button={
                    <button className="btn btn-primary hover-button">
                        Dashboard
                    </button>} 
                    data="Attractive user profiles to help customers manage orders, add to wishlist, review & more."
                />   
            </div>
            <div className='col-md-4'>
                <AppCom 
                    icon={<img src="https://cdn.dribbble.com/users/1979827/screenshots/6748175/dribbble_shot_hd__3__4x.png?compress=1&resize=400x300&vertical=center" className='w-100 h-100' alt="logo" />} 
                    title={'DemoCrazy'} 
                    button={
                    <button className="btn btn-primary hover-button">
                        Dashboard
                    </button>} 
                    data="Data collection made fun to personalize shopping experiences in real time!"
                />   
            </div>
            <div className='col-md-4'>
                <AppCom 
                    icon={<img src="https://cdn.dribbble.com/users/1979827/screenshots/6748175/dribbble_shot_hd__3__4x.png?compress=1&resize=400x300&vertical=center" className='w-100 h-100' alt="logo" />} 
                    title={'Flash Accounts '} 
                    button={
                    <button className="btn btn-primary hover-button">
                        Dashboard
                    </button>} 
                    data="Super-fast sign-ups that don’t disrupt the buying process."
                />   
            </div>
            <div className='col-md-4'>
                <AppCom 
                    icon={<img src="https://cdn.dribbble.com/users/1979827/screenshots/6748175/dribbble_shot_hd__3__4x.png?compress=1&resize=400x300&vertical=center" className='w-100 h-100' alt="logo" />} 
                    title={'Semper Fi '} 
                    button={
                    <button className="btn btn-primary hover-button">
                        Dashboard
                    </button>} 
                    data="A loyalty program where other brands reward your customers for shopping with you!"
                />   
            </div>
        </div>
    </>
  )
}

export default App