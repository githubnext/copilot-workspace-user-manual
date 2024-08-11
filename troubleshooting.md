## Troubleshooting

### Troubleshooting Organizations

- **You are accessing an org that must approve OAuth apps**. As part of the login you authorize the OAuth app into various orgs, depending on the org policies with regard to OAuth apps. You can request access and the organization can approve the OAuth app. If you need to re-request access or revoke any access at all you can [control the status of your connection with the OAuth app](https://github.com/settings/connections/applications/903eccd8a9d2ff50288f).

- **Although you appear to have the correct authorization credentials, the `github` organization has enabled OAuth App access restrictions, meaning that data access to third-parties is limited.** This is because an org restricts OAuth apps. Some of authorization attempts for orgs may fail if the org doesn't allow OAuth apps at all. This can affect even access to public repositories in organizations that deny access to OAuth apps.

- **Resource protected by organization SAML enforcement. You must grant your OAuth token access to this organization**.You may be logging in to an organization with SAML control, e.g. Microsoft. They should
  1. Log out of Copilot Workspace.
  2. Go through SAML auth in the browser by looking at, say, a repository of the organization
  3. Then log back into Copilot Workspace.

### Troubleshooting Private Repositories

- **You can't access a private repository in your own account**. After login you should be able to access your personal private repositories unless you have removed access for the OAuth app. If you have trouble, it is possible it is because you landed in Copilot Workspace via a sharing link and have only given public repo privileges. You should log out and log back in again and this should restore access. Failing that you should [check the status of their connection with the OAuth app](https://github.com/settings/connections/applications/903eccd8a9d2ff50288f).

### Troubleshooting Codespaces

- **Billable owner could not be determined for a new codespace, Repository may not be used for a codespace.** The CW OAuth app is not installed in the billable owner's organization.

Please view the [Codespaces Guide](codespaces-guide.md) for more information on Codespaces and troubleshooting common errors.
