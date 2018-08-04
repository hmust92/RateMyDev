##  QUICK START


(in the terminal (aka terminal 1) run...

```
npm install
```

```
cd client
```

```
npm install
```

in a seperate terminal start up mongoDB. If you use homebrew you can run:)
'''
brew services start mongodb
```

(back in the terminal 1)

'''
cd ..
'''

'''
npm run start:dev
'''

##Demo Day Slide Deck
https://docs.google.com/presentation/d/16DpMm0F2r1e9zeb7bpkPtoatQkR7pW3gqDFWisIcy80/edit?usp=sharing

# RateMyDev
Project 3 

HR managers don't really understand tech beyond the acronyms and the interview process between Devs who are strangers is arduous. Only Devs who have already worked with other Devs really know who can do what.

Rate My Dev is a React app that scores Developers on tech skills through defined criterias of skill compentency. Hiring managers or startups can contact developers with the closest match to their specific requirements based on skill location and mastery.


hasan - REACT and mongo, full-stack

paul - mongo, full-stack

elaulas - back end mongo

sherry - Repo Owner, full-stack

david - architecting, UX, front-end and/or powerpoint presentation

![alt text](https://github.com/xxsherryyy/RateMyDev/blob/master/image.png)

![alt text](https://github.com/xxsherryyy/RateMyDev/blob/master/IMG_20180714_173901.jpg)

![alt text](https://github.com/xxsherryyy/RateMyDev/blob/master/IMG_20180714_173912.jpg)



# React Passport Example Application

An example application which combines a back-end which stores user data and front-end React.js application which handles user authentication sessions.

This application be easily separated into two completely different repositories.

Created using the tutorials below:

https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt

However, this version has replaced the React Router v3 which were used in the above tutorials with the most recent React Router v4 which has some major differences. I also made some minor tweaks to account for the NPM packages which had issues due to updates since the tutorial was published.

This application incorporates the following packages:

- axios
- bcryptjs
- jsonwebtoken
- mongoose
- passport
- react-router-dom
- validator

## Installation

After cloning the repo, follow the steps below:
```sh
$ cd react-passport-example
```
```sh
$ yarn install
```
```sh
$ sudo mongod
```
```sh
$ yarn run dev
```

When editing the files, run the following command for webpack to watch your files and bundle whenever changes are made:
```sh
$ yarn run bundle
```

## Screenshots

Home page before login:

![Alt Home Page](/README/home.png?raw=true)

Sign up page:

![Alt Signup Page](/README/signup.png?raw=true)

Login page:

![Alt Login Page](/README/login.png?raw=true)

Dashboard which is only accessible after login:

![Alt Dashboard](/README/dashboard.png?raw=true)
