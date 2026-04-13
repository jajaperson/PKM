---
aliases:
  - dependent function
  - dependent product
  - Pi-type
tags:
  - public
mathLink: $\mathbf{\Pi}$-type
mathLink-blocks:
  eta: $\Pi \eta$
  beta: $\Pi \beta$
  N: $\Pi\text{-N}$
  IN: $\Pi\text{I-N}$
  EN: $\Pi\text{E-N}$
---
[[Type theory MOC]]
# $\mathbf{\Pi}$-types

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
\UnaryInf$\Gamma \fCenter \mathbf{\Pi}_\imp{\Gamma}(A,B)$
\end{prooftree}

\qquad

\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma.A \fCenter b: B$
\RL{($\Pi$I)}
\UnaryInf$\Gamma \fCenter \lambda_\imp{\Gamma,A,B}(b) : \mathbf{\Pi}(A,B)$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter f : \mathbf{\Pi} (A,B)$
\RL{($\Pi$E)}
\BinaryInf$\Gamma \fCenter \mathbf{app}_\imp{\Gamma,A,B}(f,a) : B[\mathbf{id}. a]$
\end{prooftree}
$$
while we also have the substitution naturality rules[^2]
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma.A \fCenter B$
\RL{($\Pi$-N)}
\BinaryInf$\Delta \fCenter \mathbf{\Pi}(A,B)[\gamma] = \mathbf{\Pi}(A[\gamma]. B[\gamma.A])$
\end{prooftree}
$$
^N

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma. A \fCenter b: B$
\RL{($\Pi$I-N)}
\BinaryInf$\Delta \fCenter \lambda(b)[\gamma] = \lambda(b[\gamma.A]) : \mathbf{\Pi}(A,B)[\gamma]$
\end{prooftree}
$$
^IN

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma: \Gamma$
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A,B)$
\RL{($\Pi$E-N)}
\TrinaryInf$\Delta \fCenter \mathbf{app}(f,a)[\gamma] = \mathbf{app}(f[\gamma], a[\gamma]) : B[\gamma.a[\gamma]]$
\end{prooftree}
$$
^EN

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
^beta

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A,B)$
\RL{($\Pi \eta$)}
\UnaryInf$\Gamma \fCenter f = \lambda(\mathbf{app}(f[\mathbf{p}], \mathbf{q})) : \mathbf{\Pi}(A,B)$
\end{prooftree}
$$
^eta

> [!check]- Meta-well-typed
> To show that [[#^EN]] is meta-well-typed, we show that both terms have the claimed type.
> First note,
> $$
> \begin{prooftree}
> \Axiom$\Delta \fCenter \gamma: \Gamma$
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter a : A$
> \Axiom$\Gamma \fCenter f : \mathbf{\Pi} (A,B)$
> \RL{($\Pi$E)}
> \BinaryInf$\Gamma \fCenter \mathbf{app}(f,a) : B[\mathbf{id}. a]$
> \BinaryInf$\Delta \fCenter \mathbf{app}(f,a)[\gamma] : B[\mathbf{id}.a \circ \gamma]$
> \end{prooftree}
> $$
> and by [[Cartesian calculus of substitutions#^P2]], $\mathbf{id}. a \circ \gamma = \gamma . a[\gamma]$.
> On the other hand,
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Delta \fCenter \gamma: \Gamma$
> \Axiom$\Gamma \fCenter a: A$
> \BinaryInf$\Delta \fCenter a[\gamma] : A[\gamma]$
> \def\fCenter{\vdash}
>     \Axiom$\Delta \fCenter \gamma: \Gamma$
>     \Axiom$\Gamma \fCenter f: \mathbf{\Pi}(A,B)$
>     \BinaryInf$\Delta \fCenter f[\gamma] : \mathbf{\Pi}(A,B)[\gamma]$
>     \UnaryInf$\Delta \fCenter f[\gamma] : \mathbf{\Pi}(A[\gamma], B[\gamma. A])$
> \RL{($\Pi$E)}
> \BinaryInf$\Delta \fCenter \mathbf{app}(f[\gamma], a[\gamma]) : B[\gamma.A \circ \mathbf{id}. a[\gamma]]$
> \end{prooftree}
> $$
> Now [[Cartesian calculus of substitutions#^P2]] gives $\mathbf{id}.a \circ \gamma = \gamma .  a[\gamma]$,
> and [[Substitution extension by a type#^P1]] gives $\gamma.A \circ \mathbf{id}.a[\gamma] = \gamma.a[\gamma]$,
> so the types agree.
> 
> To see that [[#^eta]] is meta-well-typed, note
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter A$
> \RL{(V)}
> \UnaryInf$\Gamma.A \fCenter \mathbf{q} : A[\mathbf{p}]$
>     \Axiom$\Gamma \fCenter A$
>     \RL{(W)}
>     \UnaryInf$\Gamma. A \fCenter \mathbf{p}: \Gamma$
>         \Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A,B)$
>     \BinaryInf$\Gamma.A \fCenter f[\mathbf{p}] : \mathbf{\Pi}(A,B)[\mathbf{p}]$
>     \RL{(=$\Pi$-N)}
>     \UnaryInf$\Gamma.A \fCenter f[\mathbf{p}] : \mathbf{\Pi}(A[\mathbf{p}], B[ \mathbf{p}. A])$
> \RL{($\Pi$E)}
> \BinaryInf$\Gamma. A \fCenter \mathbf{app}(f[\mathbf{p}], \mathbf{q}) : B[\mathbf{p}.A \circ \mathbf{id}. \mathbf{q}]$
> \RL{(=*)}
> \UnaryInf$\Gamma. A \fCenter \mathbf{app}(f[\mathbf{p}], \mathbf{q}) : B$
> \RL{($\Pi$I)}
> \UnaryInf$\Gamma \fCenter\lambda(\mathbf{app}(f[\mathbf{p}], \mathbf{q})) : \Pi(A,B)$
> \end{prooftree}
> $$
> where $\text{=*}$ is conversion along the equality
> $$
> \begin{align*}
> \mathbf{p}. A \circ \mathbf{id}. \mathbf{q} = (\mathbf{p} \circ \mathbf{id}) . \mathbf{q}[\mathbf{id}] = \mathbf{id}
> \end{align*}
> $$
> which follows from [[Substitution extension by a type#^P1]] and [[Cartesian calculus of substitutions#^eta]].
> 
> ^0d36ba

## Internalizing judgemental structure

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

#
---
#state/tidy | #lang/en | #SemBr

[^1]: For brevity and laziness, the $\mathbf{\Pi}$ formation rule will be considered a _presupposition_

[^2]: Where we invoke [[Substitution extension by a type]].
