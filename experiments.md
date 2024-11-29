# Experiments

Copilot Workspace is a technical preview and is under active development. This document lists some known issues and known areas where we'd like to make future improvements.

We will be doing ongoing continuous releases of Copilot Workspace during the technical preview, adding new features, new experiments and fixing bugs as we go. 

We greatly appreciate any [feedback](https://github.com/githubnext/copilot-workspace-user-manual?tab=readme-ov-file#feedback) on these experiments, as it helps us improve Copilot Workspace and make it more useful for you.

## Active experiments

There are several active "Experiments" available related to things we are working on. We invite you to activate these and will update this document with new experiments when they are available. These features aren't set in stone, and any feedback regarding them would be greatly appreciated.

### Use emoji in topic and explorations 😊

We are experimenting with a feature that allows Copilot Workspace to use emoji in the topic and explorations. Enable this using the "Use emoji in topic and explorations" feature in Copilot Workspace.

### Enable follow up 🔄

When working with large repositories that have complex inter-file dependencies, a simple change or refactoring can impact many other parts of the codebase (e.g., updating a shared method signature). While the plan does a great job of identifying the core changes needed for a task (the "primary edits"), it can sometimes miss transitive changes that are needed in response (e.g., updating callers of a changed function).

To address this, after implementing a plan, you can open the Commands tab and click the new Follow up button. This will perform a thorough, fine-grained check on your codebase and edits to see if any additional changes are required to complete your task. If any follow-ups are detected, it will edit the necessary files and add them to your existing implementation.


### Use summaries of images in the context 🖼️

We are experimenting with a feature that allows Copilot Workspace to use summaries of images in the context. This helps provide more relevant information and improve the accuracy of the generated specifications and plans. Enable this using the "Use summaries of images in the context" feature in Copilot Workspace.

### Allow file(s) to be attached as additional context 📎

We are experimenting with a feature that allows Copilot Workspace to allow file(s) to be attached as additional context. This helps provide more relevant information and improve the accuracy of the generated specifications and plans. Enable this using the "Allow file(s) to be attached as additional context" feature in Copilot Workspace.
