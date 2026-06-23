---
date: 2026-06-02
mathLink-blocks:
  E: equality reflection
tags:
  - public
---
[[Type theory MOC]]
# Extensional equality type

So-called $\mathbf{Eq}$-types, also known as <dfn>extensional equality types</dfn>,
are perhaps the simplest form of [[propositional equality]] one can add to a type theory.
The idea is, given terms $\Gamma \vdash x, y : A$, we have a term $\Gamma \vdash \mathbf{refl} : \mathbf{Eq}(A,x,y)$ iff we have the [[judgemental equality]] $\Gamma \vdash x = y : A$.
Thus $\mathbf{Eq}$-types internalize the equality judgement.

A type theory with $\mathbf{Eq}$-types is called <dfn>extensional</dfn>,
the canonical example being [[ETT]].
Despite its friendly appearance, [[#^E]] has far-reaching consequences which make the type theory very badly behaved — See [[ETT has undecidable equality]].

## Standard presentation

We give a formal presentation of $\mathbf{Eq}$-types in the [[cartesian calculus of substitutions]], following _[[@angiuliPrinciplesDependentType2025|Principles of dependent type theory]]_. #m/def/type 
The formation, introduction, and elimination rules are given by
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a, b : A$
\RL{(Eq)}
\UnaryInf$\Gamma \fCenter \mathbf{Eq}(A,a,b)$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\RL{(EqI)}
\UnaryInf$\Gamma \fCenter \mathbf{refl} : \mathbf{Eq}(A,a,a)$
\end{prooftree}
$$

^Eq

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter p : \mathbf{Eq}(A, a,b)$
\RL{(EqE)}
\UnaryInf$\Gamma \fCenter a=b:A$
\end{prooftree}
$$

^E

where the [[#^E|elimination rule]] is called <dfn>equality reflection</dfn>.
We also have a substitution naturality rule
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter a,b : A$
\RL{(Eq-N)}
\BinaryInf$\Delta \fCenter \mathbf{Eq}(A,a,b)[\gamma] = \mathbf{Eq}(A[\gamma], a[\gamma], b[\gamma])$
\end{prooftree}
$$

^N

and an [[η-unicity]] rule
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter p : \mathbf{Eq}(A,a,b)$
\RL{(Eq$\eta$)}
\UnaryInf$\Gamma \fCenter p = \mathbf{refl} : \mathbf{Eq}(A,a,b)$
\end{prooftree}
$$

^eta

validating [[Uniqueness of identity proofs]]
and removing the need for separate naturality rules for [[#^Eq|$\mathrm{EqI}$]].

## Internalizing judgemental structure

The manner in which $\mathbf{Eq}$-types [[Internalizing judgemental structure|internalize judgemental structure]] is straightforward:
We have an operation
$$
\begin{align*}
\mathbf{Eq}_{\Gamma} : \left( \coprod_{A \in \opn{Ty}(\Gamma)} \opn{Tm}(\Gamma,A) \times \opn{Tm}(\Gamma,B) \right) \to \opn{Ty}(\Gamma)
\end{align*}
$$
natural in $\Gamma$ with a family of bijections
$$
\begin{align*}
\iota_{\Gamma,A,a,b} : \opn{Tm}(\Gamma, \mathbf{Eq}(A,a,b)) \cong \{ {\star} :\mid: a = b \}
\end{align*}
$$
also natural in $\Gamma$.

#
---
#state/tidy | #lang/en | #SemBr
