---
tags:
  - public
---
[[Type theory MOC]]
# Dependent type theory

A **dependent type theory** is a ([[Type theory#Cartesian type theory|cartesian]]) [[type theory]] where type formation is [[Context in a proof system|context]]-dependent, #m/def/type 
and thus may be parameterized by terms.
This is in contrast to a non-dependent type theory where only terms are context-dependent,
and types may in practice be defined by a [[Context-free grammar]].

## Type family

A type in a nonempty context is called **type family** or **fibration**. #m/def/type 
Specifically, if $\Gamma \vdash A$ then a type family over $A$ in context $\Gamma$ is given by a judgement
$$
\Gamma, x : A \vdash B.
$$
Often, we make the $x$-dependence explicit in the notation, by writing
$$
\begin{align*}
\Gamma , x : A \vdash B(x).
\end{align*}
$$
This is not meant to invoke an actual function (i.e. term of a [[Π type]]),
but rather is syntactic sugar for a metatheoretic capture-avoiding [[substitution]], so that $B(a) := B(x)[a / x]$.
A **section** picks out a term of $B(x)$ for each $x : A$,
and thus corresponds to a judgement[^2025]
$$
\Gamma , x : A \vdash b : B
$$
which again is usually written
$$
\begin{align*}
\Gamma, x : A \vdash b(a) : B(a).
\end{align*}
$$


[^2025]: 2025\. [[Sources/@rijkeIntroductionHomotopyType2025|Introduction to Homotopy Type Theory]], §1.2, pp. 13–14.

#
---
#state/tidy | #lang/en | #SemBr
