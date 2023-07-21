import { Button } from './button'

export const Projects = () => {
  return (
    <>

      <div className="absolute top-0 left-0 flex items-center bg-blue-400 m-2 p-2 rounded-md">
        <svg class="fill-blue-900 mr-2" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 -64 640 640">
          <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z" />
        </svg>
        <span className="text-blue-900 text-lg font-black">Projects</span>
      </div>

      <div className='grid gap-5 items-center mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        <div className='group relative bg-blue-800 border border-blue-600 flex flex-col justify-center gap-2 p-2 rounded-lg overflow-hidden duration-300 hover:scale-105'>
          <div className='bg-gradient-to-r via-white opacity-25 absolute top-0 left-0 w-full h-full origin-bottom-right linear duration-300 translate-x-full group-hover:-translate-x-full z-0'></div>
          <p className='text-xl text-blue-400 font-bold'>Project Title</p>
          <p className='text-blue-400 mb-2 font-mono'>recusandae omnis porro quisquam voluptas tempora quis ullam accusamus saepe optio delectus labore necessitatibus!</p>
          <div className='text-end'>
            <Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none">
                <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9" />
              </svg>
            </Button>
          </div>
        </div>

        <div className='group relative bg-blue-800 border border-blue-600 flex flex-col justify-center gap-2 p-2 rounded-lg overflow-hidden duration-300 hover:scale-105'>
          <div className='bg-gradient-to-r via-white opacity-25 absolute top-0 left-0 w-full h-full origin-bottom-right linear duration-300 translate-x-full group-hover:-translate-x-full z-0'></div>
          <p className='text-xl text-blue-400 font-bold'>Project Title</p>
          <p className='text-blue-400 mb-2 font-mono'>recusandae omnis porro quisquam voluptas tempora quis ullam accusamus saepe optio delectus labore necessitatibus!</p>
          <div className='text-end'>
            <Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none">
                <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9" />
              </svg>
            </Button>
          </div>
        </div>

        <div className='group relative bg-blue-800 border border-blue-600 flex flex-col justify-center gap-2 p-2 rounded-lg overflow-hidden duration-300 hover:scale-105'>
          <div className='bg-gradient-to-r via-white opacity-25 absolute top-0 left-0 w-full h-full origin-bottom-right linear duration-300 translate-x-full group-hover:-translate-x-full z-0'></div>
          <p className='text-xl text-blue-400 font-bold'>Project Title</p>
          <p className='text-blue-400 mb-2 font-mono'>recusandae omnis porro quisquam voluptas tempora quis ullam accusamus saepe optio delectus labore necessitatibus!</p>
          <div className='text-end'>
            <Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none">
                <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9" />
              </svg>
            </Button>
          </div>
        </div>

      </div>

    </>
  )
}