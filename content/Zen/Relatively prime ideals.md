---
tags:
  - public
---
[[Ideal]]
# Relatively prime ideals

Let $R$ be a [[commutative ring]].
Two ideals $\mathfrak{a},\mathfrak{b} \trianglelefteq R$ are said to be **relatively prime** iff $\mathfrak{a} + \mathfrak{b} = \langle 1 \rangle$.[^2022] #m/def/ring 

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], §1.3.3, p. 25

## Properties

1. Suppose $\mathfrak{a}_{1}, \dots, \mathfrak{a}_{n}$ are pairwise relatively prime. Then $\mathfrak{a}_{1} \cdots \mathfrak{a}_{n} = \mathfrak{a}_{1} \cap \cdots \cap \mathfrak{a}_{n}$ ^P1
2. Suppose $\mathfrak{a}_{1}, \dots, \mathfrak{a}_{n}$ are each relatively prime with $\mathfrak{b}$. Then $\mathfrak{a}_{1} \cdots \mathfrak{a}_{n} + \mathfrak{b} = \langle 1 \rangle$. ^P2
3. Suppose $\mathfrak{p},\mathfrak{q}$ are distinct nonzero [[Prime ideal|prime ideals]] in a [[Krull dimension|1-dimensional]] ring.
   Then $\mathfrak{p}^s + \mathfrak{q}^t = \langle 1 \rangle$ for $s,t \in \mathbb{N}$. ^P3

> [!check]- Proof of 1–2
> For [[#^P1]], it suffices to show the case for $n = 2$.
> For any ideals we already have $\mathfrak{a}_{1} \mathfrak{a}_{2} \sube \mathfrak{a}_{1} \cap \mathfrak{a}_{2}$.
> Since $\mathfrak{a}_{1} + \mathfrak{a}_{2} = \langle 1 \rangle$,
> it holds in particular that $a_{1} + a_{2} = 1$ for some $a_{i} \in \mathfrak{a}_{i}$.
> Thus for any $x \in \mathfrak{a}_{1} \cap \mathfrak{a}_{2}$,
> we have $x = xa_{1}+xa_{2} \in \mathfrak{a}_{1} \mathfrak{a}_{2}$, proving [[#^P1]]. 
> 
> By the hypothesis of [[#^P2]], for each $i \in \mathbb{N}_{n}$ there exists an $b_{i} \in \mathfrak{b}$ such that $1-b_{i} \in \mathfrak{a}_{i}$.
> Then
> $$
> \begin{align*}
> (1-b_{1}) \cdots (1-b_{n}) \in \mathfrak{a}_{1}\cdots\mathfrak{a}_{n}
> \end{align*}
> $$
> and
> $$
> \begin{align*}
> 1 - (1-b_{1}) \cdots (1-b_{n}) \in \mathfrak{b},
> \end{align*}
> $$
> hence $1 \in \mathfrak{a}_{1} \cdots \mathfrak{a}_{n} + \mathfrak{b}$, proving [[#^P2]].
> 
> For [[#^P3]] let $m = \max \{ s,t \}$.
> We show that
> $$
> \begin{align*}
> (\mathfrak{p}+\mathfrak{q})^{2m} \sube \mathfrak{p}^s + \mathfrak{q}^t.
> \end{align*}
> $$
> To see this, note that every element of $(\mathfrak{p}+\mathfrak{q})^{2m}$ is a sum of elements of the form $(p_{1}+q_{1}) \cdots (p_{2m}+q_{2m})$ where $p_{i} \in \mathfrak{p}$ and $q_{i} \in \mathfrak{q}$.
> But such a term is itself a sum of terms containing either at least $m$ elements of $\mathfrak{p}$ or at least $m$ elements of $\mathfrak{q}$,
> implying it is either an element of $\mathfrak{p}^s$ or $\mathfrak{q}^t$.
> 
> Now [[#^P3]] follows from this fact and the 1-dimensionality of $R$, since $\mathfrak{p} \neq \mathfrak{q}$ we have $\mathfrak{p} \subne \mathfrak{p}+ \mathfrak{q}$, and by maximality of $\mathfrak{p}$ we have $\mathfrak{p}+ \mathfrak{q} = \langle 1 \rangle$. <span class="QED"/>

## Results

- [[Chinese remainder theorem for rings]]

#
---
#state/tidy | #lang/en | #SemBr
