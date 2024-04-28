# Creating Repositories from Templates

Copilot Workspace allows you to create repositories from templates using natural langauge.

## Using "Use this template" from GitHub.com

To create a repository with Copilot Workspace, you can navigate to a template repository in GitHub.com and choose “Use this template”, like this:

<img src="images/create-repo-from-template.png" width=400 alt="Create repository from template"><br>*Creating a repository from a template via Copilot Workspace*

The task is based on the description of the software to create, plus the README of the template repo. You can also start this kind of task by creating a . Once started a create repository task looks like this:

<img src="images/repo-task-timeline-representation.png" width=600 alt="Repo task timeline representation"><br>*The task is labeled as “Repository”, and the “Template” panel indicates the template repo*

Copilot Workspace will then generate a specification for the repository based on the description you provide, and a plan for creating it, and then the final implementation.

## Using "New session" on the dsachboard

You can also create a repository from a template by clicking the “New session” button in the [Copilot Workspace dashboard](https://copilot-workspace.githubnext.com), and search for a template. This will open a new task in the workspace where you can describe the software you want to create.

## Using the URL

You can also turn on “Create Repository” mode for any repository URL by adding `?template=true` as a query parameter. For example:

https://copilot-workspace.githubnext.com/githubnext/hello-world?template=true

For incoming URLs, some repositories are treated as templates by default:

- Any GitHub template repository
- Any repository in an organization containing `templates`, upper or lower case, with dash at start or end
- Any repository with `-template`, `-scaffold`, `-starter` or `-boilerplate` in its name, upper or lower case, with dash at start or end
