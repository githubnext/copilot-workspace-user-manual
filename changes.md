## 📅 13 September 2024

### Features / Enhancements

* **VS Code session continuation** - We've created a new VS Code extension, which allows you to resume CW sessions within your editor. This allows you to start tasks from the CW web app/PWA, and after feeling good about the implementation, finish the code off from the comfort of your fully-configured dev environment (e.g. using your favorite extensions, color theme, keybindings, etc.) 🤗

   Additionally, this extension allows you to debug and run arbitrary client/desktop projects (e.g. mobile apps, Chrome extensions, etc.), without needing to push/pull the session's code to an intermediate branch. This works because the VS Code extension supports bi-directional file syncing with the CW service/web client. And so as you make changes in one client, they're immediately available in the other. Collectively, this allows you to start and finish work from whichever client is most convenient 😎

     <img src="https://github.com/user-attachments/assets/5ae9c6fb-c4de-4f4e-b37a-83b93e373c74" width="700px" /><br />
     
     > Note: This extension is very early, and therefore, we're not publishing it to the VS Code marketplace just yet. So if you'd like to give it a try and send us feedback, hit us up on the [GitHub Next Discord server](https://gh.io/next-discord) and we'll send you the VSIX. 
     
* **Incremental plan revision** - When you perform a NL revision (using the pretty input bar at the bottom 💙), the plan is now updated incrementally, as opposed to being completely regenerated. This not only makes it faster to perform iterations, but it also makes it clearer what did and didn't change as a result of your request. To get a sense for how much nicer this feels, check out the following demo 😻

     <img src="https://github.com/user-attachments/assets/155e0f56-2707-44dc-98f4-9f704b119496" width="800px" />

* **Improved task context** - The `Task` panel now includes an `Additional context` footer, which is visible when you open an issue (that has comments), or when you're working on a project that includes repository-wide instructions (e.g. a `.github/copilot-workspace/CONTRIBUTING.md` file).

   <img src="https://github.com/user-attachments/assets/2a8494fd-adcb-48a6-9414-658b72e62ad2" width="500px" />
     
   This is helpful, because it provides visibility into the external context that will be taken into account when analyzing/planning your task. Additionally, it lets you better predict and control the outcome of your session. For example, if you see a `Repository instructions` context item, then you can click it and immediately see the contents of the file (e.g. so you can know what it defines). And if you're working on an issue, that has comments you don't want included (e.g. becuase they're just "conversational noise"), then you can click the trash can icon next to them, and remove them consideration.

* **New specification UX** - In order to simplify the CW workflow, we're removing the `Specification` panel from the timeline, and introducing it as optional context to the `Task`. That way, if your task description already defines the sufficient details for your intent, then you can jump straight to planning. However, if you'd like CW to help expand/ellaborate/explore on your description, then you can ask it to add a spec, and then treat that as additional input to the plan 🚀 (along with any comments and repo-wide instructions).

   Since this is a noticeable change, we're initially introducing it as an opt-in setting, which you can enable via the `Move specficiation to task panel` option in the `Experiments` dialog. When enabled, you'll see an `Add specification` button in the `Additional context` section of the `Task` panel. When you click that, it will generate the spec as usual, and then display a `Specification` entry in the context section for the task. If you click this, it will open the spec as a file tab, which let's you edit, revise, or regenerate the content. But with a much nicer, and full-screen view ⭐

   <img src="https://github.com/user-attachments/assets/41b2864a-3b9f-45e0-a62e-071b3b9a6412" width="800px" />

* **Planned file placeholders** - After a plan has been generated, the `Files changed` section now immediately displays placeholders for all of the to-be-implemented files. This helps clarify the state you're in (i.e. there are files that are "planned", but not implemented), and creates a stronger association between the plan and the code.

     Additionally, the new `Planned` placeholders contain a delete icon, which let's you quickly delete a file from the plan. This is useful when using CW on mobile, and you want to delete a file from the implementatino, without needing to switch back to the timeline view in order to do it.

     <img src="https://github.com/user-attachments/assets/d1aa515d-2a5e-4802-9279-aa0a8a670a7e" width="600px" />

* **Branch switching** - You can now easily start a CW session against a new branch, by clicking the branch name label in the header bar. This will bring up a dialog with the list of all active branches, and when selected, starts a new task which targets that branch.

     <img src="https://github.com/user-attachments/assets/9635f9f1-d860-4279-8f16-03f9c9b7d10d" width="600px" />

* **Whitespace changes** - By default, whitespace changes are now visible within the file diff editors. This makes it easier to spot when Copilot (or you 😄) make any unintended changes to formatting, and can prevent any surprises after creating a PR. And if you'd like to turn this off (e.g. because a file has a lot of "whitespace churn"), you can click the settings icon in the `Files changed` section, and then select `Ignore whitespace changes`.

     <img src="https://github.com/user-attachments/assets/10d0d291-c17e-4240-adf6-b04ef552aa24" width="200px" />

## 📅 30 August 2024

### Features / Enhancements

* **Multi-file revision** - You can now select multiple files in the `Files changed` section, and perform an NL revision against them all. This makes it easier to make changes against multiple files, but in a very precise way (e.g. updating an implementation + associated tests, modifying a UI component and the places it's consumed).

     <img src="https://github.com/user-attachments/assets/cd46d775-fe3a-4c14-9f8a-6e89a0be25b6" width="500px" />

     To use it, simply click the target icon (in the file header) for all of the files you'd lke to revise. You can then type your intent, and when submitted, all selected files will begin updating their code based on your request.

* **File tabs** - You can now open a file in a full-screen tab, in order to view its contents more easily. This compliments the existing "stacked diffs" view (which is useful for gaining a high-level overview of the changes), and allows you to simultaneously browse a file, while also reading the spec/plan and/or using the terminal (which wasn't possible using the file explorer modal).

   <img src="https://github.com/user-attachments/assets/be60dc55-79da-49f4-bda4-7aea2fc5b2b3" width="700px" />

     To use it, simply click the arrow icon in a file diff's header, which will open that file in a new tab. Additionally, if you click a file link in the task/spec/plan panels, or select the `Open file` menu item for a file in the plan, then the selected file will now open in a tab (as opposed to the file explorer modal).
  
     <img src="https://github.com/user-attachments/assets/0ec519b6-3859-46b7-a331-52123f549dae" width="500px" />

     Even cooler: the list of open files, and the currently active tab, are persisted as part of your session. So when you resume a session later, or share a session with others, the workspace will be in exactly the same place that you left it 💙 Check out [this example](https://copilot-workspace.githubnext.com/lostintangent/gitdoc/issues/77?shareId=910861ee-876e-428d-b25a-c388fa8cea84) to see what we mean.

* **URLs in repo-wide instructions** - You can now include URLs in a repo-wide instruction file (`.github/copilot-workspace/CONTRIBUTING.md`), and those URLs will be fetched and included in the context of the session. This makes it easy to augment your repo instructions with documentation, or other reference materials, that can help inform all tasks/issues performed against it.

* **Issue comments** - The `Issue` panel now displays how many comments the issue has (if any), and allows you to one-click navigate to them for more details. Copilot Workspace has always included issue comments as context for a session, but this change makes it easier to have visibility into when comments exist (since they may impact CW's understanding of the task).

   <img src="https://github.com/user-attachments/assets/29b27332-d30b-464f-9506-14af2684933d" width="500px" />

* **PR improvements** - We made a handul of improvements to the flow of creating and updating pull requests from Copilot Workspace. In particular...
  
   * The option to create a draft PR is now properly disabled, when working against repos that don't support them
   * When you update a PR, we no longer create a PR comment for the changes. We simply push a new commit with the specified (or generated) message
   * If you manually edit a file, we now automatically switch to `Unpushed` changes mode, when your session is continuing an existing PR (that way the diff view focuses on only net-new changes)

## 📅 23 August 2024

### Features / Enhancements

* **Repo-wide instructions** - You can now define instructions for Copilot Workspace, that will be automatically applied to every issue or task performed against a repository. This allows you to document policies, suggestions, and other important guidelines that may not be evident from the codebase, but should always be considered.

   For example, the following screenshot shows a `Proposed` spec that indicates the need to update the `CHANGELOG.md`, despite the issue not mentioning this requirement. This is because the [repo's  instructions](https://github.com/lostintangent/codeswing/blob/main/.github/copilot-workspace/CONTRIBUTING.md) define that all new features should include an entry in the changelog.

   <img src="https://github.com/user-attachments/assets/83770b9e-3a3c-4ca3-88a2-04677ad5ed5f" width="600px" />
   
   To start using this feature, simply create the following file in your repository: `.github/copilot-workspace/CONTRIBUTING.md`. As the name suggests, this file acts as contribution guidance for Copilot, and allows you to include any context you think will be helpful 🧠

   By enabling teams to codify common or required guidelines, we hope to reduce mistakes, repetition, and learning barriers for all developers working across a project 🙌

* **Terminal assist enhancements** - When you encounter an error in the terminal, and Copilot suggestions a change to the spec or plan, that suggestion will now be displayed as an editable diff of the spec/plan. This allows you to quickly understand what the suggestion is, and to easily tweak it as needed, before commiting the change.

  Additionally, if you encounter an error in the terminal that is trivial in nature, and therefore, doesn't justify an update to the spec/plan (e.g. lint errors, typos), then the terminal assistance will now suggest making direct edits to the neccessary files. For example, the following shows the suggestion after running a build, which failed due to a typo. Note that Copilot accurately recommends simply fixing the typo directly (as opposed to updating the plan):

  <img src="https://github.com/user-attachments/assets/92c89572-987a-44c8-a8e9-10a2ee79ffd3" width="600px" />

* **File explorer navigation** - The file explorer now supports filtering the tree view by a seach query. As you type, the file tree will be automatically filtered to the matching files, as well as the directories they're contained within. Additionally, directories are now annotated with a green or orange diff icon, to indicate when they contain an added or changed file (respectively). Collectively, these two enhancements should make it a lot easier to navigate codebases within CW (along with the existing support for go-to-definition in the editor).

  <img src="https://github.com/user-attachments/assets/b288601c-d244-4720-a0cf-247a7fcb4257" width="400px" />

* **File search on mobile** - You can now easily search the contents of a file on mobile, by tapping the magnifying glass icon in the file's header bar. This has always been possible on desktop, by pressing `CMD+F` within the editor. But this new button provides the same navigation ability, regardless what device you're currently working from 📱

  <img src="https://github.com/user-attachments/assets/127da4c4-68ba-4301-b440-9f15ef061110" width="300px" />

* **Sticky toolbar** - The `Files changed` toolbar is now "sticky", which means that it stays visible as you scroll through the implemented files. This ensures that you can expand/collapse the timeline, discard the implementation, or toggle between split/unified diff view, without needing to scroll to the top of the files list to do it (which was obviously pretty annoying!).

   <img src="https://github.com/user-attachments/assets/2b753dff-ee56-43c1-a165-89a5fb5e81ca" width="700px" />

## 📅 16 August 2024

### Features / Enhancements

* **File regeneration** - The file toolbar now includes a regenerate button, which allows you to ask CW to "try again" with implementing it. This can be useful if you've revised the plan through NL, and noticed that CW may have missed a detail. Or, if you'd like to ask it to get a bit more "creative" with its interpretation of your intent 🎨

  The `Specification` and `Plan` panels already had a regenerate button, and so this change ensures that in addition to editing/revising/undoing, you can regenerate every piece of content within the workspace.

  <img src="https://github.com/user-attachments/assets/c3470d4c-cfe5-4176-b116-12f8a83fdb18" width="500px" />

* **Desktop notification** - You can now opt-into getting a system notification whenever a CW session is finished implementing (and the page isn't currently visible). This is useful if you're implementing a large plan, and want to switch to another task while it's running. But then know as soon as it's ready for your review 🏃

   <img src="https://github.com/user-attachments/assets/7d285c40-16b0-40fd-a009-dbd72012ee76" width="300px" />
   
   To turn this on, simply click your avatar in the upper-right, select `Settings`, and then check the `Show notification after implementing` option. Your browser will ask for permission for CW to show notifications, and so make sure to approve that 👍

   <img src="https://github.com/user-attachments/assets/898162a8-5f32-426e-8080-8444d558e80f" width="300px" />

* **Improved code search** - As a follow-up to supporting web URLs in the task definition, we've introduced an improvement to the way we perform code search, when analyzing the details of your issues/tasks. Depending on the codebase/scenario, this allows us to better identify the right set of files to edit (across the entire repo). And ultimately, can improve the quality/success-rate of CW.

   We're still refining this enhancement. And so for now, you need to opt-into it by clicking the beaker icon in the header bar, and checking the `Use code search during task analysis` setting. If you get a chance to turn this on, and use CW for a while, then we'd [love to hear](https://gh.io/next-discord) if you notice any improvements 💙
  
   <img src="https://github.com/user-attachments/assets/ee6ddcb8-4f4c-4892-b76b-ae8ccfa783d8" width="400px" />

* **Task authoring** - The `Task`/`Issue` panels now match the authoring experience for other markdown editors across GitHub (e.g. issue descriptions, PR comments, etc.). In particular, instead of requiring you to explicitly put the task into "edit mode", or requiring you to explicitly save it in order to preview the content, the panels now provide two tabs that you can seamlessly switch between: `Write` and `Preview`.
  
   <img src="https://github.com/user-attachments/assets/03ad1ede-22d7-4358-addf-9198101b8909" width="500px" />

* **Issue/PR status** - The workspace header now indicates the status of the issue and/or PR associated with a session, by coloring the issue and PR icons based on whether they're open (green) or closed/merged (purple). This can make it easier to spot if you accidentally opened an issue/PR that has already been completed. At which point, you can work on something else! 🙌

   <img src="https://github.com/user-attachments/assets/5cbc5939-7ac3-48f8-bd50-ba0fc2d169fc" width="600px" />

## 📅 9 August 2024

### Features / Enhancements

* **External context** - When defining a task/issue, you can now include links to external references, and Copilot Workspace will use them as additional context when generating the spec, plan, and code. This makes it a _lot_ easier to express your intent, without having to copy & paste and/or summarize existing content (which can be non-trivial!). In particular, CW supports referencing the following types of assets:

   1. *Issues / Pull Requests* - If you reference an issue/PR by number (e.g. `#43`) or URL, then CW will take into account it's description and comments. Additionally, if you link to a specific issue/PR comment, then CW will focus it's attention on just that one. This allows you to use an existing discussion/feedback as context, or work on "umbrella issues" that aggregate a set of sub-tasks together. 
 
   1. *Repository files* - If you reference the URL of a file in a GitHub repository (that you have access to), then CW will include that in its set of prioritized references. Additionally, you can include a link to a specific line ([example](https://github.com/lostintangent/codeswing/blob/b40dbeb3dbf5f133121605c751e1fa7c7a6f67ec/src/extension.ts#L16)) or range of lines in a file ([example](https://github.com/lostintangent/codeswing/blob/b40dbeb3dbf5f133121605c751e1fa7c7a6f67ec/src/preview/layoutManager.ts#L53-L62)), in order to focus CW on that exact code. This allows you to use existing code as a source of inspiration (e.g. "Implement an auth provider just like the one in <URL>"), and help steer Copilot in a more precise direction.
 
   1. *Arbitrary web URLs* - If you reference a public web URL, then CW will fetch and use a summary of its content. Additionally, if you link to a specific fragment of a page (e.g. `#link-to-a-specific-heading`), then CW will extract and focus on just that section. This allows you to reference documentation/blog posts/tweets/etc. that can provide more recent and/or specific instructions of what you're trying to accomplish 💪
 
    > Note: This capability isn't enabled by default, and so if you'd like to give it a try, click the `Experiments` link in your avatar menu, and check either `Utilize linked issues, PR, and GitHub file links in analysis` and/or `Utilize referenced generic web content in analysis`.

* **NL revision** - After you implement a plan, Copilot Workspace now displays a natural language revision bar at the bottom of the `Files changed` section. This allows you to update the plan in complex and arbitrary ways, while remaining focused on reviewing the changes.

    <img src="https://github.com/user-attachments/assets/1f20f837-548f-4a33-9ec5-e07002c67f65" width="400px" />

    Additionally, if you'd like to revise a specific file, you can click the bullseye icon in the file's header, which will put the NL revision bar into "scoped file" mode.

    <img src="https://github.com/user-attachments/assets/74e393da-8dcf-4c17-809e-4306a3676178" width="400px" />

   Both of these changes are part of a larger theme to elevate/simplify the ability to iterate through natural language. And you can expect to see more improvements in this space in the coming weeks 👍 
  
* **Terminal repair improvements** - CW's terminal assistance can now perform updates to the plan, when you encounter an error that requires a code change. This can be helpful when a build/test/lint action fails, and you want Copilot to suggest a fix. While this capability is still early (and evolving!), we're excited to make steady progress towards a better workflow for automatically addressing errors.

* **Exit path improvements** - When you create a PR/branch/repo, CW no longer generates a commit description by default. That way you can decide if you'd like Copilot to write a message for you, or if you'd prefer to craft your own 💙

  Additionally, when you create a PR for a session that's associated with an issue, the PR dialog now includes a checkbox that allows you to indicate whether the code changes fix the issue or not. When checked, CW will insert a `Fixes #<number` into the issue description. Otherwise, it will insert a `Related to #<number>` (which is what it did previously).

  <img src="https://github.com/user-attachments/assets/a5b9c1e6-6f32-4b87-8de0-16336030f68f" width="400px" />

* **SVG preview** - When you implement or open a `*.svg` file, you can now preview a rendered version of its contents, by clicking the eyeball icon in its header. We previously introduced preview support for Markdown, and plan to continue adding support for other file formats in the coming weeks (HTML? 🤔)

    <img src="https://github.com/user-attachments/assets/d8229ba0-c373-4ff6-875a-677b0b5414d1" width="500px" />

* **Sessions + Settings** - The user menu (that you get to by clicking your avatar in the upper-right) now includes two new items:

   * `Your sessions` - This navigates you to the [CW dashboard](https://copilot-workspace.githubnext.com), so you can see your recent/bookmarked/completed sessions. We got feedback that folks weren't discovering the dashboard, and so we wanted to make this a bit more discoverable (since it's super useful!)

      <img src="https://github.com/user-attachments/assets/28992503-8f08-4fde-bb7c-f840fe0471f7" width="200px" />

   * `Settings` - This opens a dialog with some optional user settings that can be enabled/disabled. To start, this dialog includes the existing options to automatically start a Codespace on session start/implement. But we also introduced a new setting called `Collapse timeline on implement`, which as the name implies, allows you to automatically collapse the left-side panel after implementing.
   
     When paired with the new NL revision bar, this setting allows you to enter a sort of "zen mode" for Copilot Workspace, where once you're happy with the plan, you can focus your entire screen on reviewing and revising the code 🚀
 
     <img src="https://github.com/user-attachments/assets/2a22900a-2950-4311-a072-7c07ce4fbfbc" width="400px" />

* **Renamed files** - Renamed files are now collapsed by default in the `Files changed` section. This makes it easier to focus your attention on new and changed code, while simply seeing the presence of renamed or deleted files. If a file is both renamed + changed, then it won't be collapsed post-implement, so you can properly review its changes.

    <img src="https://github.com/user-attachments/assets/fd3cd39d-6466-4185-8693-aad8a4b9c1d1" width="400px" />

* **Dark mode editor** - The code editor is now properly themed for users with a dark mode system setting. The editor's background was previously a medium greyish color, and now it's black 🖤  

* **Usage quota increase** - Due to popular demand, we've increased the daily usage quota again. That way, the folks that are using CW for many tasks every day, can keep sending us amazing feedback 🙏

## 📅 2 August 2024

### Features / Enhancements

* **Terminal error assistance** - When you run a command in the terminal, and it fails (!), the lightbulb button will now turn red. This indicates that Copilot Workspace is aware of the error, and is ready to help you fix it 💪

   <img src="https://github.com/user-attachments/assets/e7f6b848-689c-42aa-aefa-e22b5c189ddf" width="600px" /><br />
  
   If you click on the lightbulb in this state, the terminal assistance UI will pop-up, and automatically generate a suggestion for how to address the issue. If the suggestion looks right, you can one-click accept it. Otherwise, you can refine the help instructions, or tweak the generated terminal command, to steer Copilot in the right direction.

   <img src="https://github.com/user-attachments/assets/cd439128-b1d7-4288-aa85-d57baedcc341" width="600px" />

   This experience can help you perform project and environment setup, correct your usage of CLI tools (seriously, who can remember all these args?), and even suggest modifications to the spec/plan. Over the coming weeks, we'll continue refining this capability even further, to ensure that debugging and repairing build/test/etc. errors is as simple and delightful as possible 🙌
  
* **Recent repositories** - When you visit the [Copilot Workspace dashboard](https://copilot.workspace.github.com), the `Recent` tab now displays a section at the top called `Recent repositories`. This provides a list of your five most recently-active repos, and allows you to start a new task for them in a single click. When paired with the CW PWA, this makes it simple to begin/resume work using Copilot Workspace, without needing to create an issue, or search for the desired repo 🚀

  <img src="https://github.com/user-attachments/assets/2d633362-b6d5-45ab-96d8-a816ec4a6e19" width="700px" />

* **Implementation panel re-design** - The `Implementation` panel has been removed from the timeline, in favor of three UX enhancements, which _dramatically_ improve the usability of CW on mobile and in fullscreen-mode:

   1. The "exith path" button has been moved to the upper-right corner of the workspace toolbar. This ensures that it's clear how to complete a task, regardless what state your workspace is in 👍

      <img src="https://github.com/user-attachments/assets/efe72ff9-b18d-4e5a-a94d-3020e61e395e" width="400px" />

   2. While an implementation is in-progress, the status indicator and stop button are now displayed at the bottom of the `Files changed` section. This ensures you can see/control the implementation at any-time, as opposed to just when you have the timeline opened + scrolled to the bottom.
 
      <img src="https://github.com/user-attachments/assets/417e1f91-7bb7-43d3-bbdf-f57122d3d5bb" width="400px" />

   3. The "discard all files" button has been moved to the left of the `Split | Unified` toggle in the `Files changed` section. That way, if you're reviewing code, and decide you want to try another approach, you can clear the session directly from there.

      <img src="https://github.com/user-attachments/assets/2e69bf1d-dff3-4475-b0d1-d256010e8fe0" width="600px" />

* **List organization** - The spec and plan can now be fully re-organized, by clicking on the `...` menu for any sub-step, and choosing `Move item up` or `Move item down`. This won't impact the code generation in any way, and so you can feel free to order things however feels best/most intuitive to you. In particular, this can be useful when sharing a session with others, and you want to curate the spec/plan a bit for improved readability.

    <img src="https://github.com/user-attachments/assets/71ad72b2-5c1a-482c-800e-d6e4420c2c16" width="400px" />

* **Switching branches** - If you're working on a CW session, and realize you'd like to build upon a different branch, you can now click the `New Session` button, and select `Select a branch`. This will display a dialog with a list of the current repo's branches, and let you start a new ad-hoc task for the specified branch.

   <img src="https://github.com/user-attachments/assets/ec01d52b-526a-400c-a200-1ef4946fff00" width="400px" />

* **Terminal status** - The terminal icon (in the workspace toolbar) now displays a green dot whenever the terminal is connected. Now that CW auto-start's the terminal (for repos that don't include a `devcontainer.json`), this allows you to quickly see when the terminal is ready, so you can jump into it and start building/running code.

   <img src="https://github.com/user-attachments/assets/ccffd7a9-ba10-4da7-a025-1df765c334fb" width="400px" />
  
* **Experiments** - We periodically ship new features that are off by-default, since they're not quite ready for prime-time usage. And to make it easier to discover these features, and know when you have them on, the workspace toolbar now displays a beaker icon, that indicates how many experiments you have enabled.

   <img src="https://github.com/user-attachments/assets/d9fc7b50-d736-4d01-b3e1-5df5ce70b964" width="200px" />

   When clicked, this button brings up the `Experiments` dialog, which let's you try out our cutting-edge features (and then hopefully send us feedback!) 🔥

   <img src="https://github.com/user-attachments/assets/00af1eb1-dddf-4f9a-b82f-2a2097b2e649" width="400px" />

* **Docs/changelog** - To make it easier to access the CW docs and changelog (the thing you're currently reading!), the user menu (in the workspace toolbar) now includes links for the `User manual` and `What's new?`. That way you can keep up with the fun, and see how we're addressing your feedback. But without needing to remember/search for random URLs in our [GitHub Next Discord](https://gh.io/next-discord) 🤗

   <img src="https://github.com/user-attachments/assets/20de5b4e-346e-43a1-b5aa-fc43e7c5ee52" width="200px" />

## 📅 26 July 2024

### Features / Enhancements

* [Session continuation](#session-continuation)
* [Proceed to plan (task->plan)](#proceed-to-plan-task-plan)
* [Optimized file viewers](#optimized-file-viewers)
* [Spec/plan/code improvements](#specplancode-improvements)
  
### Session continuation

When you create a repository/PR/branch from Copilot Workspace, we now provide two options for your next step:

   * Starting an entirely new session (for the current repo/PR/branch)
   * Continuing to iterate on the current session (<ins>this is the new part!</ins> 🙌)   

   <img width="500px" src="https://github.com/user-attachments/assets/0d12972a-0b1d-4193-a930-535f88191d66"/><br />
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Just created a PR? Let's stay in the flow!_

This is a _significant_ change to the CW workflow, and has the following key benefits:

   * It allows you to share context across multiple commits, and consolidate logically-related changes within a single session
   * It allows you to correct post-commit mistakes or address feedback, without having to create follow-up CW sessions
 
In this sense, a CW session has evolved from being associated with a single commit, and is now logically associated with a branch, or chain of commits (for trunk-based development). This not only provides a lot more flexibility, but also, reflects the way that many developers wanted to use it. So we're excited to hear feedback!

<img width="400px" src="https://github.com/user-attachments/assets/c525f7e9-5b2b-45dc-a463-c4bc00810837" />

&nbsp;&nbsp;&nbsp;_A single CW session that lead to a PR + follow-up commit_

To make this multi-commit workflow even more fun...when you implement changes to a CW session (that was already pushed to a repo/PR/branch), you'll see a new `All | Unchanged` toggle button in the toolbar. This allows you to easily see the changes for the most recent iteration, as opposed to the changes for the overall session (which could now include multiple commits).

For example, if you have a CW session that you created a PR from, you could address PR feedback in that same session, quickly review those exact changes, and then confidently push an update to the PR (after running/testing it in the terminal!)

<img src="https://github.com/user-attachments/assets/7c89389a-7607-4ecc-ab7c-d140061fac44" width="800px" />

&nbsp;&nbsp;&nbsp;_Reviewing a readme update to an existing PR/CW session_

---

### Proceed to plan (task->plan)

When you start an ad-hoc task (opening a repo/PR/branch in CW, as opposed to an issue), you can now choose to skip generating a spec, and proceed directly to planning 🏃

<img src="https://github.com/user-attachments/assets/68ddf82d-26b5-4008-8222-7730b4f0afcc" width="600px" />

This helps CW feel a lot more optimized, for tasks that fall into the following categories:

* They're simple or precise in nature (e.g. `Rename the readme and translate it into German`)
* They're very well-defined/articulated (e.g. you write a paragraph/bullet points for the desired behavior)

In these cases, you likely don't need a summary of the task (because you just wrote it!), or help fleshing out the success criteria (because it's simple!). And in those instances, CW should now feel a lot faster, more lightweight, and easier to iterate 🚀

When you proceed directly to the plan, the `Specification` panel will still be displayed in the timeline, but it will be greyed out. And if you review the plan/code, and realize that you actually do need a bit more help investigating the task, then you can expand the `Task` panel and select `Add Specification`. That way the spec feels helpful if/when needed, but not required 👍

<img src="https://github.com/user-attachments/assets/5460d267-9769-48a3-9d76-5a37f83bed35" width="600px" />

_The CW timeline, with the `Specification` panel skipped, as we went from task->plan_

When you open an issue, CW continues to generate a spec as the first step, and doesn't give you the option to skip it. This is because issues are much more complex and ambiguous in practice, and therefore, they commonly benefit from the summarization/contextualization/thinking that the spec panel offers.

---

### Optimized file viewers

When you implement a plan, the `Files changed` list now includes two key improvements, to make it easier to review the code:

* Added/renamed files are displayed using a code editor (as opposed to a diff editor)
* Deleted files are automatically collapsed, so they don't clutter up the list

These changes also make it easier to edit code post-implement, since it's a lot nicer to write code in a standard editor vs. a diff editor. Especially with the help of CW's integrated language services + Copilot completions 💙

<img src="https://github.com/user-attachments/assets/7c868d7e-9a93-44d7-830e-63a30dc48490" width="600px" />

&nbsp;&nbsp;&nbsp;_Reviewing added/deleted files in a more natural/distraction-free way_

---

### Spec/plan/code improvements

We made numerous improvements to the way we generate the spec and plan, which should increase the quality a bit, for both larger repos and complex tasks. Additionally, we improved our code generation, so that it shouldn't delete unrelated code/comments when implementing a task. 

Finally, after enabling speculative decoding a few weeks ago, we've confirmed that it's stable enough to be on by default, and we've removed it from the `Experiments` panel. That said, we really appreciate all the great feedback from preview users, as we've continued to focus on improving the perf and quality of code generation 🙏

## 📅 12 July 2024

### Features / Enhancements

* **Markdown preview** - The file explorer and file diffs now include support for previewing Markdown content. This allows you to easily visualize how formatting with look (e.g. tables), when you're adding or editing docs.

   To use it, simply click the eye icon in the toolbar above the file. And over time, you can expect to see this icon appear for other file types, as we expand the preview support 🚀

  ![image](https://github.com/user-attachments/assets/f887fcb6-aaf6-4cba-b103-2c65e8eee839)

* **Codespaces auto-start** - We now automatically spin up a Codespace when you click the `Implement` button, as opposed to waiting until you open the terminal. This has the benefit of providing language services when reviewing code (e.g. hover info, error squiggles, go-to-definition), and making the terminal available as soon as you need it (e.g. to build the code after it's done implementing).

   ![image](https://github.com/user-attachments/assets/c3045665-ac26-41cf-9670-41bda8ebf518)

  _The little green dot indicates that you're session is enriched with language services, thanks to the auto-started Codespaces!_

   > Note: If a repo includes a `devcontainer.json` file, we don't currently auto-start the Codespace. We'll be adding support for that soon, but in the meantime, you can enable this by checking the `Spin up a codespace on start of implement` setting in the `Experiments` panel.

* **Increased usage quota** - In order to enable power users to get the most out of Copilot Workspace, we've doubled the daily usage quota. We were seeing lots of cases of folks hitting their limit, and so we're excited to unblock that, and let to AI-assisted creativity flow more freely 💙

### Bug Fixes

* **Exit path dialogs** - When you attempt to create a PR/branch/commit/repo from a Copilot Workspace session, the modal dialog will no longer automatically close when you click outside of it. That way you don't lose any work (e.g. a PR description) as a result of an accidental click/drag.

* **File explorer view toggle** - When you open a file in the file explorer, the `Code / Diff` toggle button now works correctly for added/edited files.

* **Invalid markdown in tasks** - If an issue/task includes invalid markdown for image references, Copilot Workspace is now resilient to that, and will simply render it as a broken image.

* **Resuming interrupted sessions** - If you accidentally close a session while it's in the middle of generating the spec, Copilot Workspace will now automatically resume spec generation once you re-open it.

## 📅 3 July 2024

This week's release is all about performance and quality. So when you use Copilot Workspace, things should feel **noticeably faster** overall. And also, a little bit smarter 😎 

| For example... | Before today | After today |
|-|-|-|
| Generating the <ins>code</ins> for [this session](https://copilot-workspace.githubnext.com/lostintangent/gistpad?shareId=3538ee23-b72f-4681-932a-b293e7418f82) | ~9.5 minutes | ~2 minutes (-7.5 minutes 🔥) |
| Generating the <ins>plan</ins> for [this session](https://copilot-workspace-staging.githubnext.com/altryne/openai-cookbook?shareId=7e46d597-7a68-41d2-b95c-66bdd2b8a4bc) |~33 seconds | ~15 seconds (>2x speed-up) |
| Generating the <ins>spec</ins> for [this session](https://copilot-workspace.githubnext.com/lostintangent/github-security-alerts/issues/10?shareId=7a84f35c-a612-4ea3-ae0f-2505786819ee) | ~15 seconds | ~6 seconds (>2x speed-up) |

What contributed to these gains?

* We migrated to GPT-4o, and made numerous improvements to spec/plan/code generation
* We introduced "speculative decoding" for code generation _(read below for details)_
  
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
