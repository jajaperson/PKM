---
tags:
  - public
mathLink-blocks:
  E1: reflexivity
  E2: symmetry
  E3: transitivity
---
[[Relation set]]
# Equivalence relation
An **equivalence relation** is any relation $\sim$ with the properties of

1. **reflexivity** $(\forall a \in S)[ a \sim a]$ ^E1
2. **symmetry** $(\forall a \in S)(\forall b \in S)[a \sim b \implies b \sim a]$ ^E2
3. **transitivity** $(\forall a \in S) (\forall b \in S) (\forall c \in S)[ a \sim b \implies b \sim c \implies a \sim c]$ ^E3

Quintessential examples include $=$ and isomorphic objects.
A structure-preserving equivalence relation is called a [[Congruence relation]],
which precedes the notion of an [[Algebraic quotient]].

Equivalence relations may be _induced_ by a function:
Given $f:A \to B$, then $a_{1} \sim_{A} a_{2} \iff f(a_{1}) \sim_{B} f(a_{2})$ defines an equivalence relation $\sim_A$ on the set $A$ for any equivalence relation $\sim_{B}$ on the set $B$. 

## Equivalence class

Every equivalence relation has a corresponding [[Partition]] of **equivalence classes** and vice versa.[^2017]
An equivalence class for $a$ under $R$ is defined as

$$
\begin{align*}
[a]_{R} = \{ b \in R \mid (a,b) \in R \}
\end{align*}
$$
And has the following properties
- $a \in [a]_{R}$
- for any $x,y \in [a]_R$, $(x, y) \in R$
- $b \in [a]_{R}$ if and only if $[a]_{R} = [b]_{R}$
- $b \notin [a]_{R}$ if and only if $[a]_{R} \cap [b]_{R} = \0$

The set of equivalence classes is called the [[Algebraic quotient|Algebraic quotient]].

[^2017]: 2017\. [[Sources/@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], p. 20 (Theorem 0.7)

## Natural projection

Equivalence relations on a set $X$ are also characterised precisely by [[Surjectivity, injectivity, and bijectivity|surjective]] functions called the **natural projection** $\pi : X \twoheadrightarrow S$
whose fibres are equivalence classes.
Then we say $S \cong X /{\sim} = X / \pi$,
with the natural isomorphism $\varphi : S \to X / {\sim} : s \to \pi^{-1} \{ s \}$.
If $\pi$ is a [[Morphism|homomorphism]] then the induced equivalence relation is a [[congruence relation]].

---
#state/tidy | #SemBr | #lang/en 