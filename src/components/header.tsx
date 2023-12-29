import { SECTIONS } from "@/data/modules"
import { Icon } from "@/components/modules"
import { Dispatch, SetStateAction } from "react"

export function Header({
    section,
    setSection
} : {
    section: string,
    setSection: Dispatch<SetStateAction<string>>
}) {

    return (

        <div className="relative w-fit mx-auto flex items-center">

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