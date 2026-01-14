document.getElementById('formulaireContact').addEventListener('submit',
    function (event) {
        event.preventDefault();
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (nom && email && message) {
            alert('Merci ' + nom + '! Votre message a été reçu.');
            this.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });