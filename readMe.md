# Strava technical problem

## Deployed at
  [StravaApp]('https://strava-technical.netlify.app/')

## Code at:
  Github: https://github.com/fionaochs/StravaFE

## Features
  ### Get highest rated shoes
  ### Best fitting recommendation for athlete
  
## Design a system for athletes to rate the running shoes they are using. Then, create the mechanism for strava to use those ratings to provide shoe recommendations to athletes

### 1. Write code for a method to store athlete's ratings for shoes.
    ### Parameters:
      - shoeId: Integer representing the ID of the Shoe getting rated
      - athleteId: Integer representing the ID of the Athlete rating the Shoe
      - rating: Integer rating value - 1 through 5

### 2. Write code for a function that recommends shoes for a given athlete.
    ### Parameters:
    - athleteId: an Integer representing the ID of the Athlete requesting a recommendation
    ### Returns:
    - an Integer representing the ID of the recommended shoe
    - recommended shoe object

## Dependencies
  ### Node v14.9.0
  ### npm 6.14.8

## To run locally
  ```npm i ```
  ## To set up the database
     Add DATABASE_URL in .env file
     Add TEST_DB_URL in .env file

  ### In StravaBE and StravaFE
  ```npm run start```

  ### In StravaBE and StravaFE
  ```npm run test```

## Further Work

  ### Additional Recommendations
  Recommend based on mileage and running location. This would require knowing information about the athletes, especially their weekly activity for miles ran and location of runs. We could then use athlete information combined with shoe information to check durability vs. miles ran and location vs. terrain type.

  ### Additional Tests
