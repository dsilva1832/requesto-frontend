import React from 'react'
import './Landingpage.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
// import ParticleBackground from '../Components/ParticleBackground'

function Landingpage() {
  return (
    <>
      <div id='home'>
        
        <div className='home-banner d-flex justify-content-center align-items-center'>
          {/* <ParticleBackground/> */}
            <div className=''>
              <h1 className='text-center mb-3' style={{color:'#8A2BE2', fontFamily:'"Yatra One", system-ui', fontSize:'50px'}} >For the Community. From the Community.</h1>
              <h5 className='text-center' style={{color:'#8A2BE2'}}>Request what you need. Provide what you can.</h5>
              <h5 className='text-center mb-5' style={{color:'#8A2BE2'}}> Together, we build a community that shares, supports, and sustains.</h5>
              {/* <h5 className='text-center' style={{color:'#8A2BE2'}}>Discover a space where generosity meets purpose.</h5>
              <h5 className='text-center mb-5' style={{color:'#8A2BE2'}}>Post your needs, share your resources, and build a community that grows together.</h5> */}
              <div className='d-flex justify-content-center gap-5'>
                <Button sx={{borderColor:"#8a2be2", width:'150px'}} variant="outlined" size="large">
                  <Link to={'/request'} style={{textDecoration:'none', color:'#8a2be2'}} >Request</Link>
                </Button>
                <Button sx={{borderColor:'#8a2be2', width:'150px'}} variant="outlined" size="large">
                  <Link to={'/lend'} style={{textDecoration:'none', color:'#8a2be2'}}>Provide</Link>
                </Button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Landingpage
