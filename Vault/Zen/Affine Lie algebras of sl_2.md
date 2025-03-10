---
mathLink: Affine Lie algebras of $\opn{\mathfrak{sl}}_2\mathbb{K}$
tags:
  - public
aliases:
  - $\opn{\mathfrak{sl}}_2\mathbb{K}\hat{\;}$
---
[[sl_2]]
# Affine Lie algebras of $\opn{\mathfrak{sl}}_{2} \mathbb{K}$

Let $\mathfrak{a} =$ [[sl_2]] with its Chevalley basis and let $\sigma_{i}$ be the [[Pauli matrices|suggestively named]][^Pauli] involutive isometries of $\mathfrak{a}$ defined by #m/def/lie 
$$
\begin{align*}
\sigma_{1} : \alpha_{1} & \mapsto -\alpha_{1} &
\sigma_{2} : \alpha_{1} &\mapsto - \alpha_{1} &
\sigma_{3} : \alpha_{1} &\mapsto \alpha_{1}\\
x_{\pm \alpha_{1}} &\mapsto x_{\mp \alpha 1} 
& x_{\pm \alpha_{1}} &\mapsto - x_{\mp \alpha_{1}}
& x_{ \pm \alpha_{1}} &\mapsto -x_{\pm\alpha}
\end{align*} 
$$
and let $\sigma_{0} = 1$.
Furthermore we let
$$
\begin{align*}
x_{\alpha_{1}}^{+} &= x_{\alpha_{1}} + x_{-\alpha_{1}} = x_{\alpha_{1}} + x_{\alpha_{1}}^{\sigma_{1}} = x_{\alpha_{1}} - x_{\alpha_{1}}^{\sigma_{2}} \\
x_{\alpha_{1}}^{-} &= x_{\alpha_{1}} - x_{-\alpha_{1}} = x_{\alpha_{1}} - x_{\alpha_{1}}^{\sigma_{1}} = x_{\alpha_{1}} + x_{\alpha_{1}}^{\sigma_{2}}
\end{align*}
$$
We consider the [[Affine Lie algebra|untwisted]] or [[Twisted affine Lie algebra|twisted]] affine Lie algebra $\hat{\mathfrak{a}}_{i} = \hat{\mathfrak{a}}[\sigma_{i}]$[^FLM]
which have bases
$$
\begin{align*}
\hat{\mathfrak{a}}_{0} &= \langle c, \alpha_{1} \otimes t^m, x_{\pm \alpha_{1}} \otimes t^{m} : m \in \mathbb{Z} \rangle \\
\hat{\mathfrak{a}}_{1} &= \langle c, \alpha_{1} \otimes t^{m+1/2} , x_{\alpha_{1}}^+ \otimes t^m, x_{\alpha_{1}}^{-} \otimes t^{m+1/2}: m \in \mathbb{Z} \rangle  \\
\hat{\mathfrak{a}}_{2} &= \langle c, \alpha_{1} \otimes t^{m+1/2} , x_{\alpha_{1}}^+ \otimes t^{m+1/2}, x_{\alpha_{1}}^{-} \otimes t^m: m \in \mathbb{Z} \rangle  \\
\hat{\mathfrak{a}}_{3} &= \langle c, \alpha_{1} \otimes t^m, x_{\pm \alpha_{1}} \otimes t^{m+ 1/2} : m \in \mathbb{Z} \rangle \\
\end{align*}
$$
The 1-dimensional subalgebra $\mathfrak{ h }= \mathbb{K}\alpha \leq \mathfrak{a}$ generates the [[Natural Heisenberg algebras|natural Heisenberg algebras]]
$$
\begin{align*}
\hat{\mathfrak{h}}_{\mathbb{Z}} = \mathbb{K}c \oplus \bigoplus _{n \in \mathbb{Z} \setminus \{ 0 \}} \alpha_{1} \otimes t^n \leq \tilde{\mathfrak{h}} \leq \hat{\mathfrak{a}}_{0}, \hat{\mathfrak{a}}_{3}  \\
\hat{\mathfrak{h}}_{\mathbb{Z} + \frac{1}{2}} = \mathbb{K}c \oplus \bigoplus _{n \in \mathbb{Z} + \frac{1}{2}} \alpha_{1} \otimes t^n \leq \tilde{\mathfrak{h}}[-1] \leq \hat{\mathfrak{a}}_{1}, \hat{\mathfrak{a}}_{2}
\end{align*}
$$
as [[Lie subalgebra|Lie subalgebras]]
and we have[^1988]
$$
\begin{align*}
[c, \hat{\mathfrak{a}}_{i}] &= 0 \\
[\alpha_{1} \otimes t^m, \alpha_{1} \otimes t^n] &= 2m\delta_{m+n}c
\end{align*}
$$

> [!tip]- Isomorphism of extended Lie algebras
> $\tilde{\mathfrak{a}}$ and $\tilde{\mathfrak{a}}[\sigma_{3}]$ are isomorphic (but not as [[graded Lie algebra|graded Lie algebras]]) under
> $$
> \begin{align*}
> c &\mapsto c \\
> d &\mapsto d - \frac{1}{4}\alpha_{1} \\
> \alpha_{1} \otimes t^n &\mapsto \alpha_{1} \otimes t^n + \frac{1}{2} \delta_{n} c \\
> x_{\pm \alpha_{1}} &\mapsto x_{\pm \alpha_{1}} \otimes t^{n \pm 1/2}
> \end{align*}
> $$
> There also exist grade-preserving isomorphisms between $\tilde{\mathfrak{a}}[\sigma_{i}]$ for $i=1,2,3$.

  [^FLM]: FLM use $\vartheta_{1} = \sigma_{3}$ and $\vartheta_{2} = \sigma_{1}$
  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §3.1, pp. 62–67
  [^Pauli]: For $\mathbb{K} = \mathbb{C}$, we can conjugate by [[Pauli matrices]] $\sigma_{i}$ for the same result.

