export const Section = ({ children }) => {

    return (
      <div className='w-full flex items-center'>
        <div className="container relative bg-gradient-to-t from-slate-900 my-10 px-2 py-10 md:p-10 rounded-md">
          {children}
        </div>
      </div>
    )
  
  }