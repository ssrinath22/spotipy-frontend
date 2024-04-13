import { useState } from "react";
import UsePlaylist from "./UsePlaylist";

type Playlist = {
    name: string;
    id: string;
    imgUrl: string;
    owner: string;
}

type SinglePlaylistProps = {
    active: number
    setActive: (arg0: number) => void
    index: number
    plist: Playlist
    setDone: (arg0: boolean) => void
    setInfoActive: (arg0: boolean) => void
    setActivePid: (arg0:string) => void
}

const SinglePlaylist: React.FC<SinglePlaylistProps> = ({ index, plist, active, setActive, setInfoActive,setActivePid}) => {
    const shadowColor = '#97E7E1'
    const cardColor = '#7AA2E3'
    const textColor = '#F8F6E3'

    const containerWidth = '200px'
    const containerHeight = '230px'

    const imgHeight = '200px'
    const imgWidth = '100%'

    const fontSize = '15px'

    return (
        <div
            onClick={() => {
                setActivePid(plist.id)
                setInfoActive(true)
            }}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(-1)}
            style={{
                cursor:'pointer',
                display: 'flex',
                flexDirection: 'column',
                width: containerWidth,  // Fixed width for consistency
                minHeight: containerHeight,
                margin: '10px',  // Uniform margin around each item
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: (active === index) ? 'scale(1.05)' : 'scale(1)',
                borderRadius: '10px',
                overflow: 'hidden',  // Ensures the content does not overflow
            }}
        >
            <img
                src={plist.imgUrl}
                alt={`${plist.imgUrl} cover`}
                style={{
                    pointerEvents:'none',
                    width: imgWidth,  // Ensures the image covers the width
                    height: imgHeight,  // Fixed height
                    objectFit: 'cover',  // Ensures the image covers the space without distortion
                }}
            />
            <div
                style={{
                    padding: '15px',
                    backgroundColor: cardColor,
                    color: textColor,
                    textAlign: 'center',
                }}
            >
                <span
                    style={{
                        fontSize: fontSize,
                        textWrap: 'nowrap',  // Ensures text stays on one line
                        overflow: 'hidden',    // Hides text that overflows the element's box
                        textOverflow: 'ellipsis',  // Render ellipsis (...) when text overflows
                    }}
                >
                    {plist.name}
                    {/* <UsePlaylist plist={plist} isActive={active === index} setDone={setDone}/> */}
                </span>
            </div>
        </div>
    )
}

export default SinglePlaylist;
