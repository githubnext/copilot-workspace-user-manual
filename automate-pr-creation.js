const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function createPullRequest(issue) {
  const { owner, repo } = issue.repository;
  const issueNumber = issue.number;
  const issueTitle = issue.title;
  const issueBody = issue.body;

  // Analyze the issue and create a draft implementation plan
  const draftPlan = `## Draft Implementation Plan\n\n- Analyze the issue\n- Create a new branch\n- Implement the changes\n- Create a pull request\n\n`;

  // Create a new branch
  const branchName = `issue-${issueNumber}-branch`;
  const { data: refData } = await octokit.git.getRef({
    owner,
    repo,
    ref: "heads/main",
  });
  const mainSha = refData.object.sha;
  await octokit.git.createRef({
    owner,
    repo,
    ref: `refs/heads/${branchName}`,
    sha: mainSha,
  });

  // Create a new file with the draft implementation plan
  const filePath = "draft-implementation-plan.md";
  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: filePath,
    message: `Add draft implementation plan for issue #${issueNumber}`,
    content: Buffer.from(draftPlan).toString("base64"),
    branch: branchName,
  });

  // Create a pull request
  const { data: prData } = await octokit.pulls.create({
    owner,
    repo,
    title: `Draft PR for issue #${issueNumber}: ${issueTitle}`,
    head: branchName,
    base: "main",
    body: `This is a draft pull request for issue #${issueNumber}.\n\n${draftPlan}\n\n${issueBody}`,
  });

  return prData;
}

module.exports = { createPullRequest };
