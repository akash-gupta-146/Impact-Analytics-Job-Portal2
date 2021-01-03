# Getting Started with App

## Deployed version of project:
https://impact-analytics-job-portal.netlify.app/

## Repository of project
https://github.com/akash-gupta-146/Impact-Analytics-Job-Portal2

## Running project on local system
1. Run below commands to start in development mode: 

```
npm run start
```

2. Run below command to create build

```
npm run build
```
and live serve /build folder


## Flow of App
1) Home Page : list of all the candidates.
    a. Each candidate is represented by a card and Card has a button to view the profile.
2) Search Candidate
    a. Name of candidated can be searched and by clicking results profile willbe visible
3) Profile Page: Profile of candidate

## Documentation
1) /src/Pages//Home
    Contains 3 components namely,
    a. Main Section: First view of App
    b. Search Section: Search box to search candidates by name
    c. Candidate Cards: To view candidates and each card has a button to view full profile of candidate

2) /src/components/Card
    Card component od candidate

3) /src/components/Profile
    Individual profile of candidate

4) /srv/components/Header
    Header of the app

5) /src/components/SearchProfile
    Seach component available at home page
