import { Context } from "@/pages"
import { useContext } from "react"

export const Nav = () => {

    const { sectionName, setSectionName } = useContext(Context)

    return (
        <div className="w-full h-fit">
            <button
                onClick={() => setSectionName('introduction')}
                className={`navBtn rounded-tl-md ${sectionName === 'introduction' ? 'navBtnSelected' : null}`}
            >
                Introduction
            </button>
            <button
                onClick={() => setSectionName('skills')}
                className={`navBtn ${sectionName === 'skills' ? 'navBtnSelected' : null}`}
            >
                Skills
            </button>
            <button
                onClick={() => setSectionName('projects')}
                className={`navBtn ${sectionName === 'projects' ? 'navBtnSelected' : null}`}
            >
                Projects
            </button>
            <button
                onClick={() => setSectionName('contact')}
                className={`navBtn rounded-tr-md ${sectionName === 'contact' ? 'navBtnSelected' : null}`}
            >
                Contact
            </button>
        </div>
    )
}