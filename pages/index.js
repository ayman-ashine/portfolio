import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-slate-950 py-10 px-2 md:p-24 gap-10">

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

        <div className='grid grid-cols-1 gap-10 items-center mt-10 lg:grid-cols-2'>
          <div className='mx-auto'>
            <Image src='/profile.png' width={500} height={500} alt='Profile' />
          </div>
          <div className='text-center md:text-start'>
            <div className='mb-5'>
              <p className='text-yellow-400 font-black text-4xl md:text-6xl uppercase'>Welcome!</p>
              <p className='text-blue-400 font-black text-4xl md:text-6xl uppercase'>I am Gpx Zero</p>
            </div>
            <p className='text-blue-400 font-medium font-mono text-lg mb-5'>
              Experienced full-stack developer and graphic designer, Passionate about diverse technologies, adept at simplifying and creating adaptable digital systems. Continuously thirsty for innovation.
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

        <div className='grid grid-cols-1 gap-5 items-center mt-20 md:grid-cols-2 lg:grid-cols-3'>

          <div className='bg-blue-800 border border-blue-600 flex items-center gap-2 p-2 rounded-lg'>
            <svg class="fill-blue-400" width="50px" height="50px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L2.00634 11.3742L4.06264 10.5422C4.62921 10.313 5.00004 9.7629 5.00004 9.15171V4H6.00004V9.15171C6.00004 10.1704 5.382 11.0871 4.43772 11.4692L3.09826 12.0112L7.5 14.5788L14 10.7872V4.21281ZM7 6C7 4.89543 7.89543 4 9 4H10.1667C11.1792 4 12 4.82081 12 5.83333V6H11V5.83333C11 5.3731 10.6269 5 10.1667 5H9C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7H10C11.1046 7 12 7.89543 12 9C12 10.1046 11.1046 11 10 11H9C7.89543 11 7 10.1046 7 9H8C8 9.55228 8.44772 10 9 10H10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8H9C7.89543 8 7 7.10457 7 6Z" />
            </svg>
            <span className='text-center text-xl text-blue-400 font-bold'>Node.js</span>
          </div>

          <div className='bg-blue-800 border border-blue-600 flex items-center gap-2 p-2 rounded-lg'>
            <svg className='fill-blue-400' width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
            </svg>
            <span className='text-center text-xl text-blue-400 font-bold'>React.js</span>
          </div>

          <div className='bg-blue-800 border border-blue-600 flex items-center gap-2 p-2 rounded-lg'>
            <svg className='fill-blue-400' xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 15 15">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z" />
            </svg>
            <span className='text-center text-xl text-blue-400 font-bold'>Next.js</span>
          </div>

          <div className='bg-blue-800 border border-blue-600 flex items-center gap-2 p-2 rounded-lg'>
            <svg className="fill-blue-400" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
            </svg>
            <span className='text-center text-xl text-blue-400 font-bold'>MongoDB</span>
          </div>

          <div className='bg-blue-800 border border-blue-600 flex items-center gap-2 p-2 rounded-lg'>
            <svg className="fill-blue-400" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" />
            </svg>
            <span className='text-center text-xl text-blue-400 font-bold'>Tailwind CSS</span>
          </div>

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

        <div className='grid gap-5 items-center mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          <div className='group relative bg-blue-800 border border-blue-600 flex flex-col justify-center gap-2 p-2 rounded-lg overflow-hidden duration-300 hover:scale-105'>
            <div className='bg-gradient-to-r via-white opacity-25 absolute top-0 left-0 w-full h-full origin-bottom-right linear duration-300 translate-x-full group-hover:-translate-x-full z-0'></div>
            <p className='text-xl text-blue-400 font-bold'>Project Title</p>
            <p className='text-blue-400 mb-2 font-mono'>recusandae omnis porro quisquam voluptas tempora quis ullam accusamus saepe optio delectus labore necessitatibus!</p>
            <div className='text-end'>
              <Button3D>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none">
                  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9" />
                </svg>
              </Button3D>
            </div>
          </div>

          <div className='group relative bg-blue-800 border border-blue-600 flex flex-col justify-center gap-2 p-2 rounded-lg overflow-hidden duration-300 hover:scale-105'>
            <div className='bg-gradient-to-r via-white opacity-25 absolute top-0 left-0 w-full h-full origin-bottom-right linear duration-300 translate-x-full group-hover:-translate-x-full z-0'></div>
            <p className='text-xl text-blue-400 font-bold'>Project Title</p>
            <p className='text-blue-400 mb-2 font-mono'>recusandae omnis porro quisquam voluptas tempora quis ullam accusamus saepe optio delectus labore necessitatibus!</p>
            <div className='text-end'>
              <Button3D>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none">
                  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9" />
                </svg>
              </Button3D>
            </div>
          </div>

          <div className='group relative bg-blue-800 border border-blue-600 flex flex-col justify-center gap-2 p-2 rounded-lg overflow-hidden duration-300 hover:scale-105'>
            <div className='bg-gradient-to-r via-white opacity-25 absolute top-0 left-0 w-full h-full origin-bottom-right linear duration-300 translate-x-full group-hover:-translate-x-full z-0'></div>
            <p className='text-xl text-blue-400 font-bold'>Project Title</p>
            <p className='text-blue-400 mb-2 font-mono'>recusandae omnis porro quisquam voluptas tempora quis ullam accusamus saepe optio delectus labore necessitatibus!</p>
            <div className='text-end'>
              <Button3D>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none">
                  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9" />
                </svg>
              </Button3D>
            </div>
          </div>

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

        <div className='grid gap-5 items-center mt-20 grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>

          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/github.png" alt="github" />
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/linkedin--v1.png" alt="linkedin--v1" />
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 20 20">
              <path fill="#FFFFFF" d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L11 4.65l2.14.45a1 1 0 1 0 .13-.61L10.82 4a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33Zm-10 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 10 14a3.28 3.28 0 0 0 2.09-.61.27.27 0 1 1 .39.4Zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04Z"></path>
            </svg>
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/twitter.png" alt="twitter" />
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/telegram-app.png" alt="telegram-app" />
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/discord-logo.png" alt="discord-logo" />
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/new-post.png" alt="new-post"/>
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/skype.png" alt="skype"/>
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/whatsapp--v1.png" alt="whatsapp--v1" />
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/facebook-new.png" alt="facebook-new" />
          </div>
          <div>
            <img src="https://img.icons8.com/material-rounded/50/FFFFFF/instagram-new.png" alt="instagram-new" />
          </div>

        </div>

      </Section>

    </main>
  )
}

const Section = ({ children }) => {

  return (
    <div className='h-screen w-full flex items-center'>
      <div className="container relative bg-gradient-to-t from-blue-900 border-b-4 border-blue-950 p-10 rounded-lg">
        {children}
      </div>
    </div>
  )

}

const Button3D = ({ children }) => {

  return (
    <button className="group w-fit bg-gradient-to-t from-yellow-400 to-yellow-200 shadow-xl text-black outline-none border-b-4 border-yellow-600 font-bold py-2 px-4 rounded-lg rotate-4 duration-300 hover:border-t-4 hover:border-b-0 hover:border-yellow-400 active:scale-100 active:brightness-105">
      {children}
    </button>
  )

}