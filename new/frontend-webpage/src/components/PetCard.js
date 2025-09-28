import React from 'react';

const PetCard = ({ pet }) => {
    if (!pet) {
        return (
            <div className="pet-card placeholder">
                <h2>No pet selected</h2>
                <p>Please select a pet to see details.</p>
            </div>
        );
    }

    return (
        <div className="pet-card">
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <h2 className="pet-name">{pet.name}</h2>
            <p className="pet-breed">{pet.breed}</p>

            {/* Sun box centered with progress */}
            <div className="sun-box-container">
                <div className="sun-box">☀️ 65 suns collected</div>
                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="65">
                    <div className="progress-fill" style={{width: '65%'}}></div>
                </div>
            </div>

            <div className="pet-actions">
              <button className="adopt-button" onClick={() => alert(`Adopt ${pet.name}`)}>Adopt</button>
              <button className="details-button" onClick={() => alert(`Details about ${pet.name}`)}>Details</button>
            </div>
        </div>
    );
};

export default PetCard;