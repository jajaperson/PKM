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
  beta: $\Pi \eta$
  E: $\Pi \mathrm{E}$
  N: $\Pi\text{-N}$
  IN: $\Pi\text{I-N}$
  EN: $\Pi\text{E-N}$
  etap : $\Pi \eta'$
  betap : $\Pi \beta'$
  Ep : $\Pi \mathrm{E}'$
  EpN : $\Pi \mathrm{E}'-N$
  idea: core idea
---
[[Type theory MOC]]
# $\mathbf{\Pi}$-types

**$\mathbf{\Pi}$-types**, also known as **dependent function types** or **dependent products**, are motivated in several ways:

1. $\mathbf{\Pi}$-types internalize _hypothetical judgements_.
2. $\mathbf{\Pi}$-types generalize binary [[Product type|products]] $(\times)$ to a product of a family of types indexed by another type.
3. $\mathbf{\Pi}$-types generalize [[Function type|functions]] $(\to)$ so that the codomain can depend on the input.
4. $\mathbf{\Pi}$-types correspond to [[space of sections|spaces of sections]].
5. $\mathbf{\Pi}$-types correspond to [[universal quantification]] $(\forall)$ over elements of some type.

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

^idea

## Standard presentation

Here we give a formal presentation of $\mathbf{\Pi}$-types in the [[cartesian calculus of substitutions]], following _[[@angiuliPrinciplesDependentType2025|Principles of dependent type theory]]_. #m/def/type
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

^Pi

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter f : \mathbf{\Pi} (A,B)$
\RL{($\Pi$E)}
\BinaryInf$\Gamma \fCenter \mathbf{app}_\imp{\Gamma,A,B}(f,a) : B[\mathbf{id}. a]$
\end{prooftree}
$$

^E

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

and judgemental equality rules for [[β-computation]] and [[η-unicity]]
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

