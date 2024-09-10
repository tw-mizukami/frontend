import { getAccessToken } from "@/fetchers/authfetcher";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: { label: "Username" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, request) {

                console.log(credentials);

                if (
                    typeof credentials.username !== "string"
                    || typeof credentials.password !== "string"
                ) {
                    return null;
                }
                const data = await getAccessToken(credentials.username, credentials.password);


                return {
                    accessToken: data.access_token,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log("Jwt", token, user)

            if (user) {
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            console.log("session", session, token)
            session.accessToken = token.accessToken;
            return session;
        }
    }

})