import { useState } from "react"
import PlaylistContainer from "../components/PlaylistContainer"

type Playlist = {
    name: string
    id: string
    imgUrl: string
    owner: string
}

type SelectPlaylistPageProps = {
    playlists: [Playlist] | undefined
    setPlaylists: (arg0 : [Playlist]) => void
}

const SelectPlaylistPage: React.FC<SelectPlaylistPageProps> = ({playlists, setPlaylists}) => {
    const [done, setDone] = useState<boolean>(false)
    /** pass in a setter so they can set playlist links in here */
    return (
        <div
            style={{
                backgroundColor:'#F8F6E3',
                position:'absolute',
                top:0,
                padding:'0 15%',

            }}
        >
            <PlaylistContainer plists={playlists} setPlists={setPlaylists} setDone={setDone}/>

            {/** Navigate through*/}

        </div>
    )
}


export default SelectPlaylistPage