In terms of [[Internalizing judgemental structure]], we can formalize the correspondence described in the [[#^idea]] with an operation
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
Translation directly into inference rules gives us almost exactly those given above, 
except that [[#^E]] would look more like
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A,B)$ \RL{$(\Pi \mathrm{E}'$)}
\UnaryInf$\Gamma.A \fCenter \lambda^{-1}_\imp{\Gamma, A, B}(f) : B$
\end{prooftree}
$$

^Ep

with the naturality rule

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A,B)$
\RL{($\Pi \mathrm{E}'$-N)}
\BinaryInf$\Delta. A[\gamma] \fCenter \lambda^{-1}(f) [\gamma.A] = \lambda^{-1}(f[\gamma]) : B[\gamma.A]$
\end{prooftree}
$$

^EpN

and the judgemental equality rules
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma. A \fCenter b : B$ \RL{($\Pi \beta'$)}
\UnaryInf$\Gamma. A \fCenter \lambda^{-1}(\lambda(b)) = b : B$
\end{prooftree}
$$

^betap

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A,B)$
\RL{$(\Pi\eta')$}
\UnaryInf$\Gamma \fCenter f = \lambda( \lambda^{-1}(f)) : \mathbf{\Pi}(A,B)$
\end{prooftree}
$$

^etap

These are however more awkward to use since they restrict the shape of contexts.
The rules presented above are derivable from these by defining $\mathbf{app}_\imp{\Gamma, A, B}(f, a) := \lambda^{-1}_\imp{\Gamma , A, B}(f) [\mathbf{id}. a]$:

> [!check]- Proof
> The derivation
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter a : A$
> \UnaryInf$\Gamma \fCenter \mathbf{id}.a : \Gamma.A$
> \Axiom$\Gamma \fCenter f : \mathbf{\Pi} (A,B)$
> \RL{($\Pi \mathrm{E}'$)}
> \UnaryInf$\Gamma.A \fCenter \lambda^{-1}(f) : B$
> \BinaryInf$\Gamma \fCenter \lambda^{-1}(f)[\mathbf{id}.a] : B[\mathbf{id}. a]$ \RL{(=)}
> \UnaryInf$\Gamma \fCenter \mathbf{app}(f,a) : B[\mathbf{id}.a]$
> \end{prooftree}
> $$
> gives [[#^E]].
> 
> Noting that $\gamma.A \circ \mathbf{id}.a[\gamma] =\gamma.a[\gamma] = \mathbf{id}.a \circ \gamma$ by [[Substitution extension by a type#^P1]] and [[Cartesian calculus of substitutions#^P2]], the derivation
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter a : A$
> \Axiom$\Delta \fCenter \gamma : \Gamma$
> \BinaryInf$\Delta \fCenter a[\gamma] : A[\gamma]$
> \UnaryInf$\Delta \fCenter \mathbf{id}. a[\gamma] : \Delta.A[\gamma]$
>     \Axiom$\Delta \fCenter \gamma: \Gamma$
>     \Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A,B)$
>     \RL{($\Pi \mathrm{E}'$-N)}
>     \BinaryInf$\Delta.A[\gamma] \fCenter \lambda^{-1}(f) [\gamma.A] = \lambda^{-1}(f[\gamma]) : B[\gamma.A]$
> \BinaryInf$\Delta \fCenter \lambda^{-1}(f)[\gamma.A \circ \mathbf{id}. a[\gamma]] = \lambda^{-1}(f[\gamma])[\mathbf{id}.a[\gamma]] : B[\gamma.A \circ \mathbf{id}.a[\gamma]]$
> \RL{(=)}
> \UnaryInf$\Delta \fCenter \lambda^{-1}(f)[\mathbf{id}.a \circ \gamma] = \lambda^{-1}(f[\gamma])[\mathbf{id}.a[\gamma]] : B[\gamma.a[\gamma]]$
> \RL{(=)}
> \UnaryInf$\Delta \fCenter \mathbf{app}(f,a)[\gamma] = \mathbf{app}(f[\gamma], a[\gamma]) : B[\gamma.a[\gamma]]$
> \end{prooftree}
> $$
> gives [[#^EN]].
> 
> The derivation
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter a:A$
> \UnaryInf$\Gamma \fCenter \mathbf{id}.a : \Gamma.A$
> \Axiom$\Gamma.A \fCenter b : B$
> \RL{($\Pi\beta'$)}
> \UnaryInf$\Gamma.A \fCenter \lambda^{-1}(\lambda(b)) = b : B$
> \BinaryInf$\Gamma \fCenter \lambda^{-1}(\lambda(b))[\mathbf{id}.a] = b[\mathbf{id}.a]$
> \RL{(=)}
> \UnaryInf$\Gamma \fCenter \mathbf{app}(\lambda(b), a) = b[\mathbf{id}.a] : B[\mathbf{id}. a]$
> \end{prooftree}
> $$
> gives [[#^beta]].
> 
> Noting $\mathbf{id} = \mathbf{p}. \mathbf{q} = \mathbf{p}.A \circ \mathbf{id}.\mathbf{q}$ by [[Substitution extension by a type#^P1]], the derivation
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A,B)$
> \RL{$(\Pi\eta')$}
> \UnaryInf$\Gamma \fCenter f= \lambda( \lambda^{-1}(f)) : \mathbf{\Pi}(A,B)$
> \RL{(=)}
> \UnaryInf$\Gamma \fCenter f = \lambda(\lambda^{-1}(f))[\mathbf{p}.A \circ \mathbf{id}.\mathbf{q}] : \mathbf{\Pi}(A,B)$
> \UnaryInf$\Gamma \fCenter f = \lambda(\lambda^{-1}(f[\mathbf{p}])[\mathbf{id}.\mathbf{q}]) : \mathbf{\Pi}(A,B)$
> \RL{(=)}
> \UnaryInf$\Gamma \fCenter f = \lambda(\mathbf{app}(f[\mathbf{p}], \mathbf{q})) : \mathbf{\Pi}(A,B)$
> \end{prooftree}
> $$
> gives [[#^etap]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

[^1]: For brevity and laziness, the premisses of the $\mathbf{\Pi}$ formation rule will be considered presuppositions.

[^2]: Where we invoke [[Substitution extension by a type]].
