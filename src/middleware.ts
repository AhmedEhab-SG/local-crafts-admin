import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req: Request) {}, {
  callbacks: {
    authorized: async ({ token }) => (await token?.role) === "admin",
  },
});

export const config = {
  matcher: [
    "/",
    "/products",
    "/products/:productId*",
    "/services",
    "/services/:serviceId*",
    "/orders",
    "/users",
    "/locations", 
    "/categories",
    "/categories/add",
    "/categories/:categories*",
  ],
};
