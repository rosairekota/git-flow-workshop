# Case 1: Git-flow initialization

Run the following command from the root folder of your newly cloned repository.

```bash
  # Remove references to the current repository.
  rm -rf .git
  # Initialize a new git-flow repository
  git flow init
  # Create a Bitbucket / Github repository and connect remotes to it.
  git remote add origin git@github.com:MYACCOUNT/MYREPO
```
