# Dating_Site

# Clone git project - go to gothube -> Code -> code -> HTTPS
git clone https://github.com/elents/Dating_Site.git
# Create a progect and bound it to git repository
git init - install git into folder
git remote -v - shows remote repository for this project. If nothing, no remote repository
git remote add origin https://github.com/elents/Dating_Site.git

# git config - many parameters, we are using only two
git config user.name - shows existing
git config user.name "Elena" - changes existing
git config user.email - shows existing
git config user.email "Elena@gmail.com" - changes existing

# control what we have
git status  - shows branch name and changes
git branch -a  - list of all branches local and remote
git log -n 1 - shows the last commit. If just git log or number > 1 doesn't work properly
git log --oneline - shows all commits only short ID and comment

# mowing changes to remote
git add README.md index.js index.html - add files to stage, prepares to commit
git add . - add everything changed
git commit -m "comment"
git push / git push origin master

git reset index.js - remove from stage
git diff - shows changes saved but not staged
git reset hard - removes all unstaged changes
