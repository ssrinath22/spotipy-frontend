import { ArrowOutward, OpenInBrowserOutlined, OpenInNew } from "@mui/icons-material"
import { useState } from "react"

type ConnectButtonProps = {
    width: string
    height: string
    x?: string
    y?: string
    bgColor: string
    color: string
    onClick: () => void
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ width, height, x = '7%', y = '5%', bgColor, color, onClick }) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [shadowHovered, setShadowHovered] = useState<boolean>(false)
    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <>
            <div
                onMouseEnter={() => {
                    setShadowHovered(true)
                }}
                onMouseLeave={async () => {
                    setShadowHovered(false)
                }}
                style={{
                    zIndex: 2,
                    // position: 'relative',
                    backgroundColor: '#31363F',
                    marginTop: y,
                    marginLeft: x,
                    width: width,
                    height: height,
                    borderRadius: '8px',
                }}
            />
            <div
                onClick={onClick}
                onMouseEnter={async () => {
                    await sleep(150)
                    setHovered(true)
                }}
                onMouseLeave={async () => {
                    await sleep(150)
                    setHovered(false)
                }}
                style={{
                    cursor: 'pointer',
                    zIndex: 7,
                    backgroundColor: bgColor,
                    transform: hovered || shadowHovered ? 'translateY(-6vh)' : 'translateY(-5vh)',
                    marginLeft: hovered || shadowHovered ? '8%' : x,
                    width: width,
                    height: height,
                    borderRadius: '8px',
                    transition: 'all .3s',
                    color: color,
                    fontSize: '24px',
                    display: 'flex',        // Changed to flex for horizontal alignment
                    alignItems: 'center',   // Align items vertically in the center
                    justifyContent: 'center' // Center the items horizontally
                }}
            >
                <span style={{ marginRight: '10px' }}>
                    Connect Your Account
                </span>
                <ArrowOutward />
            </div>
        </>


    )
}

export default ConnectButton