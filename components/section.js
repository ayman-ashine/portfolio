export const Section = ({ children }) => {

    return (
      <div className='h-screen w-full flex items-center'>
        <div className="container relative bg-gradient-to-t from-blue-900 border-b-4 border-blue-950 p-10 rounded-lg">
          {children}
        </div>
      </div>
    )
  
  }