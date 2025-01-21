---
mathLink: Twisted vertex operator representation of ${\opn{\mathfrak{sl}}_{2}\mathbb{K}}\hat{\;}$
tags:
  - public
---
[[Affine Lie algebras of sl_2]]
# Twisted vertex operator representation of ${\opn{\mathfrak{sl}}_{2}\mathbb{K}}\hat{\;}$

Let $\hat{\mathfrak{a}}_{1} = \opn{\mathfrak{sl}}_{2}\mathbb{K}\hat{\;}[\sigma_{1}]$ be the [[Affine Lie algebras of sl_2|$\sigma_{1}$-twisted affine Lie algebra of ${\opn{\mathfrak{sl}}_{2}\mathbb{K}}$]],
and $V$ be the corresponding [[Natural Heisenberg algebras|$\mathbb Z + \frac{1}{2}$-natural Heisenberg module]] on $\mathfrak{h}= \mathbb{K}\alpha$.
Defining
$$
\begin{align*}
\alpha(z) &= \sum_{n \in \mathbb{Z} + \frac{1}{2}} \alpha(n)z^{-n} \\
E^\pm(z) &= \mathrm{e}^{-D^{-1}\alpha(z)}
\end{align*}
$$
we construct the **twisted vertex operator**
$$
\begin{align*}
X_{\mathbb{Z} + \frac{1}{2}} (\alpha, z) = \frac{E^{-}(-\alpha,z)E^+(-\alpha,z)}{2^{\langle \alpha,\alpha \rangle }} = \frac{\mathopen{:}\mathrm{e}^{D^{-1}\alpha(z)}\mathclose{:}}{2^{-\langle \alpha,\alpha \rangle }}
\end{align*}
$$
where the second expression used the [[Normal ordered product]].
Skipping over a lot of detail[^1988],
the representation of $\tilde{\mathfrak{h}}[-1]$ on $V$ extends to precisely two irreducible representations
$$
\begin{align*}
\pi_{\pm} : \tilde{\mathfrak{a}}_{1} &\to \End V \\
x_{\alpha_{1}}(z) &\mapsto X(\alpha_{1},z)
\end{align*}
$$

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §3, pp. 61ff.

#
---
#state/develop | #lang/en | #SemBr
