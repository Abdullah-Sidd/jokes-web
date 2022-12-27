import React from 'react'
import { useRouter } from 'next/router'
import Navbar from './components/Navbar'

const HindiJokes = ({results2}) => {
    const router = useRouter()
    const handleClick = (e) => {
      e.preventDefault()
      router.push('/HindiJokes')
    }
  return (
    <div>
  <div className='text-center'>
<h1 className=' px-5 text-2xl font-semibold text-green-900'>{results2.jokeContent}.</h1>
<button onClick={handleClick} class="relative mt-9  inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Next Joke👍</span>
</button>
    </div>
    </div>
  )
}

export async function getServerSideProps() {
   
    const request = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=d7d6997d9c8a2f5514fff5592b68');
    const results2 = await request.json();
  
  
    return {
      props: {results2}, // will be passed to the page component as props
    }
  }

export default HindiJokes
