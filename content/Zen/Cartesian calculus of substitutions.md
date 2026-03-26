---
tags:
  - public
---
[[Calculus of substitutions]]
# Cartesian calculus of substitutions

The (cartesian) **calculus of substitutions** is one way of presenting a (dependent, cartesian) [[type theory]] as a [[formal system]] which is naturally viewed as having semantics in a [[cartesian category]].
It can be viewed as an extension of the [[linear calculus of substitutions]],
but here we give a full presentation following _[[@angiuliPrinciplesDependentType2025|Principles of dependent type theory]]_.

> [!note]+ Notes on this presentation
> We use [[De Brujin indices]], and describe [[#Syntax sugar for named variables]].
> Following _[[@angiuliPrinciplesDependentType2025|Principles]]_, “implicit” arguments are made explicit in grey, for example we have $\Gamma \vdash \mathbf{id}_\imp{\Gamma} : \Gamma$.
> We also have “meta-implicit arguments” for judgements, which are called **presuppositions** (notation 2.2.1).
> The surface syntax for our judgements differs slightly.

## Judgements

We have the following basic judgements:

1. $\Gamma \vdash$ asserts that $\Gamma$ is a [[Context in a proof system|context]]. ^J1
2. $\Gamma \vdash A$ asserts that $A$ is a type (in context $\Gamma$).[^1] ^J2
3. $\Gamma \vdash a : A$, presupposing $\Gamma \vdash$ and $\vdash A$, asserts that $a$ is a term of type $A$ in context $\Gamma$. ^J3
4. $\Gamma \vdash \gamma : \Delta$, presupposing $\Gamma \vdash$ and $\Delta \vdash$, asserts that $\gamma$ is a substitution from $\Gamma$ to $\Delta$,
    that is, $\gamma$ fills all the hypotheses of $\Delta$ with terms in $\Gamma$. ^J4

We also have the following manifestations of [[judgemental equality]]:

1. $\Delta \vdash \gamma = \gamma' : \Gamma$, presupposing $\Delta \vdash \gamma : \Gamma$ and $\Delta \vdash \gamma' : \Gamma$, asserts that $\gamma$ and $\gamma'$ are equal substitutions from $\Delta$ to $\Gamma$. ^E1
2. $\Gamma \vdash A = A'$, presupposing $\Gamma \vdash A$ and $\Gamma \vdash A'$, asserts that $A$ and $A'$ are equal types in context $\Gamma$. ^E2
3. $\Gamma \vdash a = a' : A$, presupposing $\Gamma \vdash a : A$ and $\Gamma \vdash a' : A$, asserts that $a$ and $a'$ are equal terms of type $A$ in context $\Gamma$. ^E3

We will also sometimes consider

4. $\Delta = \Gamma \vdash$, presupposing $\Delta \vdash$ and $\Gamma \vdash$, asserts that $\Delta$ and $\Gamma$ are equal contexts, ^E4

although this is redundant as [[#^redundant|it reduces to equality of types]].
Judgemental structure suggests the following meta-sets:

1. The meta-set $\mathrm{Cx} = \{ \Gamma :\mid: \Gamma \vdash \}$ of contexts;
2. For $\Gamma \in \mathrm{Cx}$, the meta-set $\opn{Ty}(\Gamma) = \{ T :\mid: \Gamma \vdash T \}$ of types over $\Gamma$;
3. For $\Gamma \in \mathrm{Cx}$ and $T \in \opn{Ty}(\Gamma)$, the meta-set $\opn{Tm}(\Gamma, T) = \{ t :\mid: \Gamma \vdash t : T \}$ of terms of type $T$ over $\Gamma$;
4. For $\Gamma,\Delta \in \mathrm{Cx}$, the meta-set $\opn{Sb}(\Delta,\Gamma) = \{ \gamma :\mid: \Delta \vdash \gamma : \Gamma \}$ of substitutions from $\Delta$ to $\Gamma$.

In practice these may be thought of as equivalence classes of derivation trees with the appropriate judgement at the root.

## Inference rules

### Context formation
The creation of contexts is governed by
$$
\begin{prooftree}
\AxiomC{}
\UnaryInfC{$\0 \vdash$}
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\Axiom$\Gamma \fCenter A$
\BinaryInfC{$\Gamma.A \vdash$}
\end{prooftree}
$$
Since these are the only way contexts are formed, they establish that every context is a list of types $\Gamma= \0. A_{1} \dots A_{n}$, each of which may depend on the previous one.
We therefore treat $\Gamma \vdash$ and $\Gamma \vdash A$ as presuppositions for the judgement $\Gamma.A \vdash$.

For a judgement thesis $\mathcal{J}$ we read $\Gamma \vdash \mathcal{J}$ as

> Assuming hypotheses $A_{1}, \dots, A_{n}$, the judgement thesis $\mathcal{J}$ holds.

or what is the same

> Given a variables of each type $A_{1}, \dots, A_{n}$, the judgement thesis $\mathcal{J}$ holds.


> [!info]- Judgemental equality of contexts
> We can define equality of contexts recursively by
> $$
> \begin{prooftree}
> \def\fCenter{\vdash}
> \AxiomC{}
> \UnaryInfC{$\0 = \0 \vdash$}
> \end{prooftree}
> \qquad
> \begin{prooftree}
> \def\fCenter{\vdash}
> \AxiomC{$\Gamma =\Delta \vdash$}
> \Axiom$\Gamma \fCenter A = B$
> \BinaryInfC{$\Gamma, A = \Delta, B \vdash$}
> \end{prooftree}
> $$
> which is why this judgement is considered redundant. ^redundant


### Substitutions form a category

The “algebra” of substitutions is governed by the following inference rules:

$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\UnaryInf$\Gamma \fCenter \mathbf{id}_\imp{\Gamma} : \Gamma$
\end{prooftree}
\qquad
\begin{prooftree}
\Axiom$\Gamma_{2} \fCenter \gamma_{1} : \Gamma_{1}$
\Axiom$\Gamma_{1} \fCenter \gamma_{0} : \Gamma_{0}$
\BinaryInf$\Gamma_{2} \fCenter \gamma_{0} \circ_\imp{\Gamma_{0},\Gamma_{1},\Gamma_{2}} \gamma_{1} : \Gamma_{0}$
\end{prooftree}
$$
$$
\begin{prooftree}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\UnaryInf$\Delta \fCenter \mathbf{id}_\imp{\Gamma} \circ \gamma = \gamma : \Gamma$
\end{prooftree}
\qquad
\begin{prooftree}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\UnaryInf$\Delta \fCenter \gamma \circ \mathbf{id}_\imp{\Delta} = \gamma : \Gamma$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma_{1} \fCenter \gamma_{0} : \Gamma_{0}$
\Axiom$\Gamma_{2} \fCenter \gamma_{1} : \Gamma_{1}$
\Axiom$\Gamma_{3} \fCenter \gamma_{2} : \Gamma_{2}$
\TrinaryInf$\Gamma_{3} \fCenter \gamma_{0} \circ (\gamma_{1} \circ \gamma_{2}) = (\gamma_{0} \circ \gamma_{1}) \circ \gamma_{2} : \Gamma_{0}$
\end{prooftree}
$$
In concert these ensure that the meta-set of contexts $\mathrm{Cx}$ and the meta-sets of substitutions $\opn{Sb}(\Delta,\Gamma)$ form a [[category]], which we also denote $\mathrm{Cx}$.

### Substitutions act on types and terms from the right

Substitutions act on both types and terms on the right, so:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter A$
\BinaryInf$\Delta \fCenter A[\gamma]_\imp{\Delta,\Gamma}$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter a: A$
\BinaryInf$\Delta \fCenter a[\gamma]_\imp{\Delta,\Gamma} : A[\gamma]$
\end{prooftree}
$$
Moreover, this action respects the categorical structure of substitutions:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\UnaryInf$\Gamma \fCenter A[\mathbf{id}_\imp{\Gamma}] = A$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\UnaryInf$\Gamma \fCenter a[\mathbf{id}_\imp{\Gamma}] = a : A$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma_{2} \fCenter \gamma_{1} : \Gamma_{1}$
\Axiom$\Gamma_{1} \fCenter \gamma_{0}:\Gamma_{0}$
\Axiom$\Gamma_{0} \fCenter A$
\TrinaryInf$\Gamma_{2} \fCenter A[\gamma_{0} \circ \gamma_{1}] = A[\gamma_{0}][\gamma_{1}]$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma_{2} \fCenter \gamma_{1} : \Gamma_{1}$
\Axiom$\Gamma_{1} \fCenter \gamma_{0}:\Gamma_{0}$
\Axiom$\Gamma_{0} \fCenter a:A$
\TrinaryInf$\Gamma_{2} \fCenter a[\gamma_{0} \circ \gamma_{1}] = a[\gamma_{0}][\gamma_{1}] : A[\gamma_{0} \circ \gamma_{1}]$
\end{prooftree}
$$

### Cartesian contexts

First we establish $\0$ is the [[Initial and terminal objects|terminal object]] in $\mathrm{Cx}$:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\UnaryInf$\Gamma \fCenter !_\imp{\Gamma} : \0$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter \delta : \0$
\UnaryInf$\Gamma \fCenter !_\imp{\Gamma} = \delta : \0$
\end{prooftree}
$$
We now establish that $\Gamma.A$ is something like a [[Products and coproducts|categorical product]].
For the “universal morphism” we have the **subsitution extension** $\gamma.a$,
which given a substitution $\Delta : \gamma \vdash \Gamma$ allows us to use the hypotheses of $\Delta$ to fill an additional hypothesis $\Gamma \vdash A$:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter \gamma : \Gamma$
\Axiom$\Gamma \fCenter A$
\RL{(E)}
\Axiom$\Delta \fCenter a : A[\gamma]$
\TrinaryInf$\Delta \fCenter \gamma ._\imp{\Delta,\Gamma,A} a : \Gamma.A$
\end{prooftree}
$$
The left projection $\mathbf{p}$ is called **weakening**, since it allows us to add arbitrary hypotheses onto the end of a domain context:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\RL{(W)}
\UnaryInf$\Gamma.A \fCenter \mathbf{p}_\imp{\Gamma,A} : \Gamma$
\end{prooftree}
$$
The right projection $\mathbf{q}$ is called the **variable substitution** since it allows us to recover the last variable declared in a context:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\RL{(V)}
\UnaryInf$\Gamma.A \fCenter \mathbf{q}_\imp{\Gamma,A} : A[\mathbf{p}_\imp{\Gamma,A}]$
\end{prooftree}
$$
Finally, we have ”$\beta$” and “$\eta$” rules giving the universal property:
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Delta \fCenter a : A[\gamma]$
\RL{($\beta \mathbf{p}$)}
\BinaryInf$\Delta \fCenter \mathbf{p}_\imp{\Gamma,A} \circ (\gamma.a) = \gamma : \Gamma$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Delta \fCenter a : A[\gamma]$
\RL{($\beta \mathbf{q}$)}
\BinaryInf$\Delta \fCenter \mathbf{q}_\imp{\Gamma,A} [\gamma.a] = a : A[\gamma]$
\end{prooftree}
$$
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma: \Gamma.A$
\RL{($\eta \mathbf{pq}$)}
\UnaryInf$\Delta \fCenter \gamma = (\mathbf{p}_\imp{\Gamma,A} \circ \gamma).(\mathbf{q}_\imp{\Gamma,A}[\gamma]) : \Gamma.A$
\end{prooftree}
$$

## Syntax sugar for named variables

While the above presentation has nice formal properties, its use of [[De Brujin indices]] makes it hard to parse.
Note that by the variable and weakening rules,
$$
\begin{align*}
\0. A_{0}\dots A_{n} \vdash \mathbf{q}[\mathbf{p}^i] : A_{n-i}
\end{align*}
$$
so we can see $\mathbf{q}[\mathbf{p}^i]$ as picking out the $i$th last variable declared (0-indexed).
We will informally use the alternate surface syntax of **named variables**
$$
\begin{align*}
x_{n} : A_{0}, \dots , x_{0} : A_{n} \vdash x_{i} : A_{n-i}
\end{align*}
$$
for the same judgement.
These should be viewed as syntax sugar reducing to judgements of the form given above,
so for example
$$
\begin{align*}
y_{n} : A_{0}, \dots , y_{0} : A_{n} \vdash y_{i} : A_{n-i}
\end{align*}
$$
is the same judgement.
When applying substitutions into _named_ contexts, we are explicit about which named variable is being substituted into, for example we have
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma, x : A \fCenter \mathcal{J}$
\Axiom$\Gamma \fCenter a: A$
\BinaryInf$\Gamma \fCenter \mathcal{J}[a / x]$
\end{prooftree}
$$
which in the formal syntax is
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma. A \fCenter \mathcal{J}$
\Axiom$\Gamma \fCenter a: A$
\BinaryInf$\Gamma \fCenter \mathcal{J}[\mathbf{id}. a]$
\end{prooftree}
$$

#
---
#state/tidy | #lang/en | #SemBr

