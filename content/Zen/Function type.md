---
mathLink-blocks:
  I: ${\to}\text{I}$
  E: ${\to}\text{E}$
  FN: ${\to}\text{-N}$
  IN: ${\to}\text{I-N}$
  EN: ${\to}\text{E-N}$
  beta: ${\to}\beta$
  eta: ${\to}\eta$
tags:
  - public
---
[[Type theory MOC]]
# Function types

Given types $A$ and $B$, the **function type** $A \to B$ contains mappings whose inputs are in $A$ and outputs are in $B$.

## Standard presentation

In the [[cartesian calculus of substitutions]] we can introduce function types with the following typing rules.
The formation, introduction, and elimination rules are

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\Axiom$\Gamma \fCenter B$
\RL{($\to$)}
\BinaryInf$\Gamma \fCenter A \to_\imp{\Gamma} B$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter B$
\Axiom$\Gamma. A \fCenter b : B[\mathbf{p}]$
\RL{($\to$I)}
\BinaryInf$\Gamma \fCenter \lambda'_\imp{\Gamma,A,B}(n) : A \to B$
\end{prooftree}
$$
^I

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter f : A \to B$
\RL{($\to$E)}
\BinaryInf$\Gamma \fCenter \mathbf{app}'_\imp{\Gamma, A, B}(f,a) : B$
\end{prooftree}
$$
^E

while we also have the substitution naturality rules

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter A$
\Axiom$\Gamma \fCenter B$
\RL{($\to$-N)}
\TrinaryInf$\Delta \fCenter (A \to B)[\gamma] = A[\gamma] \to B[\gamma]$
\end{prooftree}
$$
^FN

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter B$
\Axiom$\Gamma. A \fCenter b : B[\mathbf{p}]$
\RL{($\to$I-N)}
\TrinaryInf$\Gamma \fCenter \lambda'(b)[\gamma] = \lambda'(b[\gamma.A]) : A[\gamma] \to B[\gamma]$
\end{prooftree}
$$
^IN

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter f : A \to B$
\TrinaryInf$\Delta \fCenter \mathbf{app}'(f,a)[\gamma] = \mathbf{app}'(f[\gamma], a[\gamma]) : B[\gamma]$
\end{prooftree}
$$
^EN

and judgemental computation rules for [[β-reduction]] and [[η-conversion]]
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter B$
\Axiom$\Gamma. A \fCenter b : B[\mathbf{p}]$
\RL{(${\to}\beta$)}
\TrinaryInf$\Gamma \fCenter \mathbf{app}'(\lambda'(b), a) = b[\mathbf{id}.a] : B$
\end{prooftree}
$$
^beta

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter f : A \to B$
\UnaryInf$\Gamma \fCenter f = \lambda'(\mathbf{app}'(f[\mathbf{p}], \mathbf{q})) : A \to B$
\end{prooftree}
$$
^eta


## From $\Pi$-types

In the [[Cartesian calculus of substitutions]] with [[Π-type|$\Pi$-types]],
it is not necessary to give separate typing rules to establish function types.
Instead we have
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\RL{(W)}
\UnaryInf$\Gamma.A \fCenter \mathbf{p} : \Gamma$
\Axiom$\Gamma \fCenter B$
\BinaryInf$\Gamma . A \fCenter B[\mathbf{p}]$
\RL{($\Pi$)}
\UnaryInf$\Gamma \fCenter \mathbf{\Pi}(A, B[\mathbf{p}])$
\end{prooftree}
$$
and so we can define $A \to B := \mathbf{\Pi}(A, B[\mathbf{p}])$.

> [!check]- Derivation of above typing rules
> For [[#^I]] we have
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma.A \fCenter b : B[\mathbf{p}]$
> \RL{($\Pi$I)}
> \UnaryInf$\Gamma \fCenter \lambda(b) : \mathbf{\Pi}(A, B[\mathbf{p}])$
> \end{prooftree}
> $$
> so we take $\lambda'_\imp{\Gamma, A, B}(b) = \lambda_\imp{\Gamma, A, B[\mathbf{p}]}(b)$.
> 
> For [[#^E]] we have
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter a : A$
> \Axiom$\Gamma \fCenter f : \mathbf{\Pi}(A, B[\mathbf{p}])$
> \RL{($\Pi$E)}
> \BinaryInf$\Gamma \fCenter \mathbf{app}(f, a) : B[\mathbf{p} \circ \mathbf{id}. a]$
> \RL{(=$\beta \mathbf{p}$)}
> \UnaryInf$\Gamma \fCenter \mathbf{app}(f,a) :  B$
> \end{prooftree}
> $$
> so we take $\mathbf{app}'_\imp{\Gamma, A, B}(f,a) = \mathbf{app}_\imp{\Gamma, A, B[\mathbf{p}]}(f,a)$.
> 
> 
> The derivations of [[#^FN]], [[#^IN]], [[#^EN]], [[#^beta]], and [[#^eta]] follow directly from those of the [[Π-type]] taking into account the equalities
> $$
> \begin{align*}
> \mathbf{p} \circ \mathbf{id}.a &= \mathbf{id}, &
> \mathbf{p} \circ \gamma.a[\gamma] &= \gamma
> \end{align*}
> $$
> which follow from [[Cartesian calculus of substitutions#^beta|$\beta \mathbf{p}$]]. <span class="QED"/>



#
---
#state/develop | #lang/en | #SemBr
