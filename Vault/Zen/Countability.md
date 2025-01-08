---
aliases:
  - countable
tags:
  - public
---
[[Cardinality]]
# Countability

A set $A$ is called **countable** iff it is finite or [[Cardinality|equinumerous]] with the [[Natural numbers]] $\mathbb{N}$[^2006], #m/def/set i.e. $\abs A \leq \abs{\mathbb{N}} =\aleph_{0}$.
Equivalently, either $A = \0$ or there exists an **enumeration** of $A$, a [[Surjectivity, injectivity, and bijectivity|surjection]] $\pi : \mathbb{N} \twoheadrightarrow A$ of $A$.

   [^2006]: 2006\. [[Sources/@moschovakisNotesSetTheory2006|Notes on set theory]], ¶2.6, p. 8

> [!check]- Proof of equivalence
> If $A$ has finite size $i$ or equinumerous with the natural numbers, $\abs A = \abs{\mathbb{N}_{i}}$ in the first case and $\abs A = \abs{\mathbb{N}}$ in the second case, thus $\abs A \leq \aleph_{0}$.
> 
> Assume $\abs A \leq \abs{\mathbb{N}}$ and $A \neq \0$, so we may choose $x_{0} \in A$.
> Then there exists some injection $f : A \rightarrowtail \mathbb{N}$, so we can define
> $$
> \begin{align*}
> \pi(i) = \begin{cases}
> x_{0} & i \notin f(A) \\
> f^{-1}(i) & i \in f(A)
> \end{cases}
> \end{align*}
> $$
> 
> Now assume such an enumeration exists.
> If $A$ is finite we are done,
> so assume $A$ is infinite but has an enumeration $\pi: \mathbb{N} \twoheadrightarrow A$.
> We define a new function $f$ by
> $$
> \begin{align*}
> f(0) &= \pi(0) \\
> m_{n} &= \min \{ m \in \mathbb{N} : \pi(m) \notin \{ f(i) \}_{i=1}^n \} \\
> f(n+1) &= \pi(m_{n})
> \end{align*}
> $$
> which gives a bijection.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
