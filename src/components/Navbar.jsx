import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const {user} = useAuth()
  console.log(user)

  const handleLogout = async () => {
    try {
        await signOut(auth)
    }
    catch(error) {
      console.log(error.message)
    }
  }
  return (
    <div className='navbar bg-base-100 justify-between'>
      <a className='font-bold normal-case text-xl underline'>GalleryPro📷</a>
      <button onClick={handleLogout} className='hover:underline'>Logout</button>
    </div>
  );
};

export default Navbar;
