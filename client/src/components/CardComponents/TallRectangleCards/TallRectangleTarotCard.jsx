import { useState } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import CardInfo from './CardInfo';
import './CardFlip.css';

function TarotCard() {
  const [viewState, setViewState] = useState(1); // 0 = front, 1 = back, 2 = info

  const handleCardClick = () => {
    setViewState(prev => {
        if (prev === 2) { // We're currently at the info stage
            return 0; // Reset to front
        } else {
            return prev + 1; // Otherwise, move to the next stage
        }
    });
};

  return (
    <div className="card-container" onClick={handleCardClick}>
      <div className="card">
      <div className={`side front ${viewState === 1 || viewState === 2 ? 'rotate' : ''}`}> 
          {viewState === 0 && <CardFront />}
        </div>
        <div className="side back" style={{ transform: viewState === 0 || viewState === 2 ? 'rotateY(0deg)' : 'rotateY(180deg)' }}>
          {viewState === 1 && <CardBack />}
        </div>
        <div className="side info" style={{ transform: viewState === 0 || viewState === 1 ? 'rotateY(-180deg)' : 'rotateY(0deg)' }}>
          {viewState === 2 && <CardInfo />}
        </div>
      </div>
    </div>
  );
}

export default TarotCard;
