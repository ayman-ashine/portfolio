import { FaHome, FaBook, FaTools, FaExclamationCircle } from "react-icons/fa"
import { BiSolidPhoneCall } from "react-icons/bi"

export function Icon({ name }: { name: string }) {
    switch (name) {
        case 'introduction':
            return <FaHome />
        case 'education':
            return <FaBook />
        case 'projects':
            return <FaTools />
        case 'contact':
            return <BiSolidPhoneCall />
        default:
            return <FaExclamationCircle />
    }
}