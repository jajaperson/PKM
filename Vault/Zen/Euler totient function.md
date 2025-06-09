---
tags:
  - public
alias: totient
---
[[Number theory MOC]]
# Euler totient function
The **Euler totient function** $\phi : \mathbb{N} \to \mathbb{N}$ is defined such that $\phi(1) = 1$ and $\phi(n)$ is the number of positive integers less than or equal to $n$ relatively prime with $n$[^2017], called the **totient** #m/def/num

[^2017]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], p. 83

| $n$       | 1   | 2   | 3   | 4   | 5       | 6   | 7           | 8       | 9           | 10      | 11                   | 12       |
| --------- | --- | --- | --- | --- | ------- | --- | ----------- | ------- | ----------- | ------- | -------------------- | -------- |
| coprimes  | 1   | 1   | 1,2 | 1,3 | 1,2,3,4 | 1,5 | 1,2,3,4,5,6 | 1,3,5,7 | 1,2,4,5,7,8 | 1,3,7,9 | 1,2,3,4,5,6,7,8,9,10 | 1,5,7,11 |
| $\phi(n)$ | 1   | 1   | 2   | 2   | 4       | 2   | 6           | 4       | 6           | 4       | 10                   | 4        |

## Properties

1. For any prime $p$, $\phi(p^n) = p^n - p^{n-1}$. ^P1

> [!check]- Proof of 1.
> Consider the set $\mathbb{N}_{p^n}$ of size $p^n$.
> The only elements which are _not_ relatively prime to $p^n$ are those which are divisible by $p$, of which there are $\frac{p^n}{p} = p^{n-1}$, proving [[#^P1]]. <span class="QED"/>

#
---
#state/tidy  | #lang/en | #SemBr 