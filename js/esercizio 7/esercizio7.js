//1. selezione degli elementi (i riferimenti)
const formElement = document.getElementById('complited-form');
const inputUsername = document.getElementById('input-username');
const selectCity = document.getElementById('select-city');
const boxResult = document.getElementById('result');


//i riferimenti ai radio button (ne serve uno per ogni possibile opzione)
const radioMen = document.getElementById('radio-men');
const radioWomen = document.getElementById('radio-women');
const radioOther = document.getElementById('radio-other');

//riferimenti alle checkbox 
const checkSport = document.getElementById('check-sport');
const checkMusic = document.getElementById('check-music');
const checkTravel = document.getElementById('check-travel');

//2. ASCOLTO DELL'EVENTO SUBMIT 
formElement.addEventListener('submit', function(event)
    {
        event.preventDefault(); //impedisce di fare il rrefresh della pagina

        //---- recuppero dei dati ----

        //A) testo semplice 
        const valueUsername = inputUsername.value;

        //B) select (menu a tendina)
        //basta leggere .value delle elemento select per ottenere il dato
        //restituira il valore quale ID è "accesso"

        const valueCity = selectCity.value;
        
        //C) radioButton (logica manuale)
        //dobbiamo verificare quale ID è "accesso"(checked)
        let genderValue = "non specificato";

        if(radioMen.checked){
            genderValue = radioMen.value;
        }else if(radioWomen.checked){
            genderValue = radioWomen.value;
        }else if(radioOther.checked){
            genderValue = radioOther.value;
        }

        //D)checkbox multiple (array)
        //per controllare delle caselle di testo che possono essere multiple che poi andranno aggiunte alla lista 
        let interest_list = [];
        if(checkSport.checked){
            interest_list.push(checkSport.value);
        }
        if(checkMusic.checked){
            interest_list.push(checkMusic.value); 
        }
        if(checkTravel.checked){
            interest_list.push(checkTravel.value);
        }

        //convertiamo la lista in una stringa normale cosi che possiamo leggerla

        const interest_string = interest_list.length > 0 ? interest_list.join(", ") : "nessuno";

        //3. output
        boxResult.innerHTML = 
            `
            <ul>
                <li><strong>nome: </strong>${valueUsername}</li>
                <li><strong>città: </strong>${valueCity}</li>
                <li><strong>Genere: </strong>${genderValue}</li>
                <li><strong>Interessi: </strong>${interest_string}</li>
            </ul>
            `
        ;

        console.log("invio Effetuato", {
            valueUsername,
            valueCity,
            genderValue,
            interest_list
        });
    }    
);