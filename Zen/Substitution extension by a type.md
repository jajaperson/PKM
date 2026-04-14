---
tags:
  - public
---
[[Cartesian calculus of substitutions]]
# Substitution extension by a type

Given $\Delta \vdash \gamma : \Gamma$ and $\Gamma \vdash A$, we can define the **extension** $\gamma . A$ of $\gamma$ by $A$ as
$$
\begin{align*}
\Delta . A[\gamma] \vdash \gamma.A = (\gamma \circ \mathbf{p}) . \mathbf{q} : \Gamma. A.
\end{align*}
$$
with the derivation
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter A$
\BinaryInf$\Delta \fCenter A[\gamma]$
\UnaryInf$\Delta. A[\gamma] \fCenter \mathbf{p}_\imp{\Gamma, A[\gamma]}: \Delta$
\BinaryInf$\Delta. A[\gamma] \fCenter \gamma  \circ \mathbf{p}_\imp{\Gamma, A[\gamma]} : \Gamma$

\Axiom$\Gamma \fCenter A$
    \Axiom$\Delta \fCenter \gamma : \Gamma$
    \Axiom$\Gamma \fCenter A$
    \BinaryInf$\Delta \fCenter A[\gamma]$
    \RL{(V)}
    \UnaryInf$\Delta.A[\gamma] \fCenter \mathbf{q}_\imp{\Gamma, A[\gamma]} : A[\gamma \circ \mathbf{p}]$
\RL{(E)}
\TrinaryInf$\Delta. A[\gamma] \fCenter (\gamma \circ \mathbf{p}_\imp{\Gamma, A[\gamma]}) . \mathbf{q}_\imp{\Gamma, A[\gamma]} : \Gamma. A$
\end{prooftree}
$$

## Properties

The following are [[Derivable rule|derivable]]:

1. $$
    \begin{prooftree}
    \def\fCenter{\vdash}
    \Axiom$\Xi \fCenter \delta : \Delta$
    \Axiom$\Delta \fCenter \gamma : \Gamma$
    \Axiom$\Xi \fCenter a : A[\gamma \circ \delta]$
    \RL{$(\Rightarrow)$}
    \TrinaryInf$\Xi \fCenter \gamma . A \circ \delta . a = (\gamma \circ \delta). a : \Gamma. A$
    \end{prooftree}
    $$
    ^P1

2. $$
    \begin{prooftree}
    \def\fCenter{\vdash}
    \Axiom$\Xi \fCenter \delta : \Delta$
    \Axiom$\Delta \fCenter \gamma : \Gamma$
    \Axiom$\Gamma \fCenter A$
    \RL{$(\Rightarrow)$}
    \TrinaryInf$\Xi.A[\gamma \circ \delta] \fCenter \gamma.A \circ \delta . A[\gamma] = (\gamma \circ \delta). A : \Gamma. A$
    \end{prooftree}
    $$
    ^P2

3. $$
    \begin{prooftree}
    \def\fCenter{\vdash}
    \Axiom$\Gamma \fCenter A$
    \RL{($\Rightarrow$)}
    \UnaryInf$\Gamma.A \fCenter \mathbf{id}.A = \mathbf{id} : \Gamma.A$
    \end{prooftree}
    $$
    ^P3

> [!check]- Proof of 1–3
> For [[#^P1]], expanding definitions and using [[Cartesian calculus of substitutions#^P2]] gives
> $$
> \begin{align*}
> \gamma . A \circ \delta . a
> &= (\gamma \circ \mathbf{p}) . \mathbf{q} \circ \delta.a \\
> &= (\gamma \circ \mathbf{p} \circ \delta.a) . \mathbf{q}[\delta.a] \\
> &= (\gamma \circ \delta). a
> \end{align*}
> $$
> completing the proof of [[#^P1]].
> 
> Applying this result to [[#^P2]] gives
> $$
> \begin{align*}
> \gamma. A \circ \delta . A[\gamma]
> &= \gamma.A \circ (\delta \circ \mathbf{p}) . \mathbf{q} \\
> &= (\gamma \circ \delta \circ \mathbf{p}). \mathbf{q} \\
> &= (\gamma \circ \delta) . A
> \end{align*}
> $$
> proving [[#^P2]].
> 
> For [[#^P3]] we have $\mathbf{id}. A = (\mathbf{id} \circ \mathbf{p}) . \mathbf{q} = \mathbf{p}. \mathbf{q} = (\mathbf{p} \circ \mathbf{id}). \mathbf{q}[\mathbf{id}] = \mathbf{id}$
> by [[Cartesian calculus of substitutions#^eta]]. <span class="QED"/>

^2477da


#
---
#state/tidy | #lang/en | #SemBr
