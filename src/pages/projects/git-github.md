---
title: Quick Reference Guide
description: A quick reference guide and cheatsheet for Git and GitHub.
tags: [Technical Documentation, CLI, Version Control]
date: 2026
weight: 3
---


> [!Tip] 
> This following cheat sheet assumes that you:
> 1. Are familiar with where and when to use the Command Line Interface (CLI).
> 2. Already have a GitHub account and a working directory folder.

# Command Line, Git, and GitHub: A Quick Reference Guide

## **Basic concepts**
**Terminal (Window)**  
The terminal is the interface where you type commands as text input and receive output. It is the window you use to communicate with the computer's operating system.

**Command Line Interface(CLI)**  
CLI is a method/concept of controlling your computer by typing text command into the terminal window.

**Shell**  
Shell is the command line interpreter. It is a program that reads the commands, interprets them, and executes them, and return with the output reusults. It acts as the translator between you and your computer system.

## Common Command Line
**Paths:**  
`/`: root directory  
`~`: home directory    
`.`: current directory  
`..`: parent directory  

| Command | Acronym/Stand for | Action | Quick Tip |
| --- | --- | --- | --- |
| `cd <folder>` | Change Directory | Move into specified folder. | Run this when you need to navigate into a directory. |
| `cd ..` | Change directory (up) | Moves back one level to the parent directory. | Run this to backtrack without returning to home. |
| `cd ~` | Change Directory (Home) | Naivgates directly to home directory | Run this to return to your starting point. |
| `pwd` | Print Working Directory | Displays the full path of your current directory location. | Run this to confirm your current location. |
| `ls` | List | Displays all files and folders in the current directory | Run this to see what is exists. |
| `ls -la` | List (all, detailed) | Displays all files including hidden files with detailed information. | Run this when `ls` doesn't show what you are looking for. |
| `mkdir < name>` | Make Directory | Create a new folder with specified name. | Run this to organize files into a new directory before adding content. |
| `rm <file>` | Remove | deletes the specified file permanently. | **Careful. No trash bin.** Deleted files cannot be recover. |
| `rmdir <folder>` | Remove Directory | Deletes the specifed directory. | Only works if the directory is empty. |
| `rm -r <folder>` | Remove (Recursive) | Deletes everything recursively. | No trash bin. |
| `cp <source> <destination>` | Copy | Copies a file to the specified destination. | Run this to duplicate file before editing as a backup. |
| `mv <source> <destination>` | Move | Moves file or folder to the specified destination. | Also run this to rename a file bt chnaging the destination name. |
| `code .` | --  | Opens current directory on VS Code. | Run this to launch VS Code directly from the terminal without navigating manually. |
| `clear`/`cls`/`ctrl+L` | Clear Screen | Clears all previous commands from the terminal window. | Run this to reduce visual clutter. Your command history would mot be deleted. |
| `exit` | --  | Closes the terminal session. | --  |

---

## Git and GitHub
**Git--Version Control System (VCS)**  
Git is a version control system that tracks the history of changes made to files or a set of files within a directory. It runs locally on your computer through the command line.

**GitHub**  
GitHub is a cloud-based platform where you can create, store, share, and manage code files. It facilitates collaboration on projects with other contributors.

**Github Integration**  
GitHub stores Git repositories online. Without Git, GitHub has nothing to store. You interact with GitHub repositories using Git commands. GitHub uses Git as its version control system.

## Essential Git Commands
|Basic Concepts| Description|
|---|---|
|**Branch** |Separate workspace that won't affect the main code  |
|**Commit**| Checkpoint that saves your changes  |
|**Staging Area:**| Waiting area before you save (commit) your changes  |
|**Repository**| A folder that Git tracks  |
|**Remote**| Repository hosted online (GitHub)  |
|**Local**| Repository on your computer  |
|**Origin**| Nickname for GitHub repository|

--- 

| Command | Action | Additional Information |
| --- | --- | --- |
| `git init` | initializes a new git repository and begins tracking changes. | Run this once in a new project to start version control. |
| `git clone` | Copies a remote GitHub repository to your local computer. | Run this when setting up a project on a new machine or contributing to an existing repository. |
| `git status` | Displays modified files and currently staged changes. | Run this frequently to stay aware of what has changed before staging or committing. |
| `git add <file>` | Stages a specific file for the next commit. | Example: `git add filename.md` |
| `git add .` | Stages all changes in the current directory. | Run this when you are ready to commit all modified files at once. |
| `git commit -m "<commit message>"` | Saves staged changes with a descriptive commit message. | Write a clear, specific message that describes what changed and why. |
| `git push` | Pushes local commits to the remote repository on GitHub. | Run this after the first push has established the upstream branch. |
| `git push origin main` | Push the local `main` branch to `main` branch origin on the remote. | Use this for your first push or when you need to specify the target branch explicitly. |
| `git pull` | Downloads and merges changes from the remote repository into your local branch. | Run this before starting any new work to ensure your local copy is up to date. |
| `git branch` | Lists all branches in the repository. | Run this to confirm which branch you are currently on before making changes. |
| `git log` | Displays the full commit history. | Use this to review what changed, who made the change, and when it was committed. 

---

For more detailed information, you may visit the resources below:
- <u>[gittutorial Documentation][1]</u>
- <u>[GitHub--Git Guides](https://github.com/git-guides)</u>
- <u>[GitHub Docs](https://docs.github.com/en)</u>
- <u>[uidaholib-Get Git!](https://uidaholib.github.io/get-git/)</u>

And for best practice:
- <u>[w3school-Git Tutorial](https://www.w3schools.com/git/default.asp?remote=github)</u>
- <u>[Codedex-Git Github](https://www.codedex.io/git-github)</u>


[1]: https://git-scm.com/docs/gittutorial

