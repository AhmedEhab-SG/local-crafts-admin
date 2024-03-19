import login from "@/app/api/auth";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProviders({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password)
            throw new Error("Invaild credentials");

          const { email, password } = credentials;

          const res = await login({ email, password });

          const userInfo = res.data.user;
          const token = res.data.access_token;

          const user = { ...userInfo, token };

          if (user.role !== "admin") throw new Error("Invaild credentials");

          return user;
        } catch (e) {
          throw new Error("Invaild credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(baseUrl)
        : Promise.resolve(url);
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
