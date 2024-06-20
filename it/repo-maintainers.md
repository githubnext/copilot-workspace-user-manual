# Spazio di lavoro di Copilot per i manutentori dei repository

Lo spazio di lavoro di Copilot può assisterti come manutentore di un repository in diversi modi:

1. Lo spazio di lavoro di Copilot può aiutarti a esplorare soluzioni potenziali per i problemi.
2. Lo spazio di lavoro di Copilot può aiutarti a generare schizzi di soluzioni per i problemi per i potenziali contributori, abbassando la barriera di accesso.
3. Lo spazio di lavoro di Copilot può aiutare a promuovere una cultura in cui i creatori di problemi lasciano note aggiuntive utili su come risolvere i problemi, da utilizzare sia dai contributori che dagli assistenti AI.

Ad esempio, quando viene aperto un nuovo problema nel tuo repository, puoi utilizzare lo spazio di lavoro di Copilot per generare uno schizzo di una soluzione al problema. Puoi quindi utilizzare il pulsante "Condividi" per pubblicare questo schizzo nel thread del problema, con commenti aggiuntivi su quanto utile ritieni che sia e dove potrebbe aver bisogno di miglioramenti. Questo può aiutare i potenziali contributori a comprendere meglio il problema e fornire un punto di partenza per il loro lavoro.

Allo stesso modo, quando viene aperto un nuovo problema, puoi chiedere al contributore di creare una sessione di Copilot Workspace per il problema. Questo potrebbe aiutare il contributore a comprendere meglio il problema e fornire un punto di partenza per il loro lavoro. Puoi anche includere questa guida nel modello di problema per il tuo repository, assumendo che i tuoi utenti abbiano accesso a Copilot Workspace. Puoi anche chiedere ai contributori di lasciare note aggiuntive nella sessione di Copilot Workspace, che possono aiutare i futuri contributori e gli assistenti AI a comprendere meglio il problema.

## Limitare l'uso di Copilot Workspace nel tuo repository

È possibile che i contributori indisciplinati utilizzino eccessivamente la generazione di codice assistita dall'IA. Per questo motivo, diamo ai manutentori dei repository l'opzione di disabilitare l'uso diretto di Copilot Workspace per la creazione di pull request e/o commenti sui problemi nei loro repository.

Per disabilitare la creazione diretta di pull request utilizzando Copilot Workspace, crea un file `.github/copilot-workspace/policy.json` nel ramo predefinito del repository contenente il seguente contenuto:

```json
{
  "allowPullRequests": false
}
```

Per disabilitare l'uso di Copilot Workspace per generare direttamente commenti sui problemi che contengono collegamenti alle sessioni di Copilot Workspace, aggiungi il seguente contenuto al file `policy.json`:

```json
{
  "allowComments": false
}
```

Gli utenti di Copilot Workspace saranno comunque in grado di:

- creare collegamenti di condivisione alle sessioni di Copilot Workspace e incollarli nei commenti sui problemi
- fare push a nuovi rami nel tuo repository (se hanno accesso in scrittura)
- fare push a nuovi rami nei fork del tuo repository
- creare manualmente pull request da rami
- utilizzare Copilot Workspace per generare frammenti di codice e file per il proprio utilizzo nei propri pull request e commenti sui problemi nel tuo repository.