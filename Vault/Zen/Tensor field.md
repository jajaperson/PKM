---
tags:
  - public
---
[[Differential geometry MOC]]
# Tensor field

Let $(M, \mathscr{A})$ be a $C^\alpha$-[[Differentiable manifold|manifold]].
A $C^\alpha$-**tensor field** is a generalization of a [[vector field]] where we assign a [[tensor]] smoothly to every point in $M$.
A homogenous tensor field $X$ of type $(p,q)$ is a $C^\alpha(M)$-[[multilinear map]]
$$
\begin{align*}
X : \underbrace{ \Omega^1M \times\dots \times \Omega^1M }_{ p }  \times \underbrace{ \mathfrak{X}(M) \times \dots \times \mathfrak{X}(M) }_{ q } \to C^\alpha(M)
\end{align*}
$$
where $\Omega^1M$ and $\mathfrak{X}(M)$ denote the spaces of [[1-form|1-forms]] and [[vector field|vector fields]] respectively.
The $C^\alpha(M)$-[[module]] of all such tensor fields is denoted $\mathcal{T}^p_{q}M$.
A general nonhomogenous tensor field is a direct sum of tensor fields.

## As a section

The above definition is equivalent to a $C^\alpha$-[[Bundle section|section]] of the [[Tensor product of vector bundles|tensor product]] of $p$ copies of the [[tangent bundle]] and $q$ copies of the [[cotangent bundle]]
$$
\begin{align*}
T^p_{q} M &= (TM)^{\otimes p} \otimes (T^*M)^{\otimes q} \\
X \in \mathcal{T}^{p}_{q}M &= \Gamma T^p_{q} M
\end{align*}
$$
and a general (non-homogenous) tensor field is a $C^\alpha$-section of a [[Direct sum of vector bundles|sum bundle]].

> [!missing]- Proof
> #missing/proof

## Further terminology

- A totally contravariant, totally antisymmetric tensor field is a [[Differential form]].
- Often physicists view the [[Tensor field transformation laws]] as the definition of a tensor field.

## Local coördinates

Let $x : U \hookrightarrow \mathbb{R}^m$ be a [[Coördinate chart|chart]]. Restricted to $U$, we may write a smooth tensor field $X \in \mathcal{T}^p_{q} M$ in the form
$$
\begin{align*}
X = X^{\mu_{1}\cdots\mu_{p}}_{\nu_{1}\cdots\nu_{p}} \, \partial_{\mu_{1}} \otimes \dots \otimes \partial_{\mu_{p}} \otimes \mathrm{d}x^{\nu_{1}} \otimes \dots \otimes \mathrm{d}x^{\nu_{q}}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr
