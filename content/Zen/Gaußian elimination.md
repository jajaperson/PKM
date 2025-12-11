---
tags:
  - public
---
[[Linear equations MOC]]
# Gaußian elimination
**Gaußian elimination** is an algorithm by which a [[system of linear equations]] may be manipulated into [[Row echelon form]]
through [[Elementary row operation|elementary row operations]].

The algorithm deals with the [[Matrix of a system of linear equations#Augmented matrix|augmented matrix]] representation of the system $A$.
At each stage, a **pivot entry** $A_{ij}$ is selected

1. If $A_{ij} = 0$, if possible, interchange the pivot row with one of the rows below it.
   If this is not possible, i.e. all entries below the pivot are also $0$,
   move the pivot one column to the right.
2. If $A_{ij} \neq 0$ then add a suitable multiple of the pivot row to every row below it, ensuring that every entry _below_ the pivot is $0$.

This process is continued until the pivot position is off the matrix.
A modified version, which instead yields [[Row echelon form#Reduced row echelon form|reduced row echelon form]],
is [[Gauß-Jordan elimination]]

## Implementation
### JavaScript
Below is a procedural implementation of the algorithm in JavaScript.
```js
const exampleMatrix = [
  [2, 1, 2, 4],
  [2, 1, 1, 0],
  [4, 3, 2, 4],
];

const scale = (a) => (v) => v.map((x) => a * x);
const add = (v) => (u) => {
  let result = [];
  for (let i = 0; i < v.length && i < u.length; i++) {
    result.push(v[i] + u[i]);
  }
  return result;
};

const GaußianElimination = (input) => {
  let matrix = input.slice(0);

  const m = matrix.length;
  const n = matrix[0].length - 1; // do not include the augmentation column

  let r = 0;
  let c = 0;

  while (r < m && c < n) {
    if (matrix[r][c] === 0) {
      let swapped = false;
      for (let i = r + 1; i < m; i++) {
        if (matrix[i][c] !== 0 && !swapped) {
          const buffer = matrix[r];
          matrix[r] = matrix[i];
          matrix[i] = buffer;
          swapped = true;
        }
      }
      if (!swapped) {
        c++;
      }
    } else {
      for (let i = r + 1; i < m; i++) {
        console.log(i, c, -matrix[i][c] / matrix[r][c]);
        matrix[i] = add(matrix[i])(
          scale(-matrix[i][c] / matrix[r][c])(matrix[r])
        );
      }
      r++;
      c++;
    }
  }
  return matrix;
};
```

#
---
#state/tidy | #SemBr | #lang/en
