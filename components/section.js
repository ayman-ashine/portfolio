export const Section = ({ children }) => {

    return (
      <div className='w-full flex items-center'>
        <div className="container relative bg-gradient-to-t from-blue-950 border-b-4 border-blue-900 px-2 py-10 md:p-10 rounded-md">
          {children}
        </div>
      </div>
    )
  
  }