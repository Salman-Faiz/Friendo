import { useState } from "react";
import { AuthContext } from "../Context";

const AuthProvider =({children}) =>{
     const [auth,setAuth]=useState({});
return(
     <AuthContext.Provider value={{auth,setAuth}}>

     {children}
 </AuthContext.Provider>
)
}
export default AuthProvider;