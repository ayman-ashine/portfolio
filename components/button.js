export const Button = ({ children }) => {

    return (
        <div className="group w-fit bg-gradient-to-t from-yellow-400 to-yellow-200 shadow-xl text-black outline-none border-b-4 border-yellow-600 font-bold py-2 px-4 rounded-lg rotate-4 duration-300 hover:border-t-4 hover:border-b-0 hover:border-yellow-400 active:scale-100 active:brightness-105">
            {children}
        </div>
    )

}