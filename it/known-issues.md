# Esperimenti, Roadmap e Problemi Conosciuti

Il Copilot Workspace è una anteprima tecnica e si trova in fase di sviluppo attivo. Questo documento elenca alcuni problemi noti e aree note in cui vorremmo apportare miglioramenti futuri.

Durante l'anteprima tecnica, rilasceremo continuamente aggiornamenti del Copilot Workspace, aggiungendo nuove funzionalità, nuovi esperimenti e correggendo bug man mano che procediamo.

## Esperimenti attivi

Ci sono diversi "Esperimenti" attivi disponibili relativi alle cose su cui stiamo lavorando. Ti invitiamo ad attivarli e aggiorneremo questo documento con nuovi esperimenti quando saranno disponibili.

### Revisione con linguaggio naturale (🥼)

Stiamo sperimentando una funzionalità che ti permette di rivedere il codice utilizzando il linguaggio naturale. Abilita questa funzione utilizzando la funzionalità "Revisione con linguaggio naturale" in Copilot Workspace, che aggiunge un'icona alla barra degli strumenti per chiarire rapidamente le specifiche o il piano.

### Utilizzo delle issue collegate (🥼)

Stiamo sperimentando una funzionalità che consente al Copilot Workspace di utilizzare il contenuto testuale delle issue collegate durante l'analisi dei compiti. Abilita questa funzione utilizzando la funzionalità "Utilizzo delle issue collegate" in Copilot Workspace.

### Utilizzo costante dei numeri di riga (🥼)

Il Copilot Workspace utilizza selettivamente i numeri di riga nella sua analisi AI in base alla necessità percepita in base al testo del compito. In futuro probabilmente passeremo a utilizzare sempre i numeri di riga. Abilita questa funzione utilizzando la funzionalità "Utilizzo costante dei numeri di riga" in Copilot Workspace.

### Chiarezza nelle specifiche ambigue (🥼)

Stiamo sperimentando una funzionalità che consente al Copilot Workspace di rilevare e avvertire riguardo a specifiche ambigue, in collaborazione con l'utente. Abilita questa funzione utilizzando la funzionalità "Chiarezza nelle specifiche ambigue" in Copilot Workspace.

## Aree principali per il miglioramento

Di seguito sono elencate le aree principali in cui stiamo lavorando attivamente per migliorare il Copilot Workspace.

### Riscrittura di file di grandi dimensioni

Quando il Copilot Workspace implementa un piano che comporta modifiche in un file di grandi dimensioni, può richiedere molto tempo per completare l'operazione. Attualmente il Copilot Workspace utilizza la "riscrittura dell'intero file" poiché abbiamo scoperto che questo garantisce un alto livello di completezza sulla vasta gamma di compiti molto eterogenei per cui il Copilot Workspace può essere utilizzato.

Stiamo lavorando su tecniche di riscrittura parziale dei file, sia automatiche che sotto la guida dell'utente, per migliorare le prestazioni di questa operazione.

### Generazione di codice

La qualità del codice generato dal Copilot Workspace non è sempre perfetta. È strettamente legata alla qualità dei modelli AI sottostanti utilizzati. Stiamo lavorando per migliorare la qualità del codice generato dal Copilot Workspace su molti livelli.

Ad esempio, la qualità della generazione del codice è influenzata dalla qualità della pianificazione e delle specifiche del compito, e dall'esperienza complessiva dell'utente nel valutare e chiarire queste. Stiamo lavorando per migliorare anche questi aspetti.

La qualità ottenuta è anche legata all'esperienza di iterare sul codice generato. Stiamo esaminando attivamente tecniche di iterazione più dettagliate.

### Selezione dei contenuti

La selezione dei contenuti nel Copilot Workspace talvolta può essere non ottimale, portando alla generazione di codice non rilevante per il compito. Stiamo lavorando per migliorare la selezione dei contenuti nel Copilot Workspace.

### Recupero web

I compiti possono includere collegamenti diretti a risorse web come documentazione. Inoltre, alcune informazioni web possono essere dedotte dal compito. Attualmente il Copilot Workspace non esegue il recupero web e stiamo lavorando per aggiungere questa funzionalità.

### Riparazione build/test

Dopo che il codice è generato, sia l'AI che gli strumenti tradizionali possono essere utilizzati per "riparare" il codice basandosi sui diagnosticati generati dalla compilazione, dal test e dall'esecuzione del codice. Abbiamo prototipato versioni iniziali di questo in Copilot Workspace ed è un'area di indagine attiva.

### Compiti piccoli, compiti grandi

Alcuni compiti sono molto piccoli: aggiornare alcune righe di un file. Alcuni compiti sono molto grandi: implementare una nuova funzionalità di repository interamente per fasi.

Attualmente il Copilot Workspace è progettato per la gamma media di compiti tipici delle issue di GitHub. Siamo interessati a offrire variazioni sui concetti principali del Copilot Workspace in modalità più adatte a compiti sia piccoli che grandi. Ad esempio, per compiti piccoli potremmo offrire una versione "lite" del Copilot Workspace in cui c'è solo il compito. Per compiti grandi potremmo offrire un modo per decomporre il compito in sotto-compiti.

### Autorizzazione

Il Copilot Workspace utilizza un'app OAuth di GitHub per l'autenticazione. Alcune organizzazioni possono avere politiche che limitano le applicazioni OAuth dall'interagire con i loro repository. Non sarà possibile eseguire compiti in repository privati con il Copilot Workspace, o creare pull request in repository pubblici a meno che l'amministratore dell'organizzazione non approvi l'app OAuth del Copilot Workspace.

Stiamo lavorando per aggiungere una seconda opzione di autorizzazione per il Copilot Workspace basata su un'app GitHub, e aggiorneremo questo documento quando sarà disponibile.

