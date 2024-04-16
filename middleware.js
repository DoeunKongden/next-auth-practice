
//This middle ware apply nextjs auth to the entire project
export { default } from 'next-auth/middleware'

// With this define matcher, we are only applying nextauth to these matching route 
export const config = { matcher: ["/homepage", "/dashboard"] }