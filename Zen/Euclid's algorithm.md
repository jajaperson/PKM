---
tags:
  - public
---

[[Algorithms MOC]]
# Euclid's algorithm
Euclid's algorithm provides a fast way to calculate the greatest common devisor of two integers.
See also [[Extended Euclid's algorithm]]

## Implementation
### Haskell
```haskell
gcd' :: (Integral a) => a -> a -> a
gcd' a 0 = a
gcd' a b = gcd b (mod a b)
```

### Python
```python
def gcd(a, b):
  return a if not b else gcd(b, a % b)
```


## Practice problems

- 2017\. [[Sources/@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], p. 23 (§0 exercises 2, 19, 20)

#
---
#state/develop | #SemBr 
