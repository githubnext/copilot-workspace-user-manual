# Creazione di Repository da Modelli

Copilot Workspace ti consente di creare repository da modelli utilizzando il linguaggio naturale.

## Utilizzo di "Usa questo modello" da GitHub.com

Per creare un repository con Copilot Workspace, puoi navigare su GitHub.com in un repository modello e scegliere "Usa questo modello", come segue:

<img src="../images/create-repo-from-template.png" width=400 alt="Crea repository da modello"><br>*Creazione di un repository da un modello tramite Copilot Workspace*

Il compito si basa sulla descrizione del software da creare, oltre al README del repository modello. Puoi anche avviare questo tipo di compito creando una [nuova sessione](#using-new-session-on-the-dashboard). Una volta avviato un compito di creazione del repository, apparirà così:

<img src="../images/repo-task-timeline-representation.png" width=600 alt="Rappresentazione temporale del compito del repository"><br>*Il compito è etichettato come "Repository", e il pannello "Modello" indica il repository modello*

Copilot Workspace genererà quindi una specifica per il repository basata sulla descrizione che fornisci, un piano per crearlo e infine l'implementazione finale.

## Utilizzo di "Nuova sessione" sulla dashboard

Puoi anche creare un repository da un modello cliccando sul pulsante "Nuova sessione" nella [dashboard di Copilot Workspace](https://copilot-workspace.githubnext.com) e cercando un modello. Questo aprirà un nuovo compito nello spazio di lavoro dove potrai descrivere il software che desideri creare.

## Utilizzo dell'URL

Puoi attivare la modalità "Crea Repository" per qualsiasi URL di repository aggiungendo `?template=true` come parametro di query. Ad esempio:

https://copilot-workspace.githubnext.com/githubnext/hello-world?template=true

Per gli URL in ingresso, alcuni repository sono trattati come modelli per impostazione predefinita:

- Qualsiasi repository modello di GitHub
- Qualsiasi repository in un'organizzazione contenente `templates`, in maiuscolo o minuscolo, con trattino all'inizio o alla fine
- Qualsiasi repository con `-template`, `-scaffold`, `-starter` o `-boilerplate` nel nome, in maiuscolo o minuscolo, con trattino all'inizio o alla fine
