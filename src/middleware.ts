export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/products",
    "/products/:productId*",
    "/products/edit/:productId*",
  ],
};
