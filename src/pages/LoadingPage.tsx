import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPlaylists } from "../api/api"
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
}

const LoadingPage: React.FC<LoadingProps> = ({plists, setPlists}) => {
    const [renderPlaylists, setRenderPlaylists] = useState<boolean>(false);
    const navigate = useNavigate()

    useEffect(() => {
        getPlaylists(setPlists);
    }, []);

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