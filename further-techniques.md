# Further Techniques

## Separate Repos for Issues and Code

<!-- TODO(eaftan): fill this in -->

Some teams use separate repositories for issues and code. See "tips and tricks".

## Ambiguity Warnings

If Copilot Workspace detects that your task is overly ambiguous/unclear (e.g. it doesn’t seem aligned with the goals/focus of the repo), then it may warn you about that and ask you to clarify the task further, before you can carry on. This is done to prevent hallucination in the specification and help guide you towards the “pit of success”, since subsequent stages of the workflow work best with sufficient detail.

<img src="images/further-techniques/ambiguous-spec.png" width=600 alt="Ambiguous specification">

*A warning that a task is too ambiguous and that their intent needs to be clarified*

## Incoming Links

Copilot Workspace has a capability for the task to be specified by query parameters when the subject is a repository, branch or pull request. 

```
https://copilot-workspace.githubnext.com/githubnext/copilot-workspace/pull/695?task=Add%20more%20unit%20tests%20to%20this%20pull%20request.```
```

The query parameters supported are

- `task` - The description of the task. If not specified, and the subject is an issue, the body of the issue is used, otherwise no task body is used and the user must enter one.
- `codeOwner` - The organization or individual for the code repository associated with an issue, e.g. `githubnext` for `githubnext/copilot-workspace`
- `codeRepo` - The name of the code repository associated with an issue, e.g. `copilot-workspace` for `githubnext/copilot-workspace`
- `branch` - The SHA or branch name to analyze the task at, e.g. `main`


