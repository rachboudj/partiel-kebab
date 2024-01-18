import React from 'react'
import { useState, useEffect } from 'react';


export default function recettes() {
    const [recettes, setRecettes] = useState([]);
    const [sauceVisible, setSauceVisible] = useState(false);
    const [recetteSelect, setRecetteSelect] = useState(null);
    const [sauceSelect, setSauceSelect] = useState('algérienne');

    useEffect(() => {
        const recettesExistantes = JSON.parse(localStorage.getItem('recettes')) || [];
        setRecettes(recettesExistantes);
    }, []);

    const supprimerRecette = (index) => {
        const nouvellesRecettes = [...recettes.slice(0, index), ...recettes.slice(index + 1)];
        setRecettes(nouvellesRecettes);
        localStorage.setItem('recettes', JSON.stringify(nouvellesRecettes));
    };

    const affichSauce = (recette) => {
        setRecetteSelect(recette);
        setSauceVisible(true);
    };

    const fermerSauce = () => {
        setSauceVisible(false);
        setRecetteSelect(null);
        setSauceSelect('algérienne');
    };

    const validerCommande = async () => {
        console.log('Commande validée:', recetteSelect, sauceSelect);
        fermerSauce();
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
                            <button className='btn' onClick={() => affichSauce(recette)}>Commander</button>
                            <button className='btn-suppr' onClick={() => supprimerRecette(index)}>Supprimer</button>
                        </div>
                    </div>
                ))}
            </div>

            {sauceVisible && (
            <div className="container-sauce">
                <div className='close-sauce'>
                        <p>Sélectionnez une sauce avec {recetteSelect?.nom}</p>
                    <span className="close" onClick={fermerSauce}>&times;</span>
                </div>
                <div className="choix-sauce">
                    <select value={sauceSelect} onChange={(e) => setSauceSelect(e.target.value)}>
                        <option value="algérienne">Sauce Algérienne</option>
                        <option value="barbecue">Sauce Barbecue</option>
                        <option value="aucune">Aucune sauce</option>
                    </select>
                    <button className='btn2' onClick={validerCommande}>Valider la commande</button>
                </div>
            </div>
            )}
        </div>
    );
}
