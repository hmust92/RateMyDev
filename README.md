# RateThatDev

The tools used to create and run the modern web change at incredible speed. HR managers and recruiters often don't really understand technology languages and tools beyond the acronyms. What's more, the interview process between Developers who are strangers is stressful, arduous and incomplete. Only Devs who have already worked with other Devs on real world projects really know who can do what.

RATE THAT DEV is a Full Stack app using REACT that scores Developers on Technical skills (using defined criteria of skill compentency) as well as Soft Skills (that reflect the Dev's ability to work with others). Recruiters, CTOs, Hiring managers or startups can contact developers with the closest match to their specific requirements and work culture needs. Comprehensive Developer Profiles allow decision makers to have a much clearer idea of who a developer is before reaching out for an interview. Ratings that reflect the developer's own estimation of their skill as well as anonymous peer reviews of the developer skills ensure that the developer profiles are accurate.

## VISUAL OVERVIEW
[![RateThatDev](https://github.com/hmust92/ratethatdev/blob/master/README/RateThatDevGitHubReadme.gif)](https://github.com/hmust92/ratethatdev/blob/master/README/RateThatDevGitHubReadme.gif)


# TEAM

david daniels :: https://github.com/dvdkrstndnls/ -  UX, front-end, concept

paul rose :: https://github.com/prose34 - full stack developer, architecture

hasan mustafa :: https://github.com/hmust92 - full-stack developer

sherry yang :: https://github.com/xxsherryyy - front-end developer



special thanks to @spacesuitdiver

##  QUICK START


in the terminal (aka terminal 1) run...

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
```
brew services start mongodb
```

(back in the terminal 1)

```
cd ..
```

```
npm run start:dev
```

##Demo Day Slide Deck
https://docs.google.com/presentation/d/16DpMm0F2r1e9zeb7bpkPtoatQkR7pW3gqDFWisIcy80/edit?usp=sharing



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
