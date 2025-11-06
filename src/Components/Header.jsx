import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'black'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'40 px'} src={logo} alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'bold' }}>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            REQUESTO
            </Link>
          </Typography>
          <Link to={'/lend'} style={{textDecoration:'none', color:'white'}}><Button color="inherit">Lend</Button></Link>
          <Link to={'/request'} style={{textDecoration:'none', color:'white'}}><Button color="inherit">Request</Button></Link>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}><Button color="inherit">Admin</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header


































// const Header = () => {
//   return (
//     <>
//       <div className='d-flex align-items-center justify-content-between bg-dark'>

//         <div className=''>
//           <img className='img-fluid' width={'50px'} height={'50px'} src={logo} alt="logo" />
        
//         </div>

        {/* <div className="">
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            <h1 className='text-center'>REQUESTO</h1>
          </Link>
        </div> */}
        
//         <div className="d-flex align-items-center gap-5">
//           <Link to={'/lend'} style={{textDecoration:'none', color:'white'}}>
//             <p className='text-center'>LEND</p>
//           </Link>
//           <Link to={'/request'} style={{textDecoration:'none', color:'white'}}>
//             <p className='text-center'>REQUEST</p>
//           </Link>
//           <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
//             <p className='text-center'>Admin</p>
//           </Link>
//         </div>

//       </div>
//     </>
//   )
// }

// export default Header

