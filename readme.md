
##Приложение планировщик задач

#### Возможности
1. отбражать список задач
2. добавлять задачу в список
3. удалять задачу из списка
4. отмечать задачу выполненной
5. изменять задачу
6. *сортировать список задач*

#### CRUD
| name    | Path           | HTTP Verb | Назначение | Mongoose             |
|---------|----------------|-----------|------------|----------------------|
| Index   | /index          | GET       |сгенерировать стартовую страницу       | .find()              |
| getList     | /api      | GET       |            | N/A                  |
| Add  | /api          | POST      |            | .create()            |
| getOne    | /api/:id      | GET       |            | .fingById()          |
| updateOne  | /api/:id      | PUT       |            | .fingByIdAndUpdate() |
| removeOne | /api/:id      | DELETE    |            | .fingByIdAndRemove() |
