---
tags:
  - public
aliases:
  - type family
  - fibration
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
\Gamma. A \vdash B.
$$
A **section** picks out a term of $B[\mathbf{id}. x]$ for each $x : A$,
and thus corresponds to a judgement[^2025]
$$
\Gamma . A \vdash b : B
$$
When using named contexts in informal type theory, we will often write
$$
\begin{align*}
\Gamma, x : A \vdash b(x) : B(x)
\end{align*}
$$
where $b(x)$ and $B(x)$ are not meant to denote actual functions, but rather the occurance of a substitution, so that $B(y) = B(x)[y / x]$ and $b(y) = b(x)[y / x] : B(y)$.

[^2025]: 2025\. [[Sources/@rijkeIntroductionHomotopyType2025|Introduction to Homotopy Type Theory]], §1.2, pp. 13–14.

#
---
#state/tidy | #lang/en | #SemBr
