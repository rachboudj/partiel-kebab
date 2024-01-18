import React, { useState, useEffect } from 'react'

export default function cuisine() {
    const [commandes, setCommandes] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const commandesExistantes = JSON.parse(localStorage.getItem('commandes')) || [];
        setCommandes(commandesExistantes);
    }, []);

    const calculerTemps = (tempsCommande) => {
        const debut = new Date(tempsCommande);
        const maintenant = new Date();
        const diff = maintenant - debut;
        const minutes = Math.floor(diff / 60000);
        const secondes = Math.floor((diff % 60000) / 1000);
        return `${minutes.toString().padStart(2, '0')}m ${secondes.toString().padStart(2, '0')}s`;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, []);

    const validerCommande = (index) => {
        let nouvellesCommandes = [...commandes];
        nouvellesCommandes.splice(index, 1);
        setCommandes(nouvellesCommandes);
        localStorage.setItem('commandes', JSON.stringify(nouvellesCommandes));
    };

    return (
        <div className='cuisine'>
            <h2>Commandes à faire</h2>
            {commandes.map((commande, index) => (
                <div className='card-commande' key={index}>
                    <h3>{commande.nom}</h3>
                    <p>Ingrédients: {commande.ingredients}</p>
                    <p>Sauce: {commande.sauce}</p>
                    <p>Temps de commande: {calculerTemps(commande.tempsCommande)}</p>
                    <button className='btn' onClick={() => validerCommande(index)}>Valider la commande</button>
                </div>
            ))}
        </div>
    )
}
