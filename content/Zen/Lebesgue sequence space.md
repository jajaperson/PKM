---
mathLink: $\ell^p$ space
tags:
  - public
---
[[Sequence space]]
# $\ell^p$ space

For $p \in [1,\infty]$, the **$\ell^p$ space** is a [[Banach space]] defined as the set of all sequences $x_{\bullet}$ in $\mathbb{C}$ with finite $p$-norm given by
$$
\begin{align*}
\|x_{\bullet}\|_{p} = \left( \sum_{n=1}^\infty \abs{x_{n}}^p \right)^{1/p} < \infty
\end{align*}
$$
where in the case of $p = \infty$ we get the supremum
$$
\begin{align*}
\|x_{\bullet}\|_{\infty} = \sup \{ x_{n} \}_{n=1}^\infty
\end{align*}
$$
Thus $\ell^p$ is equivalent to the [[Lebesgue space]] $L^p ( \mathbb{N}, \mu) = \mathcal{L}^p(\mathbb{N},\mu)$[^norm] where $\mu$ is the [[counting measure]].
More generally one defines $\ell^p(S) = L^p(S,\mu)$ with the counting measure for any set $S$.

  [^norm]: There is no need to take a [[A seminorm induces a normed quotient|normed quotient]] here, $\|\cdot\|_{p}$ is already a full norm due to properties of the counting measure.

> [!check]- Proof of Banach space
> This all follows from the general case of a [[Lebesgue space]], however we will explicitly show completeness for $p \in [1,\infty)$.
> 
> Let $(x_{\bullet}^{(n)})_{n=1}^\infty$ be a [[Cauchy sequence]] in $\ell^p$, 
> i.e. for every $\epsilon > 0$ there exists some $N \in \mathbb{N}$ such that for all $n,m \geq N$ we have
> $$
> \begin{align*}
> \sum_{i=1}^\infty |x_{i}^{(n)}-x_{i}^{(m)}|^p < \epsilon^p
> \end{align*}
> $$
> Now for any fixed $j \in \mathbb{N}$
> $$
> \begin{align*}
> |x_{j}^{(n)} - x_{j}^{(m)}|^p \leq \sum_{i=1}^\infty |x_{i}^{(n)}-x_{i}^{(m)}|^p < \epsilon^p
> \end{align*}
> $$
> so $x_{j}^{(\bullet)}$ is a Cauchy sequence in $\mathbb{R}$ convergent to some $x_{j}$.
> It remains to show that $x_{\bullet} \in \ell^p$ and $(x_{\bullet}^{(n)})_{n=1}^\infty \to x_{\bullet}$.
> For any fixed $k \in \mathbb{N}$
> $$
> \begin{align*}
> \sum_{i=1}^k |x_{i}^{(m)}-x_{i}^{(n)}|^p \leq \sum_{i=1}^\infty |x_{i}^{(m)}-x_{i}^{(n)}| < \epsilon^p
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> \sum_{i=1}^k |x_{i}^{(m)}-x_{i}|^p < \epsilon^p
> \end{align*}
> $$
> and by the triangle inequality
> $$
> \begin{align*}
> \left( \sum_{i=1}^k |x_{i}|^p \right)^{1/p} &\leq \left( \sum_{i=1}^k |x_{i}^{(m)}-x_{i}|^p \right)^{1/p} + \left( \sum_{i=1}^k |x_{i}^{(m)}|^p \right)^{1/p} \\&< \epsilon + \left( \sum_{i=1}^k |x_{i}^{(m)}|^p \right)^{1/p}
> \end{align*}
> $$
> hence
> $$
> \begin{align*}
> \|x_{\bullet}\|_{p} \leq \epsilon + \|x_{\bullet}^{(m)}\|_{p} < \infty
> \end{align*}
> $$
> so $x_{\bullet} \in \ell^p$.
> Furthermore
> $$
> \begin{align*}
> \|x_{\bullet}^{(m)} - x\|_{p}^p = \sum_{i=1}^\infty |x_{i}^{(m)}-x_{j}|^p < \epsilon^p
> \end{align*}
> $$
> so indeed $(x_{\bullet}^{(n)})_{n=1}^\infty \to x_{\bullet}$. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr
