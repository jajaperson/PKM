---
tags:
  - public
---
[[Differential geometry MOC]]
# Tangent space

The **tangent space** $T_{x}X$ of a [[differentiable manifold]] $X$ at a point $x \in X$ is a [[vector space]] corresponding to possible velocities when moving through $x$. #m/def/geo/diff 
A number of equivalent characterizations are useful.
See also [[Differential pushforward]], [[Tangent bundle]], and [[Tangent map]].

## Real embedded manifold

Both the following characterizations of the tangent space of a [[real embedded manifold]] is useful.

> [!info]- Fixed chart characterization
> Let $X \sube \mathbb{R}^N$ be a [[Real embedded manifold]] and $x \in X$.
> Let 
> $$
> \begin{align*}
> \varphi^{-1} : V \sube \mathbb{R}^n &\to U \sube X \sube \mathbb{R}^N \\
> v &\mapsto x
> \end{align*}
> $$
> be a [[Coördinate chart|local parameterization]] at $x$,
> and $D \varphi^{-1}(v) : \mathbb{R}^n \to \mathbb{R}^N$ be its [[Total derivative]].
> Then $T_{x}X = D\varphi^{-1}(v)(\mathbb{R}^n)$ is the **tangent space at $x$.**
> 
> ![[tangent space.png#invertW]]

> [!info]- Chart-free characterization
> Let $X \sube \mathbb{R}^N$ be a [[Real embedded manifold]] and $x \in X$.
> Let
> $$
> \begin{align*}
> \Omega_{\epsilon} &= \Man_{•}^\infty(((-\epsilon,\epsilon), 0), (X,x)) \\
> \end{align*}
> $$
> be the set of all $C^\infty$ [[Differentiability|differentiable]] paths $\omega: (-\epsilon,\epsilon) \to X$ such that $\omega(0)=x$.
> Then the set of all “velocities at $x$”
> $$
> \begin{align*}
> T_{x}X = \{ \dot{\omega }(0) : \omega \in \Omega_{\epsilon}, \epsilon > 0 \}
> \end{align*}
> $$
> is the **tangent space at $x$**.

The primary advantage of the fixed chart characterization is that its [[vector space]] status is clear,
whereas the chart-free characterization is more intuitive and establishes chart-independence.

> [!check]- Equivalence of characterizations
> Take a [[coördinate chart]] $\varphi : U \to V \sube \mathbb{R}^n$ with $\varphi(x)=v$.
> Let $x \in X$ and let $T_{x}X$ denote the fixed-chart characterization and $\tilde{T}_{x}X$ denote the chart-free characterization.
> 
> Let $\dot{\omega}(0) \in \tilde{T}_{x}X$ for some $C^\infty$ [[Differentiability|differentiable]] $\omega : (-\epsilon,\epsilon) \to U$ with $\omega(0)=x$.
> Then
> $$
> \begin{align*}
> D\omega(0) = D[\varphi^{-1}\varphi\omega](0) = D\varphi^{-1}(v)D[\varphi\omega](0) \in T_{x}X
> \end{align*}
> $$
> Herefore $\tilde{T}_{x}X\sube T_{x}X$.
> 
> Now let $D\varphi^{-1}(v)(\vab a) \in T_{x}X$ for some $\vab a \in \mathbb{R}^n$.
> Define
> $$
> \begin{align*}
> \tilde{\omega}: (-\epsilon,\epsilon) &\to \mathbb{R}^n \\
> t &\mapsto v+ t\vab a
> \end{align*}
> $$
> and let $\omega = \varphi^{-1}\tilde{\omega} : (-\epsilon,\epsilon) \to U$ (we choose $\epsilon$ so that $\omega$ remains in $U$).
> It follows $\dot{\omega}(0) = D[\varphi^{-1}\tilde{\omega}](0) = D\varphi^{-1}(v)(\vab a)$ and $\dot{\omega}(0) \in \tilde{T}_{x}X$.
> Herefore $T_{x}X \sube \tilde{T}_{x}X$.
> 
> Thus $T_{x}X = \tilde{T}_{x}X$. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
