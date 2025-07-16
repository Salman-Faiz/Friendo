import { useContext,useDebugValue } from "react";
import { AuthContext } from "../Context";

export const useAuth =() =>{
     const {auth} =useContext(AuthContext)
     useDebugValue(auth,auth=>auth?.user ? "User logged in": "User logged out");
     return useContext(AuthContext);
}