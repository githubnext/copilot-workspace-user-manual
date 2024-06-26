# Responsible AI FAQ

## What is Copilot Workspace? 

Copilot Workspace is a reimagined developer inner loop. The focal points of the experience are selecting a task, expressing intent, and then collaborating with AI towards a solution. We believe this can dramatically reduce complexity, improve productivity, and delight developers, without taking away the aspects of software development that they value most, such as decision making, creativity, and ownership. 

## What can Copilot Workspace do?  

Copilot Workspace takes in a development task from a user, for example, a GitHub Issue, and produces a natural-language specification of the current behavior of the code, a plan for how to modify the code to complete the task, and eventually the actual code changes to all relevant files in the repo.  Each step (task, spec, plan, and implementation) is editable by the user, enabling the user to steer the AI to complete the task in the best way.     

## What is/are Copilot Workspace’s intended use(s)? 

Copilot Workspace is intended to:

1. Accelerate software developers, helping them make small- and medium-scale code changes quickly and correctly.   
2. Reduce the activation energy for developers to start tasks, by giving them an AI-generated starting point. 
3. Help experienced developers work with unfamiliar programming languages and frameworks. 
4. Help developers contribute to unfamiliar codebases, for example, to open source projects. 

## How was Copilot Workspace evaluated? What metrics are used to measure performance? 

Copilot Workspace was evaluated in the following ways: 

* Offline evaluations.  We have a corpus of known tasks and an entrypoint that allows us to run Copilot Workspace over those tasks in a headless mode.  When we make changes to our prompts, switch to a different model, etc., we run those benchmarks and manually validate the changes to Copilot Workspace’s outputs.  If we see regressions, we iterate on the prompts until there are no more regressions.  In addition, we have a larger set of benchmarks that are mined from GitHub, and we use model-driven evaluations to ensure consistent quality. 
* User studies.  In January, we ran a round of user studies with GitHub employees where we gave them a standard task and asked them to complete the task using Copilot Workspace.  We are planning additional user studies as part of the Technical Preview.
* Extensive dogfooding within our team.  We used Copilot Workspace to build Copilot Workspace. 
* Red teaming.  We have prepared a set of malicious prompts and run Copilot Workspace in headless mode over those prompts.  Then we do both human- and model-driven evaluations of the output for harmful responses, and if we see those, we update our prompts and filters so that users do not encounter them. 

## What are the limitations of Copilot Workspace? How can users minimize the impact of Copilot Workspace’s limitations when using the system? 

Copilot Workspace is not always correct.  Users should carefully validate its output and should not blindly trust it.  If users detect inaccuracies in Copilot Workspace’s outputs, we have made it easy for them to edit and correct any model-generated outputs. We have also built validation tools, particularly a terminal which allows the user to execute the generated code in a sandboxed environment.  The user should use these tools to validate and correct Copilot Workspace’s outputs. 

## What operational factors and settings allow for effective and responsible use of Copilot Workspace? 

Copilot Workspace will perform best on common programming languages and frameworks and when the natural language is English.    

Code generated by Copilot Workspace should be held to the same standard as human-written code – it should be code reviewed, have automated tests, be analyzed by linters and static analyzers, etc.  Copilot Workspace can help add automated tests to in-progress PRs, helping improve the overall health of a software project. 

## What should a user do if they encounter offensive content while using Copilot Workspace? 

Please report any examples of offensive content to copilot-safety@github.com.  Please include a share link so that we can investigate. 