### Scalabilità

Il Copilot Workspace può essere utilizzato con molti repository esistenti di grandi dimensioni. Tuttavia, alcuni repository sono così grandi che persino elencare i loro file può essere un esercizio impegnativo. Inoltre, alcuni repository contengono contenuti molto insoliti: file con righe enormemente lunghe, o file binari con estensioni insolite, e così via. I grandi repository sono anche difficili per la selezione dei contenuti e la pianificazione.

Il Copilot Workspace pone un limite alle dimensioni dei repository riportate da GitHub che possono essere analizzati. Se un repository supera questo limite, potresti vedere `Il Copilot Workspace potrebbe non essere utilizzato per analizzare <proprietario>/<repo> a causa di limitazioni di dimensione`.

Stiamo lavorando per migliorare la scalabilità del Copilot Workspace per gestire questi casi.

### Validazione

Il Copilot Workspace fornisce un terminale integrato per assistere con la validazione del codice. Stiamo lavorando costantemente su una serie di tecniche per migliorare le capacità di validazione del Copilot Workspace.

### Strumenti per sviluppatori

Attualmente il Copilot Workspace viene fornito come un'applicazione web con una modalità UX opinabile. Un principio di progettazione fondamentale è rendere questa esperienza disponibile in modo pervasivo, e valuteremo la possibilità di abilitare meccanismi di distribuzione alternativi in IDE o a riga di comando.

Stiamo anche esaminando l'ampliamento della gamma di strumenti per sviluppatori per integrarsi con l'esperienza web del Copilot Workspace.

## Problemi conosciuti

Di seguito sono elencati problemi specifici noti relativi alla versione attuale del Copilot Workspace.

### Il rilevamento dell'ambiguità può attivarsi troppo spesso

Il rilevamento dell'ambiguità nel Copilot Workspace talvolta può essere troppo sensibile e attivarsi anche quando il compito è chiaro. Stiamo lavorando per migliorare l'accuratezza del rilevamento dell'ambiguità nel Copilot Workspace.

### La scelta di una issue esistente richiede una migliore UX

Quando si sceglie una issue esistente su cui lavorare, l'esperienza utente non è così fluida come potrebbe essere, ed è più semplice regolare l'URL deep-link per il Copilot Workspace o tornare alla pagina dell'issue su GitHub e scegliere "Apri in Workspace".

### I commit dai PR di Workspace non sono attualmente firmati

I commit dai PR di Workspace non sono attualmente firmati. Stiamo lavorando per aggiungere questa funzionalità.

### Non c'è un pulsante 'Stop' durante la generazione delle descrizioni dei pull request

Non c'è un pulsante 'Stop' durante la generazione delle descrizioni dei pull request. Stiamo lavorando per aggiungere questa funzionalità.

### L'elenco di auto-completamento è talvolta posizionato in modo errato su mobile

Su mobile, l'elenco di auto-completamento è posizionato in modo errato durante l'aggiunta di un file al piano. È in corso una correzione per questo.

### Tempo di avvio del terminale

Stiamo lavorando attivamente per migliorare il tempo di avvio del terminale nel Copilot Workspace.

## Risoluzione dei problemi

### Risoluzione dei problemi con le Organizzazioni

- **Stai accedendo a un'organizzazione che deve approvare le app OAuth**. Come parte del login, autorizzi l'app OAuth in varie organizzazioni, a seconda delle politiche dell'organizzazione riguardo alle app OAuth. Puoi richiedere l'accesso e l'organizzazione può approvare l'app OAuth. Se hai bisogno di richiedere nuovamente l'accesso o revocare qualsiasi accesso, puoi [controllare lo stato della tua connessione con l'app OAuth](https://github.com/settings/connections/applications/903eccd8a9d2ff50288f).

- **Anche se sembri avere le credenziali di autorizzazione corrette, l'organizzazione `github` ha abilitato restrizioni di accesso alle app OAuth, il che significa che l'accesso ai dati di terze parti è limitato**. Questo perché un'organizzazione limita le app OAuth. Alcuni tentativi di autorizzazione per le organizzazioni potrebbero fallire se l'organizzazione non consente affatto le app OAuth. Questo può influenzare anche l'accesso ai repository pubblici nelle organizzazioni che negano l'accesso alle app OAuth.

- **Risorsa protetta dall'applicazione SAML dell'organizzazione. Devi concedere al tuo token OAuth l'accesso a questa organizzazione**. Potresti essere loggato in un'organizzazione con controllo SAML, ad esempio Microsoft. Dovresti
  1. Disconnetterti dal Copilot Workspace.
  2. Passare attraverso l'autenticazione SAML nel browser guardando, ad esempio, un repository dell'organizzazione.
  3. Quindi riaccedere al Copilot Workspace.

### Risoluzione dei problemi con i Repository Privati

- **Non puoi accedere a un repository privato nel tuo account**. Dopo il login dovresti poter accedere ai tuoi repository privati personali a meno che tu non abbia rimosso l'accesso per l'app OAuth. Se incontri problemi, è possibile che tu sia atterrato nel Copilot Workspace tramite un link di condivisione e abbia solo dato privilegi di repository pubblici. Dovresti disconnetterti e riconnetterti e questo dovrebbe ripristinare l'accesso. In caso contrario, dovresti [controllare lo stato della tua connessione con l'app OAuth](https://github.com/settings/connections/applications/903eccd8a9d2ff50288f).

### Risoluzione dei problemi con i Codespaces

- **Non è stato possibile determinare il proprietario a pagamento per un nuovo codespace, il repository potrebbe non essere utilizzato per un codespace**. L'app OAuth di CW non è installata nell'organizzazione del proprietario a pagamento.