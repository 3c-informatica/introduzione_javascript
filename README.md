# introduzione_javascript

e un liunguaggio interpretato ma le uiltime versioni sono pre compilate questo permette di rendere il programma più veloce si puo utilizzare sia per il front-end e il beak-end grazie anche a freamwork come node js 
per capire meglio questo linguaggio si puo usare w3school 
e installato su ogni browser web perche e uno standard quindi tutti sono in grado di leggere javascript 
la lotta tra internet explorer e net scape e dalle ceneri di nescape e nato in seguito firefox grazie alla community open-surce
ma purtroppo la standardizzazione non è avvenuta in tutti i browser 
per imparare javascript e consigliabile programmare molto 

javascript era inizzialmente come livescript probabilmente il suo nome e cambiato il java probabilmente per il fanatsimo che c'era per java ma non hanno nulla a che fare l'uno con l'altro
la specifica di javascripte e ecma-262

java scrpte deve essere integrato neccessariamente con html  possiamo usare java script per controllare qualcosa che viene ricevendo in input e facendo delle domande alla server o controllare l'input stesso
i vantaggi 
    minore interazione con il server
    feedbeak immediato
    maggiore reattivita: rendi le grafiche piu carine e reattive
    interfacce piu ricche

limitazioni
    non consente la scrittura o la lettura di file al interno del file stesso per motivi di sicurezza
    non puo essere usato per applicazioni di rete

la sintassi

puo essere implementato in html tramite tag <script> </script> questo tag accetta due attributi che permettono di inserire il linguaggio ma e possibile specificare il type e il tipo di codice 

in questo linguaggio i punto e virgola puo anche essere evitato se l'istruzzione e su rige diverse

###dichiarare due variabili: (in questo caso e possibile non inserire i punti e virgole perchè le istruzioni sono su linee diverse)
    var1 = 10;
    var2 = 20;

###i commeni si usano come in c
<pre>
    // commento 
    *commento

    // This is a comment. It is similar to comments in C++
    /*
    * This is a multi‐line comment in JavaScript
    * It is very similar to comments in C Programming
    */
</pre>
javascript in edge possono essere disabilitati quindi non viene eseguito 

vedi file no script il tag script puo essere inserito dove si voglia non ci sono limiti puo essere nel head nel body o in qualunque altro tag

si e deciso di spostare con il tempo di spostare la programmazione in javascript in un file proprio e non più al interno di html 
###si attribuisce con :
    //<script type="test/javascript" src="nomecodice.js"></script>

javascript e un linguaggio a tipizzazione debole perche una variabile puo essere sia un intero che una stringa in javascript

###tipi di dato:
    possono essre numeri non importa che siano interi o deciumali
    ci sono poi le strighe
    e i booleani

il prossimo anno vedremo la programmazione a oggetti al interno di javascript

gestice i numeri con il metodo IEE 754 a virgola mobile

###le variabili al interno di javascript:
    //var money; //questo valore puo essere sia un numero che una stringa che puo essere modificabile
    //var nome;
###puoi anche fare 
    //var nome, money;

###assegnazione: 
/*
*   var money; 
*    var nome = "ali";
*    money = 2000.50; //il decimale si suddivide con il punto
*/
le variabili globali o locali: 
    globali: una variablie globale puo essere vista da tutta la pozione di codice
    locali: viene creata e dichiarata e uasta solo per una piccola poszione di codice
###esempio codice in javascript: 
/*
*    <html>
*       <body onload = checkscope();>
*            <script type = "text/javascript">
*                var myVar = "global"; // Declare a global variable
*                function checkscope( ) {
*                    var myVar = "local"; // Declare a local variable
*                    document.write(myVar);
*                }
*            </script>
*        </body>
*    </html>
*/
NON ASSEGNARE NOMI A VARIABILE COME LE PAROLE CHIAVE RISERVATE A JAVASCRIPT 

###parole riservate:
/*
    abstract, else, instanceof, switch,
    boolean, enum, int, synchronized,
    break, export, interface, this,
    byte, extends, long, throw,
    case, false, native, throws,
    catch, final, new, transient,
    char, finally, null, true,
    class, float, package, try,
    const, for, private, typeof,
    continue, function, protected, var,
    debugger, goto, public, void,
    default, if, return, volatile,
    delete, implements, short, while,
    do, import, static, with,
    double, in, super
*/

non puoi iniziare a dichiarare una variabile iniziando con un numero ma puoi usarli mettendo il trattino basso davanti
