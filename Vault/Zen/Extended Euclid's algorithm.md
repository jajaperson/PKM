---
tags:
  - public
---
[[Euclid's algorithm]]
# Extended Euclid's algorithm
The **extended Euclid's algorithm** can be used to find a pair $s,t \in \mathbb{Z}$ such that $\gcd(a,b) = sa + tb$ as required by [[GCD is a linear combination|Bézout's lemma]].


## Modular multiplicative inverse
To calculate the inverse of $a$ in $\bmod n$

1. Create an equation in the form of $n = a(q) + r$.
2. Create a new equation where $a \to n$ and $r \to a$
3. Continue until $r = 1$
4. Convert each equation to the form $r = n + a(-q)$
5. Starting from the equation where $r = 1$, substitute your values slowly working upwards
6. In the final steps, any $n$s disappear and $-x \to n-x$.


#
---
#state/tidy | #lang/en | #SemBr 