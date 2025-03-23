---
tags:
  - public
aliases:
  - product of ideals
---
[[Ideal]]
# Product ideal

Let $I,J \trianglelefteq R$ be [[ideal|ideals]].
Their **product ideal** $\langle IJ \rangle$ is the ideal given by the additive closure of $IJ$. #m/def/ring 

## To divide is to contain

The following results motivate the mantra **to divide is to contain**.
In what follows, $I$ with or without a subscript will be some nonzero proper ideal, $\mathfrak{p}$ with or without a subscript will be some nonzero [[prime ideal]].

1. $I_{2} \mid I_{1}$ iff $I_{1} \sube I_{2}$; ^D1
2. $\langle I_{1} \cdots I_{n} \rangle \sube \mathfrak{p}$ iff $I_{k} \sube \mathfrak{p}$ for some $k \in \mathbb{N}_{n}$. ^D2

> [!check]- Proof
> Suppose $I_{1} \sube I_{2}$.
> Then $\langle I_{1} I_{2} \rangle = I_{2}$, so $I_{2} \mid I_{1}$.
> Now suppose $\langle I_{2}I_{3} \rangle = I_{1}$.
> Since $I_{2}I_{3} \sube I_{2}$, it follows $I_{1} \sube I_{2}$, proving [[#^D1]].
> 
> Suppose towards contradiction there exists some $\alpha_{k} \in I_{k} \setminus \mathfrak{p}$ for all $k \in \mathbb{N}_{n}$.
> Then $\prod_{k=1}^n \alpha_{k} \in \langle I_{1} \cdots I_{n} \rangle \sube \mathfrak{p}$, so since $\mathfrak{p}$ is prime, some $\alpha_{k} \in \mathfrak{p}$, a contradiction. 
> Thus $\langle I_{1} \cdots I_{n} \rangle \sube \mathfrak{p}$ implies $I_{k} \sube \mathfrak{p}$ for some $k \in \mathbb{N}_{n}$
> The converse follows from [[#^D1]], proving [[#^D2]] <span class="QED"/>

See also [[Noetherian ring]] and [[An integral domain admits UFI iff it is Dedekind]] for more properties.

#
---
#state/tidy | #lang/en | #SemBr
