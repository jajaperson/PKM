---
tags:
  - public
---
[[Logic MOC]]
# Formal system

A **formal system** $(\mathcal{L}, \mathcal{I})$ is a collection $\mathcal{I}$ of  **inference rules** for manipulating the [[Formal language|formulae]] of a [[formal language]] $\mathcal{L}$. #m/def/logic 

An $n$-ary inference rule $R \in \mathcal{I}_{n}$ is a [[relation]] of $\mathcal{L}^n$ to $\mathcal{L}$. 
We write $(\mathcal{H}_{1}, \dots, \mathcal{H}_{n}) \sim_{R} \mathcal{C}$ as
$$
\begin{prooftree}
\AxiomC{$\mathcal{H}_{1}$}
\AxiomC{$\cdots$}
\AxiomC{$\mathcal{H}_{n}$}
\RightLabel{($R$)}
\TrinaryInfC{$\mathcal{C}$}
\end{prooftree}
$$
where we have $n$ formulae called **hypotheses** and a single formula called the **conclusion**.
In particular, a nullary inference rule is called an **axiom**.
The collection of $n$-ary inference rules should be countable,
and there should be an [[effective procedure]] for deciding whether an inference exists relating a given set of hypotheses to a given conclusion.[^2015]

[^2015]: 2015\. [[Sources/@mendelsonIntroductionMathematicalLogic2015|Introduction to Mathematical Logic]], §1.4, p. 27 gives a definition which is equivalent to ours, except that for $n \neq 0$ we allow possibly infinite inference rules. 

## Syntactic formal theory

Given a formal system $(\mathcal{L}, \mathcal{I})$
we form a [[formal theory]] $\mathcal{T} = \opn{Th}(\mathcal{L}, \mathcal{I})$ by iteratively applying the inference rules:
A formula $\phi \in \mathcal{L}$ is in $\mathcal{T}$ iff there exists a tree of inference rules starting from axioms culminating in $\phi$.
The theory $\mathcal{T}$ can be thought of as built up in stages:
$\mathcal{T}_{0}$ is the set of axioms, and then $\mathcal{T_{i+1}}$ enlarges $\mathcal{T}_{i}$ by applying all inference rules with formulae in $\mathcal{T}_{i}$ as hypotheses.

#
---
#state/tidy | #lang/en | #SemBr
