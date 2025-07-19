import { Link } from "react-router-dom";

import { useAuth } from "../Hooks/useAuth";
const HomePage = () => {
     const {auth} = useAuth();
     console.log(auth)
     return (
          <div className="text-green-300 text-3xl grid grid-cols-4">
    
              <h1 className="bg-slate-600 pt-13 text-5xl text-red-500 col-span-2">my naame is asif</h1>
              <h2 className="bg-slate-600 pt-13">my naame is asif</h2>
              <h3 className="bg-slate-600 pt-13">my naame is asif</h3>
              <h1 className="bg-slate-600 pt-13">my naame is asif</h1>
              <h1 className="bg-slate-600 pt-13">my naame is asif</h1>
              <Link to={'/me'}>go to profile</Link>
          </div>
          
     );
};

export default HomePage;
