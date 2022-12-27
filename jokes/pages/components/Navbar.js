import React from 'react'
import { useRouter } from 'next/router'
const Navbar = () => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/HindiJokes')
  }
  const handleClick3 = (e) => {
    e.preventDefault()
    router.push('/Contact')
  }
  const handleClick2 = (e) => {
    e.preventDefault()
    router.push('/')
  }
  return (
    <><header class="text-gray-600 body-font shadow-sm">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div onClick={handleClick2} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl font-bold">Programmer Jokes</span>
        </div>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold cursor-pointer">
          <a onClick={handleClick} class="mr-5 hover:text-gray-900 ">HindiJokes</a>
          <a onClick={handleClick} class="mr-5 hover:text-gray-900">My Github</a>
          <a onClick={handleClick3} class="mr-5 hover:text-gray-900">Contact Me</a>
        </nav>

      </div>
    </header>
    
    <div class="px-8 pt-8 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24  lg:px-8 lg:py-20">
        <div class="max-w-screen-sm sm:text-center sm:mx-auto">
          
          <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl sm:leading-none">
          Are You Felling Bored🤔?
          </h2>
          <p class="text-base text-gray-700 md:text-lg sm:px-4">
          Don't worry we have solution of this problem✨.
          </p>
          <hr class="w-full my-8 border-gray-800" />
        </div>
      </div></>
  )
}

export default Navbar
