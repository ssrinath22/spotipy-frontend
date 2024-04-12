import { Button } from "@mui/material"
import { sendTokenToServer } from "../api/api"
import { useNavigate } from 'react-router-dom';

type UserHomePageProps = {
    accessToken: string | undefined
}
const UserHomePage: React.FC<UserHomePageProps> = ({ accessToken }) => {
    const navigate = useNavigate();
    console.log(accessToken)

    return (
        <>
            This is the home page
            <Button
                onClick={async () => {
                    accessToken && await sendTokenToServer(accessToken)
                    navigate('/loading')
                }}

            >
                Connect to server
            </Button>
        </>
    )
}

export default UserHomePage 