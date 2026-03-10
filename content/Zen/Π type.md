---
aliases:
  - dependent function
  - dependent product type
tags:
  - public
mathLink: $\Pi$ type
---
[[Type theory MOC]]
# $\Pi$ type

A term
$$
\begin{align*}
f :\prod_{x:A} B(x)
\end{align*}
$$
of a  **$\Pi$ type** or **dependent product type**
describes a **dependent function** from a type $A$ to a [[Dependent type theory#Type family]] $B(x)$,
that is a function where the codomain is allowed to vary depending on the input.
Thus a $\Pi$ type describes the “space of sections“ of the fibration $B(x)$.

## Standard presentation

The standard presentation is as a [[negative type]] as follows: #m/def/type

1. Formation rule
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : A \fCenter B(x)$
  \RL{($\Pi$)}
  \UnaryInf$\Gamma \fCenter \prod_{x:A} B(x)$
  \end{prooftree}
  $$
  with congruence rule
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma \fCenter A = A'$
\Axiom$\Gamma, x : A \fCenter B(x) = B'(x)$
\RL{($\Pi$=)}
\BinaryInf$\Gamma \fCenter \prod_{x : A}B(x) = \prod_{x : A'} B'(x)$
  \end{prooftree}
  $$
2. Introduction rule (**$\lambda$-abstraction**)
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : A \fCenter b(x) : B(x)$
  \RL{($\lambda$)}
\UnaryInf$\Gamma \fCenter \lambda x.\, b(x) : \prod_{x : A} B(x)$
  \end{prooftree}
  $$
  with congruence rule
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : A \fCenter b(x) = b'(x) : B(x)$
  \RL{($\lambda$=)}
  \UnaryInf$\Gamma \fCenter \lambda x.\,b(x) = \lambda x. b'(x) : \prod_{x:A} B(x)$
  \end{prooftree}
  $$
3. Elimination rule (**evaluation**)
   $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma \fCenter a : A$
  \Axiom$\Gamma \fCenter f : \prod_{x:A} B(x)$
  \RL{(ev)}
  \BinaryInf$\Gamma \fCenter f\, x : B(a)$
  \end{prooftree}
  $$
  with congruence rule
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma \fCenter f = g : \prod_{x : A} B(x)$
  \RL{(ev=)}
  \UnaryInf$\Gamma, x : A \fCenter f\,x = g\, x : B(x)$
  \end{prooftree}
  $$
4. Judgemental computation rules for [[β-reduction]]
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : A \fCenter b(x) : B(x)$
  \RL{($\beta$)}
  \UnaryInf$\Gamma, x : A \fCenter (\lambda y.\,b(y))\,x = b(x) : B(x)$
  \end{prooftree}
  $$
  and [[η-reduction]]
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma \fCenter f : \prod_{x:A}B(x)$
  \RL{($\eta$)}
  \UnaryInf$\Gamma \fCenter \lambda x.\,f\, x = f : \prod_{x:A}B(x)$
  \end{prooftree}
  $$

#
---
#state/tidy | #lang/en | #SemBr
