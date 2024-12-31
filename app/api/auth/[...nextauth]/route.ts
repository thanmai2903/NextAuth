import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(Credentials, req) {
        return {
          username: "thanmai",
          id: "1",
          email: "thanmaipalla@gmail.com",
        };
      },
    }),
  ],
});

export const GET = handler;
export const POST = handler;
