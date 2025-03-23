---
tags:
  - public
---
[[Group theory MOC]]
# Subgroup

A **subgroup** is a subset of a [[group]] $H \sube G$ such that $H$ is a group under the same operations #m/def/group ,
i.e. $H$ is
- closed under the group operation
- contains the inverse of every element

## Tests for subgroups

Let $G$ be a group and $H \sube G$ be a nonempty subset.
Additionally we define predicate $p$ so that $H = \{ x \in G \mid p(x) \}$.
The following hold:[^gallian]

[^gallian]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], pp. 62–64

### One step subgroup test
**Theorem.** Iff $ab^{-1} \in H$ whenever $a,b \in H$, then $H$ is a subgroup of $G$. #m/thm/group

> [!check]- Proof
> Since $H$ is nonempty there exists $x \in H$, then with $a = b = x$ clearly $e \in H$,
> $H$ must be closed under inversion, since letting $a=e$ for any $b \in H$ we have $eb^{-1} = b^{-1} \in H$.
> Now we can show that $H$ is closed in general:
> For any $a,b \in H$ we have $b^{-1} \in H$ and therefore $ab = a(b^{-1})^{-1} \in H$. <span class="QED"/>
 
> [!info]- Application
> 1. Show $p(e)$
> 2. Assume $p(a)$ and $p(b)$
> 3. Prove $p(ab^{-1})$

### Two step subgroup test

**Theorem.** Iff $H$ is closed under the binary operation and under the inverse,
then $H$ is a subgroup of $G$. #m/thm/group

> [!check]- Proof
> Since $H$ is nonempty there exists $x$ in $H$, thus $x^{-1} \in H$ and thus $e = x x^{-1} \in H$.
> Thence $H$ is a subgroup of $G$. <span class="QED"/>

> [!info]- Application
> Much the same as [[#One step subgroup test|above]], but with
> 
> 3. Prove $p(a^{-1})$ and $p(ab)$.

### Finite subgroup test

**Theorem.** $H$ is finite and closed under the binary operation, then it is a subgroup of $G$. #m/thm/group

> [!check]- Proof
> Take any $x \in H$.
> Since $H$ is closed we may construct a sequence $(x^n)_{n=1}^\infty \in H$.
> Since $H$ is finite, by the [[Pigeonhole principle]] the sequence must have repeated elements, 
> so that for some $1<i<j$ we have $x^i = x^j$.
> Then $a^{i-j} = e$ and hence $a a^{i-j-1} = e$,
> so $a^{-1} = a^{i-j-1} \in H$.
> Therefore $H$ is closed under the inverse and the binary operation,
> and is thus a subgroup of $G$ by the [[#Two step subgroup test]]. <span class="QED"/>


## Examples of subgroups
- For any element $a \in G$ we can generate a [[Cyclic subgroup]] $\langle a \rangle = \{ \dots, a^{-2}, a^{-1}, e, a, a^2, \dots \}$.
- The [[Centre of a group]] is a subgroup containing elements that commute with all elements.
- Similarly the [[Centralizer in a group]] is a subgroup containing elements that commute with a given element.
- [[Torsion subgroup of an abelian group]]
- [[Lagrange's theorem|The order of a subgroup divides the order of a group]]

## Properties
- [[The intersection of subgroups is a subgroup]]
- Subgroups may be [[Conjugate subgroups]] if they can be derived from each other by conjugation.
  A subgroup with no other conjugate subgroups is called a [[Normal subgroup]].

#
---
#state/tidy | #lang/en | #SemBr 