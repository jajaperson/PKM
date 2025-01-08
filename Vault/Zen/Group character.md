---
tags:
  - public
aliases:
  - character
  - irreducible character
---
[[Group representation theory MOC]]
# Group character

A **character** $\chi$ of a group $G$ over a [[field]] $\mathbb{K}$ is a map  $\chi \in \mathbb{K}[G]$ that can be defined as the [[Trace]] of a [[Group representation]] $\Gamma : G \to \Vect_{\mathbb{K}}$. #m/def/rep 
$$
\begin{align*}
\chi(g) = \Tr \Gamma(g) = \sum_{j = 1}^{\dim \Gamma} \Gamma_{jj}(g)
\end{align*}
$$
Since [[Trace]] is invariant under unitary equivalences, [[Unitary equivalence of representations|unitarily equivalent]] representations have the same character. 

If $\Gamma^\mu$ is an [[irrep]] then $\chi^\mu$ is an **irreducible character**.
The irreducible characters $\{ x^\mu \}$ are [[Group class function|class functions]] and [[Orthonormality of irreducible characters|form an orthonormal basis]] of [[Centre of the group ring|all such class functions within the group ring]] $Z(\mathbb{C}[G])$.

Characters neatly characterise representations. See [[Character table]].

## Linear character
In the special case of a **linear character** the vector space is one-dimensional and thus the character is a homomorphism into the multiplicative group of $\mathbb{K}$,
i.e. a [[1-dimensional irrep|1-dimensional representation]].

## Properties

- [[Orthonormality of irreducible characters]]
- [[Character irreducibility criterion]]
- [[Irreducible character as function of an idempotent]]

#
---
#state/tidy| #lang/en | #SemBr