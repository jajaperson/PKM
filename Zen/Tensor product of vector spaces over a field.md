---
tags:
  - public
mathLink: $\mathbb{K}$-tensor product of vector spaces
---
[[Linear algebra MOC]]
# $\mathbb{K}$-tensor product of vector spaces

Let $V_{1},V_{2}$ be [[vector space|vector spaces]] over $\mathbb{K}$. The **tensor product** $V_{1} \otimes_{\mathbb{K}} V_{2}$ is a vector space which allows one to treat $\mathbb{K}$-[[Multilinear map|bilinear]] maps from $V_{1} \times V_{2}$ as $\mathbb{K}$-[[Linear map|linear]] maps from $V_{1} \otimes_{\mathbb{K}} V_{2}$,
as ensured by the [[Tensor product of modules over a commutative ring#Universal property]].
This is a special case of the [[Tensor product of modules over a commutative ring]], whose universal property should be taken as the definition.

## Constructions
Here we give alternate constructions which may be more convenient than the [[Tensor product of modules over a commutative ring#Construction|construction as a quotient of a free module]].

### Finite dimensional vector spaces

The **tensor product** $V \otimes W$ of finite-dimensional [[Vector space|vector spaces]] $V,W$ over a field $\mathbb{K}$ is the vector space of [[Bilinear form|bilinear forms]] $V^* \times W^* \to \mathbb{K}$,
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

[^convention]: Authors vary on the order of the tensor type, cf. [[@jeevanjeeIntroductionTensorsGroup2015|Introduction to tensors and group theory for physicists]] with [[@emamCovariantPhysicsClassical2021|Covariant physics]] (I use the convention of the latter, also aligns with Wikipedia)



## Additional structure

### Hilbert spaces

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
[^2015]: 2015\. [[Sources/@jeevanjeeIntroductionTensorsGroup2015|An Introduction to Tensors and Group Theory for Physicists]], §3.4, p.7


## Properties

- $\dim(V \otimes W) = \dim V \cdot \dim W$

## See also

- [[Tensor product of linear maps over a commutative ring]] (functor)
- [[Tensor product of group representations]]
- [[Tensor algebra]]
- [[Tensor]]

#
---
#state/develop  | #lang/en | #SemBr
