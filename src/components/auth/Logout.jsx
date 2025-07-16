import logout from '../../assets/icons/logout.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

const Logout = () => {
     const navigate = useNavigate();
     const {setAuth} = useAuth()
     const handleLogout = ()=>{
          setAuth({});
          navigate('/login')
     }
     return (
          <button className="icon-btn" onClick={handleLogout}>
          <img src={logout} alt="Logout" />
        </button>
     );
};

export default Logout;