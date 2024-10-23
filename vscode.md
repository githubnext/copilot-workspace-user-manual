# GitHub Copilot Workspace VS Code extension

This Copilot Workspace VS Code extension allows you to use GitHub Copilot Workspace from the comfort of VS Code. Continue an existing session and edit and debug the proposed changes before creating a PR. Whether you use natural language to revise the plan or implementation, or edit files directly, you can use the full power of VS Code and its extension ecosystem all while syncing your edits to GitHub Copilot Workspace on the web.

This is currently an alpha extension and we will be rolling out enhancements to the extension in multiple phases.

1. **Continue on:** Browse your Copilot Workspace sessions and sync changes so you can edit and debug your application in VS Code locally, using one of the other [VS Code Remote extensions](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack), or in your own [Codespace](https://github.com/features/codespaces).

2. **[IN-PROGRESS] Update your workspace using AI**:

    - **Available:** Create, edit, and make natural language revisions to the plan and files in the plan.
    - **Planned**: Support for editing / adding information to the task, specification, and brainstorming, plus integration into chat.

3. **[FUTURE] Create new:** While not available now, you'll be able to create a new Copilot Workspace session in VS Code.


## Getting started

* [Quick Start](#quick-start)
* [Browsing Sessions](#browsing-sessions)
* [Managing Sessions](#managing-sessions)
* [Planing and Implementing](#plan-and-implement)
* [Natural Language Revisions](#natural-language-revisions)
* [Known Limitations](#known-limitations)

### Quick Start

1. If you haven't already, install [Visual Studio Code](https://code.visualstudio.com/).

1. Next, open a session [on the web](https://copilot-workspace.githubnext.com) that you'd like to continue working on in VS Code.

1. Click on the `VS Code` button in the session screen.

    ![VS Code icon in web UX](./images/vscode/upper-right.png)

1. Allow your browser to open the link in VS Code when prompted.

Follow the directions that appear in VS Code and make any selections when prompted by VS Code, and you'll be guided towards syncing the session to your local machine. That's it! 😎

Here is generally what you can expect:


1. VS Code will open (if it isn't already running), and you'll be prompted to install the Copilot Workspace extension and then open the URI. If the extension is already installed, you'll just be asked about the URI. Either way, open the URI.


    <img src="./images/vscode/ghcw-extn-install.png" title="Image of install VS Code extension and open URI notification" width="200px">

1. **[One time]** If you haven't signed in already, you'll be prompted to do so. Click the `Sign in` and complete the sign in process in the browser that opens.

    <img src="./images/vscode/ghcw-sign-in-notification.png" title="Image of sign-in notification" width="400px">


1. If the VS Code instance already has a folder with the related repository in it open, the extension will immediately start syncing the session locally. Otherwise you may be prompted to clone the repository or pick an existing folder with it in it.

    <img src="./images/vscode/ghcw-clone-or-open-folder.png" title="Image of clone or open folder notification" width="200px">

Once syncing has begun, your local repository will switch to GitHub Copilot Workspace tracking branch with a `ghcw-session` prefix as you can see in the status bar.

<img src="./images/vscode/ghcw-branch-example.png" title="Image of branch in status bar" width="250px">

Any edits make to the local files will be synced back to the web session. This allows you to use the full power of VS Code with GitHub Copilot Workspace.

However, if you picked a session that doesn't yet have an implementation, note that you'll be notified and have the opportunity to sync it locally later. Read on for more! 😎

<img src="./images/vscode/ghcw-uri-sync-not-enabled.png" title="Image of notification that sync was not enabled" width="400px">

## Browsing Sessions

To browse and manage your sessions, first click on the `GitHub Copilot Workspace` icon in the activity bar on the left side of the VS Code window.

<img src="./images/vscode/ghcw-activity-bar-icon.png" title="Image of status bar with GitHub Copilot Workspace icon" width="50px">

Even if you are not syncing a session locally you can browse through your sessions and view details. 

The session list includes a list of all of your sessions sorted by repository. If you do not see the session list, you can click the `Back to Sessions List` arrow in the `Task` view or use the **GitHub Copilot Workspace: Back to Session List** command from the Command Pallette (F1 or Ctrl/Cmd+Shift+P) to switch from the session details to the list.

Selecting a session from the session list will open up two views, which allow you to see the details of the `Task` and `Plan` for the session along with links to other information. Additionally, you can view the contents of implemented files, clicking on file in the `Plan` view.

<img src="./images/vscode/ghcw-overview.png" width="700px" />

When syncing is active, clicking on a file will open a local changes view of the synced contents. This view is editable and the changes will be synced back to the web session. If the session is not syncing, you will see the changes currently stored in the web session in a read-only mode.

You can also click on the `Open File` icon when hovering on an item to open the file (instead of the changes view) in a new tab in VS Code. You may be prompted to start syncing the session if you are not already.

## Managing Sessions

If your session has a plan with an implementation, you can sync the changes locally and edit them in VS Code. 

If the session you opened does not yet have an implementation, see [Planning and Implementing](#planning-and-implementing) for information on creating one.

### Stopping Syncing Changes

Since the quick start helped you get your session's changes syncing locally, let's cover how to stop syncing changes next.

If the session list is visible, you will see a green checkbox next to any session that is currently being synced. When hovering over this session, you will see a `Stop Syncing Changes` button. If the session details are visible for a session that is currently syncing, you will find this same button in the `Plan` view. Simply click this button in either location to stop syncing.

| Session List | Session Details |
| :--- | :--- |
| <img src="./images/vscode/ghcw-session-list-button.png" title="Image of session list" width="300px"> | <img src="./images/vscode/ghcw-session-details-button.png" title="Image of session detail" width="300px"> |

Alternatively, you can use the Command Palette (F1 or Ctrl/Cmd+Shift+P) and select the **GitHub Copilot Workspace: Stop Syncing Changes** command when you have the session details open.

You'll be switched back to the branch you where on when you started syncing changes, or **main** (or master) if nothing else. Since the changes you made locally are kept in sync automatically when syncing is active, the working tree is also cleaned out so you can easily jump in and out of sessions.

The next time you sync this same session, the session will go back to this tracking branch and the latest changes in GitHub Copilot Workspace - including your edits - will appear again.

### Syncing Changes Locally

As outlined in the quick start, you can always click on the VS Code icon in the GitHub Copilot Workspace web UI to start syncing changes locally. But you can also start syncing a session directly from within VS Code. However, note that only sessions with a [plan and an initial implementation](#planning-and-implementing) can be synced locally.

If session list is visible, hovering over a session that is not currently being synced (no green checkbox), will show a `Stop Syncing Changes` button. If the session details are visible instead, you will see this same button the `Plan` view if syncing is inactive. Click this button to start syncing changes for the session locally.

| Session List | Session Details |
| :--- | :--- |
| <img src="./images/vscode/ghcw-session-list-no-sync.png" title="Image of session list" width="300px"> | <img src="./images/vscode/ghcw-session-details-no-sync.png" title="Image of session detail" width="300px"> |

Similarly, you can use the Command Palette (F1 or Ctrl/Cmd+Shift+P) and select the **GitHub Copilot Workspace: Sync Changes Locally** command when you are in the detail view for a session to start syncing.

Next you may be prompted as follows:
1. If you do not currently have the repository for the session open in VS Code, you will be prompted to open a folder with the repository or to clone the repository in a fresh location.
1. If you do have the correct repository open, but the current working tree has uncommitted or changes, you'll be asked what you want to do with them.

Either way, once this is done, your local repository will be on a GitHub Copilot Workspace tracking branch with a `ghcw-session` prefix as you can see in the status bar.

<img src="./images/vscode/ghcw-branch-example.png" title="Image of branch in status bar" width="250px">

Any edits make to the local files will be synced back to the web session, so you do not need to worry about committing or loosing your changes.

### Deleting a session

To delete a session, click on the trash can icon next to the item in the session list or select **Delete Session** from the context menu that appears by clicking on the `...` button on the `Task` or `Plan` views in the session details.

Alternatively, you can use thee Command Palette (F1 or Ctrl/Cmd+Shift+P) and select the **GitHub Copilot Workspace: Delete Session** command when you are viewing a session's details.

## Planning and implementing
When the session details are visible (and you see the `Task` and `Plan` views), you can make changes to the plan and related implementation for the session.  

You will find a number of different options for editing the plan by clicking on the `...` button and using the context menu that appears in the `Plan` view, or when hovering on an item in the plan. However, the most common actions will appear as icons. Let's go through what each of these does.

| Button | Command | Description | Location(s) |
| :--- | :--- | :--- | :--- |
| <img src="https://raw.githubusercontent.com/microsoft/vscode-codicons/refs/heads/main/src/icons/project.svg"  width="24px" style="background-color:white;"> | Generate Plan | Generates a plan for the session and creates an inital implementation. | Plan view when no plan exists. Regenerate plan is available in the  `...` context menu afterwards. |
| <img src="https://raw.githubusercontent.com/microsoft/vscode-codicons/refs/heads/main/src/icons/sparkle.svg"  width="24px" style="background-color:white;"> | Implement Plan | Implement (or re-implement) the selected items in the plan view. | Plan view when plan exists, `...` context menu. |
| <img src="https://raw.githubusercontent.com/microsoft/vscode-codicons/refs/heads/main/src/icons/comment.svg" width="24px" style="background-color:white;"> | Revise Plan | Make revisions to the entire plan using natural language. Will automatically implement the requested changes. | Plan view when plan exists, `...` context menu. |
| <img src="https://raw.githubusercontent.com/microsoft/vscode-codicons/refs/heads/main/src/icons/sync.svg"  width="24px" style="background-color:white;"> | Sync Changes Locally | See Managing Sessions. Start syncing session changes locally. | Plan view if there is an implementation, and the session is not already syncing, `...` context menu. |
| <img src="https://raw.githubusercontent.com/microsoft/vscode-codicons/refs/heads/main/src/icons/sync-ignored.svg"  width="24px" style="background-color:white;"> | Stop Syncing Changes | See Managing Sessions.  Stops syncing session changes locally. | Plan view if the visible session is already syncing, `...` context menu. |

Generally these same commands are available in the Command Palette (F1 or Ctrl/Cmd+Shift+P) as well.

The `...` context menu is also available for items in the plan when you hover over them. This context menu will allow you to edit, move, delete, or change them when needed.

### Natural language revisions

You can also make revisions to the plan and implementation using natural language. This can be done for the entire plan as highlighted previously, or you can make targeted revisions to a file in the plan. You can even add a file to the plan and revise it in one shot.

To make file-level revisions easy, there are buttons in the upper-right of any open editor window for a file that can be part of the plan.

<img src="./images/vscode/ghcw-editor-actions.png" title="Image of editor actions" width="700px">


Here's a summary of where you can trigger these kinds of revisions:


| Button | Command | Description | Location(s) |
| :--- | :--- | :--- | :--- |
| <img src="https://raw.githubusercontent.com/microsoft/vscode-codicons/refs/heads/main/src/icons/comment.svg" width="24px" style="background-color:white;"> | Revise Plan | Make revisions to the entire plan using natural language. Will automatically implement the requested changes. | Plan view when plan exists, `...` context menu. |
| <img src="https://raw.githubusercontent.com/microsoft/vscode-codicons/refs/heads/main/src/icons/target.svg"  width="24px" style="background-color:white;"> | Revise File | Make targeted revisions to a file using natural language. Will automatically either add the file to the plan or add a step to an existing entry, and then implement the requested changes. | Plan file items (hover), Editor actions (upper-right), `...` context menu. |
| <img src="https://raw.githubusercontent.com/microsoft/vscode-codicons/refs/heads/main/src/icons/add.svg"  width="24px" style="background-color:white;"> | Add File to Plan | Adds the file to the plan, but makes no revisions to it. | Editor actions (upper-right), `...` context menu. |



