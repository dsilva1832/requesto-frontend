import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <>
      <div style={{width:'100%', height:'91vh', backgroundColor:'aliceblue'}}>
        <div className='pt-3 pe-3' style={{float:'right'}}>
          <Button variant="outlined" color="error">
              <Link to={'/'} style={{textDecoration:'none', color:"#ef5350"}}>Logout</Link>
          </Button>
        </div>
  
        <div className='pt-3'>
          <h1 className='text-center mb-3' style={{ fontFamily: '"Merriweather", serif'}}>Welcome Admin</h1>

          <div className='d-flex justify-content-center'>
            <div className='border  h-50 rounded-2 p-3 bg-white' style={{width:'30rem'}}>
              <h5>Title</h5>
              <h7>Description</h7>
              <div className='d-flex justify-content-end gap-2'>
                <Button sx={{color:'green'}}>Approve</Button>
                <Button sx={{color:'red'}}>Reject</Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Admin
