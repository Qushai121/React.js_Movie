import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'react-router-dom';


const Login = ({ loginPopUp, onClose }) => {
  const [openLogins, setOpenLogins] = useState(false)
  const constraintsRef = useRef(null);


  if (!loginPopUp) return null;

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: "0"
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: "25",
        stiffness: "500",

      }
    },
    exit: {
      y: "-100vh",
      opacity: "0"

    }
  }

  return (
    <motion.div
      ref={constraintsRef}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit='exit'
      className='text-white absolute h-[3vh] w-[30vw] top-20 z-50 left-[34vw]  ' >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className='bg-slate-800 cursor-grab active:cursor-grabbing left-[4vw] bg-opacity-80 relative rounded-xl w-[23vw] h-[55vh]' >
        <FontAwesomeIcon onClick={onClose} className='cursor-default absolute right-2 top-1 w-7 h-8' icon={faXmark} />
        <div className=' flex justify-center h-full'>
          <div className='flex-col justify-center flex '>
            <h1 className='mb-10 mt-10 text-2xl' >SIGN IN</h1>
            <input placeholder='  Email Or Phone Number' type={'email'} className='login mt-3 w-72 h-9 bg-slate-600 rounded-lg text-white'></input>
            <input placeholder='  Password' type={'password'} className='login mt-3 w-72 h-9 rounded-lg bg-slate-600 text-white'></input>
            <button className='mt-6 w-72 h-9 rounded-lg bg-slate-900 hover:bg-slate-700 active:text-blue-400 active:bg-slate-800' >Masuk</button>
            <div className='mt-8 flex'>
              <input className='' type={'checkbox'} ></input>
              <p className='ml-1'>Remember me</p>
              <a className='text-blue-600  ml-20 hover:text-blue-700 text-center cursor-default'>Need Help?</a>
            </div>
            <div className='flex mt-10 opacity-75'>
              <h1>New to Qushai Movie?</h1>
              <a
                onClick={() => setOpenLogins(true)}
                to={'/signup'}
                className='ml-1 opacity-100 hover:text-blue-700 text-blue-600 text-center cursor-default'>Sign Up Now.
              </a>
            </div>
            <div className='w-72 text-sm opacity-75 text-left'>
              <p className=' mt-8 text-center'>Licensed by uhuy.ltd</p>
              <p className=' w-72'>kaga bisa lorem dah tutor lorem dong bang bla bla bla. <a className=' text-center cursor-default text-sm text-blue-600 hover:text-blue-700'>Learn more.</a></p>
            </div>
          </div>
          <div>
          </div>

          {/* Jika open login true  */}

          <SignUp loginPopUp={openLogins} onClose={() => setOpenLogins(false)} />



        </div>
      </motion.div>
    </motion.div>

  )
}

function SignUp({ loginPopUp, onClose }) {
  if (!loginPopUp) return null;
  const dropIn = {
    hidden: {
      x: "-20vw",
      opacity: "0"
    },
    visible: {
      x: "-19vw",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: "25",
        stiffness: "500",

      }
    },
    exit: {
      x: "-19vw",
      opacity: "0",
    }
  }
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit='exit'
      className='absolute left-[19vw] w-[23vw] h-[55vh] cursor-default'
    >
      <div className=' w-[23vw] h-[55vh] pt-1 bg-slate-800 rounded-xl'>
        <FontAwesomeIcon
          onClick={onClose}
          icon={faArrowLeft}
          className="w-7 h-8 ml-2 justify-center flex mt-2"
        />
        <div className='flex-col w-80 ml-16'>
          <h1 className='text-2xl mt-4 mb-10'>SIGN UP</h1>
          <input placeholder='  Username' type={'text'} className='login mt-3 w-72 h-9 rounded-lg bg-slate-600 text-white'></input>
          <input placeholder='  Email Or Phone Number' type={'email'} className='login mt-3 w-72 h-9 bg-slate-600 rounded-lg text-white'></input>
          <input placeholder='  Password' type={'password'} className='login mt-3 w-72 h-9 rounded-lg bg-slate-600 text-white'></input>
          <button className='mt-6 w-72 h-9 rounded-lg bg-slate-900 hover:bg-slate-700 active:text-blue-400 active:bg-slate-800' >Create Account</button>
          <div className='w-72 text-sm opacity-75 text-left'>
            <p className=' mt-8 text-center'>Licensed by uhuy.ltd</p>
            <p className=' w-72'>kaga bisa lorem dah tutor lorem dong bang bla bla bla. <a className=' text-center cursor-default text-sm text-blue-600 hover:text-blue-700'>Learn more.</a></p>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Login