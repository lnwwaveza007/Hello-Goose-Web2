import React from 'react'
import './css/Nav.css'

import kmutt_logo from '../assets/nav/ant_kmutt.png'
import profile_logo from '../assets/nav/profile.png'

const Nav = () => {
  return (
    <>
      <div id='nav' className='flex flex-row justify-between items-center h-24 pl-8 pr-8'>
        <div id='logo' className=' w-80 mb-5'>
          <img src={kmutt_logo}/>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div id='search' className='flex flex-row gap-3 justify-center items-center rounded-3xl pl-3 pr-3 pt-1 pb-1 mr-8 shadow-lg'>
            <input type='text' id='search'></input>
            <i className="bi bi-search"></i>
          </div>
          <div className='flex flex-row gap-5 justify-center items-center'>
            <div className='btn flex flex-row justify-center items-center rounded-full w-9'>
              <i className="bi bi-cart2" style={{ fontSize: '1.5em' }}></i>
            </div>
            <div className='btn flex flex-row justify-center items-center rounded-full w-9'>
              <i className="bi bi-heart" style={{ fontSize: '1.5em' }}></i>
            </div>
            <div className='btn flex flex-row justify-center items-center rounded-full w-14'>
              <img src={profile_logo} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav