import { Button } from "./button"

export const Contact = () => {
    return (
        <>


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

            <div className='w-full flex justify-center gap-3 mt-20'>

                <Button>
                    <img src="https://img.icons8.com/material-rounded/50/github.png" alt="github" />
                </Button>
                <Button>
                    <img src="https://img.icons8.com/material-rounded/50/linkedin--v1.png" alt="linkedin" />
                </Button>
                <Button>
                    <img src="https://img.icons8.com/material-rounded/50/twitter.png" alt="twitter" />
                </Button>
                <Button>
                    <img src="https://img.icons8.com/material-rounded/50/new-post.png" alt="email" />
                </Button>

            </div>


        </>
    )
}