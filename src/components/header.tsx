import { SECTIONS } from "@/data/modules"
import { Icon } from "@/components/modules"

export function Header() {

    return (
        <div className="header">

            {SECTIONS.map(section => {
                return (
                    <button
                        key={section.name}
                        className="btn"
                    >
                        <Icon name={section.name} />
                        <span
                            className="capitalize"
                        >
                            {section.name}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}