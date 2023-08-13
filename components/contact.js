import { Button } from "./button"

export const Contact = () => {
    return (

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

    )
}