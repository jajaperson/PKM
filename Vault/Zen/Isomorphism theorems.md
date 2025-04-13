---
tags:
  - public
---
[[Abstract algebra MOC]]
# Isomorphism theorems

The **isomorphism theorems** are a set of four theorems, most generally statable in the language of universal algebra: the [[congruence relation]] and quotient.
For particular examples, see

- [[Group isomorphism theorems]]
- [[Ring isomorphism theorems]]
- [[Module isomorphism theorems]]
- [[Lie algebra isomorphism theorems]]

## First theorem

Let $f : A \to B$ be an algebra homomorphism.
Then $\im f$ is a subalgebra of $A$, the relation $x \equiv y \iff f(x) = f(y)$ is a congruence
and $\im f$ and $A /{\cong}$ are isomorphic. #m/thm/algebra 

> [!missing]- Proof
> #missing/proof

## Second theorem

Let $A$ be an algebra, $B$ a subalgebra of $A$, and $\equiv$ be a congruence on $A$.
Let further ${\equiv_{B}} = {\equiv} \cap (B \times B)$ be the restriction of $\equiv$ to $B$
and
$$
\begin{align*}
[B]^\equiv = \{ K \in A/{\equiv} : K \cap B \neq \0 \}
\end{align*}
$$
be the equivalence glasses under $\equiv$ intersecting $B$.
Then #m/thm/algebra 

1. ${\equiv_{B}}$ is a congruence on $B$
2. $[B]^\equiv$ is a subalgebra of $A/{\equiv}$ isomorphic to $B / {\equiv}_{B}$

> [!missing]- Proof
> #missing/proof 

## Third theorem

Let $A$ be an algebra and ${\equiv},{\equiv'}$ be congruences on $A$ such that ${\equiv'} \sube {\equiv}$.
Then
$$
\begin{align*}
{\equiv} / {\equiv'} = \{ ([a]_{\equiv'},[b]_{\equiv
'}): (a,b) \in {\equiv} \} = [-]_{\equiv'} \circ {\equiv} \circ [-]_{\equiv'}^{-1}
\end{align*}
$$
is a congruence on $A / {\equiv'}$ and $A / {\equiv}$ is isomorphic to $(A / {\equiv'}) / ({\equiv}/{\equiv'})$. #m/thm/algebra 

> [!missing]- Proof
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr
