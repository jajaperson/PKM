---
mathLink-blocks:
  N: ${\times}\text{-N}$
tags:
  - public
---
[[Type theory MOC]]
# Product type

Given types $A$ and $B$, the **product type** $A \times B$ contains ordered pairs $(a,b)$ for $a : A$ and $b:B$,
i.e. it generalizes the [[cartesian product]].
Under [[propositions as types]], this corresponds to [[conjunction]], since a proof of $A \times B$ gives a proof of $A$ and a proof of $B$.

## Standard presentation

In the [[cartesian calculus of substitutions]] we can introduce product types with the following typing rules.
The formation, introduction, and elimination rules are

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\Axiom$\Gamma \fCenter B$
\RL{($\times$)}
\BinaryInf$\Gamma \fCenter A \times_\imp{\Gamma}B$
\end{prooftree}

\qquad

\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a: A$
\Axiom$\Gamma \fCenter b:B$
\RL{($\times$I)}
\BinaryInf$\Gamma \fCenter \langle a,b \rangle '_\imp{\Gamma,A,B} : A \times B$
\end{prooftree}
$$

^x

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter p : A \times B$
\RL{(${\times}\mathrm{E}_{1}$)}
\UnaryInf$\Gamma \fCenter \mathbf{fst}'_\imp{\Gamma,A,B}(p) : A$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter p : A \times B$
\RL{(${\times}\mathrm{E}_{2}$)}
\UnaryInf$\Gamma \fCenter \mathbf{snd}'_\imp{\Gamma,A,B}(p) : B$
\end{prooftree}
$$

while we also have the substitution naturality rules

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter A$
\Axiom$\Gamma \fCenter B$
\RL{$(\times$-N)}
\TrinaryInf$\Delta \fCenter (A \times B)[\gamma] = A[\gamma] \times B[\gamma]$
\end{prooftree}
$$

^N

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter b : B$
\RL{($\times$I-N)}
\TrinaryInf$\Delta \fCenter \langle a,b \rangle '[\gamma] = \langle a[\gamma], b[\gamma]' \rangle : A[\gamma] \times B[\gamma]$
\end{prooftree}
$$

^IN

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter p : A \times B$
\RL{($\times \mathrm{E}_{1}$-N)}
\BinaryInf$\Delta \fCenter \mathbf{fst}'(p)[\gamma] = \mathbf{fst}'(p[\gamma]) : A[\gamma]$
\end{prooftree}
$$

^E1N

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter p : A \times B$
\RL{($\times \mathrm{E}_{2}$-N)}
\BinaryInf$\Delta \fCenter \mathbf{snd}'(p)[\gamma] = \mathbf{snd}'(p[\gamma]) : B[\gamma]$
\end{prooftree}
$$

^E2N

and judgemental computation rules for [[β-computation]] and [[η-unicity]]
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter b : B$
\RL{(${\times}\beta_{1}$)}
\BinaryInf$\Gamma \fCenter \mathbf{fst}'(\langle a,b \rangle )' = a : A$
\end{prooftree}
$$

^beta1

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma \fCenter b : B$
\RL{(${\times}\beta_{2}$)}
\BinaryInf$\Gamma \fCenter \mathbf{snd}'(\langle a,b \rangle )' = b : B$
\end{prooftree}
$$

^beta2

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter p : A \times B$
\RL{(${\times}\eta$)}
\UnaryInf$\Gamma \fCenter p = \langle \mathbf{fst}'(p), \mathbf{snd}'(p) \rangle ' : A \times B$
\end{prooftree}
$$

^eta

## From $\Sigma$-types

In the [[Cartesian calculus of substitutions]] with [[Σ-type|$\Sigma$-types]],
it is not necessary to give separate typing rules to establish product types.
Instead we have
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\RL{(W)}
\UnaryInf$\Gamma.A \fCenter \mathbf{p} : \Gamma$
\Axiom$\Gamma \fCenter B$
\BinaryInf$\Gamma . A \fCenter B[\mathbf{p}]$
\RL{($\Sigma$)}
\UnaryInf$\Gamma \fCenter \mathbf{\Sigma}(A, B[\mathbf{p}])$
\end{prooftree}
$$
and so we can define $A \times_\imp{\Gamma} B := \mathbf{\Sigma}_\imp{\Gamma}(A, B[\mathbf{p}])$.

> [!check]- Derivation of above typing rules
> For [[#^x|${\times}\mathrm{I}$]], we have
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter a : A$
>     \Axiom$\Gamma \fCenter b : B$ \RL{(W)}
>     \UnaryInf$\Gamma.A \fCenter b[\mathbf{p}] : B[\mathbf{p}]$
> \BinaryInf$\Gamma \fCenter \langle a,b[\mathbf{p}] \rangle :  \mathbf{\Sigma}(A,B[\mathbf{p}])$
> \end{prooftree}
> $$
> so we take $\langle a,b \rangle'_\imp{\Gamma,A,B} := \langle a,b[\mathbf{p}] \rangle_\imp{\Gamma,A,B[\mathbf{p}]}$.
> 
> For [[#^E|${\times}\mathrm{E}_1$]] we have
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter p : \mathbf{\Sigma}(A,B[\mathbf{p}])$
> \UnaryInf$\Gamma \fCenter \mathbf{fst}(p) : A$
> \end{prooftree}
> $$
> so we take $\mathbf{fst}'_\imp{\Gamma,A,B} := \mathbf{fst}_\imp{\Gamma,A,B[\mathbf{p}]}$.
> 
> For [[#^E|${\times}\mathrm{E}_2$]] we have
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter p : \mathbf{\Sigma}(A, B[\mathbf{p}])$
> \UnaryInf$\Gamma \fCenter \mathbf{snd}(p) : B[\mathbf{p} \circ \mathbf{id}. \mathbf{fst}(p)]$
> \UnaryInf$\Gamma \fCenter \mathbf{snd}(p) : B$
> \end{prooftree}
> $$
> so we take $\mathbf{snd}'_\imp{\Gamma,A,B} := \mathbf{snd}_\imp{\Gamma,A,B[\mathbf{p}]}$.
> 
> The equalities follow. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
