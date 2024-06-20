# Domande frequenti su AI responsabile

## Cos'è Copilot Workspace?

Copilot Workspace è una rielaborazione del ciclo interno dello sviluppatore. I punti focali dell'esperienza sono la selezione di un compito, l'espressione dell'intento e la collaborazione con l'IA verso una soluzione. Crediamo che questo possa ridurre drasticamente la complessità, migliorare la produttività e soddisfare gli sviluppatori, senza togliere gli aspetti dello sviluppo software che loro apprezzano di più, come la presa di decisioni, la creatività e il senso di proprietà.

## Cosa può fare Copilot Workspace?

Copilot Workspace riceve un compito di sviluppo da un utente, ad esempio, un problema su GitHub, e produce una specifica in linguaggio naturale del comportamento attuale del codice, un piano su come modificare il codice per completare il compito e infine le effettive modifiche al codice in tutti i file rilevanti nel repository. Ogni passaggio (compito, specifica, piano e implementazione) è modificabile dall'utente, consentendo all'utente di guidare l'IA per completare il compito nel modo migliore.

## Quali sono gli utilizzi previsti di Copilot Workspace?

Copilot Workspace è pensato per:

1. Accelerare gli sviluppatori di software, aiutandoli a effettuare modifiche al codice di piccola e media scala rapidamente e correttamente.
2. Ridurre l'energia di attivazione per gli sviluppatori nell'avviare i compiti, fornendo loro un punto di partenza generato dall'IA.
3. Aiutare gli sviluppatori esperti a lavorare con linguaggi di programmazione e framework sconosciuti.
4. Aiutare gli sviluppatori a contribuire a codebase sconosciute, ad esempio, a progetti open source.

## Come è stata valutata Copilot Workspace? Quali metriche vengono utilizzate per misurarne le prestazioni?

Copilot Workspace è stata valutata nei seguenti modi:

* Valutazioni offline. Abbiamo un corpus di compiti noti e un punto di ingresso che ci consente di eseguire Copilot Workspace su quei compiti in modalità headless. Quando apportiamo modifiche ai nostri prompt, passiamo a un modello diverso, ecc., eseguiamo quei benchmark e convalidiamo manualmente le modifiche alle uscite di Copilot Workspace. Se riscontriamo regressioni, iteriamo sui prompt fino a quando non ci sono più regressioni. Inoltre, abbiamo un set più ampio di benchmark estratti da GitHub e utilizziamo valutazioni guidate dal modello per garantire una qualità costante.
* Studi sugli utenti. A gennaio, abbiamo condotto una serie di studi sugli utenti con dipendenti di GitHub a cui abbiamo assegnato un compito standard e chiesto di completarlo utilizzando Copilot Workspace. Stiamo pianificando ulteriori studi sugli utenti come parte dell'anteprima tecnica.
* Utilizzo esteso all'interno del nostro team. Abbiamo utilizzato Copilot Workspace per costruire Copilot Workspace.
* Red teaming. Abbiamo preparato un insieme di prompt maliziosi e abbiamo eseguito Copilot Workspace in modalità headless su quei prompt. Successivamente, effettuiamo valutazioni guidate sia dall'umano che dal modello delle risposte dannose e, se le rileviamo, aggiorniamo i nostri prompt e filtri in modo che gli utenti non li incontrino.

## Quali sono i limiti di Copilot Workspace? Come possono gli utenti minimizzare l'impatto dei limiti di Copilot Workspace quando utilizzano il sistema?

Copilot Workspace non è sempre corretto. Gli utenti dovrebbero convalidare attentamente le sue uscite e non dovrebbero fidarsi ciecamente. Se gli utenti rilevano inesattezze nelle uscite di Copilot Workspace, abbiamo reso facile per loro modificare e correggere qualsiasi uscita generata dal modello. Abbiamo anche costruito strumenti di convalida, in particolare un terminale che consente all'utente di eseguire il codice generato in un ambiente sandbox. L'utente dovrebbe utilizzare questi strumenti per convalidare e correggere le uscite di Copilot Workspace.

## Quali fattori operativi e impostazioni consentono un uso efficace e responsabile di Copilot Workspace?

Copilot Workspace funzionerà meglio con linguaggi di programmazione e framework comuni e quando il linguaggio naturale è l'inglese.

Il codice generato da Copilot Workspace dovrebbe essere sottoposto agli stessi standard del codice scritto dall'uomo: dovrebbe essere sottoposto a revisione del codice, avere test automatizzati, essere analizzato da linters e analizzatori statici, ecc. Copilot Workspace può aiutare ad aggiungere test automatizzati ai PR in corso, contribuendo a migliorare la salute complessiva di un progetto software.

## Cosa dovrebbe fare un utente se incontra contenuti offensivi durante l'utilizzo di Copilot Workspace?

Si prega di segnalare eventuali esempi di contenuti offensivi a copilot-safety@github.com. Si prega di includere un link condivisibile in modo che possiamo indagare.