## Via formal series

Taking a [[Formal series over an (un)twisted affine Lie algebra|formal series approach]] on $\hat{\mathfrak{a}}_{i}$, the exact characterization varies with $i$.

> [!info]- For $\hat{\mathfrak{a}}_{0}$
> In $\hat{\mathfrak{a}}_{0}\d[z,z^{-1}\d]$ we define the formal sums
> $$
> \begin{align*}
> x_{\pm \alpha_{1}}(z) &= \sum_{n \in \mathbb{Z}} (x_{\pm \alpha_{1}} \otimes t^n)z^{-n} \\
> \alpha_{1}(z) &= \sum_{n \in \mathbb{Z}}(\alpha_{1} \otimes t^n)z^{-n}
> \end{align*}
> $$
> the commutation relations are more conveniently expressed as
> $$
> \begin{align*}
> [\alpha_{1} \otimes t^m, x_{\pm \alpha_{1}}(z)] &= \pm 2z^m x_{\pm \alpha_{1}}(z) = \langle \alpha_{1}, \pm \alpha_{1} \rangle z^m x_{\pm \alpha_{1}}(z) \\
> [x_{\pm\alpha_{1}}(z_{1}), x_{\pm\alpha}(z_{2})] &= 0
>  \\
>  [x_{\alpha_{1}}(z_{1}), x_{-\alpha_{1}}(z_{2})] &=
> (\alpha_{1}(z_{2}) - cD_{1})\delta(z_{1} / z_{2})  \\
> [d, x_{\pm \alpha_{1}}(z)] &= -D x_{\pm \alpha_{1}}(z) \\
> [d, \alpha_{1}(z)] &= -D\alpha_{1}(z)
> \end{align*}
> $$
> where $m \in \mathbb{Z}$.

> [!info]- For $\hat{\mathfrak{a}}_{3}$
> In $\hat{\mathfrak{a}}_{3}\d[z^{1/2},z^{-1/2}\d]$ we define the formal sums
> $$
> \begin{align*}
> x_{\pm \alpha_{1}}(z) &= \sum_{n \in \mathbb{Z} + \frac{1}{2}} (x_{\pm \alpha_{1}} \otimes t^n)z^{-n} \\
> \alpha_{1}(z) &= \sum_{n \in \mathbb{Z}}(\alpha_{1} \otimes t^n)z^{-n}
> \end{align*}
> $$
> the commutation relations are more conveniently expressed as
> $$
> \begin{align*}
> [\alpha_{1} \otimes t^m, x_{\pm \alpha_{1}}(z)] &= \pm 2z^m x_{\pm \alpha_{1}}(z) = \langle \alpha_{1}, \pm \alpha_{1} \rangle z^m x_{\pm \alpha_{1}}(z) \\
> [x_{\pm\alpha_{1}}(z_{1}), x_{\pm\alpha}(z_{2})] &= 0
>  \\
>  [x_{\alpha_{1}}(z_{1}), x_{-\alpha_{1}}(z_{2})] &= 
> (\alpha_{1}(z_{2}) - cD_{1})[(z_{1} / z_{2})^{1/2} \delta(z_{1} / z_{2})]   \\
> [d, x_{\pm \alpha_{1}}(z)] &= -D x_{\pm \alpha_{1}}(z) \\
> [d, \alpha_{1}(z)] &= -D\alpha_{1}(z)
> \end{align*}
> $$

> [!info]- For $\hat{\mathfrak{a}}_{1}$
> In $\hat{\mathfrak{a}}_{1}\d[z^{1/2},z^{-1/2}\d]$ we define the formal sums
> $$
> \begin{align*}
> x_{\pm \alpha_{1}}(z) &= \frac{1}{2} \sum_{n \in \mathbb{Z}}(x_{\alpha_{1}}^+ \otimes t^n) z^{-n} \pm \frac{1}{2} \sum_{n \in \mathbb{Z} + \frac{1}{2}} (x_{\alpha_{1}}^{-} \otimes t^n)z^{-n} \\
> \alpha_{1}(z) &= \sum_{n \in \mathbb{Z} + \frac{1}{2}}(\alpha_{1}\otimes t^n) z^{-n}
> \end{align*}
> $$
> the commutation relations are more conveniently expressed as
> $$
> \begin{align*}
> [\alpha_{1} \otimes t^m, x_{\pm \alpha_{1}}(z)] &= \pm 2z^m x_{\pm \alpha_{1}}(z)
> = \langle \alpha_{1},\pm\alpha_{1} \rangle z^m x_{\pm\alpha_{1}}(z) \\
> [x_{\alpha_{1}}(z), x_{-\alpha_{1}}(z_{2})] &= \frac{1}{2}(\alpha_{1}(z_{2}) - cD_{1}) \delta(z_{1}^{1/2} / z_{2}^{1/2})
> \end{align*}
> $$
> and we also have
> $$
> \begin{align*}
> x_{-\alpha_{1}}(z) = \lim_{ z^{1/2} \to -z^{1/2} } x_{\alpha_{1}}(z)
> \end{align*}
> $$

## Representations

- [[Twisted vertex operator representation of sl_2ˆ]]

#
---
#state/develop | #lang/en | #SemBr
