---
date: 2026-06-02
tags:
  - public
---
[[Type theory MOC]]
# Unit type

The <dfn>unit type</dfn>, which we denote by $\top$,[^1] is motivated in several ways:

1. $\top$ is the definitionally true proposition under [[propositions as types]] (see also [[subobject classifier]]).
2. $\top$ is a singleton.
3. $\top$ is a [[Types as spaces|space]] with only trivial [[homotopy group|homotopy groups]], i.e. no holes of any dimension.
4. $\top$ is the [[Initial and terminal objects|terminal]] type.

The core idea is that in absolutely any context $\Gamma$,
there is one and only one term $\Gamma \vdash \mathbf{tt} : \top$,
so that all terms of $\top$ are judgementally equal to $\mathbf{tt}$.


## Standard presentation

Here we give a formal presentation of $\mathbf{\Pi}$-types in the [[cartesian calculus of substitutions]], following _[[@angiuliPrinciplesDependentType2025|Principles of dependent type theory]]_. #m/def/type
The formation and introduction are given by

$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\RL{($\top$)}
\UnaryInf$\Gamma \fCenter \top$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\RL{($\top$I)}
\UnaryInf$\Gamma \fCenter \mathbf{tt} : \top$
\end{prooftree}
$$

^T

while we also have the substitution naturality rule

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \top$
\RL{($\top$-N)}
\UnaryInf$\Delta \fCenter \top[\gamma] = \top$
\end{prooftree}
$$

and [[η-unicity]] rule

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : \top$
\RL{($\top \eta$)}
\UnaryInf$\Gamma \fCenter a = \mathbf{tt} : \top$
\end{prooftree}
$$

There is no need for an elimination rule or introduction substitution naturality rule.

## Internalizing judgemental structure

In terms of [[Internalizing judgemental structure]], we have for any context $\Gamma$
$$
\begin{align*}
\top_{\Gamma} &\in \opn{Ty}(\Gamma),
&
\iota_{\Gamma} : \opn{Tm}(\Gamma, \top) \cong \{ \star \}.
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

[^1]: Pronounced “top.”
