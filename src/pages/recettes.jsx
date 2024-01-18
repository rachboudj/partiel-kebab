import React from 'react'
import { useState, useEffect } from 'react';


export default function recettes() {
    const [recettes, setRecettes] = useState([]);

    useEffect(() => {
        const recettesExistantes = JSON.parse(localStorage.getItem('recettes')) || [];
        setRecettes(recettesExistantes);
    }, []);

    const supprimerRecette = (index) => {
        const nouvellesRecettes = [...recettes.slice(0, index), ...recettes.slice(index + 1)];
        setRecettes(nouvellesRecettes);
        localStorage.setItem('recettes', JSON.stringify(nouvellesRecettes));
    };

    return (
        <div>
            <h2>Nos recettes</h2>
            {recettes.map((recette, index) => (
                <div key={index}>
                    <h3>{recette.nom}</h3>
                    <p>{recette.ingredients}</p>
                    <button onClick={() => supprimerRecette(index)}>Supprimer</button>
                </div>
            ))}
        </div>
    );
}
