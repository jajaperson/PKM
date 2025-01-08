---
tags:
  - public
---
[[Analysis MOC]]
# Minkowski inequality

The **Minkowski inequality** establishes the [[Normed vector space#^N2|triangle inequality]] for [[Lebesgue space|$p$-seminorm]] and therefore [[Lebesgue space]].
Let $(X,\Sigma,\mu)$ be a [[measure space]] and $p \in [1,\infty]$.
Then for any [[Measurable function|measurable functions]] $f,g : X \to \mathbb{C}$ #m/thm/anal 
$$
\begin{align*}
\|f + g\|_{p} \leq \|f\|_{p} + \|g\|_{p}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof 
> For $p=1$,
> $$
> \begin{align*}
> \|f+g\|_{1} = \int _{X}|f+g|\,d\mu \leq \int _{X} (|f| + |g|) \, d\mu \leq \|f\|_{1} + \|g\|_{1} 
> \end{align*}
> $$
> as required.
> 
> For $p = \infty$,
> $$
> \begin{align*}
> \|f+g\|_{\infty} 
> &= \inf \{ C \in \mathbb{R}_{\geq_{0}} : \mu(\{ s \in X : |f(s) + g(s)| > C \}) = 0 \} \\
> &\leq \inf \{ C \in \mathbb{R}_{\geq_{0}} : \mu(\{ s \in X : |f(s)| + |g(s)| > C \}) = 0 \} \\
> &\leq \|f\|_{\infty}+ \|g\|_{\infty}
> \end{align*}
> $$

#
---
#state/develop | #lang/en | #SemBr
