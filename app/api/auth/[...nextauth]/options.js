import { loginService } from "@/service/auth/login.service"
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'

export const options = {
    providers: [

        //Credential Providers
        CredentialsProvider({
            name: 'Credential',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Email'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password'
                },
            },

            async authorize(credentials) {
                // Add logic to verify credentials here
                if (!credentials) return null
                const userInfo = await loginService(credentials);
                if (userInfo?.status === 404) {
                    throw new Error("Error login wrong credential");
                } else {
                    const { token } = userInfo;
                    console.log("token in options ", token)
                    return token;
                }
            }

        }),

        //Github Provider : just provide the GitHubId & GitHubSecret
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    sessions: {
        strategy: 'jwt'
    },

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
}