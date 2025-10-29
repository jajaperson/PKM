---
aliases:
  - torsion-free
tags:
  - public
mathLink-blocks:
  eq2: $0 = [\nabla_{a}, \nabla_{b}]f + T^c{}_{ab}\nabla_{c} f$
---
[[Affine connexion]]
# Torsion tensor

Let $\nabla$ be an [[affine connexion]] on a $C^\alpha$-[[Differentiable manifold|manifold]] $M$.
The **torsion tensor** $T^c{}_{ab} \in \mathcal{T}^1_{2}(M)$ is a [[tensor field]] defined bt #m/def/geo/diff 
$$
\begin{align*}
T^c{}_{ab} \, X^a  \,Y^b = T(X,Y)^c = \nabla_{X}Y^c - \nabla_{Y} X^c - [X,Y]^c.
\end{align*}
$$
A connexion for which the torsion tensor vanishes is said to be **torsion-free**.

> [!check]- Proof of tensoriality
> By the Leibniz rule,
> $$
> \begin{align*}
> T(fX,Y)^c = T(X,fY)^c = f \, T(X,Y)^c
> \end{align*}
> $$
> so we have a $C^\alpha(M)$-bilinear map, and therefore a tensor field. <span class="QED"/>

We can interpret the torsion tensor as measuring the extent to which covariant derivatives fail to commute on scalar fields, is the sense that
$$
\begin{align*}
0 = [\nabla_{a}, \nabla_{b}]f + T^c{}_{ab}\nabla_{c} f.
\end{align*}
$$
^eq2

> [!check]- Proof
> Let $X^a,Y^a \in \mathfrak{X}(M)$ be vector fields
> and $f \in C^\alpha(M)$ be a scalar field.
> Then
> $$
> \begin{align*}
> \nabla_{X}\nabla_{Y} f 
> &= (X \circ Y)[f] 
> = X^a \nabla_{a} Y^b\nabla_{b} f \\
> &= X^aY^b\nabla_{a}\nabla_{b} + (X^a \nabla_{a} Y^b) \nabla_{b}f \\
> &= X^a Y^b \nabla_{a}\nabla_{b} + \nabla_{\nabla_{X}Y}f
> \end{align*}
> $$
> and thus
> $$
> \begin{align*}
> [\nabla_{X}, \nabla_{Y}]f 
> &= [X,Y]^c \nabla_{c} f
> = X^aY^b [\nabla_{a},\nabla_{b}] f + (\nabla_{X}Y^c - \nabla_{Y}X^c)\nabla_{c}f
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> X^a Y^b[\nabla_{a}, \nabla_{b}] f = -(\nabla_{X}Y^c - \nabla_{Y}X^c - [X,Y]^c) \nabla_{c} f = - X^a Y^b T^c{}_{ab} \nabla_{c}f
> \end{align*}
> $$
> as required. <span class="QED"/>

## Properties

1. $T^c{}_{ab} = T^c{}_{[ab]}$.

## Related

- See also the [[Contorsion tensor]] and [[Riemannian curvature]]

#
---
#state/tidy | #lang/en | #SemBr
