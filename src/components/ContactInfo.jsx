import { socialLinks } from '../constants';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div className='flex w-full h-full mt-2'>
      {socialLinks.map((sl, index) => (
        <Link to={sl.link} key={`socialLink-${index}`}>
          <img src={sl.iconUrl} className='w-6 h-6 mx-2 object-contain' />
        </Link>
      ))}
    </div>
  );
};

export default ContactInfo;