---
tags:
  - public
---
[[Universal enveloping algebra]]
# Poincaré-Birkhoff-Witt theorem

Let $\mathfrak{g}$ be a [[Lie algebra]] over $\mathbb{K}$ and $U(\mathfrak{g})$ its [[universal enveloping algebra]] with the canonical [[Lie algebra homomorphism]] $\iota : \mathfrak{g} \to U(\mathfrak{g})$.
For some [[ordered basis]] $(x_{j})_{j \in J}$ of $\mathfrak{g}$,
the universal enveloping algebra $U(\mathfrak{g})$ has a basis consisting of ordered products $x_{j_{1}} \cdots x_{j_{n}}$ for $n \geq 1$, $j_{\ell} \in J$, $j_{1} \leq \dots \leq j_{n}$. #m/thm/lie
It follows that $\iota$ is [[Surjectivity, injectivity, and bijectivity|injective]].

> [!missing]- Proof
> #missing/proof

## Corollaries

- Let $\mathfrak{f}, \mathfrak{h} \leq_{\cat{Lie}_{\mathbb{K}}} \mathfrak{g}$ and  $\mathfrak{g} =_{\Vect_{\mathbb{K}}} \mathfrak{f} \oplus \mathfrak{h}$. Then the following defines a $\mathbb{K}$-linear isomorphism:
  $$
  \begin{align*}
  U(\mathfrak{f}) \otimes_{\mathbb{K}} U(\mathfrak{h}) &\to U(\mathfrak{g}) \\
  x \otimes y &\mapsto xy
  \end{align*}
  $$
  Therewithal if $V$ is an $\mathfrak{h}$-[[Module over a Lie algebra|module]] then the following defines a $\mathbb{K}$-linear isomorphism
  $$
  \begin{align*}
  U(\mathfrak{f}) \otimes_{\mathbb{K}} V &\to U(\mathfrak{g}) \otimes_{U(\mathfrak{h})} V \\
  x \otimes v &\mapsto x \otimes v
  \end{align*}
  $$
  where the codomain is the [[induced module]] $\Ind^\mathfrak{g}_{\mathfrak{ h}}V$.[^1988] ^C1
- The [[associated graded algebra]] of $U(\mathfrak{g})$ is the [[symmetric algebra]] $S^\bullet \mathfrak{g}$. ^C2


  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.5, p. 16

#
---
#state/develop | #lang/en | #SemBr
