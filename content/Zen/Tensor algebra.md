---
tags:
  - public
---
[[K-monoid]]
# Tensor algebra

The **tensor algebra** $T^•V$ of a [[vector space]] $V$ is the [[Direct sum of vector spaces|direct sum]] of all [[Tensor product of vector spaces over a field|tensor powers]] of $V$ together with the outer product $(\otimes) : T^•V \times T^•V \to T^•V$, #m/def/falg 
i.e. denoting $T^k V= V^\otimes$,
$$
\begin{align*}
T^• V = \bigoplus_{k=0}^\infty T^k V
\end{align*}
$$
where $T^0 V = \mathbb{K}$.
The tensor algebra is a very simple [[K-monoid]][^most]
and $\mathbb{N}_{0}$-[[graded algebra]].

  [^most]: Indeed, there is a sense in which it is the _most simple_, i.e. a [[Free-forgetful adjunction]].

## Universal property

The tensor algebra has a unique extension to a functor $T^• : \Vect_{\mathbb{K}} \to \cat{AsAlg}_{\mathbb{K}}$ 
so that the canonical inclusion becomes a [[natural transformation]] $\iota: \id_{\Vect_{\mathbb{K}}} \to F \circ T^•$, 
where $F : \cat{AsAlg}_{\mathbb{K}} \to \Vect_{\mathbb{K}}$ is the forgetful functor (thus creating a [[Free-forgetful adjunction]]).
This is enabled by characterising $(T^•V, \iota_{V})$ with the following universal property:

If $A \in \cat{AsAlg}_{\mathbb{K}}$ and $f \in \Vect_{\mathbb{K}}(V,A)$ is a [[linear map]] of vector spaces
there exists a unique $\bar f \in \cat{AsAlg}_{\mathbb{K}}$ so that $\bar f \iota_{A}=f$,
i.e. the following diagram commutes

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMiwwLCJGVF5cXGJ1bGxldCBWIl0sWzIsMiwiRkEiXSxbMCwwLCJWIl0sWzQsMCwiVF5cXGJ1bGxldCBWIl0sWzQsMiwiQSJdLFsyLDAsIlxcaW90YV9WIl0sWzIsMSwiZiIsMl0sWzAsMSwiRiBcXGJhciBmIl0sWzMsNCwiXFxiYXIgZiJdXQ%3D%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09V%20%26%26%20%7BFT%5E%5Cbullet%20V%7D%20%26%26%20%7BT%5E%5Cbullet%20V%7D%20%5C%5C%0A%09%5C%5C%0A%09%26%26%20FA%20%26%26%20A%0A%09%5Carrow%5B%22%7B%5Ciota_V%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7BF%20%5Cbar%20f%7D%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMiwwLCJGVF5cXGJ1bGxldCBWIl0sWzIsMiwiRkEiXSxbMCwwLCJWIl0sWzQsMCwiVF5cXGJ1bGxldCBWIl0sWzQsMiwiQSJdLFsyLDAsIlxcaW90YV9WIl0sWzIsMSwiZiIsMl0sWzAsMSwiRiBcXGJhciBmIl0sWzMsNCwiXFxiYXIgZiJdXQ==" /></p>

> [!missing]- Proof
> #missing/proof 

## Graded structure

The tensor algebra is $\mathbb{N}_{0}$-[[Graded algebra|graded]], since $T^i V \otimes T^j V \sube T^{i + j} V$.
If $V$ is itself a $\mathfrak{A}$-[[graded vector space]] for some [[monoid]] $\mathfrak{A}$,
then $T^\bullet V$ possesses an additional unique gradation extending that of $V$ so that $V_{\alpha} \otimes V_{\beta} \leq (T^\bullet V)_{\alpha+\beta}$.

## Related

- [[Exterior algebra]]
- [[Symmetric algebra]]
- [[Universal enveloping algebra]]

#
---
#state/tidy | #lang/en | #SemBr
