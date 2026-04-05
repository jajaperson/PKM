---
tags:
  - public
---
[[Principal ideal domain]]
# Maximal ideal iff prime ideal in a PID

Let $R$ be a [[Principal ideal domain|PID]], and $I \triangleleft R$ be a nonzero [[ideal]].
Then $I$ is [[Prime ideal|prime]] iff it is [[Maximal ideal|maximal]].[^2009]

> [!check]- Proof
> [[A maximal ideal in a commutative ring is prime]].
> For the converse, suppose $\langle a \rangle \triangleleft R$ is a [[prime ideal]] with $a \neq 0$,
> and suppose $\langle a \rangle \sube \langle b \rangle$ for some $b \in R$.
> It follows $\langle a \rangle\ni a = bc$ for some $c \in R$,
> so from primality of $\langle a \rangle$ we have $b \in \langle a \rangle$ or $c \in \langle a \rangle$.
> If $b \in \langle a \rangle$ it follows $\langle b \rangle= \langle a \rangle$.
> If $c \in \langle a \rangle$ it follows $c = da$ for some $d \in R$, so
> $$
> \begin{align*}
> a = bc = bda
> \end{align*}
> $$
> so from cancellation $\langle b \rangle \ni bd = 1$,
> so $\langle b \rangle = R$. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §III.4.3, ¶4.13, pp. 151–152


#
---
#state/tidy | #lang/en | #SemBr
