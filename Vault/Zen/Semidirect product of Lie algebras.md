---
tags:
  - public
---
[[Lie algebras MOC]]
# Semidirect product of Lie algebras

The **semidirect product** $\mathfrak{a} \rtimes \mathfrak{b}$ of [[Lie algebra|Lie algebras]] is a generalization of the [[Direct product of Lie algebras]] where only one of the operands is required to be an [[Lie algebra ideal|ideal]].[^1988].
The semidirect product $\mathfrak{a} \rtimes \mathfrak{b}$ is an [[Lie algebra extension|extension]] of $\mathfrak{b}$ by $\mathfrak{a}$,
$$
\begin{align*}
0 \to \mathfrak{a} \hookrightarrow \mathfrak{a} \rtimes  \mathfrak{b} \twoheadrightarrow \mathfrak{b} \to 0
\end{align*}
$$
and extensions which can be written this way are precisely [[Lie algebra extension#^split|split extensions]].

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], p. 7

## Internal semidirect product.
Let $\mathfrak{a} \trianglelefteq \mathfrak{g}$ and $\mathfrak{b} \leq \mathfrak{g}$ be [[Subalgebra over a field|subalgebras]],
the first of which is an [[Lie algebra ideal|ideal]],
such that $\mathfrak{g} = \mathfrak{a} \oplus \mathfrak{b}$ [[Direct sum of vector spaces#Internal direct sum|internally]].
Then $\mathfrak{g}$ is the **internal semidirect product** $\mathfrak{a} \rtimes \mathfrak{b}$.

## External semidirect product
Let $\mathfrak{a}$ be a Lie algebra and let $\mathfrak{b}$ be a Lie algebra [[Lie algebra representation|acting]] on $\mathfrak{a}$ by [[Derivation on an algebra|derivations]],
i.e. equipped with a [[Lie algebra homomorphism]] $\pi : \mathfrak{b} \to \der(\mathfrak{a})$ into the [[Derivation subalgebra]] $\der(\mathfrak{a})  \leq \End \mathfrak{a}$,
so that $\pi(x)$ is a derivation of $\mathfrak{a}$ for every $x \in \mathfrak{b}$.
Then the **external semidirect product** $\mathfrak{a} \rtimes \mathfrak{b}$ is the unique [[Lie algebra|Lie bracket]] on the [[Direct sum of vector spaces|sum vector space]] $\mathfrak{a} \oplus \mathfrak{b}$
such that $\mathfrak{a}$ and $\mathfrak{b}$ are [[Lie subalgebra|subalgebras]] and #m/def/lie 
$$
\begin{align*}
\ad_{x} y =  [x,y] = \pi(x)y
\end{align*}
$$
for all $y \in \mathfrak{a}$ and $x \in \mathfrak{b}$.

## Properties

- $\mathfrak{a} \rtimes \mathfrak{b} \cong \mathfrak{a} \times \mathfrak{b}$ iff $\pi = 0$ is the trivial representation

## Special cases

- [[Adjoining a derivation]]

## See also

- [[Semidirect product]]

#
---
#state/tidy| #lang/en | #SemBr
