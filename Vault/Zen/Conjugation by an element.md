---
aliases:
  - conjugate element
  - conjugacy class
  - conjugacy relation
tags:
  - public
---
[[Group theory MOC]]
# Conjugation by an element

In a group $G$, given elements $x, g \in G$, we may **conjugate** $x$ by $g$ to get $gag^{-1}$.
Sometimes this is written as $\hat{b}a$,
or for the right-action variant, $a^b = b^{-1}ab$.

## Conjugation as an action

Conjugation by a given element is an [[automorphism]] of the group,
such that $\widehat{\cdot} : G \to \Aut(G)$ constitutes a [[group action]].
The [[Group action orbit|orbit]] of an element $x \in G$ is its [[#Conjugacy class]] $[x]_{\sim}$,
while its [[Stabilizer group]] is its [[Centralizer of a group element|centraliser group]].
An automorphism given by conjugation is called an **inner automorphism**,
and the image $\widehat{G} = \mathrm{Inn}(G) \trianglelefteq \Aut(G)$ forms the [[Inner automorphism group]].

## Conjugacy relation

Given two group elements $x,y \in G$,
we say $x$ is **conjugate** to $y$ ($x \sim y$)
iff there exists $g \in G$ such that $y = gxg^{-1}$. #m/def/group 
The **conjugacy relation** $\sim$ is an [[Equivalence relation]]. #m/thm/group 

> [!check]- Proof of equivalence relation
> For any $x \in G$, $x = exe^{-1} \implies x \sim x$, 
> thus $\sim$ is reflexive.
> For any $x,y \in G$, $x \sim y \iff y = gxg^{-1} \iff x = (g^{-1})y(g^{-1})^{-1} \iff y \sim x$,
> thus $\sim$ is symmetric.
> For any $x,y,z \in G$ such that $x \sim y$ and $y \sim z$,
> there exist $g, h \in G$ such that $y = gxg^{-1}$ and $z = hyh^{-1}$.
> Then $z = hgxg^{-1}h^{-1} = (hg)x(hg)^{-1}$ and hence $x \sim z$,
> wherefore $\sim$ is transitive.
> Therefore $\sim$ is an equivalence relation.
> <span class="QED"/>

A conjugacy relation may also be applied between subgroups, see [[Conjugate subgroups]].

### Conjugacy class

The [[Equivalence relation#Equivalence class|equivalence classes]] for the conjugacy relation form so-called **conjugacy classes**.
$$
\begin{align*}
[x]_{\sim} = \{ gxg^{-1} : g \in G \}
\end{align*}
$$

## Properties

See also [[Inner automorphism group]].

- $[e]_{\sim} = \{ e \}$ since $geg^1 = e$ for all $g \in G$.
- $\hat{g} x = x$ iff $g$ and $x$ commute
- From above it follows that in an [[Abelian group]] all conjugacy classes are singletons.
- A conjugacy class is not necessarily a subgroup (since it is either the trivial subgroup $\{ e \}$ or $e \notin [x]_{\sim}$).
- By the [[Orbit-stabilizer theorem]], $\abs{C(x)} \cdot \abs{[x]_{\sim}} = \abs{G}$.
- [[The number of conjugacy classes equals the number of non-equivalent irreps of a group]].

## Examples

- In $\mathrm{SO}(3)$ rotations by the same angle (i.e. only differing in axis of rotation) form conjugacy classes.
- In $\mathrm{GL}(n)$ elements are conjugate to each other iff they have [[Matrix similarity|similar matrices]] (in subgroups, such as $\mathrm{SO}(n)$, conjugacy may be more restricted, however all conjugate elements are similar).

#
---
#state/tidy| #lang/en | #SemBr
