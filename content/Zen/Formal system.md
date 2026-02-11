---
tags:
  - public
---
[[Logic MOC]]
# Formal system

A **formal system** is a collection of **rewrite rules** or **inference rules** for manipulating the [[Formal language|formulae]] of a [[formal language]].
An $n$-ary inference rule has the form
$$
\begin{prooftree}
\AxiomC{$\mathcal{H}_{1}$}
\AxiomC{$\cdots$}
\AxiomC{$\mathcal{H}_{n}$}
\TrinaryInfC{$\mathcal{C}$}
\end{prooftree}
$$
where we have $n$ formulae for hypotheses and a single formula for the conclusion.
In particular, a nullary inference rule is called an **axiom**.
The collection of $n$-ary inference rules should be countable,
and there should be an [[effective procedure]] for deciding whether an inference exists relating a given set of hypotheses to a given conclusion.[^2015]

[^2015]: 2015\. [[Sources/@mendelsonIntroductionMathematicalLogic2015|Introduction to Mathematical Logic]], §1.4, p. 27 gives a definition which is equivalent to ours, except that for $n \neq 0$ we allow possibly infinite inference rules. 

Given a formal system for a formal language $\mathcal{L}$,
we form a formal system by iteratively applying the inference rules:
A formula $\phi \in \mathcal{L}$ is in $\mathcal{T}$ iff there exists a tree of inference rules starting from axioms culminating in $\phi$.
The theory $\mathcal{T}$ can be thought of as built up in stages:
$\mathcal{T}_{0}$ is the set of axioms, and then $\mathcal{T_{i+1}}$ enlarges $\mathcal{T}_{i}$ by applying all inference rules with formulae in $\mathcal{T}_{i}$ as hypotheses.

#
---
#state/tidy | #lang/en | #SemBr
