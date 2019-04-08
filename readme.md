# Survey Backend

## Initialization

1. initialize with yarn install, npm install
2. uses knex migrations and seeds,
3. knex migrate:latest
4. knex seed:run
5. to run tests, script test
6. to run nodemon, script server
7. to run node, script start
8. To check, use postman, insomnia or another api testing tool
   //

## Routes and Endpoints

Surveys post, creates surveys expects title and description, title is required <br/>
endpoint: /surveys

```
{
  "title" : "a title",
  "description" : "a description"
}
```

Get surveys by id, retreives a survey by id, used to take a survey <br/>
endpoint: /surveys/1

```
{
  "id": 1,
  "title": "food",
  "description": "food categories",
  "questions": [
    {
      "id": 1,
      "question": "do you like sushi?",
      "surveysId": 1
    },
    {
      "id": 2,
      "question": "do you like veggies?",
      "surveysId": 1
    },
    {
      "id": 3,
      "question": "do you like steak?",
      "surveysId": 1
    }
  ]
}
```

Questions post, creates question, must provide question string and existing surveys id to attach to survey <br/>
endpoint: /questions

```
{
  "question" : "test question",
  "surveysId" : 1
}
```

Answers post, creates answer to submit, must provide existing questions id to attach to question,
only possible input can be either 1 or 0, and only one field can be modified <br/>
endpoint : /answers

```
{
  "yes": 1,
  "no": 0,
  questionsId: 1
}
```

Survey results by id, must provide existing id, to check results of a survey <br/>
endpoint: /surveys/results/1

```
{
  "id": 1,
  "title": "food",
  "description": "food categories",
  "questions": [
    {
      "question": "do you like sushi?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like veggies?",
      "yes": 0,
      "no": 1
    },
    {
      "question": "do you like steak?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like sushi?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like veggies?",
      "yes": 0,
      "no": 1
    },
    {
      "question": "do you like steak?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like sushi?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like veggies?",
      "yes": 0,
      "no": 1
    },
    {
      "question": "do you like steak?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like sushi?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like veggies?",
      "yes": 0,
      "no": 1
    },
    {
      "question": "do you like steak?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like sushi?",
      "yes": 1,
      "no": 0
    },
    {
      "question": "do you like veggies?",
      "yes": 0,
      "no": 1
    },
    {
      "question": "do you like steak?",
      "yes": 1,
      "no": 0
    }
  ]
}
```

Get questions by id, must provide existing id, route returns sum of yes and no answers for specific question <br/>
endpoint: /questions/1

```
{
    "id": 1,
    "question": "do you like sushi?",
    "totalYes": 5,
    "totalNo": 0
}
```

## DESCRIPTION AND PRODUCTION

Description:
To create survey, create name and description of survey using the post route of surveys. Then create questions for the survey via the questions post route and attach foreign key of matching survey. This should be done on the client side. Once survey is completed, to take survey, call survey get route and pass in specified id. Will return survey with questions that match survey id through the foreign key. The survey is taken and answers are submitted per question via the answers post route. To see the results of the survey call get route of surveys/results/"id" of survey. This will return all of the answers submitted.

## For Production:

I strongly feel there should be some sort of check to see how many surveys have been completed as a means to limit data usage. Also encourage a user login for the same reason. The results of the survey return all of the answers so we can attach a user to the answers table and make sure a user does not submit multiple answers to the same survey question. If we wanted the results more concise, one option is to combine the same question value together and sum up the yes and no results via the client side. Also in production a third party database would be a wise choice for more storage capacity, AWS, google, etc.
