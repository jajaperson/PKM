---
tags:
  - public
---
[[Analysis MOC]]
# Hölder's inequality

Let $(X, \Sigma, \mu)$ be a [[measure space]] and $p,q \in [1,\infty]$ be [[Hölder conjugate]], i.e. $p^{-1} + q^{-1}=1$.
Then for any [[Measurable function|measurable functions]] $f,g : X \to \mathbb{C}$[^strong] #m/thm/anal 
$$
\begin{align*}
\|fg\|_{1} \leq \|f\|_{p} \|g\|_{q}
\end{align*}
$$
where $\|\cdot\|_{p}$ denotes the [[Lebesgue space|$p$-norm]].

  [^strong]: If in addition, if $p$ and $q$ are finite, $f \in L^p(\mu)$, and $g \in L^q(\mu)$, then $\|fg\|_{1} = \|f\|_{p}\|g\|_{q}$ iff $|f|^p, |g|^q \in L^1(\mu)$ are [[Linear (in)dependence|linearly dependent]].

> [!check]- Proof
> Let $A = \|f\|_{p}$ and $B = \|g\|_{q}$.
> If $A=0$ or $B=0$ the inequality holds trivially,
> and similarly if $A=\infty$ or $B = \infty$.
> 
> Now assume $A, B \in (0,\infty)$, $p,q \in (1,\infty)$ and take $x \in X$.
> Taking [[Young's inequality]] with $\alpha = \frac{|f(x)|}{A}$ and $\beta = \frac{|g(x)|}{B}$ gives
> $$
> \begin{align*}
> \alpha\beta = \frac{|f(x)g(x)|}{AB} \leq \frac{|f(x)|^p}{pA^p} + \frac{|g(x)|^q}{qB^q} = \frac{\alpha^p}{p} + \frac{\beta^q}{q}
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> \frac{\|fg\|_{1}}{\|f\|_{p}\|g\|_{q}} &= \frac{1}{AB} \int _{X} |f(x)g(x)| \, d\mu(x) \\
> &\leq \frac{1}{pA^p} \int _{X}|f(x)|^p \, d\mu(x) + \frac{1}{qB^q} \int _{X}|g(x)|^q \, dx  \\
> &= \frac{A^p}{pA^p} + \frac{B^q}{qB^q} = \frac{1}{p} + \frac{1}{q} = 1
> \end{align*}
> $$
> wherefore
> $$
> \begin{align*}
> \|fg\|_{1} \leq \|f\|_{p} \|g\|_{q}
> \end{align*}
> $$
> 
> The only case yet to be handled is $p =\infty,q=1$.
> It follows immediately that $|fg| \leq \|f\|_{\infty} |g|$ [[almost everywhere]] and thus $\| fg\|_{1} \leq \|f\|_{\infty}\|g\|_{1}$,
> as required. <span class="QED"/>

The [[Cauchy-Schwarz inequality]] for the [[Lebesgue space|$p$-norm]] is the case $p=q=2$.

#
---
#state/tidy | #lang/en | #SemBr
