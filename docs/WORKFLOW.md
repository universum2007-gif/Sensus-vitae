# Sensus Vitae Workflow

## 1. Source of truth

GitHub main is the authoritative source of truth for this repository.

Do not treat a local working copy, another agent's branch, or an IDE-generated state as current unless it has been re-verified against GitHub main and the local repository state.

## 2. Before any editing task

Before starting substantive work, verify all of the following in the local repository:

- current branch;
- current HEAD;
- git status;
- that the working copy is not stale or dirty for the task at hand.

Do not start from a stale or dirty working copy.

## 3. Read the project guidance first

Before substantive work, read:

- AGENTS.md;
- the relevant policy documents for the task;
- any repository guidance directly relevant to the planned change.

This is required even when another agent already started a task or prepared a draft.

## 4. Keep changes narrow

- make the smallest change that solves the actual problem;
- do not modify unrelated files;
- do not refactor unrelated code or content;
- do not change architecture, URLs, design, or working functionality unless the task explicitly authorizes that change.

## 5. Preserve project integrity

When applicable, preserve:

- RU / NL / EN / ES consistency;
- existing URLs;
- site design and working functionality;
- established content and educational structure;
- privacy, accessibility, scientific accuracy and maintainability requirements.

## 6. Testing and verification

Run the relevant existing tests or checks required by the repository instructions for the task.

Do not skip verification because a previous agent or environment state seemed to be working.

## 7. Generated or environment artifacts

Do not commit generated files, lockfile churn, environment artifacts, or install side effects unless the task explicitly requires them.

If an environment or tool causes extra changes, remove or revert them before finishing and do not include unrelated churn in a task.

## 8. Review before completion

Before a task is considered ready:

- review git diff;
- review git status;
- confirm the change is limited to the intended scope;
- confirm no secrets or sensitive data were added.

## 9. Safety and secrets

Never commit or expose:

- API keys;
- passwords;
- access tokens;
- environment secrets;
- credentials;
- private visitor data;
- database exports containing personal data.

## 10. Hand-off between agents

One agent may prepare work and another may continue it, but the next agent must always re-verify the repository state first.

Never assume another agent's local working copy is current, complete, or clean.

## 11. Commit and publish rules

- commit only when explicitly authorized by the task or user;
- push only when explicitly authorized by the task or user;
- for substantial code, architecture, navigation, or content-structure changes, prefer a dedicated feature branch unless the task explicitly authorizes direct work on main;
- treat deployment or publication as a separate explicit action unless repository instructions clearly define otherwise.

## 12. Working rules for responsible collaboration

GitHub main remains the source of truth even in multi-agent or multi-tool workflows.

If a local branch, local file state, generated output, or agent-prepared patch differs from GitHub main, re-check the repository state before continuing work.
