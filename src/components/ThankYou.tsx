import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { app } from "../App";

function ThankYou() {
    const [error, setError] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get('token');
    const tokenId = searchParams.get('tokenId');

    //send the token and tokenId to confirm user
    const confirmEmail = async (token: string, tokenId: string) => {
        try {
            await app.emailPasswordAuth.confirmUser({ token, tokenId });
        } catch (err: any) {
            console.log(err);

            setError(err);
        }
    }

    useEffect(() => {
        if (token && tokenId) {
            confirmEmail(token, tokenId);
            setSearchParams({});
        }
    }, [token, tokenId, searchParams, setSearchParams])

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <Box className='thank-you' sx={{
                backgroundColor: '#67e8f9',
                padding: '40px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill='#15803d'><defs><mask id="ipSCheckOne0"><g fill="none" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" stroke="#fff" d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" /><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" /></svg>
                <h1>Thank you for signing up!</h1>
                <p>Your email is confirmed. Please login to your account.</p>
                {
                    error && <p className="error">Something goes wrong!. Please try again.</p>
                }
            </Box>

        </Box>
    )
}

export default ThankYou