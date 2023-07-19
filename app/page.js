import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-slate-900 p-24 gap-10">

      {/* Introduction */}

      <Section>

        <div className="absolute top-0 left-0 flex items-center bg-gradient-to-b from-blue-950 p-4 rounded-lg -rotate-6">
          <svg className='fill-blue-400 mr-2' xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
            <path opacity="0.5" stroke-width="1.5" stroke-linecap="round" d="M8.7838 21.9999C7.0986 21.2478 5.70665 20.0758 4.79175 18.5068" />
            <path opacity="0.5" stroke-width="1.5" stroke-linecap="round" d="M14.8252 2.18595C16.5021 1.70882 18.2333 2.16305 19.4417 3.39724" />
            <path d="M4.0106 8.36655L3.63846 7.71539L4.0106 8.36655ZM6.50218 8.86743L7.15007 8.48962L6.50218 8.86743ZM3.2028 10.7531L2.55491 11.1309H2.55491L3.2028 10.7531ZM7.69685 3.37253L8.34474 2.99472V2.99472L7.69685 3.37253ZM8.53873 4.81624L7.89085 5.19405L8.53873 4.81624ZM10.4165 9.52517C10.6252 9.88299 11.0844 10.0039 11.4422 9.79524C11.8 9.58659 11.9209 9.12736 11.7123 8.76955L10.4165 9.52517ZM7.53806 12.1327C7.74672 12.4905 8.20594 12.6114 8.56376 12.4027C8.92158 12.1941 9.0425 11.7349 8.83384 11.377L7.53806 12.1327ZM4.39747 5.25817L3.74958 5.63598L4.39747 5.25817ZM11.8381 2.9306L12.486 2.55279V2.55279L11.8381 2.9306ZM14.3638 7.26172L15.0117 6.88391L14.3638 7.26172ZM16.0475 10.1491L16.4197 10.8003C16.5934 10.701 16.7202 10.5365 16.772 10.3433C16.8238 10.15 16.7962 9.94413 16.6954 9.77132L16.0475 10.1491ZM17.6632 5.37608L17.0153 5.75389L17.6632 5.37608ZM20.1888 9.7072L20.8367 9.32939V9.32939L20.1888 9.7072ZM6.99128 17.2497L7.63917 16.8719L6.99128 17.2497ZM16.9576 19.2533L16.5854 18.6021L16.9576 19.2533ZM13.784 15.3C13.9927 15.6578 14.4519 15.7787 14.8097 15.5701C15.1676 15.3614 15.2885 14.9022 15.0798 14.5444L13.784 15.3ZM4.38275 9.0177C5.01642 8.65555 5.64023 8.87817 5.85429 9.24524L7.15007 8.48962C6.4342 7.26202 4.82698 7.03613 3.63846 7.71539L4.38275 9.0177ZM3.63846 7.71539C2.44761 8.39597 1.83532 9.8969 2.55491 11.1309L3.85068 10.3753C3.64035 10.0146 3.75139 9.37853 4.38275 9.0177L3.63846 7.71539ZM7.04896 3.75034L7.89085 5.19405L9.18662 4.43843L8.34474 2.99472L7.04896 3.75034ZM7.89085 5.19405L10.4165 9.52517L11.7123 8.76955L9.18662 4.43843L7.89085 5.19405ZM8.83384 11.377L7.15007 8.48962L5.85429 9.24524L7.53806 12.1327L8.83384 11.377ZM7.15007 8.48962L5.04535 4.88036L3.74958 5.63598L5.85429 9.24524L7.15007 8.48962ZM5.57742 3.5228C6.21109 3.16065 6.8349 3.38327 7.04896 3.75034L8.34474 2.99472C7.62887 1.76712 6.02165 1.54123 4.83313 2.22048L5.57742 3.5228ZM4.83313 2.22048C3.64228 2.90107 3.02999 4.40199 3.74958 5.63598L5.04535 4.88036C4.83502 4.51967 4.94606 3.88363 5.57742 3.5228L4.83313 2.22048ZM11.1902 3.30841L13.7159 7.63953L15.0117 6.88391L12.486 2.55279L11.1902 3.30841ZM13.7159 7.63953L15.3997 10.5269L16.6954 9.77132L15.0117 6.88391L13.7159 7.63953ZM9.71869 3.08087C10.3524 2.71872 10.9762 2.94134 11.1902 3.30841L12.486 2.55279C11.7701 1.32519 10.1629 1.0993 8.9744 1.77855L9.71869 3.08087ZM8.9744 1.77855C7.78355 2.45914 7.17126 3.96006 7.89085 5.19405L9.18662 4.43843C8.97629 4.07774 9.08733 3.4417 9.71869 3.08087L8.9744 1.77855ZM17.0153 5.75389L19.5409 10.085L20.8367 9.32939L18.311 4.99827L17.0153 5.75389ZM15.5437 5.52635C16.1774 5.1642 16.8012 5.38682 17.0153 5.75389L18.311 4.99827C17.5952 3.77068 15.988 3.54478 14.7994 4.22404L15.5437 5.52635ZM14.7994 4.22404C13.6086 4.90462 12.9963 6.40555 13.7159 7.63953L15.0117 6.88391C14.8013 6.52322 14.9124 5.88718 15.5437 5.52635L14.7994 4.22404ZM2.55491 11.1309L6.34339 17.6276L7.63917 16.8719L3.85068 10.3753L2.55491 11.1309ZM16.5854 18.6021C13.2185 20.5264 9.24811 19.631 7.63917 16.8719L6.34339 17.6276C8.45414 21.2472 13.4079 22.1458 17.3297 19.9045L16.5854 18.6021ZM19.5409 10.085C21.1461 12.8377 19.9501 16.6792 16.5854 18.6021L17.3297 19.9045C21.2539 17.6618 22.9512 12.9554 20.8367 9.32939L19.5409 10.085ZM15.0798 14.5444C14.4045 13.3863 14.8772 11.6818 16.4197 10.8003L15.6754 9.49797C13.5735 10.6993 12.5995 13.2687 13.784 15.3L15.0798 14.5444Z" />
          </svg>
          <span className="text-blue-400 text-xl font-black">Introduction</span>
        </div>

        <div className='grid grid-cols-2 gap-10 items-center mt-10'>
          <div className='mx-auto'>
            <Image src='/profile.png' width={500} height={500} alt='Profile' />
          </div>
          <div className='rounded-full'>
            <div className='mb-5'>
              <p className='text-yellow-400 font-black text-6xl uppercase'>Welcome!</p>
              <p className='text-blue-400 font-black text-6xl uppercase'>I am Gpx Zero</p>
            </div>
            <p className='text-blue-400 font-medium text-lg mb-5 font-mono'>
            Experienced full-stack developer and graphic designer, specializing in web technologies. Passionate about diverse technologies, adept at simplifying and creating adaptable digital systems. Continuously thirsty for innovation.
            </p>
            <Button3D>Contact Me</Button3D>
          </div>
        </div>

      </Section>

      {/* Skills */}

      <Section>

        <div className="absolute top-0 left-0 flex items-center bg-gradient-to-b from-blue-950 p-4 rounded-lg -rotate-6">
          <svg class="fill-blue-400 mr-2" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,10h7L8,22l3-9H5L13,2Z" />
          </svg>
          <span className="text-blue-400 text-xl font-black">Skills</span>
        </div>

      </Section>

      {/* Projects */}

      <Section>

        <div className="absolute top-0 left-0 flex items-center bg-gradient-to-b from-blue-950 p-4 rounded-lg -rotate-6">
          <svg class="fill-blue-400 mr-2" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 -64 640 640">
            <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z" />
          </svg>
          <span className="text-blue-400 text-xl font-black">Projects</span>
        </div>

      </Section>

      {/* Contact */}

      <Section>

        <div className="absolute top-0 left-0 flex items-center bg-gradient-to-b from-blue-950 p-4 rounded-lg -rotate-6">
          <svg class="fill-blue-400 mr-2" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
            <path d="M66 485.5a399.2 315.1 0 1 0 798.4 0 399.2 315.1 0 1 0-798.4 0Z" />
            <path d="M198.6 666.6L148 866.1l197.3-80z" />
            <path d="M906.9 528.5C900.4 672.9 756.6 836 564.7 836c-30.9 0-60 1.3-88.6-4.3 50.1 34.6 118.4 43.7 191.5 43.7 155.9 0 269.3-84.5 276.1-212.4 3-56.3-19-106.4-36.8-134.5z" />
            <path d="M890.3 764.4l35.8 135.5-139.5-54.3z" />
            <path d="M309.6 470m-46.6 0a46.6 46.6 0 1 0 93.2 0 46.6 46.6 0 1 0-93.2 0Z" />
            <path d="M465.6 470m-46.6 0a46.6 46.6 0 1 0 93.2 0 46.6 46.6 0 1 0-93.2 0Z" />
            <path d="M620.8 470m-46.6 0a46.6 46.6 0 1 0 93.2 0 46.6 46.6 0 1 0-93.2 0Z" />
          </svg>
          <span className="text-blue-400 text-xl font-black">Contact</span>
        </div>

      </Section>

    </main>
  )
}

const Section = ({ children }) => {

  return (
    <div className="container relative bg-gradient-to-t from-blue-900 border-b-4 border-blue-800 p-10 rounded-lg">
      {children}
    </div>
  )

}

const Button3D = ({ children }) => {

  return (
    <button className="bg-gradient-to-t from-yellow-400 to-yellow-200 shadow-xl text-black outline-none border-b-4 border-yellow-600 font-bold text-blue-200 py-2 px-4 rounded-lg duration-300 hover:scale-105 hover:brightness-90 hover:border-t-4 hover:border-b-0 hover:border-yellow-400 active:scale-100">
      {children}
    </button>
  )

}