import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { IconButton, InputBase, AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Popover, Paper, Divider, Avatar } from '@mui/material';



import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


import './App.css';



import SalesPage from './maincomponent/pages/SalesPage';
import MensWearPage from './maincomponent/pages/MensWearPage';
import WomensWearPage from './maincomponent/pages/WomensWearPage';
import ContactPage from './maincomponent/pages/ContactPage';
import CompleteView from '../src/maincomponent/CompleteView';
import ShoppingCart from '../src/maincomponent/ShoppingCart';
import DisplayPage from './DisplayPage';

import Login from '../src/CreateAccount/Login';

import ProductDetail from '../src/maincomponent/ProductDetail';
import Checkout from '../src/maincomponent/Checkout';
import CartItem from '../src/maincomponent/CartItem';
import Setup from './Admin/Setup';
import ProfileMenu from './maincomponent/ProfileMenu';


import slider1 from './maincomponent/images/sl2.webp';
import ZoomImageSlider from '../src/maincomponent/Slider';
import Payment from './maincomponent/Payment';
import PaymentPublish from './PaymentPublish';
import MobilePayment from './MobilePayment';
import Logout from './CreateAccount/Logout';

import Slider1 from './maincomponent/images/aa1.webp'



const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [accountAnchor, setAccountAnchor] = useState(null);
  const [ shopAnchor, setShopAnchor ] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleSearch = () => setIsActive(!isActive);

  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);


  const handleAccountClick = (event) => {
    setAccountAnchor(event.currentTarget);
};

const handleAccountClose = () => {
    setAccountAnchor(null);
};


  const handleShopClick = (event) => {
    setShopAnchor(event.currentTarget);
};

