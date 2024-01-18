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
        <div className='recette'>
            <h2>Nos recettes</h2>
            <div className="container-recette">
                {recettes.map((recette, index) => (
                    <div className='card-recette' key={index}>
                        <h3>{recette.nom}</h3>
                        <p>{recette.ingredients}</p>
                        <div className="btn-recette">
                            <button className='btn'>Commander</button>
                            <button className='btn-suppr' onClick={() => supprimerRecette(index)}>Supprimer</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
