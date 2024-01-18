import React from 'react';
import { useState } from 'react';


export default function creationRecette() {
    const [nomRecette, setNomRecette] = useState('');
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const recette = {
            nom: nomRecette,
            ingredients: ingredients.split(',')
        };

        console.log('La recette :', recette);

        const recettesExistantes = JSON.parse(localStorage.getItem('recettes')) || [];
        localStorage.setItem('recettes', JSON.stringify([...recettesExistantes, recette]));

        setNomRecette('');
        setIngredients('');
    };



return (


    <div>
        <h2>Créer une nouvelle recette</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom de la recette:</label>
                <input
                    type="text"
                    value={nomRecette}
                    onChange={(e) => setNomRecette(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Ingrédients (séparés par une virgule):</label>
                <input
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Ajouter la recette</button>
        </form>
    </div>
)
    }
