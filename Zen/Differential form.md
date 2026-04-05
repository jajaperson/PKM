---
tags:
  - public
---
[[Differential geometry MOC]]
# Differential form

Let $(M, \mathscr{A})$ be a $C^\alpha$-[[Differentiable manifold|manifold]].
A **differential $p$-form** is a totally contravariant, totally antisymmetric [[tensor field]].
and a general **differential form** is a direct sum of these.

## As a section
The above is equivalent  to a $C^\alpha$-[[Bundle section|section]] of the $p$th exterior power of the [[cotangent bundle]], i.e.
$$
\begin{align*}
\Omega^p(M) = \Gamma({\textstyle\bigwedge}^p M) 
\end{align*}
$$
A general (non-homogenous) **differential form** is a $C^\alpha$-section of the [[Exterior algebra bundle|exterior algebra bundle]]
$$
\begin{align*}
\Omega^\bullet M = \Gamma({\textstyle\bigwedge}^\bullet M).
\end{align*}
$$


## Exterior product

The exterior algebra bundle induces the **exterior product** of differential forms, so that
$$
\begin{align*}
(\omega \wedge \mu)_{a_{1} \cdots a_{p} b_{1} \cdots b_{q}} = \frac{(p+q)!}{p!q!} \, \omega_{[a_{1}\cdots a_{p}} \, \mu_{b_{1} \cdots b_{q}]}
\end{align*}
$$
which acts on [[Vector field|vector fields]] as
$$
\begin{align*}
(\omega \wedge \mu) (v_{1} , \dots, v_{p+q}) = \frac{1}{p!q!} \, \sum_{\sigma \in \mathrm{S}_{p+q}} (\sgn \sigma) \, \omega(v_{\sigma(1)} , \dots, v_{\sigma(p)}) \, \mu(v_{\sigma(p+1)}, \dots, v_{\sigma(p+q)})
\end{align*}
$$

## Local coördinates

If $x : U \to \mathbb{R}^m$ are a [[Coördinate chart|chart]] then locally a tensor field is given by
$$
\begin{align*}
\omega = \omega_{\mu_{1} \cdots \mu_{p}} \, \mathrm{d}x^{\mu_{1}} \otimes \cdots \otimes \mathrm{d}x^{\mu_{p}}
\end{align*}
$$
and if $\omega$ is antisymmetric,
$$
\begin{align*}
\omega = \frac{1}{p!} \, \omega_{\mu_{1} \cdots \mu_{p}} \, \mathrm{d}x^{\mu_{1}} \wedge \cdots \wedge \mathrm{d}x^{\mu_{p}}.
\end{align*}
$$
where 
$$
\begin{align*}
\mathrm{d}x^{\mu_{1}} \wedge \dots \wedge \mathrm{d}x^{\mu_{p}} = q! \, \mathrm{d}x^{[\mu_{1}} \otimes \dots \otimes \mathrm{d}x^{\mu_{p}]}
\end{align*}
$$
and $\mathrm{d} : \Omega^0(M) \to \Omega^1(M)$ is the [[Exterior derivative]].


## Related concepts

- [[Exterior derivative]]
- [[Volume form]]
- [[Hodge dual]]


#
---
#state/develop | #lang/en | #SemBr
