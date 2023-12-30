import { SECTIONS } from "@/data/modules"
import { Icon } from "@/components/modules"
import { Dispatch, SetStateAction } from "react"

export function Header({
    section,
    setSection
}: {
    section: string,
    setSection: Dispatch<SetStateAction<string>>
}) {

    return (

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-fit mx-auto hidden md:flex items-center rounded-t-xl overflow-hidden">

            {
                SECTIONS.map(sec => {
                    return (
                        <button
                            key={sec.name}
                            className={`btn ${sec.name === section ? 'btn-active' : null}`}
                            onClick={() => setSection(sec.name)}
                        >
                            <Icon name={sec.icon} />
                            <span
                                className="capitalize"
                            >
                                {sec.name}
                            </span>
                        </button>
                    )
                })
            }

        </div>

    )

}