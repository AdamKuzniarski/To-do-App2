import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButtons(){
    const {data: session, status} = useSession()

    if(status=== "loading")return <button disabled>Loading...</button>
}