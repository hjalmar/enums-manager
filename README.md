# enums-manager

## Install
```
npm i -D enums-manager
```

Yet another enums implementation? Hey! I just want an enumerable list with a special type and an iterator.

## Usage
```
import { EnumerableList, Enum } from 'enums-manager';
```

### EnumerableList class
`EnumerableList` extends `Map` so all `Map` method work according to the native implementation. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
```js
// create a new list
const types = new EnumerableList('designer', 'programmer', 'webdeveloper');
```

#### Getting values

```js
console.log(types.get('programmer')); // Enum {2, key: "programmer", value: 2}
```

Since the value isn't an instance of `Number` you have to be vary of the fact that a strict comparison `===` of a number will fail.
```js
console.log(types.get('programmer') == 2); // true
console.log(types.get('programmer') === 2); // false
console.log(types.get('programmer').value === 2); // true
```

### Enum class

```js
console.log(types.get('programmer').key); // programmer
console.log(types.get('programmer').value); // 2
// iteration
types.forEach(({ key, value }) => {
  console.log(key, ' : ', value); // designer : 1, programmer : 2, webdeveloper : 3 
});
```