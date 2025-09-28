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
            <button className="adopt-button" onClick={() => alert(`Adopt ${pet.name}`)}>Adopt</button>
            <button className="details-button" onClick={() => alert(`Details about ${pet.name}`)}>Details</button>
        </div>
    );
};

export default PetCard;