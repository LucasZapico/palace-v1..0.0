---
title: "Git"
date: 2019-08-15T22:10:52-07:00
draft: false
menu:
  docs:
    title: "Git - Version Control"
    parent: "Version Control"
    name: "Git - Version Control"
---

### *Description*

---
# Git 

## Linux Terminal Commands for Git  

##### Tags
Tags are...

Perterit commands for tag usage
```
git tag -l
//list of git tags associate with project

git checkout tags/<tag_name>
// checks out project at that tag revision number
// Ex: learn-fullstack-javascript git:(9616488)

git checkout tags/<tag_name> -b <branch_name>
// checks out at tag revision number but also make a branch with defined name

```


# **Note Catch Version Control2019-01-31**

* * *

* * *


## Git

### Commit messages

Inpiration from [Shreyas Minocha-dev.to](https://dev.to/shreyasminocha/how-i-do-my-git-commits-34d)
reading through his article led me to to review [the seven rule to a commit](https://chris.beams.io/posts/git-commit/#seven-rules) and [Adding a template to commit message](https://codeinthehole.com/tips/a-useful-template-for-commit-messages/) which I then applied to my own git workflow. I hope to add a reflection on this addition at a later date.

-   [x] applied to git workflow : 2018-07-03

### Linux Terminal Commands for Git

##### Tags

Tags are...

Pertinate commands for tag usage

```zshrc
git tag -l
//list of git tags associate with project

git checkout tags/<tag_name>
// checks out project at that tag revision number
// Ex: learn-fullstack-javascript git:(9616488)

git checkout tags/<tag_name> -b <branch_name>
// checks out at tag revision number but also make a branch with defined name
```

### Add Remote Repo to Local Repo

```zshrc
git remote add origin https://github.com/yoururl/
//adds remote repo to local

git remote -v
// returns remote repos
```

### Delete Local and Remote Branches

**References**
[Stackover flow answer for delete branches](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely)

#### Local Delete

```zshrc
git branch --delete <branch-name>
git branch -d <branch-name>
// alias -d for --delete

git brnach --delete -force
git branch -D <branch-name>
// alias -D for --delete -force
```

#### Remote Delete

```zshrc
git push <remote_name> --delete <branch_name>
git push -d <remote_name> <branch_name>
git branch -d <branch_name>
// Note <remote_name> is normally "origin"
```

### Logs, Commit Review and Compare

#### See commit log

```zshrc
git log
```

#### Compare Branch A to Branch B

[Stackoverflow answer to compare two branch question](https://stackoverflow.com/questions/9834689/comparing-two-branches-in-git)

```zshrc
git diff <brach-a-name>..<brach-b-name>
```

### Moving Commits Around

[Endpoint.com Moving commits](https://www.endpoint.com/blog/2012/06/21/moving-commit-to-another-branch-in-git)

```zshrc
git cherry-pick <commit-id>
```

### Stash

#### Restore Stash to Branch

[git documentation on stash](https://git-scm.com/docs/git-stash)

**Display list of Stashes**

```zshrc
git stash list
// lists of stashes
```

**A stash can be inspected with**

```zshrc
git stash show
// shows detailed view of stash
```

**Apply Stash On Current Branch**

```zshrc
git stash apply
// applies last stashed commit onto current branch
```

### Resets

#### Reset to Some Commit

```zshrc
git reset --hard <commit-id>
```

```zshrc
git reset HEAD
// where HEAD is the last commit in current branch

git revert HEAD~1
// revert one commit
git revert HEAD~2
// revert two commits
```

* * *

## Specific Instances

[How to create a GitHub pull request with Specific Commits](https://poanchen.github.io/blog/2017/11/12/How-to-create-a-GitHub-pull-request-with-a-specific-commits)

[Error while create new repo local and pushing to remote](https://georgik.rocks/common-mistake-when-creating-new-git-repo/)

Descriptions: Common mistake when creating new git repo. `Error: src refspec master does not match any.`
-

## Git
### Commit messages
Inpiration from [Shreyas Minocha-dev.to](https://dev.to/shreyasminocha/how-i-do-my-git-commits-34d)
reading through his article led me to to review [the seven rule to a commit](https://chris.beams.io/posts/git-commit/#seven-rules) and [Adding a template to commit message](https://codeinthehole.com/tips/a-useful-template-for-commit-messages/) which I then applied to my own git workflow. I hope to add a reflection on this addition at a later date.
- [x] applied to git workflow : 2018-07-03


### Linux Terminal Commands for Git

##### Tags
Tags are...

Pertinate commands for tag usage
```zshrc
git tag -l
//list of git tags associate with project

git checkout tags/<tag_name>
// checks out project at that tag revision number
// Ex: learn-fullstack-javascript git:(9616488)

git checkout tags/<tag_name> -b <branch_name>
// checks out at tag revision number but also make a branch with defined name

```

### Add Remote Repo to Local Repo

```zshrc
git remote add origin https://github.com/yoururl/
//adds remote repo to local

git remote -v
// returns remote repos

```

### Delete Log and Remote Branches
```zshrc
- git push -d <remote_name> <branch_name>
- git branch -d <branch_name>
```

### Stash
#### Restore Stash to Branch
[git documentation on stash](https://git-scm.com/docs/git-stash)


__Display list of Stashes__
```zshrc
git stash list
// lists of stashes
```

__A stash can be inspected with__
```zshrc
git stash show
// shows detailed view of stash
```

__Apply Stash On Current Branch__
```zshrc
git stash apply
// applies last stashed commit onto current branch
```


### Commit
#### Unstage files after local commit

```
git reset HEAD
```



## RESOURCES

### REFERENCES

#### Rebase

[Atlassian Git Tutorials - Rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
[Edx How to Rebase](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request)
[Stackoverflow how to move certain](https://stackoverflow.com/questions/2369426/how-to-move-certain-commits-to-be-based-on-another-branch-in-git)
