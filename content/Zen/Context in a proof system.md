---
tags:
  - public
---
[[Proof system]]
# Context in a proof system

A **context** is an idiom in the design of proof systems [[Proof system#à la Gentzen]] for a collection of assumptions underlying a given judgement.
Usually we add a judgement for “$\Gamma$ is a context” which is written
$$
\begin{align*}
\Gamma \vdash.
\end{align*}
$$
A judgement in the context $\Gamma$ is written
$$
\begin{align*}
\Gamma \vdash \mathcal{J}
\end{align*}
$$
which informally means “under the assumptions $\Gamma$, the **judgement thesis** $\mathcal{J}$ holds.”
Typically there is an **empty context** or **initial context**
$$
\begin{prooftree}
\AxiomC{}
\UnaryInfC{$\0 \vdash$}
\end{prooftree}
$$
and we write $\vdash \mathcal{J}$ as a shorthand for $\0 \vdash \mathcal{J}$.
We also have the **identity rule**
$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\mathcal{J} \vdash$}
\RL{(id)}
\UnaryInf$\mathcal{ J} \fCenter \mathcal{J}$
\end{prooftree}.
$$

## Cartesian contexts

A proof system with contexts is said to have **cartesian contexts**[^term] if it has some variant **contraction rule**
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma, \mathcal{I}, \mathcal{I}, \Delta \fCenter \mathcal{J}$
\RL{(C)}
\UnaryInf$\Gamma, \mathcal{I}, \Delta \fCenter \mathcal{J}$
\end{prooftree},
$$
and the **weakening rule**
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma, \Delta \fCenter \mathcal{J}$
\AxiomC{$\Gamma, \mathcal{I}, \Delta \vdash$}
\RightLabel{(W)}
\BinaryInf$\Gamma, \mathcal{I}, \Delta \fCenter \mathcal{J}$
\end{prooftree}
,
$$
and the **$\delta$ rule**
$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma, \mathcal{J}, \Delta \vdash$}
\RightLabel{($\delta$)}
\UnaryInf$\Gamma, \mathcal{J}, \Delta \fCenter \mathcal{J}$
\end{prooftree},
$$
although the exact form of these vary depending on the proof system.[^2025]
Note that from the $\delta$ rule one can derive the identity rule.

[^term]: This is my own term, arising from the need to distinguish contexts in intuitionistic (or classical) logic from contexts in linear logic. The term intuitionistic context might be deemed appropriate, but seems loaded, so I have opted for cartesian, which reflects categorical semantics.
[^2025]: see e.g. 2025\. [[Sources/@rijkeIntroductionHomotopyType2025|Introduction to Homotopy Type Theory]], p. 17

#
---
#state/tidy | #lang/en | #SemBr
