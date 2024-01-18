import React from 'react'
import { useState, useEffect } from 'react';


export default function recettes() {
    const [recettes, setRecettes] = useState([]);

    useEffect(() => {
        const recettesExistantes = JSON.parse(localStorage.getItem('recettes')) || [];
        setRecettes(recettesExistantes);
    }, []);

    return (
        <div>
            <h2>Nos recettes</h2>
            {recettes.map((recette, index) => (
                <div key={index}>
                    <h3>{recette.nom}</h3>
                    <p>{recette.ingredients}</p>
                </div>
            ))}
        </div>
    );
}
