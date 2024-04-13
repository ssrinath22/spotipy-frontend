import React, { useEffect, useState } from "react";
import SinglePlaylist from "./SinglePlaylist";
import { getPlaylists } from "../api/api";
import Loading from "./Loading";
import { Button, CircularProgress } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import PlaylistInfo from "./PlaylistInfo";

type Playlist = {
    name: string
    id: string
    imgUrl: string
    owner: string
}

type PlaylistContainerProps = {
    plists: [Playlist] | undefined
    setPlists: (arg0: [Playlist]) => void
    setDone: (arg0: boolean) => void
}

const PlaylistContainer: React.FC<PlaylistContainerProps> = ({ plists, setPlists, setDone }) => {
    const [activePlist, setActivePlist] = useState<number>(-1)
    const [activePid, setActivePid] = useState<string>('')
    const [infoActive, setInfoActive] = useState<boolean>(false)

    return (
        <>
            <div style={{
                top: 0,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {plists ? (
                    plists.map((playlist, index) => (
                        <SinglePlaylist index={index} key={playlist.id} plist={playlist} active={activePlist} setActive={setActivePlist} setDone={setDone} setInfoActive={setInfoActive} setActivePid={setActivePid}/>
                    ))
                ) : <></>
                }
            </div>
            <PlaylistInfo id={activePid} isActive={infoActive} setIsActive={setInfoActive}/>
        </>

    );
}

export default PlaylistContainer;
