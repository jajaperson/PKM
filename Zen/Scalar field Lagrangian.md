---
tags:
  - public
---
[[Local Lagrangian]]
# Scalar field Lagrangian

Let $M$ be a $C^\alpha$-[[Differentiable manifold|manifold]] and $C^\alpha(M)$ be the space of [[scalar field|scalar fields]] on $M$.
A first order [[local Lagrangian]] on $C^\alpha(M)$ has the form
$$
\begin{align*}
L[\varphi] = L(p, \varphi |_{p}, \mathrm{d}\varphi|_{p})
\end{align*}
$$
where we abuse notation and invoke a $C^\alpha$-map to [[Differential form|top forms]]
$$
\begin{align*}
L : (T^0_{0} \oplus T_{1}^0)M\to \Omega^m(M)
\end{align*}
$$
so that the [[action functional]] $\mathscr{L} : C^\alpha(M) \to \mathbb{R}$ has the form
$$
\begin{align*}
\mathscr{L}[\gamma] = \int _{p \in M} L(p,\varphi |_{p}, \mathrm{d}\varphi |_{p}).
\end{align*}
$$

## Euler-Lagrange equations

Let $x : U \to \mathbb{R}^m$ be [[Coördinate chart|local coördinates]] for $M$
and suppose
$$
\begin{align*}
L = \tilde{L} \, \dj ^mx = \tilde{L} \, \mathrm{d}x^1 \wedge \dots \wedge \mathrm{d} x^m.
\end{align*}
$$
A field $\varphi \in C^\alpha(M)$ is stationary with respect to variations agreeing on the boundary iff #m/thm/variations 
$$
\begin{align*}
0 = \frac{ \partial \tilde{L} }{ \partial \varphi } - \frac{ \partial }{ \partial x^\mu }  \frac{ \partial \tilde{L} }{ \partial (\mathrm{d}\varphi_{\mu}) } .
\end{align*}
$$


> [!check]- Proof
> Let $\alpha : (-\epsilon_{0},\epsilon_{0}) \to C^\alpha(M)$ be a variation of $\varphi$ agreeing on the boundary.
> Then
> $$
> \begin{align*}
> \mathscr{L}[\alpha(\epsilon)] 
> &= \int _{p \in M} \tilde{L}(p, \varphi|_{p}, \mathrm{d}\varphi |_{p}) \, \dj V 
> = \int_{M} \dj^mx \, {} \tilde{L}(x, \varphi|_{x}, \mathrm{d}\varphi|_{x})
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> \delta \mathscr{L}[\varphi,\alpha]
> &= \left. \frac{\mathrm{d}}{\mathrm{d}\epsilon} \right|_{\epsilon=0} \int_{M} \dj^m x {} \tilde{L}(x,\alpha(\epsilon;x), \mathrm{d} \alpha(\epsilon;x)) \\
> &= \int_{M} \dj^m x {} \left. \frac{\mathrm{d}}{\mathrm{d}\epsilon} \right|_{\epsilon=0} \tilde{L}(x, \alpha(\epsilon;x), \mathrm{d}\alpha(\epsilon; x)) \\
> &= \int _{M} \dj^m x {} \left( \frac{ \partial \tilde{L} }{ \partial \varphi } \frac{ \partial \alpha }{ \partial \epsilon }(\alpha;x) + \frac{ \partial \tilde{L} }{ \partial (\mathrm{d}\varphi_{\mu}) } \frac{ \partial (\mathrm{d} \alpha_{\mu}) }{ \partial \epsilon } (0;t)  \right) \\
> &= \int _{M} \dj^m x {} \left( \frac{ \partial \tilde{L} }{ \partial \varphi } \frac{ \partial \alpha }{ \partial \epsilon }(\alpha;x) + \frac{ \partial \tilde{L} }{ \partial (\mathrm{d}\varphi_{\mu}) } \frac{ \partial^2 \alpha_{\mu} }{ \partial x^\mu \, \partial \epsilon } (0;t)  \right). \\
> \end{align*}
> $$
> Applying [[integration by parts]] we get
> $$
> \begin{align*}
> \delta \mathscr{L}[\varphi ; \alpha] 
> &= \int _{M} \dj^m x {} \frac{ \partial \alpha }{ \partial \epsilon } (\alpha;x) \left( 
> \frac{ \partial \tilde{L} }{ \partial \varphi } - \frac{ \partial }{ \partial x^\mu } \frac{ \partial \tilde{L} }{ \partial (\mathrm{d}\varphi_{\mu}) } 
> \right)
> \end{align*}
> $$
> so by the [[Fundamental lemma of variational calculus]]
> $$
> \begin{align*}
> 0 = \frac{ \partial \tilde{L} }{ \partial \varphi } - \frac{ \partial }{ \partial x^\mu }  \frac{ \partial \tilde{L} }{ \partial (\mathrm{d}\varphi_{\mu}) } 
> \end{align*}
> $$
> as claimed. <span class="QED"/>

If $M$ is an oriented [[semi-Riemannian manifold]] with [[Riemannian volume form]] $\dj V$
and $L = \bar{L} \, \dj V$, then the above condition becomes
$$
\begin{align*}
0 = \frac{ \partial \bar{L} }{ \partial \varphi }  - \nabla_{\mu} \frac{ \partial \bar{L} }{ \partial (\mathrm{d}\varphi_{\mu}) } .
\end{align*}
$$

> [!check]- Proof 
> Since $\tilde{L} = \sqrt{ \abs g } \bar{L}$, we have
> $$
> \begin{align*}
> 0 = \sqrt{ \abs g } \frac{ \partial \bar{L} }{ \partial \varphi } - \frac{ \partial }{ \partial x^\mu } \sqrt{ \abs g } \frac{ \partial \bar{L} }{ \partial (\mathrm{d}\varphi_{\mu}) } 
> \end{align*}
> $$
> so applying [[Levi-Civita connexion#^P1]] we have
> $$
> \begin{align*}
> 0 = \sqrt{ \abs g } \frac{ \partial \bar{L} }{ \partial \varphi }  - \sqrt{ \abs g } \nabla_{\mu} \frac{ \partial \bar{L} }{ \partial (\mathrm{d}\varphi_{\mu}) } 
> \end{align*}
> $$
> whence the claimed equation. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
