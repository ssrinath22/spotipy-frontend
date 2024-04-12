const client_id = '393026174b4d48d49bd6e371412c8a59'
const client_secret = '80e439830b084c6da52058c955d0da2f'
const redirect_uri = encodeURIComponent('http://localhost:5173/auth')
const scopes = encodeURIComponent('playlist-read-private playlist-modify-public playlist-modify-private');

type Playlist = {
    name: string
    id: string
    imgUrl: string
    owner: string
}

interface AuthHash {
    access_token?: string;
    [key: string]: string | undefined;
}

const iniateAuth = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}`;
}

// Extract the access token from the URL fragment safely
const extractAccessToken = (): AuthHash => {
    console.log(window.location.hash)
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce<AuthHash>((initial, item) => {
            if (item) {
                const parts = item.split('=');
                const key = parts[0];
                const value = decodeURIComponent(parts[1] || '');
                initial[key] = value;
            }
            return initial;
        }, {});
};

const sendTokenToServer = async (token: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ access_token: token }),
        });

        if (response.ok) {
            console.log('Token sent successfully');
        } else {
            console.error('Failed to send token');
        }
    } catch (error) {
        console.error('Error sending token to server:', error);
    }
};

const getPlaylists = async (setPlaylists: (arg0: [Playlist]) => void) => {
    const response = await fetch('http://localhost:8000/api/get_playlists', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            const simplifiedPlaylists = data.items.map((playlist: any) => ({
                name: playlist.name,
                id: playlist.id,
                imgUrl: playlist.images ? playlist.images[0].url : undefined,
                owner: playlist.owner.display_name,
            }))
            setPlaylists(simplifiedPlaylists as [Playlist])
        })
        .catch(error => { return new Error('Error fetching playlists:') });
};


const runAnalysis = async (playlistId: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/recieve_analysis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ playlist_id: playlistId }),
        });
        if (response.ok) {
            console.log('Analysis run successfully');
        } else {
            console.error('Analysis Failed');
        }
    } catch (error) {
        console.error('Error running analysis:', error);
    }
}


export { runAnalysis, getPlaylists, sendTokenToServer, extractAccessToken, iniateAuth };
export type { AuthHash };

