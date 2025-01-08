---
tags:
  - public
alias: totient
---
[[Number theory MOC]]
# Euler totient function
The **Euler totient function** $\phi : \mathbb{N} \to \mathbb{N}$ is defined such that $\phi(1) = 1$ and $\phi(n)$ is the number of positive integers less than or equal to $n$ coprime with $n$[^2017], called the **totient** #m/def/num

[^2017]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], p. 83

| $n$       | 1   | 2   | 3   | 4   | 5       | 6   | 7           | 8       | 9           | 10      | 11                   | 12       |
| --------- | --- | --- | --- | --- | ------- | --- | ----------- | ------- | ----------- | ------- | -------------------- | -------- |
| coprimes  | 1   | 1   | 1,2 | 1,3 | 1,2,3,4 | 1,5 | 1,2,3,4,5,6 | 1,3,5,7 | 1,2,4,5,7,8 | 1,3,7,9 | 1,2,3,4,5,6,7,8,9,10 | 1,5,7,11 |
| $\phi(n)$ | 1   | 1   | 2   | 2   | 4       | 2   | 6           | 4       | 6           | 4       | 10                   | 4        |

## Properties

- #to/prove For any prime $p$,$\phi(p^n) = p^n - p^{n-1}$ 
- For coprime $m,n$, $\phi(mn) = \phi(m,n)$

#
---
#state/develop | #lang/en | #SemBr 