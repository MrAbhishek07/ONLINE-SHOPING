
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../features/authSlice'

const ShowOnLogin = ({ children }) => {

    const isLoggedin = useSelector(selectIsLoggedIn);

    if (isLoggedin) {
        return children;
    }



    return null;
}

export default ShowOnLogin;