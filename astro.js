function afficherJour()
{
    let monoption = document.createElement('option');
    monoption.setAttribute('value','s');
    monoption.textContent = 'choisir le jour';
    document.getElementById('jour').appendChild(monoption);

    for(let i = 1; i <= 31; i++)
    {
        let uneOption = document.createElement('option');
        let j = i;
        (j<10)? j='0'+ j: j;
        uneOption.textContent = j ;
        uneOption.setAttribute('value',i);
        document.getElementById('jour').appendChild(uneOption);
    }
}

afficherJour();

function afficherMois()
{
    let monoption = document.createElement('option');
    monoption.setAttribute('value','');
    monoption.textContent = 'choisir le mois';
    document.getElementById('mois').appendChild(monoption);
 let mois= ['janvier','février', 'mars', 'avril', 'mai', 'juin','juillet', 'Aout','Septembre','Octobre','Novembre','Octobre','Décembre']
    for(let i = 0; i <= 12; i++)
    {
        let uneOption = document.createElement('option');
        
        
        uneOption.textContent = mois[i];
        uneOption.setAttribute('value',i);
        document.getElementById('mois').appendChild(uneOption);
    }
}

afficherMois();

function afficherAnnee()
{
    let monoption = document.createElement('option');
    monoption.setAttribute('value','');
    monoption.textContent = "choisir l'année";
    document.getElementById('annee').appendChild(monoption);

    for(let i = 1948
        ; i <= 2020; i++)
    {
        let uneOption = document.createElement('option');
        
        uneOption.textContent = i ;
        uneOption.setAttribute('value',i);
        document.getElementById('annee').appendChild(uneOption);

        
        function signe(calMois)
        {
            var lesSigne =
            ['Verseau', 'Poisson', 'Belier', 'Taureau', 'Gémeaux','Cancer','Lion', 
            'Vierge', 'Balance', 'Scorpion','Sagitaire','Capricone','Verseau'];

            return lesSignes[calMois -1];
        }

    }
}

afficherAnnee();


function formOK()
{
 let nom = document.getElementById('nom').value;
 let prenom = document.getElementById('prenom').value;
 let villeNaissance = document.getElementById('VilleNaissance').value;
 let jour = document.getElementById('jour').value;
 let mois = document.getElementById('mois').value;
 let annee = document.getElementById('annee').value;

 let champ = false;

 if (nom!='' && prenom!='' && villeNaissance!='' && jour!='' && mois!='' && annee!='') 
 {
   champ =true;
 } (champ);
 return champ;
}

formOK();