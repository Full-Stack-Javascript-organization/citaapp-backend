## Steps to start the program

```bash
npm install
```

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.

## There are some examples to run test.

## Getting Data

GET - http://localhost:3000/

## Adding

POST - http://localhost:3000/add

{
    "book":"Introduction to Data Science",
    "author":"Tzu",
    "year":2013
}

POST - http://localhost:3000/add

{
    "book":"Urbanization",
    "author":"Cho",
    "year":2019
}

POST - http://localhost:3000/add

{
    "book":"Test",
    "author":"Tzu",
    "year":2018
}

## Updating

PUT - http://localhost:3000/update/Urbanization

{
    "year":1996
}

## Deleting

DELETE - http://localhost:3000/delete/Tzu