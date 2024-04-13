import { Shortcut } from "@mui/icons-material";
import { Button } from "@mui/material";
import { runAnalysis } from "../api/api";
import { useEffect, useState } from "react";

type Playlist = {
    name: string;
    id: string;
    imgUrl: string;
    owner: string;
}

type UsePlaylistProps = {
    isActive: boolean
    plist: Playlist
    setDone: (arg0: boolean) => void
}

const UsePlaylist: React.FC<UsePlaylistProps> = ({ isActive, plist, setDone }) => {
    const [hiEnergy, setHiEnergy] = useState<string>('')
    const [loEnergy, setLoEnergy] = useState<string>('')

    const bgColor = '#7AA2E3'
    const textColor = '#F8F6E3'

    const cont = () => {
        runAnalysis(plist.id, setHiEnergy, setLoEnergy)
        setDone(true)
    }

    useEffect(() => {
        if (hiEnergy !== '') {
            console.log(hiEnergy)
        }
        if (loEnergy !== '') {
            console.log(loEnergy)
        }
    }, [hiEnergy, loEnergy])

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    zIndex: (isActive) ? 10000 : -1999,
                    backgroundColor: bgColor,
                    bottom: 0,
                    right: 0,
                    height: '100%',
                    width: '100%',
                    opacity: (isActive) ? .9 : 0,
                    transition: 'all .1s',
                    verticalAlign: 'bottom',
                    fontSize: '15px',
                }}
            >
                {isActive &&
                    <>
                        <Button
                            onClick={() => cont()}
                            style={{
                                width: 'inherit',
                                height: 'inherit',
                                color: 'white',
                            }}
                        >
                            <Shortcut />
                        </Button>
                    </>
                }
            </div>
        </>
    )
}

export default UsePlaylist 