import { useNavigate } from 'react-router-dom';
import './MatchNowButton.css';

function MatchNowButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    // This will properly navigate using React Router
    navigate('/club-match');
  };

  return (
    <button 
      className="match-now-button" 
      onClick={handleClick}
    >
      MATCH NOW
    </button>
  );
}

export default MatchNowButton;