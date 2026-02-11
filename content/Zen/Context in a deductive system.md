---
tags:
  - public
---
[[Proof system]]
# Context in a deduction system

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
Typically there is an **empty context**
$$
\begin{prooftree}
\AxiomC{}
\UnaryInfC{$\0 \vdash$}
\end{prooftree}
$$
and we write $\vdash \mathcal{J}$ as a shorthand for $\0 \vdash \mathcal{J}$.
Fundamental properties of contexts include **weakening**
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma, \Delta \fCenter \mathcal{J}$
\AxiomC{$\Gamma, \mathcal{I}, \Delta \vdash$}
\RightLabel{\,W}
\BinaryInf$\Gamma, \mathcal{I}, \Delta \fCenter \mathcal{J}$
\end{prooftree}
$$
and a **$\delta$-rule**
$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma, \mathcal{J}, \Delta \vdash$}
\RightLabel{\,$\delta$}
\UnaryInf$\Gamma, \mathcal{J}, \Delta \fCenter \mathcal{J}$
\end{prooftree}
$$
although the exact form of these vary depending on the deductive system.[^2025]

[^2025]: see e.g. 2025\. [[Sources/@rijkeIntroductionHomotopyType2025|Introduction to Homotopy Type Theory]], p. 17

#
---
#state/tidy | #lang/en | #SemBr
