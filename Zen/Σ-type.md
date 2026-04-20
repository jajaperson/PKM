---
aliases:
  - dependent pair
  - dependent sum type
tags:
  - public
mathLink: $\Sigma$-type
mathLink-blocks:
  idea: core idea
---
[[Type theory MOC]]
# $\Sigma$-types

$\mathbf{\Sigma}$-types, also known as **dependent pair types** or **dependent sums**,
are motivated in several ways:

1. $\mathbf{\Sigma}$-types internalize [[Cartesian calculus of substitutions#Context formation|context extension]].
2. $\mathbf{\Sigma}$-types generize binary [[coproduct type|coproducts]] $(+)$ to a coproduct of a family of types indexed by another type.
3. $\mathbf{\Sigma}$-types generalize binary [[Product type|products]] $(\times)$ so that the type of the right element can depend on the type of the left input.
4. $\mathbf{\Sigma}$-types correspond to [[Total space|total spaces]] of a fibration.
5. $\mathbf{\Sigma}$-types correspond to [[existential quantification]] $(\exists)$ over elements of some type.

The core idea is that given a [[Dependent type theory|type family]] (fibration) $\Gamma, x:A \vdash B(x)$,
a term
$$
\begin{align*}
\Gamma \vdash p : \sum_{x:A} B(x)
\end{align*}
$$
corresponds to a pair of terms $\Gamma \vdash \mathbf{fst}(p) : A$ and $\Gamma \vdash \mathbf{snd}(p) : B(\mathbf{fst}(p))$,
and vice versa. ^idea

## Standard presentation

Here we give a formal presentation of $\mathbf{\Sigma}$-types in the [[cartesian calculus of substitutions]], following _[[@angiuliPrinciplesDependentType2025|Principles of dependent type theory]]_. #m/def/type
The formation, introduction, and elimination rules are given by[^1]
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma.A \fCenter B$
\RL{($\Sigma$)}
\UnaryInf$\Gamma \fCenter \mathbf{\Sigma}_\imp{\Gamma}(A,B)$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter b : B[\mathbf{id}.a]$
\RL{($\Sigma$I)}
\BinaryInf$\Gamma \fCenter \langle a, b \rangle _\imp{\Gamma, A, B} : \Sigma(A,B)$
\end{prooftree}
$$

^Sigma

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter p : \mathbf{\Sigma}(A,B)$
\RL{($\Sigma \mathrm{E}_{1}$)}
\UnaryInf$\Gamma \fCenter \mathbf{fst}_\imp{\Gamma, A, B}(p) : A$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter p : \mathbf{\Sigma}(A,B)$
\RL{($\Sigma \mathrm{E}_{2}$)}
\UnaryInf$\Gamma \fCenter \mathbf{snd}_\imp{\Gamma, A, B}(p) : B[\mathbf{id}. \mathbf{fst}(p)]$
\end{prooftree}
$$

^E

while we also have the substitution naturality rules[^2]
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma.A \fCenter B$
\RL{($\mathbf{\Sigma}$-N)}
\BinaryInf$\Delta \fCenter \mathbf{\Sigma}(A,B)[\gamma] = \mathbf{\Sigma}(A[\gamma]. B[\gamma.A])$
\end{prooftree}
$$

^N

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter b : B[\mathbf{id}.a]$
\RL{($\Sigma$I-N)}
\TrinaryInf$\Delta \fCenter \langle a,b \rangle [\gamma] =\langle a[\gamma], b[\gamma] \rangle : \mathbf{\Sigma}(A,B)[\gamma]$
\end{prooftree}
$$

^IN

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter p : \mathbf{\Sigma}(A,B)$
\RL{($\Sigma \mathrm{E}_{1}$-N)}
\BinaryInf$\Delta \fCenter \mathbf{fst}(p)[\gamma] = \mathbf{fst}(p[\gamma]) : A[\gamma]$
\end{prooftree}
$$

^E1N

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter p : \mathbf{\Sigma}(A,B)$
\RL{($\Sigma \mathrm{E}_{2}$-N)}
\BinaryInf$\Delta \fCenter \mathbf{snd}(p)[\gamma] = \mathbf{snd}(p[\gamma]) : B[\mathbf{id}.\mathbf{fst}(p) \circ \gamma]$
\end{prooftree}
$$

^E2N

and judgemental equality rules for [[β-computation]] and [[η-unicity]]

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter b : B[\mathbf{id}.a]$
\RL{($\Sigma\beta_{1}$)}
\BinaryInf$\Gamma \fCenter \mathbf{fst}(\langle a,b \rangle ) = a : A$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter b : B[\mathbf{id}.a]$
\RL{($\Sigma\beta_{2}$)}
\BinaryInf$\Gamma \fCenter \mathbf{snd}(\langle a,b \rangle ) = b : B[\mathbf{id}.a]$
\end{prooftree}
$$

^beta

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter p : \mathbf{\Sigma}(A,B)$
\RL{($\Sigma\eta$)}
\UnaryInf$\Gamma \fCenter p = \langle \mathbf{fst}(p), \mathbf{snd}(p) \rangle : \mathbf{\Sigma}(A,B)$
\end{prooftree}
$$

## Internalizing judgemental structure

In terms of [[Internalizing judgemental structure]], 
we can formalize the correspondence described in the [[#^idea]] with an operation
$$
\begin{align*}
\mathbf{\Sigma}_{\Gamma} : \left(\coprod_{A \in \opn{Ty}(\Gamma)} \opn{Ty}(\Gamma.A)\right) \to \opn{Ty}(\Gamma)
\end{align*}
$$
natural in $\Gamma$ with a family of bijections
$$
\begin{align*}
\iota_{\Gamma,A,B} : \opn{Tm}(\Gamma, \mathbf{\Sigma}_{\Gamma}(A,B)) \cong \coprod_{a \in \opn{Tm}(\Gamma, A)} \opn{Tm}(\Gamma, B[\mathbf{id}.a])
\end{align*}
$$
also natural in $\Gamma$.

#
---
#state/tidy | #lang/en | #SemBr

[^1]: For brevity and laziness, the premisses of the $\mathbf{\Sigma}$ formation rule will be considered presuppositions.

[^2]: Where we invoke [[Substitution extension by a type]].
