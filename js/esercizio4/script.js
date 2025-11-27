            let numero = Number(prompt("Inserisci il numero di cui vuoi la tabellina"));

            if (isNaN(numero)) {
                alert("Devi inserire un numero valido!");
            } else {
                let risultato = "";

                for (let i = 1; i <= 10; i++) {
                    risultato += numero + " * " + i + " = " + (numero * i) + "\n";
                }

                alert("La tabellina del numero " + numero + " è:\n\n" + risultato);

                console.log("Tabellina del numero " + numero + ":\n");
                console.log(risultato);
            }