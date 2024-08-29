"use client"
import { useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center relative after:absolute after:w-full after:h-full after:bg-[#8388a538]">
      <div  className="z-30 w-full h-[450px] max-w-md p-8 rounded-xl shadow-md bg-white/30 backdrop-blur-md border border-white/20 truncate">
        <AnimatePresence>
        {isLogin ? (
          <motion.div
            key="first"
            initial={{x: -200 }}
            animate={{x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-white">LogIn</h2>
            <form>
              <div className="mb-4 relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="text-white border-b-[1px] w-full py-2 px-3 outline-none bg-transparent"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="text-white border-b-[1px] w-full py-2 px-3 outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center justify-between">
                <div
                  className="mt-5 bg-blue-700 text-center cursor-pointer hover:bg-blue-500 transition-all text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                >
                  LogIn
                </div>
              </div>
            </form>
            <p className='mt-6 text-center text-sm text-gray-600'>Or Sign Up Using</p>
            <div className='flex justify-center mt-5'>
                <img src='/facebook.png' className='w-10 h-10 mr-3 cursor-pointer' />
                <img src='/search.png' className='w-10 h-10 cursor-pointer' />
              </div>
            <p className="mt-6 text-center text-sm text-gray-600">
              Or{' '}
              <button
                className="text-white transition-all hover:text-blue-700 focus:outline-none"
                onClick={() => setIsLogin(false)}
              >
                signUp
              </button>
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5}}
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-white">SignUp</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="text-white border-b-[1px] w-full py-2 px-3 outline-none bg-transparent"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="text-white border-b-[1px] w-full py-2 px-3 outline-none bg-transparent"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="text-white border-b-[1px] w-full py-2 px-3 outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center justify-between">
                <div
                  className="mt-5 text-center cursor-pointer bg-blue-700 hover:bg-blue-500 transition-all text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                >
                  SignUp
                </div>
              </div>
            </form>
            <p className="mt-16 text-center text-sm text-gray-600">
              or{' '}
              <button
                className="text-white transition-all hover:text-blue-700 focus:outline-none"
                onClick={() => setIsLogin(true)}
              >
                logIn
              </button>
            </p>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}
