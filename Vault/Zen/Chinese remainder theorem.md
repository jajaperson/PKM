---
tags:
  - public
---

[[Number theory MOC]]
# Chinese remainder theorem
The **Chinese remainder theorem** states 
that given a set of pairwise co-prime numbers $\{ p_{1},p_{2},\dots,p_{n} \}$
with a product $M = \prod_{i=1}^n p_{i}$,
then the following set of congruence equations
$$
\begin{align*}
x &\equiv_{p_{1}} a_{1} \\
x &\equiv_{p_{2}} a_{2} \\
&\vdots \\
x &\equiv_{p_{n}} a_{3}
\end{align*}
$$
is guaranteed a solution,
unique up to congruence modulo $M$.

## Solution
For $i=1,2,\dots,n$, define $b_{i}$ so that
$$
\begin{align*}
b_{i}\left( \frac{M}{p_{i}} \right) \equiv_{p_{i}} 1
\end{align*}
$$
which is guaranteed to exist by [[GCD is a linear combination|Bézout's lemma]] and the co-prime requirement,
then the value of $x$ is given by
$$
\begin{align*}
x \equiv_{M} \sum_{i=1}^n a_{i} b_{i}\left( \frac{M}{p_{i}} \right)
\end{align*}
$$
This works since every term except the $i$-th term goes to $0$ modular $p_i$,
and thus
$$
\begin{align*}
x &\equiv_{p_{i}} a_{i}b_{i} \left( \frac{M}{p_{i}} \right) \\
&\equiv_{p_{i}} a_{i} \cdot 1 \\
&\equiv a_{i}
\end{align*}
$$

## Practice problems
- Mary Radcliffe, [Chinese Remainder Theorem](https://www.math.cmu.edu/~mradclif/teaching/127S19/Notes/ChineseRemainderTheorem.pdf) (examples)

#
---
#state/tidy | #lang/en | #SemBr | #review
