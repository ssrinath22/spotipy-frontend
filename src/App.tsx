import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import AuthHandler from './components/AuthHandler';
import UserHomePage from './pages/UserHomePage';
import SelectPlaylistPage from './pages/SelectPlaylistPage';
import LoadingPage from './pages/LoadingPage';

type Playlist = {
    name:string 
    id: string 
    imgUrl: string
    owner: string
}
// [{name:'test_name',id:'test_id', imgUrl: 'test_imgUrl', owner:'test_owner'}]
function App() {
    const [token, setToken] = useState<string | undefined>(undefined)
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)
    const [playlists, setPlaylists] = useState<[Playlist] | undefined>(undefined)

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage mediaSize={matches} />} />
                <Route path="/auth" element={<AuthHandler currToken={token} setAuth={setToken} />} />
                <Route path="/home" element={<UserHomePage accessToken={token} />} />
                <Route path="/loading" element={<LoadingPage plists={playlists} setPlists={setPlaylists}/> } />
                <Route path="/playlists" element={<SelectPlaylistPage playlists={playlists} setPlaylists={setPlaylists}/>} />
            </Routes>
        </Router>
    )
}

export default App
