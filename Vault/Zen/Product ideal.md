---
tags:
  - public
aliases:
  - product of ideals
---
[[Ideal]]
# Product ideal

Let $I,J \trianglelefteq R$ be [[ideal|ideals]] (or [[Fractional ideal|fractional ideals]]).
Their **product ideal** $IJ=\langle IJ \rangle$ is the ideal given by the additive closure of $IJ$. #m/def/ring 

## To divide is to contain

The following results motivate the mantra **to divide is to contain**.
In what follows, $I$ with or without a subscript will be some nonzero proper integral ideal, $\mathfrak{p}$ with or without a subscript will be some nonzero [[prime ideal]].

1. $I_{2} \mid I_{1}$ implies $I_{1} \sube I_{2}$; ^D1
2. $\langle I_{1} \cdots I_{n}\rangle \sube \mathfrak{p}$ implies $I_{k} \sube \mathfrak{p}$ for some $k \in \mathbb{N}_{n}$. ^D2

> [!check]- Proof
> Suppose $( I_{2}I_{3} ) = I_{1}$.
> Since $(I_{2}I_{3}) \sube I_{2}$, it follows $I_{1} \sube I_{2}$, proving [[#^D1]].
> 
> Suppose towards contradiction there exists some $\alpha_{k} \in I_{k} \setminus \mathfrak{p}$ for all $k \in \mathbb{N}_{n}$.
> Then $\prod_{k=1}^n \alpha_{k} \in ( I_{1} \cdots I_{n} ) \sube \mathfrak{p}$, so since $\mathfrak{p}$ is prime, some $\alpha_{k} \in \mathfrak{p}$, a contradiction. 
> Thus $(I_{1} \cdots I_{n}) \sube \mathfrak{p}$ implies $I_{k} \sube \mathfrak{p}$ for some $k \in \mathbb{N}_{n}$, proving [[#^D2]]. <span class="QED"/>

See also [[Noetherian ring#^P1]].
These become iffs when $R$ is a [[Dedekind domain]], and in particular [[An integral domain admits UFI iff it is Dedekind]].

#
---
#state/develop  | #lang/en | #SemBr
