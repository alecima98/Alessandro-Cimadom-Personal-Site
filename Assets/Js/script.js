// Aggiungi questo script in una sezione <script> nel tuo HTML, preferibilmente prima della chiusura del tag </body>
// o all'inizio del tuo file JavaScript

// Effetto di scrittura dinamica
var typed = new Typed('.typing', {
    strings: ["Developer and ", "Photographer"], // Array di testi da visualizzare
    typeSpeed: 50, // Velocità di battitura in millisecondi
    backSpeed: 50, // Velocità di cancellazione in millisecondi
    backDelay: 1500, // Ritardo prima di cancellare il testo in millisecondi
    startDelay: 1000, // Ritardo prima di iniziare a digitare in millisecondi
    loop: true // Ripetere l'effetto di scrittura
  });
  