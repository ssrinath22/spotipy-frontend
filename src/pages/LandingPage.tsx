import { Button } from "@mui/material";
import { iniateAuth } from "../api/api";
import { useState } from "react";
import ConnectButton from "../components/ConnectButton";
import { ArrowDownward, AutoStories, ExpandMore, GitHub, Person } from "@mui/icons-material";


type LandingPageProps = {
    handoffToken?: (arg0: string) => void
    mediaSize: boolean
}


const LandingPage: React.FC<LandingPageProps> = ({ mediaSize }) => {
    const [aboutActive, setAboutActive] = useState<boolean>(false)
    const [frontendActive, setFrontendActive] = useState<boolean>(false)
    const [backendActive, setBackendActive] = useState<boolean>(false)

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                color: '#1C54E5',
            }}
        >
            <div
                style={{
                    top: 0,
                    position: 'absolute',
                    width: 'inherit',
                    height: 'inherit',
                    // fontFamily: 'Noto Serif',
                    backgroundImage: 'linear-gradient(to right, rgba(152,228,255,0) , rgba(152,228,255,1) )',
                }}
            >
                <div
                    style={{
                        margin: '2% 7%',
                        fontSize: mediaSize ? '180px' : '120px',
                    }}
                >
                    Hotlist
                </div>

                <div
                    style={{
                        marginLeft: '7%',
                        marginTop: '10%',
                        fontSize: mediaSize ? '35px' : '20px',
                        width: mediaSize ? '50vw' : '80vw',
                    }}
                >
                    Bring over your favorite playlist, connect your Spotify account, and watch as we do the magic!
                </div>

                <ConnectButton
                    height='5vh'
                    width='30vh'
                    bgColor='#1C54E5'
                    // color='#98E4FF'
                    color='white'
                    onClick={() => iniateAuth()}
                />
                <div
                    style={{
                        marginLeft: '7%',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 15,
                    }}
                >
                    <Button
                        onClick={() => window.open('https://github.com/ssrinath22/spotipy-working', '_blank')}
                    >
                        <GitHub
                            style={{
                                width: '40px',
                                height: '40px'
                            }}
                        />
                    </Button>

                    <Button
                        onClick={() => setAboutActive(true)}

                    >
                        <AutoStories
                            style={{
                                width: '40px',
                                height: '40px'
                            }}
                        />
                    </Button>

                    <Button
                        onClick={() => window.open('https://sidharthsrinath.github.io/', '_blank')}
                    >
                        <Person
                            style={{
                                width: '40px',
                                height: '40px'
                            }}
                        />
                    </Button>
                </div>
            </div>

            {/** About the project */}
            <div
                style={{
                    zIndex: aboutActive ? 100 : -100,
                    position: 'absolute',
                    backgroundColor: 'white',
                    bottom: aboutActive ? '0vh' : '100%',
                    width: '100vw',
                    height: '100vh',
                    opacity: aboutActive ? .95 : 0,
                    transition: 'all .3s',
                }}
            >
                {/* * Container for About + descriptions */}
                <div
                    style={{
                        // width: 'inherit',
                        // height: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                    }}
                >
                    {/* * Row container for About + down arrow */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 15,
                            transition: 'all .3s',
                            fontSize: mediaSize ? '60px' : '40px',
                        }}
                    >
                        <span
                            style={{}}>
                            About The Project
                        </span>
                        <div
                            onClick={() => setAboutActive(false)}
                            style={{}}
                        >
                            <ArrowDownward
                                style={{
                                    cursor: 'pointer',
                                }}
                            />
                        </div>
                    </div>

                    <br />

                    <div
                        onClick={() => setFrontendActive(!frontendActive)}
                        style={{
                            // marginLeft: '35vw',
                            fontSize: mediaSize ? '25px' : '20px',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 15,
                            transition: 'all .3s'
                        }}>
                        <ExpandMore
                            style={{
                                cursor: 'pointer',
                                transform: !frontendActive ? 'rotate(-90deg)' : 'rotate(0deg)',
                                marginTop: '.5vh',
                                transition: 'all .3s'
                            }}
                        />
                        Frontend
                    </div>

                    <div
                        style={{
                            // marginLeft:'35vw',
                            fontSize: mediaSize ? '25px' : '15px',
                            transition: 'all .3s',
                            height: frontendActive ? 'auto' : 0,
                            opacity: frontendActive ? 1 : 0,
                        }}
                    >
                        The frontend stack is React Typescript + Vite and a few icons and components from Mui. We use react-router and the SpotifyWebApi to authorize users and the recieved token is sent to the backend.
                    </div>

                    <span
                        onClick={() => setBackendActive(!backendActive)}
                        style={{
                            // marginLeft: '35vw',
                            fontSize: mediaSize ? '25px' : '20px',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 15,
                            transition: 'all .3s',
                        }}>
                        <ExpandMore
                            style={{
                                cursor: 'pointer',
                                transform: !backendActive ? 'rotate(-90deg)' : 'rotate(0deg)',
                                marginTop: '.5vh',
                                transition: 'all .3s'
                            }}
                        />
                        Backend
                    </span>

                    <div
                        style={{
                            // marginLeft:'35vw',
                            fontSize: mediaSize ? '25px' : '15px',
                            transition: 'all .3s',
                            height: backendActive ? 'auto' : 0,
                            opacity: backendActive ? 1 : 0,
                        }}
                    >
                        The backend stack is Python + Flask to run the server + Scikit-Learn, Pandas, Spotipy Python API, and Matplotlib to run analyses and generate visualizations.
                    </div>

                </div>
            </div>
        </div>



    )
}


export default LandingPage;
