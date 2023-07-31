import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: process.env.NEXTAUTH_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_CLIENT_SECRET,
      issuer: process.env.NEXTAUTH_CLIENT_ISSUER,
    }),
  ],
  session: {
    strategy: "jwt",
  },

  // ...add more providers here
};

export default NextAuth(authOptions);
