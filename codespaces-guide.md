# Codespace Starter Guide

This document contains useful information for using terminal/codespace in your Workspace session.

## Codespaces Limits

### Overall Usage

The technical preview includes limited free Codespaces compute usage that is reset at the start of the calendar month.

### Overall Limits

Codespaces enforces total codespaces and total active codespaces limits that you may encounter. If closing Workspace sessions does not resolve these issues you may reach out to GitHub here: https://github.com/githubnext/copilot-workspace-user-manual?tab=readme-ov-file#feedback

### Organization based limits and policies
If the Organization that owns the repository has set policies for codespaces usage they will be applied to being able to create codespaces for Workspace. You should reach out to an administrator of the organization to adjust any policies.

## Common Errors

#### You've reached your Copilot Workspace usage limit

At the start of the next calendar month your free usage limit will reset and you can continue using Workspace. You may reach out to us and give us feedback about the usage limit [here](https://github.com/githubnext/copilot-workspace-user-manual?tab=readme-ov-file#feedback).

#### Limit of active Copilot Workspace reached.

Remediate this by closing open Workspace sessions and allowing previous sessions to shutdown before creating new ones.

#### Limit of Copilot Workspace reached.
Remediate this by closing open Workspace sessions and allowing previous sessions to shutdown before creating new ones.

#### Repository may not be used for a codespace

This may be because of a repository or organization policy restricting codespaces creation. Please check any settings in the organization or repository that may be preventing codespaces usage. If you do not find any please reach out to our [technical
preview feedback channels](https://github.com/githubnext/copilot-workspace-user-manual?tab=readme-ov-file#feedback) for assistance.

#### The assigned location is currently unavailable.

You may try again in a few minutes. Additionally, you can change your default codespaces region in your user settings if you continue to run into this error for a particular region by following these [public docs](https://docs.github.com/en/codespaces/setting-your-user-preferences/setting-your-default-region-for-github-codespaces).

#### Provided `devcontainer.json` cannot be parsed to valid JSON

In the chosen repository you may need to fix the `devcontainer.json` for syntax errors. You can read more about `devcontainer.json` syntax in the following [public docs](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

#### The organization has enabled OAuth App access restrictions, meaning that access to Copilot Workspace is limited.

Reach out to the organization administrator to give access to the Copilot Workspace OAuth app.
