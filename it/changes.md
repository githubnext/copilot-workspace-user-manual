## 📅 14 giugno 2024

### Funzionalità / Miglioramenti

* **Suggerimenti dei comandi del terminale** - Per rendere più semplice l'uso del terminale (anche dal tuo telefono!), ora puoi descrivere un'azione che desideri eseguire (ad esempio, `Costruire il progetto`, `Elenca tutti i file markdown nella directory src`), e lasciare che Copilot suggerisca il comando shell corrispondente. E proprio come tutto il resto in Copilot Workspace, puoi modificare o rigenerare il suggerimento, per assicurarti di ottenere esattamente ciò che stai cercando 🚀

* **Compiti del Devcontainer** - Per semplificare l'esecuzione di comandi terminali comuni/ripetuti, un repository può ora definire `tasks` nel suo file `devcontainer.json`, che configurano i comandi shell necessari per eseguire una build, un test e/o un'esecuzione contro di esso ([esempio](https://github.com/lostintangent/contributor-gallery/blob/main/.devcontainer/devcontainer.json)).

   Quando definiti, questi compiti appariranno come pulsanti nel terminale integrato, in modo che la convalida delle modifiche al codice diventi semplice come un paio di clic. Ancora meglio, puoi modificare direttamente il file `devcontainer.json` all'interno di Copilot Workspace, e qualsiasi compito nuovo/modificato apparirà immediatamente 💪

* **Completamenti di Copilot su mobile** - Quando modifichi manualmente il codice dal tuo telefono, ora puoi utilizzare i completamenti di Copilot, grazie a un nuovo pulsante `Accetta` che appare ogni volta che un suggerimento di Copilot è visibile nell'editor.

   _Nota: Per utilizzare i completamenti di Copilot, è necessario selezionare l'opzione `Abilita Copilot e servizi di linguaggio negli editor` nel dialogo `Esperimenti` (disponibile facendo clic sul tuo avatar in alto a destra)._

* **Semplificazione dei compiti del branch** - Quando avvii un compito dalla pagina del repository GitHub, Copilot Workspace rispetterà ora il branch attualmente selezionato. In questo modo, puoi eseguire facilmente qualsiasi compito, contro qualsiasi branch 🔥

### Miglioramenti delle prestazioni

* **Decodifica speculativa** - Stiamo lavorando per migliorare il ciclo di feedback durante l'implementazione di un piano. E come parte di ciò, abbiamo introdotto un nuovo esperimento che dovrebbe velocizzare la generazione del codice di circa il 2,5x (!!). Presto lo attiveremo per impostazione predefinita, ma per ora puoi provarlo selezionando l'opzione `Usa decodifica speculativa per velocizzare l'implementazione` nel dialogo `Esperimenti` (a cui puoi accedere facendo clic sul tuo avatar in alto a destra).

* **Nuova sessione** - Quando fai clic sul pulsante `Nuova sessione` dal [dashboard di Copilot Workspace](https://copilot-workspace.githubnext.com), l'elenco MRU dei repository dovrebbe apparire immediatamente, poiché ora li pre-carichiamo/nascostriamo in anticipo. In questo modo, avviare una nuova sessione è 2-3 volte più veloce 🏎️

## 📅 24 maggio 2024

### Funzionalità / Miglioramenti

* **Supporto PWA** - Ora puoi installare Copilot Workspace sul desktop o sulla schermata principale del tuo cellulare, e ottenere un'esperienza più simile a un'app nativa (ad esempio, senza barra del browser, senza navigazioni indietro accidentali quando scorri a sinistra, migliore gestione della tastiera). Questo rende anche più facile tornare a compiti in corso, da qualsiasi dispositivo 💙

   Per iniziare, basta navigare al [dashboard di Copilot Workspace](https://copilot-workspace.githubnext.com), e quindi fare clic sul pulsante `Installa Copilot Workspace` nella barra di navigazione (su desktop), o fare clic su `Aggiungi alla schermata principale` dal menu di condivisione (su mobile).

   ![immagine](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/399ff59d-08b7-464a-9eed-cc5b1b3f2260)<br />
   &nbsp;&nbsp;_Lavorando su un compito in un bellissimo PWA di Copilot Workspace dal tuo desktop_ 😻

   &nbsp;&nbsp;<img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/ba6673bb-5fcb-4406-9975-e3c6aa7e68ef" width="400px" /><br />
   &nbsp;&nbsp;_Copilot Workspace comodamente posizionato nel dock di iOS_

* **Organizzazione del piano** - Ora puoi riordinare il piano spostando i file su o giù nella lista. E poiché la lista `File modificati` è anche ordinata secondo il piano, questo ti consente di organizzare meglio le sessioni sia per l'autorivisione, ma anche per curarle meglio quando le condividi con altri (come [questa](https://copilot-workspace.githubnext.com/lostintangent/gitdoc/issues/52?shareId=94b2e8df-15ea-41bd-b5f6-a1d9f5b376dc)!).

   Quando effettivamente implementi il piano, Copilot Workspace determinerà l'ordine più logico per apportare modifiche (ad esempio, creare funzioni/componenti condivisi, prima di modificare i loro consumatori). Quindi puoi organizzare il piano nel modo che ti sembra migliore, e avere la certezza che Copilot continuerà a fare la cosa giusta 🙌

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/a6b92ea0-f1b4-40c3-ac7c-59f4d89a1489" width="400px" /><br />
   &nbsp;&nbsp;_Aggiornamento dell'ordine dei file in un piano_

* **Immagine di anteprima sociale migliorata** - Quando condividi una sessione di Copilot Workspace su Slack/Teams/Twitter/SMS/etc. (come [questa](https://copilot-workspace.githubnext.com/lostintangent/gitdoc/issues/52?shareId=94b2e8df-15ea-41bd-b5f6-a1d9f5b376dc)!) l'anteprima ora visualizza un'immagine personalizzata per il repository e il compito a cui è associata _(per i repository pubblici)_. Include anche uno sfondo a velocità warp, poiché cliccare sul link è un po' come trasportarti in un altro spazio 🚀 (e ovviamente, è anche molto bello...)

   <img width="800px" src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/b6bab922-1dd2-40c5-825c-53a2c870cb15" /><br />
   _Condivisione di una sessione di Copilot Workspace con qualcuno su Slack_

### Risoluzione dei bug

* **Aggiunta manuale di file al piano** - Il dialogo `Aggiungi file al piano` ora rileva correttamente i percorsi dei file esistenti in tutti i casi, e semplifica l'aggiunta/modifica/eliminazione dei file dal piano.

* **Sincronizzazione dei file per sessioni di durata media** - Il sincronizzatore di file bidirezionale (che sincronizza le modifiche tra il Workspace e il terminale) ora sincronizza correttamente i file per le sessioni, quando l'`HEAD` del branch è progredito nel frattempo. Questo rende più facile lavorare sulle sessioni di Workspace durante il giorno, o attraverso i giorni, indipendentemente da quanto attivo sia il branch di destinazione 💪

## 📅 17 maggio 2024

### Funzionalità / Miglioramenti

* **Rivedi la specifica, il piano e il codice con linguaggio naturale** - Oltre a fare modifiche dirette alla specifica o al piano, ora puoi fornire istruzioni in linguaggio naturale su come desideri rivederle (ad esempio, `Aggiungi test per questa modifica`). Questa stessa capacità è disponibile anche nell'intestazione dei file modificati, che ti consente di rivedere il codice in base a un'istruzione specifica (ad esempio, `Sposta la logica di logging in una funzione separata`), oltre che modificarlo manualmente.

   ![immagine](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/883e48a1-265c-4b12-bfaa-4c70e4ec2317)

* **Completamenti di Copilot e servizi di linguaggio negli editor incorporati** - Abbiamo lanciato un'esperienza iniziale per ottenere informazioni sull'hover, sottolineature degli errori, go-to-definition e completamenti di Copilot direttamente dagli editor incorporati in Copilot Workspace. In questo modo puoi individuare rapidamente i problemi da risolvere, navigare facilmente nelle modifiche al codice, o apportare modifiche manuali, ricevendo l'assistenza di Copilot che conosci e ami 💙

   ![immagine](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/1fd21aa6-028c-44c7-ac9e-3fa55249c914)

   Ecco alcune cose da tenere presente riguardo a questo miglioramento:

   * Non è attivo per impostazione predefinita, quindi se desideri provarlo, devi fare clic sul tuo avatar in alto a destra, selezionare `Esperimenti` e quindi spuntare l'opzione `Abilita Copilot e servizi di linguaggio negli editor`.
   * I servizi di linguaggio (informazioni sull'hover, sottolineature degli errori, go-to-definition) attualmente supportano solo JavaScript/TypeScript, Python e Go. Ma arriveranno più lingue!
   * Il supporto per i completamenti di Copilot richiede un abbonamento attivo a Copilot. Se non ne hai uno, semplicemente non vedrai il "testo fantasma" nell'editor, ma potrai comunque utilizzare i servizi di linguaggio descritti sopra.

* **Persistenza del layout UX** - Quando riduci i file modificati e/o minimizzi la timeline, lo stato UX è ora correttamente conservato per la sessione. In questo modo, quando torni a una sessione in seguito, puoi riprendere esattamente da dove avevi lasciato. Oppure se condividi uno snapshot con qualcun altro, puoi curare l'UX in modo che appaia esattamente come desideri che lo vedano 🚀

   ![immagine](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/529c4aef-19ca-47b1-8d07-47bd6eab799b)

* **Indicatore di avanzamento ridisegnato per l'implementazione dei file** - Quando un file è attualmente in fase di implementazione, ora visualizziamo una barra di avanzamento sotto di esso per visualizzare meglio lo stato della generazione del codice. Inoltre, quando un file esistente viene modificato, mostriamo correttamente il delta delle modifiche al codice che sono state aggiunte.

   ![immagine](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/b58a8c2a-24b7-4cf3-84fb-46a9c4b81daa)

   ![immagine](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/f725a6ca-2a31-4603-b602-d88c9736c8f8)

* **Miglior revisione del codice su mobile** - Quando visualizzi una sessione multi-file su un dispositivo mobile, ora puoi fare clic su un file implementato per visualizzare le modifiche in un editor a schermo intero, e quindi passare facilmente agli altri file che sono stati modificati.

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/3d04c431-b61c-4e53-86fd-723c2fd9439a" width="400px" />

* **Il "topic" ora rende il markdown** - La domanda/compito che viene visualizzato nella parte superiore del pannello `Specifiche` è ora visualizzata correttamente quando include il markdown. In particolare, è comune che includa i backticks quando la definizione del compito si riferisce a un simbolo che li utilizza.

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/92ee8afc-1f95-4d5d-8ed5-dfcb6bcff14c" width="500px" />

* **Aggiungi file modificati manualmente al piano** - Oltre a generare modifiche al codice con l'IA, Copilot Workspace ti consente di modificare manualmente i file attraverso il suo esploratore di file e/o il terminale integrato. E per rendere più facile includere questi file modificati manualmente nel piano (ad esempio, per poter fare ulteriori iterazioni assistite dall'IA su di essi), ora includono un pulsante `+` nella barra dell'intestazione, che ti consente di aggiungerli al piano con un solo clic.

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/baa3c855-6686-4869-8405-372d2251d2fd" width="700px" />

* **I link di condivisione ora includono il repository e il titolo nella loro anteprima** - Se condividi un link di sessione con qualcuno tramite Twitter, Slack, Teams, SMS, ecc., l'anteprima che viene visualizzata includerà ora correttamente il repository a cui è associata la sessione e il titolo della sessione. In questo modo, sarà un po' più chiaro cosa stai condividendo, prima che effettivamente clicchino.

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/a616f9bf-5220-4301-b633-d3f24fcc787a" width="500px" />

* **Messaggi di stato migliorati per i pannelli** - Ogni volta che generi/rigeneri/revisioni la specifica/il piano, o implementi file, questi passaggi ora mostrano messaggi di stato più utili.

## 📅 9 maggio 2024

### Funzionalità / Miglioramenti

* **Supporto per repository molto grandi** - La prima versione di Copilot Workspace funzionava solo fino a una dimensione di repository limitata. Questi limiti sono ora in gran parte superati.

* **Copilot Workspace elaborerà ora le operazioni di "eliminazione" in modo efficiente** - Copilot Workspace elaborerà ora le operazioni di 'eliminazione' più prontamente, senza effettuare invocazioni di modelli non necessarie.

* **Colora le icone dei pannelli `Issue` e `Pull Request` in base al loro stato** - Quando apri un problema o una pull request all'interno di Copilot Workspace, indicheremo ora lo stato del problema/PR, utilizzando gli stessi colori di GitHub.com: aperto (verde), completato/fusione (viola), chiuso (rosso), e chiuso come non pianificato (grigio). In questo modo, lo stato del problema/PR sarà immediatamente chiaro 👍

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/1f127b54-a697-4594-8a0f-946dfb47b06b" width="600px" />

   *Apertura di un problema chiuso come completato*

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/1f9a0ea6-bf6f-4f1e-961c-107f27dbb12c" width="600px" />

   *Apertura di una pull request che è stata chiusa*

### Risoluzione dei bug

* **Risoluzione del ricaricamento della sessione per qualsiasi sessione non sul branch predefinito del repository**. Un utente ha segnalato che Copilot Workspace non poteva ricaricare le sessioni se erano associate a un branch non predefinito di un repository. Questo è ora risolto.

* **Risoluzione sovrapposizione tastiera virtuale sopra l'editor**. È stata apportata una correzione per il mobile in cui la tastiera virtuale oscurava parte dell'editor di file.

* **Risoluzione dello scorrimento all'implementazione**. "Scorrere all'implementazione" per un passaggio del piano non funzionava come previsto. Questo è ora risolto.

* **Numerose correzioni di layout per mobile**. Sono