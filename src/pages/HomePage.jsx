import Header from "../components/common/Header";
import { useAuth } from "../Hooks/useAuth";
const HomePage = () => {
     const {auth} = useAuth();
     console.log(auth)
     return (
          <div className="text-red-300 text-3xl">
               <Header/>
              home
          </div>
     );
};

export default HomePage;
