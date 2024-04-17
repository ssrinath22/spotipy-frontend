import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPlaylists, sendTokenToServer } from "../api/api"
import Loading from "../components/Loading"

type Playlist = {
    name: string
    id: string
    imgUrl: string
    owner: string
}

type LoadingProps = {
    plists: [Playlist] | undefined
    setPlists: (arg0: [Playlist]) => void
    accessToken: string | undefined
}

const LoadingPage: React.FC<LoadingProps> = ({plists, setPlists, accessToken}) => {
    const [renderPlaylists, setRenderPlaylists] = useState<boolean>(false)
    const [tokenSent, setTokenSent] = useState<boolean>(false)
    const navigate = useNavigate()

    const sendToken = async () => {
        accessToken && await sendTokenToServer(accessToken)
    }
    useEffect(() => {
        sendToken()
        setTokenSent(true)
    })

    useEffect(() => {
        tokenSent && getPlaylists(setPlists);
    }, [tokenSent]);

    useEffect(() => {
        if (plists !== undefined) {
            setRenderPlaylists(true);
        }
    }, [plists]);

    useEffect(() => {
        if(renderPlaylists) navigate('/playlists')
    }, [renderPlaylists]);    

    return(
        <div>
            <Loading ready={renderPlaylists && (plists !== undefined)}/>
        </div>
    )
}

export default LoadingPage