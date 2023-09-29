import { Link } from 'react-router-dom';
import Image from '../../assets/404-error.png';
const NotFound = () => {
  return (
    <div className="--center-all" style={{ minHeight: '80vh' }}>
      <img src={Image} alt="404-error" />
      <br />
      <Link to={'/'}>
        <button className="--btn --btn-primary">Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
