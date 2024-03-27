import { ReactNode } from "react"

export type TUserPaths = {
    name?: string,
    path?:string,
    element?: ReactNode, 
     children?:TUserPaths[]
  }
  export type TRoutes = {
    path: string,
    element: ReactNode
  }

 export type TSidebarItem = {
    key: string,
    label: ReactNode,
    children?:TSidebarItem[]
  
  } | undefined