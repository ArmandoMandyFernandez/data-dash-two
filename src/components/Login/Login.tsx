import { Avatar } from '@mui/material'
import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '@mui/material/Button'

const Login = () => {
    const { data: session } = useSession()
    const userProfileImg = session?.user?.image as string

    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />
                <Button variant={'contained'} color={'error'}onClick={() => signOut()}>Sign out</Button>
            </>
        )
    }

    return (
        <>
            <h2>Please Log In</h2><br />
            <Button variant={'contained'} color={'success'}onClick={() => signIn()}>Sign in</Button>
        </>
    )
}

export default Login;