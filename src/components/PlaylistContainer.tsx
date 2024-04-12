import React, { useEffect, useState } from "react";
import SinglePlaylist from "./SinglePlaylist";
import { getPlaylists } from "../api/api";
import Loading from "./Loading";

type Playlist = {
    name: string
    id: string
    imgUrl: string
    owner: string
}

type PlatlistContainerProps = {
    plists: [Playlist] | undefined
    setPlists: (arg0: [Playlist]) => void
}

const PlatlistContainer: React.FC<PlatlistContainerProps> = ({ plists, setPlists }) => {
    const [activePlist, setActivePlist] = useState<number>(-1);

    return (
        <div style={{
            top:0,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            {plists ? (
                plists.map((playlist, index) => (
                    <SinglePlaylist index={index} key={playlist.id} plist={playlist} active={activePlist} setActive={setActivePlist} />
                ))
            ) : <></>
            }

        </div>
    );
}

export default PlatlistContainer;
