---
aliases:
  - dependent function
  - dependent product
tags:
  - public
mathLink: $\mathbf{\Pi}$-type
---
[[Type theory MOC]]
# $\mathbf{\Pi}$-type

**$\mathbf{\Pi}$-types**, also known as **dependent function types** or **dependent products**, are motivated in several ways:

1. $\mathbf{\Pi}$-types internalize _hypothetical judgements_.
2. $\mathbf{\Pi}$-types generalize binary products $(\times)$ to a product of a family of types indexed by another type.
3. $\mathbf{\Pi}$-types generalize functions so that the codomain can depend on the input.
4. $\mathbf{\Pi}$-types correspond to [[space of sections|spaces of sections]].

The core idea is that given a [[Dependent type theory|type family]] (fibration) $\Gamma, x:A \vdash B(x)$,
a term
$$
\begin{align*}
\Gamma \vdash f: \prod_{x:A} B(x)
\end{align*}
$$
corresponds to a section
$$
\begin{align*}
\Gamma, x: A \vdash f(x) : B(x)
\end{align*}
$$
and vice versa.

## Standard presentation

Here we give a formal presentation of $\mathbf{\Pi}$-types in the [[cartesian calculus of substitutions]], following _[[@angiuliPrinciplesDependentType2025|Principles of dependent type theory]]_.
The formation, introduction, and elimination rules are given by[^1]
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma.A \fCenter B$
\RL{($\Pi$)}
\UnaryInf$\Gamma \fCenter \mathbf{\Pi}_\imp{\Gamma}(A.B)$
\end{prooftree}

\qquad

\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma.A \fCenter b: B$
\RL{($\Pi I$)}
\UnaryInf$\Gamma \fCenter \lambda_\imp{\Gamma,A,B}(b) : \mathbf{\Pi}(A.B)$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter f : \mathbf{\Pi} (A. B)$
\RL{($\Pi E$)}
\BinaryInf$\Gamma \fCenter \mathbf{app}_\imp{\Gamma,A,B}(f,a) : B[\mathbf{id}. a]$
\end{prooftree}
$$
while we also have the substitution naturality rules
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma.A \fCenter B$
\BinaryInf$\Delta \fCenter \mathbf{\Pi}(A.B)[\gamma] = \mathbf{\Pi}(A[\gamma]. B[(\gamma \circ \mathbf{p}). \mathbf{q}])$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma. A \fCenter b: B$
\BinaryInf$\Delta \fCenter \lambda(b)[\gamma] = \lambda(b[(\gamma \circ \mathbf{p}). \mathbf{q}]) : \mathbf{\Pi}(A.B)[\gamma]$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma: \Gamma$
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A.B)$
\TrinaryInf$\Delta \fCenter \mathbf{app}(f,a)[\gamma] = \mathbf{app}(f[\gamma], a[\gamma]) : B[(\mathbf{id} . a) \circ \gamma]$
\end{prooftree}
$$
and judgemental computation rules for [[β-reduction]] and [[η-conversion]]
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma.A \fCenter b : B$
\RL{($\Pi\beta$)}
\BinaryInf$\Gamma \fCenter \mathbf{app}(\lambda(b), a) = b[\mathbf{id}.a] : B[\mathbf{id}. a]$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A.B)$
\RL{($\Pi \eta$)}
\UnaryInf$\Gamma \fCenter f = \lambda(\mathbf{app}(f[\mathbf{p}, \mathbf{q}])) : \mathbf{\Pi}(A.B)$
\end{prooftree}
$$

In terms of [[Internalizing judgemental structure]], we can formalize the notion of the correspondence outlined above as an operation
$$
\begin{align*}
\mathbf{\Pi}_{\Gamma} : \left(\coprod_{A \in \opn{Ty}(\Gamma)} \opn{Ty}(\Gamma.A)\right) \to \opn{Ty}(\Gamma)
\end{align*}
$$
natural in $\Gamma$ with a family of bijections
$$
\begin{align*}
\iota_{\Gamma,A,B} : \opn{Tm}(\Gamma, \mathbf{\Pi}_{\Gamma}(A,B)) \cong \opn{Tm}(\Gamma.A, B)
\end{align*}
$$
also natural in $\Gamma$. 
This gives the inference rules above.

#
---
#state/tidy | #lang/en | #SemBr

[^1]: For brevity and laziness, the $\mathbf{\Pi}$ formation rule will be considered a _presuppositi
