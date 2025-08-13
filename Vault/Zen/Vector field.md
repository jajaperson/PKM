---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Vector field

Let $(M, \mathscr{A})$ be a $C^\alpha$-[[Differentiable manifold|manifold]].
A $C^\alpha$-**vector field** formalizes the idea of assigning a vector _smoothly_ to every point in $M$.
The set of all vector fields on $M$ is denoted $\opn{Vect}(M)$. #m/def/geo/diff

## Intrinsic manifold

The following characterizations of vector fields and $\opn{Vect}(M)$ are both useful.

> [!info]- As a section of $TM$
> A vector field may be characterized as a [[Bundle section|section]] of the [[tangent bundle]] $TM$, thus
> $$
> \begin{align*}
> \opn{Vect}(M) := \Gamma(M,TM).
> \end{align*}
> $$


> [!info]- As a derivation on $C^\alpha(M)$
> A $C^\alpha$-**vector field** is a [[Derivation on an algebra|derivation]] on the algebra of smooth (scalar-valued) functions $C^\alpha(M)$, thus
> $$
> \begin{align*}
> \opn{Vect}(M) := \mathfrak{der}(C^\alpha(M))
> \end{align*}
> $$


> [!missing]- Equivalence of charactrerizations
> #missing/proof

## Euclidean space

A **vector field** $\vab F$ is a function assigning a vector to every point in space 
$$
\begin{align*}
\vab F : \mathbb{E}^n \to \mathbb{R}^n
\end{align*}
$$
Importantly, the domain represents _Euclidean space_ whereas the codomain represents vectors in the physical sense of directional quantities (tangent space).
There may also be a time dependence, which is treated separately.


Two special kinds of field are

- [[Conservative vector field]], which is the gradient of a scalar potential
- [[Incompressible vector field]], which is the curl of a vector potential

However, any vector field can be decomposed into conservative and incompressible parts, 
so that for any field there exists $V$ and $\Psi$ such that[^2013]
$$
\begin{align*}
\vab F = - \vab{\nabla} V + \vab{\nabla} \times \vab \Psi
\end{align*}
$$
This is due to the [[Helmholtz theorem]], and is consequently called the **Helmholtz decomposition**.

[^2013]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]], p. 54 (eqn. 1.105)

#
---
#state/tidy | #lang/en | #SemBr
