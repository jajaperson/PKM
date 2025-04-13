---
mathLink: $[8,4,4]_2$ extended Hamming code
tags:
  - public
---
[[Hamming code]]
# $[8,4,4]_2$ extended Hamming code

The $[8,4,4]_{2}$ (extended) [[Hamming code]] $\mathcal{C}$ is the unique [[Orthogonal code|self-orthogonal]] [[Divisible code|doubly even]] [[binary linear code]] of length $8$,
and the [[extended code]] of the [[Binary 7,4,3 Hamming code]].

> [!missing]- Proof of uniqueness
> #missing/proof

## Construction

### From quadratic residues
Let $\Omega = \opn P^1 \mathbb{K}_{7} = \mathbb{K}_{7} \cup \{ \infty \}$ be the [[Projective space|projective line]] where $\mathbb{K}_{7}$ is a [[Galois field]].[^FLM][^Lord]
$\Omega$ divides neatly into [[quadratic residue|quadratic residues]] and non-residues
$$
\begin{align*}
\mathcal{Q} &= \{ x^2 : x \in \mathbb{K}_{7} \} = \{ 0,1,2,4 \} \\
\mathcal{N} &= \Omega \setminus \mathcal{Q} = \{ 3,5,6, \infty \} 
\end{align*}
$$
defining the following subcodes of the [[even binary code]] $\mathcal{E}(\Omega)$
$$
\begin{align*}
\mathcal{C}_{1} &= \span_{\mathbb{K}_{2}} \{ \mathcal{N} + i : i \in \mathbb{K}_{7} \}  \\
\mathcal{C}_{2} &= \span_{\mathbb{K}_{2}} \{ - \mathcal{N} - i : i \in \mathbb{K}_{7} \} \\
\end{align*}
$$
satisfy
$$
\begin{align*}
\mathcal{C}_{1} \cap \mathcal{C}_{2} &= \mathbb{K}_{2}\Omega \\
\mathcal{C}_{1} + \mathcal{C}_{2} &= \mathcal{E}(\Omega) \\
q(\mathcal{C}_{1}) &= q(\mathcal{C}_{2}) = 0 \\
\dim \mathcal{C}_{1} &= \dim \mathcal{C}_{2} = 4
\end{align*}
$$
Both $\mathcal{C}_{1}$ and $\mathcal{C}_{2}$ are [[Linear equivalence of codes|linearly equivalent]] to $\mathcal{C}$.

  [^FLM]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §10.1, p. 300

  [^Lord]: 1988\. [[Sources/@lordGeometryMathieuGroups1988|Geometry of the Mathieu groups and Golay codes]], pp. 155–156

## Properties

- $\mathcal{C}$ is of [[FLM code types I and II|FLM type II]].
- $\mathcal{C}$ has [[weight enumerator]] $1 + 14q^4 + q^8$.

#
---
#state/develop  | #lang/en | #SemBr
