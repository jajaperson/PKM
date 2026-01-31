---
tags:
  - public
mathLink: $\mathbb{K}$-tensor product of vector spaces
---
[[Linear algebra MOC]]
# $\mathbb{K}$-tensor product of vector spaces

Let $V_{1},V_{2}$ be [[vector space|vector spaces]] over $\mathbb{K}$. The **tensor product** $V_{1} \otimes_{\mathbb{K}} V_{2}$ is a vector space which allows one to treat $\mathbb{K}$-[[Multilinear map|bilinear]] maps from $V_{1} \times V_{2}$ as $\mathbb{K}$-[[Linear map|linear]] maps from $V_{1} \otimes_{\mathbb{K}} V_{2}$,
as ensured by the [[#Universal property]].
See [[Tensor product of modules over a commutative ring]] for a direct generalization.

## Universal property

The tensor product is uniquely characterised by the following universal property:

If $V_{1}, V_{2},W$ are vector spaces over $\mathbb{K}$ and $h : V_{1}\times V_{2}\to W$ is a [[Multilinear map|bilinear map]]
there exists a unique linear map $\bar f : V_{1} \otimes V_{2} \to W$ such that $h(u,v) = \bar h(u \otimes v)$.

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJWXzFcXHRpbWVzIFZfMiJdLFsyLDAsIlZfMSBcXG90aW1lcyBWXzIiXSxbMiwyLCJXIl0sWzAsMiwiaCIsMl0sWzEsMiwiXFxiYXIgaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFswLDEsIlxcb3RpbWVzIl1d%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%7BV_1%5Ctimes%20V_2%7D%20%26%26%20%7BV_1%20%5Cotimes%20V_2%7D%20%5C%5C%0A%09%5C%5C%0A%09%26%26%20W%0A%09%5Carrow%5B%22%5Cotimes%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22h%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20h%7D%22%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJWXzFcXHRpbWVzIFZfMiJdLFsyLDAsIlZfMSBcXG90aW1lcyBWXzIiXSxbMiwyLCJXIl0sWzAsMiwiaCIsMl0sWzEsMiwiXFxiYXIgaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFswLDEsIlxcb3RpbWVzIl1d" /></p>

> [!missing]- Proof
> #missing/proof
> Let $h : V_{1} \times V_{2} \to W$ be a bilinear map.

## Finite dimensional characterization

The **tensor product** $V \otimes W$ of [[Vector space|vector spaces]] $V,W$ over a field $\mathbb{K}$ is the vector space of [[Bilinear form|bilinear forms]] $V^* \times W^* \to \mathbb{K}$,
equipped with a bilinear[^anti] map $(\otimes) : V \times W \to V \otimes W$ 
such that  #m/def/linalg 
$$
(v \otimes w) (f,g) = f(v)g(w)
$$ 
for $v \in V$, $w \in W$, $f \in V^*$, $g \in W^*$.[^sim][^2015]
It follows that if $\{ v_{i} \}_{i=1}^n$ and $\{ w_{j} \}_{j=1}^m$ are bases of $V$ and $W$ respectively,
then  $\{ v_{i}\otimes w_{j} \}_{i,j=1}^{n,m}$ defines a basis for the tensor product space $V \otimes W$.
We call
$$
\begin{align*}
T \in \underbrace{ V \otimes \dots \otimes V }_{ p } \otimes \underbrace{ V^* \otimes \dots \otimes V^* }_{ q } = \mathcal{T}^p_{q}
\end{align*}
$$
a type $(p, q)$ [[Tensor]][^convention]

> [!warning]
> This characterization probably requires $V^{* *} \simeq V$ and hence finite dimensions.

[^convention]: Authors vary on the order of the tensor type, cf. [[@jeevanjeeIntroductionTensorsGroup2015]] with [[@emamCovariantPhysicsClassical2021]] (I use the convention of the latter, also aligns with Wikipedia)




## Hilbert spaces

If $V,W$ are finite-dimensional [[Hilbert space|Hilbert spaces]].
then the tensor product $V \otimes W$ is a Hilbert space carrying the unique inner product given by
$$
\begin{align*}
\braket{ v \otimes w | B } = B(\bra{v} ,\bra{w} )
\end{align*}
$$
Then if $\{ v_{i} \}_{i=1}^n$ and $\{ w_{j} \}_{j=1}^m$ are [[Orthonormal basis|orthonormal bases]] of $V, W$ respectively, $\{ v_{i}\otimes w_{j} \}_{i,j=1}^{n,m}$ is an orthonormal basis of $V \otimes W$.


[^anti]: Simon defines these as “biantilinear” maps $X \times Y \to \mathbb{C}$, which is of course completely equivalent.
[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §II.5, p. 29
[^2015]: 2015\. [[Sources/@jeevanjeeIntroductionTensorsGroup2015|An Introduction to Tensors and Group Theory for Physicists]], §3.4, p.70

## Further characterizations

### As quotient

One may construct the tensor product $V \otimes W$ as a quotient space of the [[free module]] generated by formal products of vectors in $V$ and $W$.
$$
\begin{align*}
V*W = \mathbb{K}[\{ &v * w \mid v \in V, w \in W \}] \\
U = \Span \{ &(\alpha v_{1} + \beta v_{2} )*(\gamma w_{1}+\delta w_{2})  \\ &- \alpha\gamma v_{1}*w_{1} - \alpha\delta v_{1}*w_{2}- \beta\gamma v_{2}*w_{1}- \beta\delta v_{2}*w_{2} \\ &\mid \alpha,\beta,\gamma,\delta \in \mathbb{K}, v \in V, w \in W\} \\
V \otimes W = &V * W / U
\end{align*}
$$

## Properties

- $\dim(V \otimes W) = \dim V \cdot \dim W$

## See also

- [[Tensor product of linear maps]] (functor)
- [[Tensor product of group representations]]
- [[Tensor algebra]]
- [[Tensor]]

#
---
#state/develop  | #lang/en | #SemBr
