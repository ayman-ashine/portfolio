import { Button } from "./button"

export const Contact = () => {
    return (
        <>

            <div className="absolute top-0 left-0 flex items-center bg-blue-400 m-2 p-2 rounded-md">
                <svg class="fill-blue-900 mr-2" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                    <path d="M66 485.5a399.2 315.1 0 1 0 798.4 0 399.2 315.1 0 1 0-798.4 0Z" />
                    <path d="M198.6 666.6L148 866.1l197.3-80z" />
                    <path d="M906.9 528.5C900.4 672.9 756.6 836 564.7 836c-30.9 0-60 1.3-88.6-4.3 50.1 34.6 118.4 43.7 191.5 43.7 155.9 0 269.3-84.5 276.1-212.4 3-56.3-19-106.4-36.8-134.5z" />
                    <path d="M890.3 764.4l35.8 135.5-139.5-54.3z" />
                    <path d="M309.6 470m-46.6 0a46.6 46.6 0 1 0 93.2 0 46.6 46.6 0 1 0-93.2 0Z" />
                    <path d="M465.6 470m-46.6 0a46.6 46.6 0 1 0 93.2 0 46.6 46.6 0 1 0-93.2 0Z" />
                    <path d="M620.8 470m-46.6 0a46.6 46.6 0 1 0 93.2 0 46.6 46.6 0 1 0-93.2 0Z" />
                </svg>
                <span className="text-blue-900 text-lg font-black">Contact</span>
            </div>

            <div className='w-full flex justify-center gap-2 md:gap-5 mt-20'>

                <Button>
                    <a href="https://github.com/catraco" target="blank">
                        <img src="https://img.icons8.com/material-rounded/40/github.png" alt="github" />
                    </a>
                </Button>
                <Button>
                    <a href="https://www.linkedin.com/in/ayman-achain-081499260/" target="blank">
                        <img src="https://img.icons8.com/material-rounded/40/linkedin--v1.png" alt="linkedin" />
                    </a>
                </Button>
                <Button>
                    <a href="https://twitter.com/gpx_zero" target="blank">
                        <img src="https://img.icons8.com/material-rounded/40/twitter.png" alt="twitter" />
                    </a>
                </Button>
                <Button>
                    <a href="mailto:gpx.zero.000@gmail.com" target="blank">
                        <img src="https://img.icons8.com/material-rounded/40/new-post.png" alt="email" />
                    </a>
                </Button>

            </div>


        </>
    )
}