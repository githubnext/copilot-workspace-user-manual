## 📅 14 June 2024

### Features / Enhancements

* **Terminal command suggestions** - In order to make it easier to use the terminal (including from your phone!), you can now describe an action you’d like to perform (e.g. `Build the project`, `List all markdown files in the src directory`), and let Copilot suggest the corresponding shell command. And just like everything else in Copilot Workspace, you can edit or regenerate the suggestion, to make sure you get exactly what you’re looking for 🚀

   <img src="https://github.com/user-attachments/assets/c21f9b37-3671-44a7-996c-3198a628d200" width="800px" />

* **Devcontainer tasks** - To make it simpler to run common/repeated terminal commands, a repository can now define `tasks` in its `devcontainer.json` file, which configure the shell commands needed to perform a build, test, and/or run against it ([example](https://github.com/lostintangent/contributor-gallery/blob/main/.devcontainer/devcontainer.json)).

   When defined, these tasks will appear as buttons in the integrated terminal, so that validating code changes becomes as simple as a couple clicks. Even cooler, you can edit the `devcontainer.json` file directly within Copilot Workspace, and any new/changed tasks will appear immediately 💪

   <img src="https://github.com/user-attachments/assets/9656109a-3ef5-4b09-a3cc-8b4bb7432c29" width="800px" />

* **Copilot completions on mobile** - When manually editing code from your phone, you can now make use of Copilot completions, thanks to a new `Accept` button which appears anytime a Copilot suggestion is visible in the editor.

   <img src="https://github.com/user-attachments/assets/8ca206e8-fde5-432f-9105-b0700e427f1a" width="400px" />

   _Note: In order to make use of Copilot completions, you need to check the `Enable Copilot and language services in editors` option in the `Experiments` dialog (which is available when clicking on your avatar in the upper-right)._

* **Simplified branch tasks** - When you start a task from the GitHub repository page, Copilot Workspace will now respect the currently selected branch. That way, you can easily perform any tasks, against any branch 🔥

   <img src="https://github.com/user-attachments/assets/4bdfd1e5-d2b4-412f-a7ef-e417ea08aa7c" width="700px" />

### Perf Improvements

* **Speculative decoding** - We're working to improve the feedback loop when implementing a plan. And as part of that, we've introduced a new experiment that should speed up code generation by ~2.5x (!!). We'll be turning this on by default soon, but for now, you can try it out by checking the `Use speculative decoding to speed up implement` option in the `Experiments` dialog (which you can access by clicking your avatar in the upper-right).

* **New Session** - When you click the `New Session` button from the [Copilot Workspace dashboard](https://copilot-workspace.githubnext.com), your MRU list of repositories should show up immediately, since we now pre-fetch/cache them in advance. That way, starting a new session is 2-3 faster 🏎️

## 📅 24 May 2024

### Features / Enhancements

* **PWA support** - You can now install Copilot Workspace on your desktop or mobile home screen, and have a more native app-like feel (e.g. no browser chrome, no accidental back navigations when swiping left, better keyboard handling). This also makes it easier to jump back into in-progress tasks, from any of your devices 💙

   To get started, simply navigate to the [Copilot Workspace dashboard](https://copilot-workspace.githubnext.com), and then either click the `Install Copilot Workspace` button in the navigation bar (on desktop), or click `Add to Home Screen` from the share menu (on mobile).

   ![image](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/399ff59d-08b7-464a-9eed-cc5b1b3f2260)<br />
   &nbsp;&nbsp;_Working on a task in a beautiful Copilot Workspace PWA from your desktop_ 😻

   &nbsp;&nbsp;<img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/ba6673bb-5fcb-4406-9975-e3c6aa7e68ef" width="400px" /><br />
   &nbsp;&nbsp;_Copilot Workspace nestled comfortably on the iOS dock_

* **Organizing the plan** - You can now re-order the plan by moving files up or down in the list. And since the `Files changed` list is also sorted by the plan, this allows you to better organize sessions for both self-review, but also, to better curate them when sharing sessions with others (like [this](https://copilot-workspace.githubnext.com/lostintangent/gitdoc/issues/52?shareId=94b2e8df-15ea-41bd-b5f6-a1d9f5b376dc)!).

   When you actually implement the plan, Copilot Workspace will determine the most logical order to make edits in (e.g. creating shared functions/components, before editing their consumers). So you can feel free to organize the plan in whichever way feels best to you, and rest assured that Copilot will continue to do the right thing 🙌

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/a6b92ea0-f1b4-40c3-ac7c-59f4d89a1489" width="400px" /><br />
   &nbsp;&nbsp;_Updating the order of files in a plan_

* **Enhanced social preview image** - When you share a Copilot Workspace session on Slack/Teams/Twitter/SMS/etc. (like [this one](https://copilot-workspace.githubnext.com/lostintangent/gitdoc/issues/52?shareId=94b2e8df-15ea-41bd-b5f6-a1d9f5b376dc)!) the preview now displays a customized image for the repo and task it’s associated with _(for public repos)_. It also now includes a warp speed background, since clicking on the link is sort of like transporting you into another space 🚀 (and of course, it just looks cool...)

   <img width="800px" src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/b6bab922-1dd2-40c5-825c-53a2c870cb15" /><br />
   _Sharing a Copilot Workspace session with someone in Slack_

### Bug Fixes

* **Manually adding files to the plan** - The `Add file to plan` dialog now correctly detects existing file paths in all cases, and makes it easy to add/edit/rename/delete files from the plan.

* **File syncing for long-ish running sessions** - The bi-directional file syncer (that syncs changes between the Workspace and the terminal) now properly syncs files for sessions, when the `HEAD` of the branch has since progressed. This makes it easier to work on Workspace sessions throughout the day, or across days, regardless how active the target branch is 💪

## 📅 17 May 2024

### Features / Enhancements

* **Revise the spec, plan, and code with natural language** - In addition to making direct edits to the specification or plan, you can now provide natural language instructions for how you'd like to revise them (e.g. `Add tests for this change`). This same capability is also available on the header for changed files, which allows you to revise code based on a specific instruction (e.g. `Move the logging logic into a separate function`), in addition to editing it manually.

   ![image](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/883e48a1-265c-4b12-bfaa-4c70e4ec2317)

* **Copilot completions and language services in embedded editors** - We've shipped an initial experience for getting hover info, error squiggles, go-to-definition, and Copilot completions directly from the embedded editors in Copilot Workspace. That way you can quickly spot issues to fix, easily navigate the code changes, or make manual edits, while receiving the Copilot assistance you know and love 💙

   ![image](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/1fd21aa6-028c-44c7-ac9e-3fa55249c914)

   Here's a few things to note about this enhancement:

   * It isn't on by default, and so if you want to try it, you need to click on your avatar in the upper right, select `Experiments` and then check the `Enable Copilot and language services in editors` setting.
   * The language services (hover info, error squiggles, go-to-definition) currently only support JavaScript/TypeScript, Python and Go. But more languages are coming!
   * Support for Copilot completions requires an active Copilot subscription. If you don't have one, then you simply won't see "ghost text" in the editor, but you can still use the language services described above.
 
* **UX layout persistence** - When you collapse changed files and/or minimize the timeline, that UX state is now properly persisted for the session. That way, when you return to a session later, you can pick up exactly where you left off. Or if you share a snapshot with someone else, you can curate the UX to look exactly how you want them to see it 🚀

   ![image](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/529c4aef-19ca-47b1-8d07-47bd6eab799b)

* **Redesigned progress indicator for file implementation** - When a file is currently being implemented, we now display a progress bar underneath it to better visualize the status of the code generation. Additionally, when an existing file is being edited, we now properly display the delta of code changes that were added.

   ![image](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/b58a8c2a-24b7-4cf3-84fb-46a9c4b81daa)

   ![image](https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/f725a6ca-2a31-4603-b602-d88c9736c8f8)

* **Easier code review on mobile** - When viewing a multi-file session on a mobile device, you can now click an implemented file to view the changes in a full-screen editor, and then easily page between the other files that were edited.

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/3d04c431-b61c-4e53-86fd-723c2fd9439a" width="400px" />

* **The "topic" now renders markdown** - The question/task that is displayed at the top of the `Specification` panel is now rendered properly when it includes markdown. In particular, it's common for this to include backticks when the task definition refers to a symbol using them.

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/92ee8afc-1f95-4d5d-8ed5-dfcb6bcff14c" width="500px" />

* **Add manually edited files to the plan** - In addition to generating code changes with AI, Copilot Workspace allows you to manually edit files through its file explorer and/or the integrated terminal. And in order to make it easier to include these manually edited files in the plan (e.g. so you could do further AI-assisted iteration on them), they now include a `+` button in their header bar, which let's you one-click add them to the plan. 

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/baa3c855-6686-4869-8405-372d2251d2fd" width="700px" />

* **Share links now include the repo and title in their preview** - If you share a session link with someone via Twitter, Slack, Teams, SMS, etc. the preview that is displayed to them will now properly include the repository that the session is associated with, and the title of the session. That way, it's a little bit clearer what you're sharing, before they actually click it.

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/a616f9bf-5220-4301-b633-d3f24fcc787a" width="500px" />

* **Improved status messages for panels** - Whenever you generate/regenerate/revise the spec/plan, or implement files, those steps now display more helpful status messages.

## 📅 9 May 2024

### Features / Enhancements

* **Support for very large repositories** - The first release of Copilot Workspace only worked up to limited repository size. These limitations are now largely lifted.
  
* **Copilot Workspace will now process "delete" operations efficiently** - Copilot Workspace will now process 'delete' operations more promptly, without making any unnecessary model invocations.

* **Color the `Issue` and `Pull Request` panel icons based on their state** - When opening an issue or pull request within Copilot Workspace, we'll now indicate the state of the issue/PR, using the same colors as GitHub.com: open (green), completed/merged (purple), closed (red), and closed as not planned (grey). That way, the status of the issue/PR will be immediately clear 👍

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/1f127b54-a697-4594-8a0f-946dfb47b06b" width="600px" />

   *Opening an issue that's closed as completed*

   <img src="https://github.com/githubnext/copilot-workspace-user-manual/assets/116461/1f9a0ea6-bf6f-4f1e-961c-107f27dbb12c" width="600px" />

   *Opening a pull request that's been closed*

### Bug Fixes

* **Fix session reload for any session not on default branch of repository**. A user reported that Copilot Workspace could not reload sessions if they were associated with a non-default branch of a repository. This is now fixed.

* **Fix virtual keyboard overlaying editor**.  A fix was made for mobile where the virtual keyboard was obscuring some of the file editor.

* **Fix scroll to implementation**.  "Scroll to implementation" for a step of the plan was not working as expected. This is now fixed.

* **Numerous mobile layout fixes**. Many subtle but important fixes have been made to layout and interaction on mobile devices.

## 📅 29 April 2024

Initial release! 🚀
