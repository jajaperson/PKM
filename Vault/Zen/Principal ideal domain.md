---
aliases:
  - PID
tags:
  - public
---

[[Ring theory MOC]]
# Principal ideal domain

A **principal ideal domain** or **PID** $R$ is an [[integral domain]] in which every [[ideal]] is [[Principal ideal|principal]], #m/def/ring
i.e. it is also a [[Principal ideal ring]].
Every principal ideal domain is [[Noetherian ring|Noetherian]] (by [[Noetherian ring#^N1]]) and a [[Unique factorization domain]][^2009]

> [!check]- Proof
> Let $R$ be a PID. Since $R$ is [[Noetherian ring|Noetherian]], the [[Noetherian ring#^N2]] holds in general and thus in particular for principal ideals, so invoking [[Unique factorization domain#^U2]] it is sufficient to show that every [[irreducible element]] in $R$ is a [[prime element]].
> 
> Let $a \in R$ be irreducible, and suppose $bc \in \langle a \rangle$.
> We have to show that either $b \in \langle a \rangle$ or $c \in \langle a \rangle$.
> If $b \in \langle a \rangle$ we are done, so assume $b \notin \langle a \rangle$.
> Then $\langle a \rangle \subne \langle a,b \rangle = \langle d \rangle$ for some $d \in R$.
> But by [[Irreducible element#^P1]], $\langle a \rangle$ is maximal among principal ideals, so $\langle d \rangle = \langle 1 \rangle$.
> Hence there exist $r,s \in R$ such that $ra + sb = 1$, whence
> $$
> \begin{align*}
> c = rac + sbc \in \langle a \rangle 
> \end{align*}
> $$
> and therefore $a$ is prime. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §V.2.3, pp. 254–255

## Properties

- [[Maximal ideal iff prime ideal in a PID]]

#
---
#state/tidy | #lang/en | #SemBr
