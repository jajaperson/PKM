---
tags:
  - public
---
[[Lie theory MOC]]
# Haar measure of a compact Lie group

Let $G$ be an $n$-dimensional [[Compact Lie group]], $\mathfrak{g}$ be its corresponding [[Lie algebra]][^kep] with basis $\{ X_{j} \}_{j=1}^n$,
and $(U, \varphi)$ be a [[coördinate chart]] with $\varphi(e) = \vab 0$.
For each $\varphi(x) \in U \sube G$ define $A^{\varphi}_{jk}(x)$ so that
$$
\begin{align*}
-i \varphi^{-1}(x)^{-1} \partial _{j}\varphi^{-1}(x) = \sum_{k=1}^n X_{k} A^{\varphi_{}}_{kj}(x) 
\end{align*}
$$
where both sides are clearly elements of $\mathfrak{g}$.
Then for any Borel set $B \sube U$, the unique left and right [[Haar measure]] $\mu(B)$ is given by #m/thm/group
$$
\begin{align*}
\mu(B) = \int_{B} d\mu(g) = \int _{\varphi(B)} \alpha \abs{\det \mathbf{A}^\varphi(x)} \, d^nx 
\end{align*}
$$
where $\alpha$ is a normalisation constant.
The Haar measure is defined for the whole of $G$ by translating the chart (enabled by invariance).

[^kep]: Here we use [[Keppeler's Lie algebra convention]]

> [!check]- Proof this is a Haar measure
> Let $(V, \psi)$ define a chart with $U \cap V \neq \0$,
> and let $f$ be a [[transition map]] such that $\psi(x) = \varphi(f(x))$ for all $x \in \psi(U \cap V)$.
> Then
> $$
> \begin{align*}
> \sum_{k=1}^n X_{k} A_{kj}^\psi (x) &=
> -i \psi^{-1}(x)^{-1} \partial _{j}\psi^{-1}(x) \\
> &= -i [\varphi^{-1}\circ f](x)^{-1}\partial _{j}[\varphi^{-1} \circ f](x) \\
> &= -i[\varphi^{-1} \circ f](x)^{-1} \sum_{\ell=1}^n \partial _{j}f_{\ell}(x)\,[\partial _\ell\varphi^{-1} \circ f](x) \\
> &= \sum_{\ell,k=1}^n  X_{k} \, A^\varphi_{k\ell}(f(x))  \partial _{j}f_{\ell}(x)
> \end{align*}
> $$
> i.e. $\mathbf{A}^\psi(x) = \mathbf{A}^\varphi(f(x)) \mathbf{D}f(x)$ and thus
> $$
> \begin{align*}
> \abs{\det A^\psi(x)} = \abs{\det A^\varphi(f(x))} \abs{\det \mathbf{D}f}
> \end{align*}
> $$
> as required.
> 
> For $g \in G$ we define the chart
> $$
> \begin{align*}
> \varphi_{g} : gU &\to \varphi_{g}(U) \\
> h &\mapsto \varphi(g^{-1}h)
> \end{align*}
> $$
> then
> $$
> \begin{align*}
> -i\varphi_{g}^{-1}(x)^{-1} \, \partial_{j} \varphi_{g}^{-1}(x) = -i (g \varphi^{-1}(x))^{-1} g\, \partial_{j} \varphi^{-1}(x) = -i\varphi^{-1}(x)^{-1}\,\partial _{j}\varphi^{-1}(x)
> \end{align*}
> $$
> which gives left-invariance.
> 
> For each $g \in G$ let $M_{k\ell}(g)$ so that $g^{-1} X_{k} g = X_{\ell} \Delta_{\ell k}(g)$.
> Letting $\psi(h) = \psi(hg^{-1})$, i.e. $\psi^{-1}(x) = \varphi^{-1}(x) g$, then
> $$
> \begin{align*}
> -i \psi^{-1}(x)^{-1} \partial _{j} \psi^{-1}(x) &= -i g^{-1} \varphi^{-1}(x)^{-1} \partial _{j}\varphi^{-1}(x) g \\
> &= \sum_{k=1}^n g^{-1}X_{k}g\, A^\varphi_{kj}(x) \\
> &= \sum_{k,\ell=1}^n X_{\ell}M_{\ell k}(g) A^\varphi_{kj}(x)
> \end{align*}
> $$
> i.e. $A^\psi = M(g)A^\varphi$.
> But
> $$
> \begin{align*}
> \int_{G} d\mu(g) = \int_{G} d\mu(g'h^{-1}) = \abs{\det M(h^{-1})} \int_{G} d\mu(g)   
> \end{align*}
> $$
> and since $G$ is compact all integrals are finite, thus the $\abs{\det M(h^{-1})}=1$,
> i.e. $G$ is [[Unimodular group|unimodular]].
> Therefore $\mu$ is right-invariant.
> <span class="QED"/>


> [!check]- Proof of uniqueness
> Let $\mu,\nu$ both be two sided Haar measures normalised such that $\mu(G) = \nu(G) = 1$.
> Then for any $f \in \mathbb{C}[G]$
> $$
> \begin{align*}
> \int _{G}f(g) \, d\mu(g) &= \int _{G}\int _{G}f(g) \, d\mu(g)  \, d\nu(h) \\
> &= \int _{G}\int _{G}f(hg) \, d\mu(g)  \, d\nu(h) \\
> &= \int _{G}\int _{G}f(h) \, d\mu(g)  \, d\nu(h) \\
> &= \int _{G}f(h) \, d\nu(h) 
> \end{align*}
> $$
> thus $\mu = \nu$.
> <span class="QED"/>


## Properties

### Properties under integration

Let $f \in \mathbb{C}[G]$ and $\phi : G \to G$ be a bijection (e.g. taking the inverse of each group element)

1. $$
\begin{align*}
\int _{G} f(hg) \, d\mu(g) = \int _{G}f(g) \, d\mu(h^{-1}g) = \int _{G}f(g) \, d\mu(g)  
\end{align*}
$$
2. $$
\begin{align*}
\int _{G} f(gh) \, d\mu(g) = \int _{G}f(g) \, d\mu(gh^{-1}) = \int _{G}f(g) \, d\mu(g)  
\end{align*}
$$
3. $$
\begin{align*}
\int _{G}f(\phi(g)) \, d\mu(g) = \int_{G} f(g) \, d\mu(g) 
\end{align*}
$$


> [!check]- Proof of property 3
> From properties 1 and 2
> $$
> \begin{align*}
> \int _{G} f(\phi(g)) \, d\mu(g) &= \int _{G} f(h\,\phi(g)) \, d\mu(g) \\
> &= \int _{G} \int _{G}f(h\,\phi(g)) \, d\mu(h)  \, d\mu(g) \\
> &= \int _{G}\int _{G} f(h) \, d\mu(h)  \, d\mu(g) \\
> &= \int _{G} d\mu(g) 
> \end{align*}
> $$
> where we used the normalisation of the group to 1.
> <span class="QED"/>



#
---
#state/tidy | #lang/en | #SemBr