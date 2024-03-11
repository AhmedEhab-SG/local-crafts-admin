import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      email: string;
      photo: string;
      name: string;
      role: string;
      description: string;
      address: { city: string; gov: string };
      token: string;
    };
  }
}
