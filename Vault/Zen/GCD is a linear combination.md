---
aliases:
  - Bézout's lemma
tags:
  - public
---
[[Number theory MOC]]
# Bézout's lemma

**Bézout's lemma** is the statement that **GCD is a linear combination**.
> Given nonzero integers $a,b$, 
> then there exists $s,t \in \mathbb{Z}$ such that $\gcd(a,b) = sa + tb$.
> #m/thm/num

Sometimes this is stated with the additional property that $\gcd(a,b)$ is the smallest positive integer of this form,
thus for all $a,b \in \mathbb{N}$

$$
\begin{align*}
\gcd(a,b) = \min \{ sa + tb \mid s,t \in \mathbb{N}, sa + tb > 0 \}
\end{align*}
$$

This extra property can be proven by the fact that _any_ linear combination of the form $sa +tb$ is some multiple of $\gcd(a,b)$.


Bézout's lemma can be used to prove [[Euclid's lemma]].
The integers $s,t$ can be found by [[Extended euclidean algorithm]]

## For relative primes
A corollary of Bézout's lemma is that if $a$ and $b$ are relatively prime 
then there exists $s,t \in \mathbb{Z}$ such that $sa+tb = 1$.

## Practice problems
- 2017\. [[Sources/@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], p. 25 (§0 exercises p, 4, 8, 10…)

#
---
#state/tidy| #lang/en | #SemBr
