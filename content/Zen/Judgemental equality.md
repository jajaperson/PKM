---
tags:
  - public
---
[[Type theory MOC]]
# Judgemental equality

**Judgemental equality** is equality defined as a judgement, in contrast to propositional or [[typal equality]].
The judgements have the form[^1]
$$
\begin{align*}
\Gamma \vdash A = B, \qquad \Gamma \vdash a = b : A
\end{align*}
$$
for “$A$ and $B$ are judgementally equal (well-typed) types in context $\Gamma$”
and “$a$ and $b$ are judgementally equal (well-typed) terms of (well typed) type $A$ in context $\Gamma$” respectively.
Informally, judgemental equality operates at a metatheoretic level:
It is [[Proof-relevant mathematics|proof irrelevant]], and cannot be used within the theory e.g. as the antecedent of a conditional.
The actual meaning of judgemental equality depends on the type theory used

- In intensional type theories like [[ITT]], judgemental equality may be viewed as _definitional equality_, _syntactic equality_, or _intensional equality_.
  Types or terms are judgementally equal if they have precisely the same sense, as in the [[Sense and denotation]].
- In extensional type theories like [[ETT]], judgemental equality reflects typal equality.

The judgemental equality for types as presented here is limited to [[dependent type theory|dependent type theories]].

## Standard inference rules

Both sides of a type equality judgement are themselves types:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A = B$
\UnaryInf$\Gamma \fCenter A$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A = B$
\UnaryInf$\Gamma \fCenter B$
\end{prooftree}
$$
Similarly, both sides of a term equality judgement are themselves terms:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a = b : A$
\UnaryInf$\Gamma \fCenter a : A$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a = b : A$
\UnaryInf$\Gamma \fCenter b : A$
\end{prooftree}
$$

Judgemental equality of types is an [[equivalence relation]]
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\UnaryInf$\Gamma \fCenter A = A$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A = B$
\UnaryInf$\Gamma \fCenter B = A$
\end{prooftree} 
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A = B$
\Axiom$\Gamma \fCenter B = C$
\BinaryInf$\Gamma \fCenter A = C$
\end{prooftree}
$$
and likewise for terms
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\UnaryInf$\Gamma \fCenter a = a : A$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a = b : A$
\UnaryInf$\Gamma \fCenter b = a : A$
\end{prooftree} 
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a = b : A$
\Axiom$\Gamma \fCenter b = c : A$
\BinaryInf$\Gamma \fCenter a = c : A$
\end{prooftree}.
$$
We have the variable conversion rule, for a generic judgement thesis $\mathcal{J}$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A = A'$
\Axiom$\Gamma, x : A, \Delta \fCenter \mathcal{J}$
\RL{(V)}
\BinaryInf$\Gamma, x : A', \Delta \fCenter \mathcal{J}$
\end{prooftree}
$$
which guarantees [[Indiscernibility of identicals]] for types.
Finally, judgemental equality is a “congruence” with respect to substitution:
$$
\begin{align*}
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a = a' : A$
\Axiom$\Gamma, x: A, \Delta \fCenter B$
\RL{(TV=)}
\BinaryInf$\Gamma, \Delta[a / x] \fCenter B[a / x] = B[a' / x]$
\end{prooftree}
\\\\
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a = a' : A$
\Axiom$\Gamma, x: A, \Delta \fCenter t: B$
\RL{(tV=)}
\BinaryInf$\Gamma, \Delta[a / x] \fCenter t[a / x] = t[a' / x] : B[a / x]$
\end{prooftree}
\end{align*}
$$
Further inference rules on judgemental equality are given for individual types in the type theory, and are often classified under [[α-conversion]], [[β-reduction]], and [[η-reduction]].[^2025] #m/def/type

[^2025]: 2025\. [[Sources/@rijkeIntroductionHomotopyType2025|Introduction to Homotopy Type Theory]], §1, pp. 11–19

## Properties

1. The **element conversion rule**
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma \fCenter A = A'$
  \Axiom$\Gamma \fCenter a : A$
  \RL{(E)}
  \BinaryInf$\Gamma \fCenter a : A'$
  \end{prooftree}
  $$
  is [[Derivable rule|derivable]]. ^P1
2. The **congruence rule** for element conversion
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A = A'$
\Axiom$\Gamma \fCenter a = a' : A$
\RL{(E=)}
\BinaryInf$\Gamma \fCenter a = a' : A'$
\end{prooftree}
$$
  is derivable. ^P2

> [!check]- Proof
> We give the formal deduction
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter a : A$
> \Axiom$\Gamma \fCenter A = A'$
> \UnaryInf$\Gamma \fCenter A' = A$
> \Axiom$\Gamma \fCenter A = A'$
> \UnaryInf$\Gamma \fCenter A'$
> \RL{($\delta$)}
> \UnaryInf$\Gamma, x: A' \fCenter x :  A'$
> \RL{(V)}
> \BinaryInf$\Gamma, x: A \fCenter x : A'$
> \RL{(S)}
> \BinaryInf$\Gamma \fCenter a : A'$
> \end{prooftree}
> $$
> proving [[#^P1]].
> 
> Similarly,
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \Axiom$\Gamma \fCenter a = a' : A$
> \Axiom$\Gamma \fCenter A = A'$
> \UnaryInf$\Gamma \fCenter A' = A$
> \Axiom$\Gamma \fCenter A = A'$
> \UnaryInf$\Gamma \fCenter A'$
> \RL{($\delta$)}
> \UnaryInf$\Gamma , x : A' \fCenter x :A'$
> \RL{(V)}
> \BinaryInf$\Gamma, x: A\fCenter x: A'$
> \RL{(E=)}
> \BinaryInf$\Gamma\fCenter a = a' : A'$
> \end{prooftree}
> $$
> proving [[#^P2]]. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr

[^1]: We depart from the usual convention: Type-theoretic literature will usually reserve $(=)$ for [[typal equality]], using either $(\equiv)$ or $(\dot{=})$ for judgemental equality. We take the opposite approach, which is more akin to the notation used in proof assistants. This is also used in [[@angiuliPrinciplesDependentType2025]].
