//TODO 1. to check if something has been added  either in master branch or the branch u create
//* git status

//TODO 2. to get back a changes in a file we mistakenly deleted either in master branch or the branch u create
// e.g header.js ➡ <h1>{user.username}</h1>console.log("mistake delete file")
//* git restore header.js

//TODO 3. to check our previous commits and history ⬅ (by one line) either in master branch or the branch u create
//* git log --oneline
// it would look like this
// o8ba9de (HEAD -> master) removed paragraph (shows u on the master branch )
// o8ba9de (origin/master) add 3 paragraph (pulled from origin master)
// i97w3hs added first paragraph (these two are the previous commits)
// 81trg7d added second  paragraph

//TODO 4. to rename commit message ⬅ () either in master branch or the branch u create
//* git commit -v --amend
// use the insert key to make the text editor active then  (added commit ➡ Added new commit )
// press esc key to leave the editor then use the shift ➕ : ➕ wq
// then run git log --oneline to see ur changes

//TODO 5. create branches (the idea of branch is say we have a website we want to create a new header,we make a new branch for a dev in the team to create the header comp and ONLY merge it to the main branch when we have completed testing and made sure its ready)
//* git branch --list (this will list all the branches in the build)
//* git branch header (this will create a new branch with name header)
//* git checkout header (this will switch to header branch)
//* touch header.js (this will create header.js file in header branch)

//TODO 6. rename a branches (the idea is say if we called it header but we want to change it to navbarContent)
// go to the master branch first ➡ git checkout master
//* git branch -m header navbarContent (this will change branch name)
//* then run git branch --list (this will list all the branches in the build)
//* git checkout navbarContent (this will switch to navbarContent branch)
//* when done writing code , use the git add . & git commit -m 'Added new content'

//TODO 7. checkout and create a new branch in one line
// go to the master branch first ➡ git checkout master
//* git checkout -b heroBranch (this will create and switch to branch name heroBranch)

//TODO 8. delete a branch created by mistake  in one line
// go to the master branch first ➡ git checkout master
//* git checkout -D heroBranch (this will delete  heroBranch)

//TODO 9.merge a branch to the main branch in one line
// go to the master branch first ➡ git checkout master
//* git merge heroBranch  (this will merge heroBranch to main)

// https://devinterview.io/questions/web-and-mobile-development/html5-interview-questions/