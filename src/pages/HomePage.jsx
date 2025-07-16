import { Link } from "react-router-dom";

import { useAuth } from "../Hooks/useAuth";
const HomePage = () => {
     const {auth} = useAuth();
     console.log(auth)
     return (
          <div className="text-red-300 text-3xl">
    
              <h1>home</h1>
              <Link to={'/me'}>go to profile</Link>
          </div>
     );
};

export default HomePage;
