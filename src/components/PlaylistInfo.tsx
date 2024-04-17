import { ArrowBack, ArrowForward, Close } from "@mui/icons-material"
import { Button, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { runAnalysis } from "../api/api"

type PlaylistInfoProps = {
    id: string
    isActive: boolean
    setIsActive: (arg0: boolean) => void
}

const PlaylistInfo: React.FC<PlaylistInfoProps> = ({ id, isActive, setIsActive }) => {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [loaded2, setLoaded2] = useState<boolean>(false)

    const [hiEnergy, setHiEnergy] = useState<string>('')
    const [loEnergy, setLoEnergy] = useState<string>('')
    const [finished, setFinished] = useState<boolean>()
    

    const bgColor = '#7AA2E3'
    const textColor = '#F8F6E3'

    const cont = () => {
        runAnalysis(id, setHiEnergy, setLoEnergy)
    }

    useEffect(() => {
        if (hiEnergy !== '' && loEnergy !== '') {
            setLoaded2(true)
        }
    }, [hiEnergy, loEnergy])


    return (
        <>
            {/** Source Playlist Info */}
            {isActive && !finished &&
                <div
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        backgroundColor: 'rgba(255, 255, 255, .9)',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#7AA2E3',
                            padding: '2% .25% .25% .25%',
                            margin: '5% 20%',
                            borderRadius: '12px',
                            height: '80%',
                            position: "relative",
                        }}
                    >

                        <iframe
                            onLoad={() => setLoaded(true)}
                            title="Spotify Embed: Recommendation Playlist "
                            src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`}
                            width="inherit"
                            height="inherit"
                            style={{
                                minHeight: '100%',
                                width:'100%',
                                // minWidth: '100%',
                            }}
                            frameBorder={0}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading='eager'
                        />
                        <div
                            onClick={() => {
                                setIsActive(false)
                                setLoaded(false)
                            }}
                            style={{
                                cursor:'pointer',
                                position: 'absolute',
                                top: '1%',
                                left: '2%',
                                zIndex: 10
                            }}
                        >
                            <Close
                                style={{
                                    color: '#F8F6E3'
                                }} />
                        </div>

                        {loaded && 
                        <div
                            onClick={() => {
                                setLoaded(false)
                                setFinished(true)
                                cont()
                            }}
                            style={{
                                cursor:'pointer',
                                position: 'absolute',
                                top: '1%',
                                right: '2%',

                            }}
                        >
                            <ArrowForward
                                style={{
                                    color: '#F8F6E3',
                                }}
                            />
                        </div>
                        }

                    </div>
                </div>
            }

            {finished &&
                <div
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        backgroundColor: 'rgba(255, 255, 255, .9)',
                    }}
                >
                    <div
                        style={{
                            position:'relative',
                            backgroundColor: '#7AA2E3',
                            padding: '30px .25% .25% .25%',
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '10% 20%',
                            borderRadius: '12px',
                            height: '50%',
                        }}
                    >

                        <iframe
                            onLoad={() => setLoaded(true)}
                            title="Spotify Embed: Recommendation Playlist "
                            src={`https://open.spotify.com/embed/playlist/${hiEnergy}?utm_source=generator&theme=0`}
                            width="inherit"
                            height="inherit"
                            style={{
                                pointerEvents:loaded2 ? 'auto': 'none',
                                opacity:loaded2 ? 1 : 0,
                                minHeight: '400px',
                                minWidth: '50%',
                            }}
                            frameBorder={0}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading='eager'
                        />

                        <iframe
                            onLoad={() => setLoaded(true)}
                            title="Spotify Embed: Recommendation Playlist "
                            src={`https://open.spotify.com/embed/playlist/${loEnergy}?utm_source=generator&theme=0`}
                            width="inherit"
                            height="inherit"
                            style={{
                                pointerEvents:loaded2 ? 'auto': 'none',
                                opacity:loaded2 ? 1 : 0,
                                minHeight: '400px',
                                minWidth: '50%',
                            }}
                            frameBorder={0}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading='eager'
                        />

                        <div
                            onClick={() => {
                                setFinished(false)
                                setIsActive(false)
                                setLoaded(false)
                            }}
                            style={{
                                cursor:'pointer',
                                position: 'absolute',
                                top: '1%',
                                left: '2%',
                                zIndex: 10
                            }}
                        >
                            <Close
                                style={{
                                    color: '#F8F6E3'
                                }} />
                        </div>                                
                    </div>

                    {finished && !loaded2 && <div
                        style={{
                            position:'absolute',
                            top:'35%',
                            left:'50%',
                        }}
                    >
                        <CircularProgress />
                    </div>}
                </div>
            }

        </>
    )
}

export default PlaylistInfo 