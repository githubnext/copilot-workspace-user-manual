# Change Log

## Released 9 May 2024

### Support for very large repositories

The first release of Copilot Workspace only worked up to limited repository size. These limitations are now largely lifted.

### Copilot Workspace will now process "delete" operations efficiently

Copilot Workspace will now process 'delete' operations more promptly, without making any unnecessary model invocations.

### Color the issue panel icon based on its state

When working with a closed issue or closed or merged pull request, the colors used in Copilot Workspace correspond to the colours used on GitHub, so the status of the issue/PR is more apparent.

### Fixes

* **Fix session reload for any session not on default branch of repository**. A user reported that Copilot Workspace could not reload sessions if they were associated with a non-default branch of a repository. This is now fixed.

* **Fix virtual keyboard overlaying editor**.  A fix was made for mobile where the virutal keyboard was obscuring some of the file editor.

* **Fix scroll to implementation**.  "Scroll to implementation" for a step of the plan was not working as expected. This is now fixed.

* **Numerous mobile layout fixes**. Many subtle but important fixes have been made to layout and interaction on mobile devices.

## Released 29 April 2024

* First release
