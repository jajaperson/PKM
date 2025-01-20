---
aliases:
  - homology group
  - cochain complex
tags:
  - public
---
[[Homological algebra MOC]]
# Chain complex

A **chain complex**[^Kettenkomplex] $(A_{\bullet}, \partial_{\bullet})$ in an [[Abelian category]] $\cat A$ is a sequence of objects $A_{k}$ of $k$-**chains**[^chain] with homomorphisms $\partial_{k} : A_{k} \to A_{{k-1}}$ called **boundary operators** between them
$$
\begin{align*}
\cdots \xleftarrow{\partial _{k-1}} A_{k-1} \xleftarrow{\partial _{k}} A_{k} \xleftarrow{\partial _{k+1}} A_{k+1} \xleftarrow{\partial _{k+2}} \cdots
\end{align*}
$$
such that $\partial_{k}\partial_{k+1} = 0$ is the trivial homomorphism for all $k \in \mathbb{Z}$.[^loose] #m/def/homology 
Each $A_{k}$ has two important subobjects, 
the object of $k$-**cycles** $Z_{k}(A, \partial) = \ker \partial_{k}$ 
and the object of $k$-**boundaries** $B_{k}(A, \partial) = \partial_{k+1}(A_{k+1})$.
Hence, $B_{k}(A, \partial) \leq \sube Z_{k}(A, \partial)$ for all $k \in \mathbb{Z}$, i.e. all $k$-boundaries are $k$-cycles.
The $k$-**chain homology** is defined as
$$
\begin{align*}
H_{k}(A, \partial ) = Z_{k}(A, \partial ) / B_{k}(A, \partial )
\end{align*}
$$
with $k$-**homology classes** of chains as its elements,
and two cycles in the same homology class are called **homologous**.

[^grp]: See [[Abelian groups as Z-modules]]
[^Kettenkomplex]: German _Kettenkomplex_, _Randoperator_.
[^chain]: In this abstract setting chains, cycles, and boundaries refer simply to the elements of each of these groups/modules as they are defined.
[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], §3.1, p. 127

## Additional terminology

- A **non-negative** chain complex has $A_{k} = 0$ trivial for all $k < 0$.
- A structure-preserving map of chain complexes is a [[Chain map]], which form the morphisms in [[Category of chain complexes]].

## Properties

- A chain complex with only trivial homologies is an [[Exact sequence]].

## Dual

A **cochain complex** is the exact same construction but with $d^{k} : A^k \to A^{k+1}$ and $d^{k+1}d^{k} = 0$. #m/def/homology 
All other constructions above follow directly, yielding cochains, cocycles, coboundaries, and cohomologies.

#
---
#state/develop | #lang/en | #SemBr
