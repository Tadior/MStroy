# МСтрой

## Класс TreeStore

### Методы

- getAll - возвращает изначальный массив элементов.
- getItem - принимает id элемента и возвращает сам объект элемента.
- getChildren - принимает id элемента и возвращает массив элементов, являющихся дочерними для того элемента, если у элемента нет дочерних то вернется пустой массив.
- getAllChildren - принимает id элемента и возвращает массив элементов, являющихся прямыми дочерними элементами того чей id получен в аргументе + если у них есть собственные дочерние элементы, они все тоже будут включены в результат и так до самого глубокого уровня.
- getAllParents - принимает id элемента и возвращает массив из цепочки родительских элементов,начиная от самого элемента, чей id был передан в аргументе и до корневого элемента

Установка и запуск тестов:

```sh
git clone https://github.com/Tadior/MStroy.git
cd MStroy
npm i
npm run test
```

Для разработки использовал TypeScript и Jest.
