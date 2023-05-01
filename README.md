# vue-with-pug

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

const data = [
  {
    id: 1,
    name: "user 1"
  },
  {
    id: 2,
    name: "user 2"
  },
  {
    id: 3,
    name: "user 3"
  },
  {
    id: 4,
    name: "user 4"
  },
  {
    id: 5,
    name: "user 5"
  },
  {
    id: 6,
    name: "user 6"
  },
];

const userNamesArray = data.map(user => user.name);

console.log(userNamesArray);
