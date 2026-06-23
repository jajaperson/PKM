---
date: 2026-06-03
tags:
  - public
---
[[Type theory MOC]]
# Empty type

The <dfn>empty type</dfn>, which we denote by $\bot$,[^1] is motivated in several ways:

1. $\bot$ is the definitionally false proposition under [[propositions as types]], i.e. a proposition with no proof (in the empty context) ^E1
2. $\bot$ is an empty type, analogous to the [[empty set]] $\0$ in set theory. ^E2
3. $\bot$ is an [[Initial and terminal objects|initial]] type. ^E3

A slight wrinkle: We can declare a variable of type $\bot$ as part of a context,
therefore it is incorrect to say $\bot$ is empty in all contexts.
It is better to have a type-theoretic equivalent of [[Ex falso quodlibet]].
This leads naturally to [[#^E3]]: In any context, $\bot$ is the smallest type.

## Standard presentation

Here we give a formal presentation of $\bot$ in the [[cartesian calculus of substitutions]], following _[[@angiuliPrinciplesDependentType2025|Principles of dependent type theory]]_. #m/def/type/ind
The formation rule along is
$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\RL{($\bot$)}
\UnaryInf$\Gamma \fCenter \bot$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\RL{($\bot$-N).}
\UnaryInf$\Delta \fCenter \bot[\gamma] = \bot$
\end{prooftree}
$$

^B


$\bot$ is an [[inductive type]] with no constructors.
Thus there are no introduction rules, and the induction principle gives the elimination rule

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter b : \bot$
\Axiom$\Gamma.\bot \fCenter A$
\RL{($\bot$E).}
\BinaryInf$\Gamma \fCenter \mathbf{absurd}(b) : A[\mathbf{id} b]$
\end{prooftree}
$$

^E


$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter b: \bot$
\Axiom$\Gamma.\bot \fCenter A$
\RL{($\bot$E-N).}
\TrinaryInf$\Delta \fCenter \mathbf{absurd}(b)[\gamma] = \mathbf{absurd}
(b[\gamma]) : A[\gamma.b[\gamma]]$
\end{prooftree}
$$

^EN

We omit an [[η-unicity]] rule in the standard presentation,
since it can be shown given an [[Extensional equality type]].

## Internalizing judgemental structure

In terms of [[Internalizing judgemental structure]], we have for any context $\Gamma$

$$
\begin{align*}
\bot_{\Gamma} \in \opn{Ty}(\Gamma),
\end{align*}
$$

and for any dependent type $\Gamma . \bot \vdash A$ we have

$$
\begin{align*}
\rho_{\Gamma, A} : \opn{Tm}(\Gamma.\bot, A) \cong \{ \star \}.
\end{align*}
$$


#
---
#state/develop | #lang/en | #SemBr

[^1]: Pronounced “bottom.”
