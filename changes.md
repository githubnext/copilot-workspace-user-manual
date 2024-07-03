## 📅 3 July 2024

This week's release is all about performance and quality. So when you use Copilot Workspace, things should feel **noticeably faster** overall. And also, a little bit smarter 😎 

| For example... | Before today | After today |
|-|-|-|
| Generating the <ins>code</ins> for [this session](https://copilot-workspace.githubnext.com/lostintangent/gistpad?shareId=3538ee23-b72f-4681-932a-b293e7418f82) | ~9.5 minutes | ~2 minutes (-7.5 minutes 🔥) |
| Generating the <ins>plan</ins> for [this session](https://copilot-workspace-staging.githubnext.com/altryne/openai-cookbook?shareId=7e46d597-7a68-41d2-b95c-66bdd2b8a4bc) |~33 seconds | ~15 seconds (>2x speed-up) |
| Generating the <ins>spec</ins> for [this session](https://copilot-workspace.githubnext.com/lostintangent/github-security-alerts/issues/10?shareId=7a84f35c-a612-4ea3-ae0f-2505786819ee) | ~15 seconds | ~6 seconds (>2x speed-up) |

What contributed to these gains?

* We migrated to GPT-4o by default, and made numerous improvements to spec/plan/code generation
* We introduced "speculative decoding" for code generation (read below for details)
  
### Speculative decoding

We [previously shipped](https://github.com/githubnext/copilot-workspace-user-manual/blob/main/changes.md#perf-improvements) an experiment called "speculative decoding", which provided a 2x+ speed-up on code generation. That experiment is now on by default, and is a key part of the boost you'll see when implementing a plan.

With this enabled, Copilot Workspace now predicts the "edit locations" within a file, as opposed to re-generating every line. This allows us to retain the stability of whole-file generation, but with a **dramatic improvement** in performance.

Additionally, to indicate when Copilot Workspace is predicting the next edit location (vs. editing code), the progress bar will display a "barber pole" overlay. That way, you know when it's thinking hard on your behalf ❤️

![image](https://github.com/user-attachments/assets/153095d2-8300-4703-8d0a-ae53ba2771fc)

### File copy operations

When a task/issue includes the need to copy a file, this should now work as expected. Previously, Copilot Workspace would incorrectly attempt to rename the existing file. And now, it will translate the copy operation into the creation of a new file, that includes a step for copying the contents of the originating file (along with any subsequent edits).

For example, here's a [sample session](https://copilot-workspace-staging.githubnext.com/githubnext/hello-world?shareId=a071696d-32e6-4428-9b0f-e09dbf61e1aa) that copies a file, and translates it's `console.log` messages into Japanese:

<img src="https://github.com/user-attachments/assets/27d81847-8934-4836-9b8e-95dfb7755f15" width="400px" />

## 📅 28 June 2024

### Features / Enhancements

* **Copilot completions and language services in embedded editors** - Support for rich language features (hover info, error squiggles, go-to-definition) and Copilot completions are now enabled by default. This was previously released as an opt-in experiment, and thanks to the amazing feedback from preview users, it's now ready for general usage 🎉 

   <img src="https://github.com/user-attachments/assets/077d072d-71fd-4c31-b038-5ac0c1499d22" width="800px" />
   
   A few things to note:
   
   * Copilot completions are supported in all languages, but the other editor features currently only support JS/TS, Python, and Go. We'll be introducing support for other languages soon, and so let us know which ones you'd like to see next 💪

   * The rich editing features are only enabled when a terminal/Codespace is attached to your session. So if you'd like to use them, either manually open the integrated terminal, or enable one of the `Spin up a codespace...` experiments. And in either case, you can tell that rich editing is "activated", because you'll see a cool little green dot in the upper-right of the `Files changed` section.

      <img src="https://github.com/user-attachments/assets/6c5a3d6e-e224-4994-8910-ee7ffcd6f802" width="300px" />
      
   * In addition to stabilizing the existing feature set, we've also expanded the editing experience quite a bit. So read on for details about that!
   
* **Auto-completion / signature help** - When editing code within Copilot Workspace, you'll now see auto-completion everywhere you'd expect. And also, when you call functions, you'll see the editor overlay that describes its signature details. This, along with the existing Copilot completions support, should make it a lot nicer to make any last minute tweaks, before sending out a PR 🚀

   <img src="https://github.com/user-attachments/assets/455678c5-b086-4b1b-a1a8-332d4d2ff99c" width="600px" />
   
* **Error squiggles on mobile** - When using Copilot Workspace from your phone, you can now place your cursor over an error squiggle in an editor, and correctly see the details of the issue. With this in place, we now have full parity for rich editing, between desktop and mobile 📱

   <img src="https://github.com/user-attachments/assets/19b8bece-2cb4-48c6-8209-79c56a344a41" width="400px" />

* **Go-to-definition for external dependencies** - When you perform a go-to-definition on a 3rd-party API (e.g. an NPM package), it will now correctly navigate to the corresponding type definition. That way, you can inspect the API surface for any dependencies, without needing to leave the workspace.

   <img src="https://github.com/user-attachments/assets/ebffffc3-acb0-426e-a5eb-ecd438fee658" width="600px" />
   
   _Note: This will only work once you've restored app dependencies from the terminal and/or if your repo includes a `devcontainer.json` file that does this automatically._

* **Copilot in Codespaces** - When you open a session in a Codespace, the [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and [Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) extensions are now automatically installed for you. That way, you can edit along with Copilot in the workspace, and then seamlessly continue doing that in a Codespace, without any additional setup.

   <img src="https://github.com/user-attachments/assets/8366d834-5249-480c-87e1-0335f66256d0" width="400px" />

* **Renaming files** - Copilot Workspace now understands when a file is being renamed, but doesn't need to be edited. And in those cases, it can perform the rename immediately, as opposed to AI-generating it's contents. This results in a big perf boost for plans that include simple renames, and is a follow-up to the optimizations we made for deleting files.

   <img src="https://github.com/user-attachments/assets/6b3aff5a-8f48-49ad-9328-89bb817634b0" width="700px" />

* **Session management** - You can now delete a session from within the workspace, by clicking the `New Session` button and selecting `Delete Session`. This was already possible from [the dashboard](https://copilot-workspace.githubnext.com), but this new entrypoint makes it easier to clean up sessions once you're done with them.

   <img src="https://github.com/user-attachments/assets/e32e052c-e5e9-4c5a-ab98-20f84cc6c489" width="400px" />

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