const handleShopClose = () => {
    setShopAnchor(null);
};


  return (
    <Router>
      <nav className="navbar">
        {/* Desktop View */}
        <div className="nav-desktop" style={{backgroundColor:''}}>
        <div className="logo" style={{ marginTop: '-5px',fontFamily:'Twentieth Century sans-serif',fontSize:' ',color:'',fontWeight:'' }}> WENLI! </div>

          <ul className="nav-links">
            <li><Link to="/ContactPage" style={{fontFamily:'Twentieth Century sans-serif',fontSize:'20px',color:'RGBA(40, 40, 40, 0.7)'}}> Contact </Link></li>
            <li><Link to="/" style={{fontFamily:'Twentieth Century sans-serif',fontSize:'20px',color:'RGBA(40, 40, 40, 0.7)'}}>Home</Link></li>
            <li><Link to="/MensWearPage" style={{fontFamily:'Twentieth Century sans-serif',fontSize:'20px',color:'RGBA(40, 40, 40, 0.7)'}}>MensWear</Link></li>
            <li><Link to="/WomensWearPage" style={{fontFamily:'Twentieth Century sans-serif',fontSize:'20px',color:'RGBA(40, 40, 40, 0.7)'}}>WomensWear</Link></li>
            <li><Link to="/SalesPage" style={{fontFamily:'Twentieth Century sans-serif',fontSize:'20px',color:'RGBA(40, 40, 40, 0.7)'}}>Sales</Link></li>
          </ul>

          <ul className="nav-icons">
            <li> 
              <input type="text" className="s" placeholder="Search Product" style={{ marginBottom: '10px', padding: '15px', height: '10px', width: '400px', marginTop: '-10px', borderRadius: '120px', backgroundColor: 'rgb(212,214,218)', outline: 'none', border: 'none' }} />
            </li>

              
            <li>
              <PersonIcon style={{ color: 'black',cursor:'pointer' }} onClick={handleAccountClick}/>
            </li>


            <li color="inherit" onClick={handleShopClick}>
              <AddShoppingCartIcon titleAccess='ShoppingCart' style={{cursor:'pointer'}}/>
            </li>
          </ul>
        </div>





                    <Popover open={Boolean(accountAnchor)} anchorEl={accountAnchor} onClose={handleAccountClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} transformOrigin={{     vertical: 'top',     horizontal: 'right', }} >

                      <Paper style={{ maxWidth: 300, padding: 10, color:'white',backgroundColor:'rgb(15,15,15)' }}>
                          <Box display="flex" alignItems="center" mb={2}>
                              <Avatar alt="User Avatar" src={slider1} style={{border:'2px solid white'}}/> 
                              <Box ml={2}>
                                  <Typography variant="h6">
                                      gshankar
                                  </Typography>
                                  <Typography variant="subtitle1">
                                      @MRGAURISHANKAR413
                                  </Typography>
                              </Box>
                          </Box>

                          <div className="divider"></div>

                          <List>
                            <ListItem button component={Link} to="/Login">
                                <ListItemIcon style={{color:'white'}}>
                                    <LoginIcon />
                                </ListItemIcon>
                                <ListItemText primary="Login" />
                            </ListItem>

                            <ListItem button component={Link} to="/Logout">
                                <ListItemIcon style={{color:'white'}}>
                                    <ArrowCircleLeftIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItem>
                          </List>
                        </Paper>
                      </Popover>




                      <Popover open={Boolean(shopAnchor)} anchorEl={accountAnchor} onClose={handleShopClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} PaperProps={{ style: {color: 'white',maxHeight:'' } }} > 
                        <Paper style={{color: 'white',backgroundColor: '',overflowY: 'scroll',scrollbarWidth: 'none', }} >
                        <style>
                          {`
                            /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
                            ::-webkit-scrollbar {
                              width: 0px;
                              background: transparent; /* Optional: just in case it's visible */
                              }
                              `}
                        </style>
                        
                      </Paper>
                        <ShoppingCart />
                    </Popover>























        {/* Mobile View */}
        <div className="nav-mobile" style={{width:'100%'}}>
          {!isActive && (
            <li style={{listStyleType:'none',fontSize:'30px'}}> <MenuIcon onClick={toggleSidebar} style={{color:'black'}}/>  WENLI !</li>
          )}

          <div className="rightside" style={{textAlign:'right',width:'100%'}}> 
            {isActive && ( 
              <input className={`search-input ${isActive ? 'active' : ''}`} placeholder="Search..." style={{ paddingLeft: '15px', height: '20px', padding: '7px', backgroundColor: 'rgb(212,214,218)', borderRadius: '12px', border: 'none', outline: 'none', transition: 'width 0.4s ease', width:'60%' }} /> 
            )}

          <IconButton className="more-button" onClick={handleSearch} style={{marginRight:'auto'}}>
            <SearchIcon className="search-icon" style={{color:'black'}}/>
          </IconButton>


          <IconButton className="more-button">
            <AddShoppingCartIcon style={{color:'black'}}/>
          </IconButton>
          </div>


          <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar} variant="temporary" sx={{ '& .MuiDrawer-paper': { width: 250, boxSizing: 'border-box', }, }}>
            <div className="sidebar" style={{color:'black'}}>
              <List>
                <ListItem button component={Link} to="/" onClick={toggleSidebar}>
                  <ListItemIcon><HomeIcon style={{color:'black'}}/></ListItemIcon>
                  <ListItemText primary="Home" style={{color:'black'}}/>
                </ListItem>

                <ListItem button component={Link} to="/Login" onClick={toggleSidebar} >
                  <ListItemIcon><LoginIcon style={{color:'black'}}/></ListItemIcon>
                  <ListItemText primary="Login" style={{color:'black'}}/>
                </ListItem>

                <ListItem button component={Link} to="/ContactPage" onClick={toggleSidebar}>
                  <ListItemIcon><AddIcCallIcon style={{color:'black'}}/></ListItemIcon>
                  <ListItemText primary="Contact" style={{color:'black'}}/>
                </ListItem>

                <ListItem button component={Link} to="/WomensWearPage" onClick={toggleSidebar}>
                  <ListItemIcon><SubscriptionsIcon style={{color:'black'}}/></ListItemIcon>
                  <ListItemText primary="WomensWear" style={{color:'black'}}/>
                </ListItem>

                <ListItem button component={Link} to="/MensWearPage" onClick={toggleSidebar}>
                  <ListItemIcon><SubscriptionsIcon style={{color:'black'}}/></ListItemIcon>
                  <ListItemText primary="MensWear" style={{color:'black'}}/>
                </ListItem>

                <ListItem button component={Link} to="/SalesPage" onClick={toggleSidebar}>
                  <ListItemIcon><SubscriptionsIcon style={{color:'black'}}/></ListItemIcon>
                  <ListItemText primary="Sales" style={{color:'black'}}/>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </div>
      </nav>

      <div className="maincontent" style={{height:'',backgroundColor:''}}>

        <Routes>
          <Route path="/" element={<ZoomImageSlider />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/CompleteView" element={<CompleteView />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/CartItem" element={<CartItem />} />
          <Route path="/Setup" element={<Setup />} />
          <Route path="/Login" element={<Login setToken={setToken} setIsAdmin={setIsAdmin} />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/SalesPage" element={<SalesPage />} />
          <Route path="/MensWearPage" element={<MensWearPage />} />
          <Route path="/WomensWearPage" element={<WomensWearPage />} />
          <Route path="/DisplayPage" element={<DisplayPage />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/ProfileMenu" element={<ProfileMenu />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/PaymentPublish" element={<PaymentPublish />} />
          <Route path="/MobilePayment" element={<MobilePayment />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
