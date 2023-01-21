import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import { motion,AnimatePresence } from "framer-motion"


const Navbar = ({ callback }) => {

    const [openLogin, setOpenLogin] = useState(false)

    return (
        <div className=''>
            <div className=' text-teal-600 border-b-2 flex justify-between w-full border-red-900'>
                <ul className='m-5 lg:flex hidden'>
                    <li><a className='logo mx-4' >Qushai Movie</a></li>
                    <li> <a className='mx-4'>Serial</a></li>
                    <li> <a className='mx-4'>Qushai +</a></li>
                    <li> <a className='mx-4'>Lokal</a></li>
                    <li> <a className='mx-4'>Kids</a></li>
                </ul>
                <div className='m-5 flex'>
                    <div className=' group flex duration-300'>
                        <FontAwesomeIcon icon={faSearch} className='h-5 mt-1 mx-10 group-hover:hidden' />
                        <input
                            onChange={({ target }) => callback(target.value)}
                            className='group-hover:block group-hover:mr-9 hidden hover:w-80 w-40 duration-300 bg-slate-800 rounded-lg  border-solid border-red-600'>
                        </input>
                    </div>
                    <button>Langganan</button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setOpenLogin(true)}
                        className="mx-5 "
                    >Log In</motion.button>
                    <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={()=> null}
                    >
                    {/* Jika open login true  */}
                  
                    {openLogin && <Login loginPopUp={openLogin} onClose={() => setOpenLogin(false)} />}

                    </AnimatePresence>

                </div>
            </div>
        </div>
    )
}

const login = () => {
    alert('halo')
}

export default Navbar