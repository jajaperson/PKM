---
tags:
  - public
---
[[Number theory MOC]]
# Euclid's lemma
**Euclid's lemma** is a key step for proving the [[Fundamental theorem of arithmetic]]:
Given $p \mid ab$ where $p,a,b\in\mathbb{N}$ and $p$ is prime, 
then $p \mid a$ and/or $p \mid b$. #m/thm/num
We may generalize this to

$$
\begin{align*}
[n \mid ab]  \land  [\gcd(n,a) = 1]
\implies
n \mid b
\end{align*}
$$


> [!check]- Proof
> Since $n$ and $a$ are relatively prime,
> by [[GCD is a linear combination|Bézout's lemma]] there exists $s,t \in \mathbb{Z}$ such that $1 = sn + ta$.
> Multiplying both sides by $b$, we have $b = snb + tab$,
> and since $n \mid snb$ and $n \mid tab$, $n \mid b$.  <span class="QED"/>


#
---
#state/tidy  | #lang/en | #SemBr
