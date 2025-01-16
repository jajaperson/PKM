---
tags:
  - public
---
[[Golay code]]
# Extended binary Golay code

The $[24,12,8]_{2}$ (extended) [[Golay code]] $\mathcal{C} \leq \mathcal{E}(\Omega_{24})$ is the unique [[Orthogonal code|self-orthogonal]] [[Divisible code|doubly-even code]] of length $24$ containing no elements of [[Hamming distance|Hamming weight]] $4$, #m/def/code 
and the [[extended code]] of the $[23,12,7]_{2}$ [[Perfect binary Golay code]].[^1988]

> [!missing]- Proof of uniqueness
> #missing/proof

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], p. 301

The codewords of weight eight are called **octads**, while the codewords of weight 12 are called **dodecads**.
The octads form the [[Steiner system]] [[S(5,8,24)]].

## Construction

### From a Hamming code

Let $\Omega = \opn P^1 \mathbb{K}_{7}$ and $\mathcal{C}_{1}, \mathcal{C}_{2}$ be the two constructions of the [[Binary 8,4,4 extended Hamming code]] [[Binary 8,4,4 extended Hamming code#From quadratic residues]].
Furthermore, let $3\Omega$ represent three disjoint copies of $\Omega$ 
so that $\mathcal{P}(3\Omega) = \mathcal{P}(\Omega)^{\oplus 3}$.
Then let
$$
\begin{align*}
\mathcal{C} = \langle (S,S,\0),(S,\0,S),(T,T,T) : S \in \mathcal{C}_{1}, T \in \mathcal{C}_{2} \rangle_{\leq \mathcal{P}(3\Omega)}
\end{align*}
$$
where the $3$-tuples denote the corresponding disjoint unions.
This is the orthogonal[^orth] direct sum of 3 [[Quadratic space#^totallyIsotropic]] 4-dimensional subspaces of $\mathcal{E}(3\Omega)$
$$
\begin{align*}
\mathcal{C} = \langle (S,S,\0) : S \in \mathcal{C}_{1} \rangle \obot \langle (S,\0,S): S \in \mathcal{C}_{2} \rangle  \obot \langle (T, T, T) : T \in \mathcal{C}_{2} \rangle 
\end{align*}
$$
and is hence 12-dimensional and totally isotropic,
thus it is [[Orthogonal code|self-orthogonal]] and [[Divisible code|doubly-even]], 
i.e. of [[FLM code types I and II|FLM type II]].

> [!check]- Proof of Golay code
> Assume there exists $C \in \mathcal{C}$ with $\abs C = 4$.
> Note
> $$
> \begin{align*}
> C = (S,S,\0) \obot (S,\0,S) \obot (T,T,T) = (S_{1} + T, S_{2} + T, S_{3}+T)
> \end{align*}
> $$
> for some $S_{1} + S_{2} + S_{3} = 0$, so
> $$
> \begin{align*}
> \abs{S_{1} + T} + \abs{S_{2}+T} + \abs{S_{3}+T} = 4
> \end{align*}
> $$
> It follows one of the summands must be zero, since each is even;
> say $S_{3}+T = 0$, whence $T \in \mathbb{K}_{2}\Omega$.
> Thus $\abs{S_{1}+T}, \abs{S_{2} + T}$ are doubly even, so one must be zero, say $S_{1}+T = 0$.
> But this implies
> $$
> \begin{align*}
> S_{1} = S_{1} - 2T = S_{1} + S_{2} + S_{3} = 0
> \end{align*}
> $$
> so $\abs{S_{1}+T} = \abs T \in \{ 0,8 \}$, a contradiction. <span class="QED"/>

  [^orth]: where the orthogonality of the first two follows from the [[Orthogonal code|self-orthogonality]] of $\mathcal{C}_{1}$ and the orthogonality of either with the third follows from the fact that any nonzero result in one of the components appears twice.

## Properties

1. $\mathcal{C}$ is of [[FLM code types I and II|FLM type II]].
2. $\mathcal{C}$ has [[weight enumerator]] $1 + 759q^8 + 2576q^{12} + 759q^{16} + q^{24}$.

### Automorphisms

The [[Automorphism group of a linear code|automorphism group]] $\Aut \mathcal{C}$ is the sporadic simple group [[Mathieu group M24]], and we have the modules
$$
\begin{align*}
0 \leq \mathbb{K}_{2} \Omega \leq \mathcal{C} \leq \mathcal{E}(\Omega) \leq \mathcal{P}(\Omega)
\end{align*}
$$ 
with the [[Faithful representation|faithful]] [[Simple module|irreducible modules]] given by $\mathcal{C} / \mathbb{K}_{2}\Omega$ and $\mathcal{E}(\Omega) / \mathcal{C}$.

#
---
#state/develop | #lang/en | #SemBr
