import { MBannerError,
     MBannerNeutral,
     MBannerSuccess,
     MBannerWarning,
     SBannerError,
     SBannerNeutral,
     SBannerSuccess,
     SBannerWarning,} from "../../styles/solo-projects/banners-styles.css"
import { FiAlertCircle, FiCheckCircle, FiXCircle, FiDownloadCloud } from "react-icons/fi";

export default function Banner({ children, color, desc}) {
    const icon = {yellow: <FiAlertCircle />,
                     green: <FiCheckCircle />,
                     red: <FiXCircle />,
                     blue: <FiDownloadCloud />}
                     
    function generateBanner(color, desc) {
        if (desc) {
            if (color === "green") {
                return <MBannerSuccess color={color} >
                    {icon[color]} { children }
                    <p>{desc}</p>
                </MBannerSuccess>
            }
            else if (color === "yellow") {
                return <MBannerWarning color={color} >
                    {icon[color]} { children }
                    <p>{desc}</p>
                </MBannerWarning>
            }
            else if (color === "red") {
                return <MBannerError color={color} >
                    {icon[color]} { children }
                    <p>{desc}</p>
                </MBannerError>
            }
            else {
                return <MBannerNeutral color={color} >
                    {icon[color]} { children }
                    <p>{desc}</p>
                </MBannerNeutral>
            }
        }
        else {
            if (color === "green") {
                return <SBannerSuccess color={color} >
                    {icon[color]} { children }
                </SBannerSuccess>
            }
            else if (color === "yellow") {
                return <SBannerWarning color={color} >
                    {icon[color]} { children }
                </SBannerWarning>
            }
            else if (color === "red") {
                return <SBannerError color={color} >
                    {icon[color]} { children }
                </SBannerError>
            }
            else {
                return <SBannerNeutral color={color} >
                    {icon[color]} { children }
                </SBannerNeutral>
            }
        }
    }
    
    return (
        <>
            {generateBanner(color, desc)}
        </>
    )
}