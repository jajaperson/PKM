---
aliases:
  - space of fields
tags:
  - public
---
[[Differential geometry MOC]]
# Smooth field

An $F$-**field** on a base $C^\alpha$-[[Differentiable manifold|manifold]] $M$[^1] is some $C^\alpha$-[[Bundle section|section]] of a [[fibre bundle]] 
$$
\begin{align*}
F \to E \twoheadrightarrow M
\end{align*}
$$
The **space of fields** is thus the space of sections $\Gamma^\alpha(M,B)$.[^2024] #m/def/geo/diff 
This generalizes

- A [[scalar field]] $\varphi \in \Gamma^\alpha (M, M \times \mathbb{R}) \cong C^\alpha(M)$ is an $\mathbb{R}$-field, which is equivalently viewed as a smooth function $M \to \mathbb{R}$;
- A (tangent) [[vector field]] $\Phi \in \Gamma^\alpha(M, TM) \cong \mathfrak{der}(C^\alpha(M))$ is an $\mathbb{R}^n$-field which is equivalently viewed as a derivation on the algebra of scalar fields, or as assigning a tangent vector to each point in $M$;
- A (tangent) [[tensor field]] $T \in \Gamma^\alpha (M, T^p_{q} M)$ is an $T^p_{q}\mathbb{R}^n$-field, which is equivalently viewed as a $C^\alpha(M)$-multilinear map eating vector fields and covector fields.

  [^2024]: 2024\. [[Sources/@blohmanLagrangianFieldTheory2024|Lagrangian field theory]], definition 1.1.1, p. 6.

#
---
#state/develop | #lang/en | #SemBr

[^1]: Usually called [[spacetime]].
