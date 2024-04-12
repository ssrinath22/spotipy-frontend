import { Shortcut } from "@mui/icons-material";
import { Button } from "@mui/material";
import { runAnalysis } from "../api/api";

type Playlist = {
    name: string;
    id: string;
    imgUrl: string;
    owner: string;
}

type UsePlaylistProps = {
    isActive: boolean
    plist: Playlist
}

const UsePlaylist: React.FC<UsePlaylistProps> = ({ isActive, plist }) => {
    const bgColor = '#7AA2E3'
    const textColor = '#F8F6E3'

    const cont = () => {
        runAnalysis(plist.id)
    }
    
    return (
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
                        <Shortcut/>
                    </Button>
                </>
            }
        </div>
    )
}

export default UsePlaylist 