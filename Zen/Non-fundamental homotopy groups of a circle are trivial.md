---
tags:
  - public
---
[[Homotopy group]]
# Non-fundamental homotopy groups of a circle are trivial

For $n \geq 2$ the [[homotopy group]] $\pi_{n}(\mathbb{S}^1, 1)$ is the trivial group.
For $n=1$ we have $\mathbb{Z}$; see [[fundamental group of a sphere]].

> [!check]- Proof
> We use the spherical characterisation of the homotopy groups.
> Let $n > 2$ and $\alpha : (\mathbb{S}^n, 1) \to (\mathbb{S}^1,1)$ be a continuous $n$-dimensional loop.
> Since $\mathbb{S}^n$ is locally path connected and [[Fundamental group of a sphere|has a trivial fundamental group]]
> $$
> \begin{align*}
> \pi_{1}\alpha(\pi_{1}(\mathbb{S}^n,1)) \sube \pi_{1}\ex(\pi_{1}(\mathbb{R},0))
> \end{align*}
> $$
> Hence there exists [[Lift of a map to a covering space|unique lift]] $\tilde{a}: (\mathbb{S}^n, 1) \to (\mathbb{R}, 0)$ such that $\ex \tilde{\alpha} = \alpha$.
> But any such $\tilde{\alpha}$ is [[Null-homotopic map|null-homotopic]] by way of $H(x,t) = t\tilde{\alpha}(x)$, and hence $\alpha = \ex \tilde{\alpha}$ is null-homotopic by way of $\ex H$.
> Therefore any $\alpha$ is null-homotopic and the homotopy group is trivial.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
