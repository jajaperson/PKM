---
tags:
  - public
---
[[Number theory MOC]]
# Euclid's lemma
**Euclid's lemma** is a key step for proving the [[Fundamental theorem of arithmetic]].
It is often formulated as

> Given $p \mid ab$ where $p,a,b\in\mathbb{N}$ and $p$ is prime, 
> then $p \mid a$ and/or $p \mid b$.
> #m/thm/num

 However it can be generalised to

$$
\begin{align*}
{n \mid ab \quad \land \quad \gcd(n,a) = 1}
\over
{n \mid b}
\end{align*}
$$


> [!check]- Proof of the generalised form
> Since $n$ and $a$ are relatively prime,
> by [[GCD is a linear combination|Bézout's lemma]] there exists $s,t \in \mathbb{Z}$ such that $1 = sn + ta$.
> Multiplying both sides by $b$, we have $b = snb + tab$,
> and since $n \mid snb$ and $n \mid tab$, $n \mid b$.  <span class="QED"/>


#
---
#state/tidy  | #lang/en | #SemBr
