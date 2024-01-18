import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function creationRecette() {
    const [nomRecette, setNomRecette] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recetteAjoutee, setRecetteAjoutee] = useState(false);
    const navigate = useNavigate();

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
        setRecetteAjoutee(true);
    };

    useEffect(() => {
        if (nomRecette || ingredients) {
            setRecetteAjoutee(false);
        }
    }, [nomRecette, ingredients]);

    const handleRedirection = () => {
        navigate('/');
    };

    return (
        <div className='creerRecette'>
            {recetteAjoutee && (
                <div className='sucess-message'>
                    <p>La recette a bien été ajoutée!</p>
                    <button onClick={handleRedirection}>Voir les recettes</button>
                </div>
            )}
            <h2>Créer une nouvelle recette</h2>
            <form onSubmit={handleSubmit}>
                <label>Nom de la recette</label>
                <input
                    type="text"
                    value={nomRecette}
                    onChange={(e) => setNomRecette(e.target.value)}
                    required
                />
                <label>Ingrédients</label>
                <input
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />
                <button className='btn' type="submit">Ajouter la recette</button>
            </form>
        </div>
    )
}
