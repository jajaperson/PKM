---
tags:
  - public
---
[[Coding theory MOC]]
# Binary linear code

The vector space $\opn{GF}(2)^n$ is equivalent to the [[powerset]] $\mathcal{P}(\Omega_{n})$ where $\Omega_{n}$ is a set with $n$ elements, and addition is given by [[symmetric difference]].
Thus a **binary [[Linear code]]** $\mathcal{C}$ is a $\opn{GF}(2)$-[[Vector subspace|subspace]] of $\mathcal{P}(\Omega)$.[^1988]
Indeed, the main advantage of this notation is that it allows the importing of notations from set theory.

- [[FLM code types I and II]]
- [[Dual code]]

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §10.1, p. 299

## Further notions

Given a codeword $C \in \mathcal{C}$ we have 
$$
\wt C = \abs C
$$
The natural non-singular symmetric bilinear form on $\mathcal{P}(\Omega_{n})$ becomes
$$
\begin{align*}
(\cdot) : (S_{1},S_{2}) \mapsto \abs{S_{1}\cap S_{2}} + 2\mathbb{Z}
\end{align*}
$$
On the subspace
$$
\begin{align*}
\mathcal{E}(\Omega_{n}) = \{ S \sube \Omega_{n} : \abs S \in 2\mathbb{Z} \}
\end{align*}
$$
we have the [[quadratic form]]
$$
\begin{align*}
q: \mathcal{E}(\Omega_{n}) &\to \mathbb{Z}_{2} \\
S &\mapsto \frac{\abs S}{2} + 2\mathbb{Z}
\end{align*}
$$
which has associated bilinear form $(\cdot).$

#
---
#state/develop | #lang/en | #SemBr
