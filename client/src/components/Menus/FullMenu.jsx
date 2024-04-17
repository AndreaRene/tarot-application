// import React, { useState } from 'react';
// import './Drawer.css';
// import { Link, useLocation } from 'react-router-dom';
// import DashboardIcon from '../Hero/Assets/Images/Dashboard.png';
// import CardsIcon from '../Hero/Assets/Images/Cards.png';
// import HandsIcon from '../Hero/Assets/Images/Hands.png';
// import JournalIcon from '../Hero/Assets/Images/Journal.png';
// import LogoutIcon from '@mui/icons-material/Logout';
// // import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// // import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const MenuDrawer = ({ setIsLoggedIn, handleLogout }) => {
//     const [collapsed, setCollapsed] = useState(false); // State to track collapse status
//     const location = useLocation();

//     const handleCollapseToggle = () => {
//         setCollapsed(!collapsed);
//     };

//     return (
//         <div className={`custom-drawer ${collapsed ? 'collapsed' : ''}`}>
//             <div className='arrow-icon' onClick={handleCollapseToggle}>
//                 {/* {collapsed ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />} */}
//             </div>

//             <Link
//                 className={`links ${collapsed ? 'collapsed' : ''}${location.pathname === '/Dashboard' ? 'active-link' : ''}`}
//                 to='/Dashboard'
//             >
//                 {collapsed ? (
//                     <img src={DashboardIcon} alt='Dashboard Icon' />
//                 ) : (
//                     <span>
//                         Dashboard
//                         <img src={DashboardIcon} alt='Dashboard Icon' />
//                     </span>
//                 )}
//             </Link>
//             <Link
//                 className={`links ${location.pathname === '/Reading' ? 'active-link' : ''}`}
//                 to='/Reading'
//             >
//                 {collapsed ? (
//                     <img src={CardsIcon} alt='Reading Icon' />
//                 ) : (
//                     <span>
//                         Tarot Reading
//                         <img src={CardsIcon} alt='Reading Icon' />
//                     </span>
//                 )}
//             </Link>
//             <Link
//                 className={`links ${location.pathname === '/Journal' ? 'active-link' : ''}`}
//                 to='/Journal'
//             >
//                 {collapsed ? (
//                     <img src={JournalIcon} alt='Tarot Journal Icon' />
//                 ) : (
//                     <span>
//                         Tarot Journal
//                         <img src={JournalIcon} alt='Tarot Journal Icon' />
//                     </span>
//                 )}
//             </Link>
//             <Link
//                 className={`links ${location.pathname === '/Share' ? 'active-link' : ''}`}
//                 to='/Share'
//             >
//                 {collapsed ? (
//                     <img src={HandsIcon} alt='Share Readings Icon' />
//                 ) : (
//                     <span>
//                         Share Readings
//                         <img src={HandsIcon} alt='Share Readings Icon' />
//                     </span>
//                 )}
//             </Link>

//             {!collapsed && (
//                 <div className='horizontal-divider'></div>
//             )}
//             <div className='centered-links'>
//                 <Link
//                     className={`links mt-1 ${location.pathname === '/Profile' ? 'active-link' : ''}`}
//                     to='/Profile'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'Profile'
//                     )}
//                 </Link>
//                 <Link
//                     className={`links mt-1 ${location.pathname === '/Community' ? 'active-link' : ''}`}
//                     to='/Community'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'Community'
//                     )}
//                 </Link>
//                 <Link
//                     className={`links mt-1 ${location.pathname === '/Spreads' ? 'active-link' : ''}`}
//                     to='/Spreads'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'Browse Spreads'
//                     )}
//                 </Link>
//                 <Link
//                     className={`links mt-1 ${location.pathname === '/Decks' ? 'active-link' : ''}`}
//                     to='/Decks'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'Browse Decks'
//                     )}
//                 </Link>
//                 <Link
//                     className={`links mt-1 ${location.pathname === '/Shop' ? 'active-link' : ''}`}
//                     to='/Shop'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'App Store'
//                     )}
//                 </Link>
//                 {!collapsed && (
//                     <div className='horizontal-divider'></div>
//                 )}

//                 <Link
//                     className={`links mt-1 ${location.pathname === '/About' ? 'active-link' : ''}`}
//                     to='/About'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'Meet the Team'
//                     )}
//                 </Link>
//                 <Link
//                     className={`links mt-1 ${location.pathname === '/Faq' ? 'active-link' : ''}`}
//                     to='/Faq'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'FAQs'
//                     )}
//                 </Link>
//                 <Link
//                     className={`links mt-1 ${location.pathname === '/Contact' ? 'active-link' : ''}`}
//                     to='/Contact'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'Contact'
//                     )}
//                 </Link>
//                 <Link
//                     className={`links mt-1 mb-2 ${location.pathname === '/Legal' ? 'active-link' : ''}`}
//                     to='/Legal'
//                 >
//                     {collapsed ? (
//                         <span></span>
//                     ) : (
//                         'Legal'
//                     )}
//                 </Link>
//             </div>
//             {collapsed ? (
//                 <button className='logout-button mb-5' onClick={handleLogout}>
//                     <LogoutIcon />
//                 </button>
//             ) : (
//                 <button className='logout-button mb-5' onClick={handleLogout}>
//                     <LogoutIcon />
//                     Logout
//                 </button>
//             )}
//         </div>
//     );
// };

// export default MenuDrawer;
