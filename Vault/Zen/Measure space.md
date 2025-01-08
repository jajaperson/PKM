---
tags:
  - public
aliases:
  - measure
  - measurable space
mathLink-blocks:
  M1: non-negativity
  M2: empty set
  M3: σ-additivity
  P1: monotonicity
  P2: countable subadditivity
---
[[Measure theory MOC]]
# Measure space

A **measure space** $(X, \Sigma, \mu)$ consists of a measurable space $(X, \sigma)$ and a measure $\mu$ on that space.
A **measurable space** $(X, \Sigma)$ consists of a set $X$ and a [[σ-algebra]] on that set $\sigma$.
A **measure** $\sigma$ on a measurable space $(X, \Sigma)$ is a function $\mu : \sigma \to [-\infty, \infty]$ satisfying #m/def/measure

1. **non-negativity** (unless [[Signed measure]]): $\mu(A) \geq 0$ for all $A \in \Sigma$. ^M1
2. **empty set** has zero measure[^sat]: $\mu(\0) = 0$ ^M2
3. **σ-additivity**: $\mu(A \cup B)= \mu(A) + \mu(B)$ for any $A,B \in \Sigma$ with $A \cap B = \0$. 
  By induction the same holds for any countable collection of pairwise disjoint sets. ^M3

[^sat]: If at least one $E \in \Sigma$ has finite measure, then this follows from σ-additivity since $\mu(E) = \mu(E \cup\0) = \mu(E) + \mu(\0)$.


Thus a measure space generalises _volume_ in the same way that a [[metric space]] generalises length.

## Properties

From the above axioms it follows

1. **monotonicity**: $A,B \in \Sigma,A \sube B \implies \mu(A) \leq \mu(B)$ ^P1
2. **countable subadditivity**: Let $\{E_i\}_{i=1}^\infty \sube \Sigma$ be a countable (or finite[^trailing]) sequence of measurable sets, then
  $$
  \begin{align*}
  \mu\left(\bigcup_{i=1}^\infty E_{i}\right) \leq \sum_{i=1}^\infty \mu(E_{i})
  \end{align*}
  $$
  ^P2

[^trailing]: Just give the sequence trailing $\0$.

> [!check]- Proof of 1–2
> Let $A,B \in \Sigma$ be measurable sets such that $A \sube B$.
> Then by [[σ-algebra#^M5]] $A \setminus B \in \Sigma$ and $A = B \cup (A \setminus B)$,
> so by [[#^M3]] $\mu(A)= \mu(B) + \mu(A \setminus B)$, wherefore $\mu(A) \leq \mu(B)$, proving [[#^P1]].
> 
> Now let  Let $\{E_i\}_{i=1}^\infty \sube \Sigma$ be a countable sequence of measurable sets.
> Then
> $$
> \begin{align*}
> \mu\left( \bigcup_{i=1}^\infty E_{i} \right) = \mu\left(E_{1} \setminus \bigcup_{i=2}^\infty E_{i}\right) + \mu\left( \bigcup_{i=2}^\infty E_{i} \right)
> \end{align*}
> $$
> and by [[#^P1]]
> $$
> \begin{align*}
> \mu\left(E_{1} \setminus \bigcup_{i=2}^\infty E_{i}\right) \leq \mu(E_{1})
> \end{align*}
> $$
> hence
> $$
> \begin{align*}
> \mu\left( \bigcup_{i=1}^\infty E_{i} \right) = \mu\left(E_{1} \right) + \mu\left( \bigcup_{i=2}^\infty E_{i} \right)
> \end{align*}
> $$
> applying this argument inductively proves [[#^P2]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 