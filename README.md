# TinyMatrix
A tiny matrix class in JavaScript

## Example

```js
var m1 = new Matrix([
  [1, 2, 3],
  [8, 2, 4]
]);

var m2 = new Matrix([
  [0, 1],
  [3, 2],
  [6, 0]
]);

m1.dot(m2); // [ [24, 5], [30, 12] ]
```

## API

### Matrix() instantiation

Create a new instance of Matrix. You can pass in a multidimensional array:

```js
var m = new Matrix([
  [2, 6, 4],
  [9, 3, 1],
  [8, 2, 4]
]);
```
or pass a row count to create an empty matrix
or pass a row, column count to create a matrix initialized to zero

### Matrix properties

Access array values using the `.$` property: `m.$[0][1]`, with `0` corresponding to the row number and `1` corresponding to the column number. Access row size and column size using `.row` and `.col` getters.

### Matrix methods
Methods are non-destructive and return a new matrix.

#### .add()

```js
a.add(b);
```

#### .sub()

```js
a.sub(b);
```

#### .dot()

```js
a.dot(b);  // matrix product
```

#### .mul()

```js
a.mul(b);  // entrywise product
```

#### .map()

```js
a.map(f);  // apply function f to each element in matrix a
```

#### .T()

```js
a.T();  // transpose
```

#### .mean()

```js
a.mean();  // scalar mean
```

## License

[MIT](https://tldrlegal.com/license/mit-license)

[license-url]: https://tldrlegal.com/license/mit-license
