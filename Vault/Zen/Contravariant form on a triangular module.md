---
tags:
  - public
---
[[Triangular Lie algebra]]
# Contravariant form on a triangular module

Let $\mathfrak{g} = \mathfrak{n}^{-} \oplus \mathfrak{h} \oplus n^+$ be a [[triangular Lie algebra]] over $\mathbb{K}$ with an involutive [[antiautomorphism]] $\omega : \op{\mathfrak{g}}\to \mathfrak{g}$ so that
$$
\begin{align*}
\omega([x,y]) &= [\omega(y),\omega(x)] \\
\omega \mathfrak{h} &= \mathfrak{h} \\
\omega \mathfrak{n}^\pm &= \mathfrak{n^\pm} \\
\omega^2 &= 1
\end{align*}
$$
and let $\lambda : \mathfrak{h} \to \mathbb{K}$ be an $\omega$-invariant[^inva] [[linear form]].
Then the corresponding [[Triangular module]] $M(\lambda)$ has a [[Bilinear form#^symmetric]] unique **contravariant form**,
a bilinear form $b : M(\lambda) \times M(\lambda) \to \mathbb{K}$ satisfying #m/thm/lie

1. $b(x \odot v, w) = b(v, \omega(x) \odot w)$ for all $x \in \mathfrak{g}$ and $v,w \in M(\lambda)$ ^F1
2. $b(v_{\lambda},v_{\lambda})=1$ ^F2

  [^inva]: i.e. $\lambda\omega h = \lambda h$ for any $h \in \mathfrak{h}$.

> [!check]- Proof
> Note that $\omega$ extends to an involutive [[antiautomorphism]] of the [[universal enveloping algebra]] $\omega: \op{U(\mathfrak{g})} \to U(\mathfrak{g})$ so that
> $$
> \begin{align*}
> \omega(xy) = \omega(y)\omega(x)
> \end{align*}
> $$
> for $x,y \in U(\mathfrak{g})$.
> 
> First we prove uniqueness of $b$.
> Clearly [[#^F1]] extends to
> $$
> \begin{align*}
> b(x \odot  v, w) = b(v, \omega(x)\,w)
> \end{align*}
> $$
> for $x \in U(\mathfrak{g})$ and $v,w \in M(\lambda)$.
> 
> Note by the [[Poincaré-Birkhoff-Witt theorem]]
> $$
> \begin{align*}
> U(\mathfrak{g}) &=_{\Vect_{\mathbb{K}}} U(\mathfrak{n}^{-}) \otimes U(\mathfrak{h}) \otimes U(\mathfrak{n}^+) \\
> &=_{\Vect_{\mathbb{K}}} (\mathbb{K} \oplus \mathfrak{n}^{-}U(\mathfrak{n}^{-})) \otimes U(\mathfrak{h})\otimes (\mathbb{K} \oplus U(\mathfrak{n}^+) \mathfrak{n}^+) \\ 
> &=_{\Vect_{\mathbb{K}}} \mathfrak{n}^{-}U(\mathfrak{n}^{-}) \otimes U(\mathfrak{h}) \otimes U(\mathfrak{n}^+)\mathfrak{n}^+ \oplus \mathfrak{n}^{-}U(\mathfrak{n}^{-}) \otimes U(\mathfrak{h})  \oplus U(\mathfrak{h}) \otimes U(\mathfrak{n}^+) \mathfrak{n}^+ \oplus U(\mathfrak{h})\\
> &=_{\Vect_{\mathbb{K}}} (\cancel{ \mathfrak{n}^{-}U(\mathfrak{n}^{-})U(\mathfrak{h})U(\mathfrak{n}^+) }+ \mathfrak{n}^{-}U(\mathfrak{n}^{-})U(\mathfrak{h})+U(\mathfrak{h})U(\mathfrak{n}^+)\mathfrak{n}^+) \oplus U(\mathfrak{h}) \\
> &=_{\Vect_{\mathbb{K}}} (\mathfrak{n}^{-} U(\mathfrak{g} ) + U(\mathfrak{g}) \mathfrak{n}^+) \oplus U(\mathfrak{h})
> \end{align*}
> $$
> so we may define the [[projection operator]]
> $$
> \begin{align*}
> P : U(\mathfrak{g}) \to U(\mathfrak{h}) =_{\cat{UAsAlg}_{\mathbb{K}}} S^\bullet(\mathfrak{h})
> \end{align*}
> $$
> 
> Given any $v,w \in M(\lambda)$ by irreducibility
> $$
> \begin{align*}
> v &= x \odot  v_{\lambda} & w = y \odot  v_{\lambda}
> \end{align*}
> $$
> for some $x,y \in U(\mathfrak{g})$ so
> $$
> \begin{align*}
> b(v,w) = b(x \odot  v_{\lambda}, y \odot  v_{\lambda}) = b(v_{\lambda}, \omega(x)y \odot  v_{\lambda})
> \end{align*}
> $$
> Since $v_{\lambda}$ is a [[Vacuum space|vacuum vector]] and
> $$
> \begin{align*}
> b(v_{\lambda}, \mathfrak{n}^{-}U(\mathfrak{g}) \odot  v_{\lambda}) = b(\mathfrak{n}^+ \odot v_{\lambda}, U(\mathfrak{g}) \odot  v_{\lambda})=0
> \end{align*}
> $$
> it follows
> $$
> \begin{align*}
> b(v,w) &= b(v_{\lambda}, \omega(x)y \odot  v_{\lambda})= b(v_{\lambda}, P(\omega(x)y) \odot  v_{\lambda}) \\
> &= b(v_{\lambda}, \lambda(P(\omega(x)y))v_{\lambda}) 
> = \lambda(P(\omega(x)y))
> \end{align*}
> $$
> Therefore the behaviour of $b$ is completely determined by properties [[#^F1]] and [[#^F2]],
> so if $b$ exists it is unique.
> 
> To prove existence, consider the annihilator of $v_{\lambda}$
> $$
> \begin{align*}
> \mathfrak{J} = U(\mathfrak{g}) \left( \mathfrak{n}^+ + \sum_{h \in \mathfrak{h}} \mathbb{K}(h - \lambda (h) 1) \right) 
> \end{align*}
> $$
> which is a [[Algebra ideal|left-ideal]] $U(\mathfrak{g})$.
> Thus
> $$
> \begin{align*}
> \varphi : U(\mathfrak{g}) / \mathfrak{J} &\to M(\lambda) \\
> x + \mathfrak{I} &\mapsto x \odot v_{\lambda}
> \end{align*}
> $$
> is a $\mathfrak{g}$-[[module homomorphism|module isomorphism]].
> Now
> $$
> \begin{align*}
> P(xy) &= P(x) y & P(yx) = yP(x)
> \end{align*}
> $$
> for $x \in U(\mathfrak{g})$ and $y \in U(\mathfrak{h})$,
> whence
> $$
> \begin{align*}
> \lambda(P(\mathfrak{J})) = \lambda(P(\omega(\mathfrak{J}))) = 0
> \end{align*}
> $$
> Thus the above formula
> $$
> \begin{align*}
> b(x \odot v_{\lambda}, y \odot v_{\lambda}) = \lambda(P(\omega(x)y))
> \end{align*}
> $$
> for $x,y \in U(\mathfrak{g})$ is well-defined, since
> $$
> \begin{align*}
> \omega(xy)z &= \omega(y)\omega(x)z \\
> \lambda(P(\omega(1)1)) &= 1
> \end{align*}
> $$
> for $x,y,z \in U(\mathfrak{g})$.
> Therewithal since
> $$
> \begin{align*}
> P \circ \omega = \omega \circ P
> \end{align*}
> $$
> it follows
> $$
> \begin{align*}
> \lambda(P(\omega(y)x)) = \lambda(P(\omega(\omega(x)y))) 
> = \lambda(\omega(P(\omega(x)y)))
> = \lambda(P(\omega(x)y))
> \end{align*}
> $$
> for $x,y \in U(\mathfrak{g})$, so $b$ is [[Bilinear form#^symmetric]]. <span class="QED"/>

See also the special case of a [[Hermitian contravariant form on a complex triangular module]].

#
---
#state/tidy | #lang/en | #SemBr
