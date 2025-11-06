---
tags:
  - public
---
[[Semi-Riemannian manifold]]
# Christoffel symbols

Let $(M,g_{ab})$ be a [[semi-Riemannian manifold]]
and $x : U \to \mathbb{R}^m$ be [[Coördinate chart|local coördinates]].
Then the **Christoffel symbols** of the first kind are
$$
\begin{align*}
\Gamma_{\alpha\mu\nu} = \tfrac{1}{2} \left( \partial_{\mu} g_{\alpha\nu} + \partial_{\nu}g_{\alpha\mu} - \partial_{\alpha}g_{\mu\nu} \right) 
\end{align*}
$$
which are the components of
$$
\begin{align*}
\Gamma_{cab} = \tfrac 1 2 (\tilde{\nabla}_{a}g_{bc} + \tilde{\nabla}_{b}g_{ac} - \tilde{\nabla}_{c}g_{ab}).
\end{align*}
$$
These may either be introduced

1. as the [[Connexion disagreement tensor|connexion coëfficients]] of the [[Levi-Civita connexion]];
2. as the coëfficients of the [[Smooth geodesic|geodesic equation]].

## Properties

See also [[Levi-Civita connexion#Properties|properties of the Levi-Civita connexion]].

1. $\Gamma^\alpha{}_{\alpha \beta} = \partial_{\beta} \ln \sqrt{ \abs g }$, i.e. $\sqrt{ \abs g } \Gamma^\alpha{}_{\alpha\beta} = \partial_{\beta}\sqrt{ \abs g }$. ^P1

> [!check]- Proof
> By [[Matrix calculus#^I1]] we have
> $$
> \begin{align*}
> \Gamma^\alpha{}_{\alpha\beta} 
> &= g^{\delta\alpha} \Gamma_{\delta\alpha\beta}
> =  \tfrac 1 2 g^{\delta\alpha}(\partial_{\alpha} g_{\delta\beta} + \partial_{\beta}g_{\delta\alpha} - \partial_{\delta}g_{\alpha\beta}) \\
> &= \tfrac 1 2 g^{\delta \alpha} (\partial_{\delta}g_{\alpha\beta} + \partial_{\beta}g_{\delta\alpha}- \partial_{\delta}g_{\alpha\beta})
> = \tfrac 1 2 g^{\delta\alpha} \partial_{\beta}g_{\delta\alpha} \\
> &= \tfrac 1 2 \Tr (\mathbf{g}^{-1} \partial_{\beta} \mathbf{g}) \stackrel ! = \tfrac 1 2 \partial_{\beta} \ln \abs{\det \mathbf{ g}} 
> = \partial_{\beta} \ln \sqrt{ \abs g }
> \end{align*}
> $$
> proving [[#^P1]].


#
---
#state/tidy | #lang/en | #SemBr
