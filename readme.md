1. initialize with yarn install, npm install
2. uses knex migrations and seeds,
3. knex migrate:latest
4. knex seed:run
5. to run tests, script test
6. to run nodemon, script server
7. to run node, script start

surveys post, creates surveys expects title and description, title is required
{
"title" : "a title",
"description" : "a description"
}

get surveys/:id, retreives a survey by id,
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
