---
tags:
  - public
aliases:
  - group action rank
  - orbital digraph
alias:
---
[[Group action]]
# Orbital

Given a [[group action]] of $G$ on $\Omega$,
there is a natural group action of $G$ on $\Omega \times \Omega$.
The [[Group action orbit|orbits]] of this induced action are called **orbitals** or **2-orbits**, #m/def/group 
a generalization being [[n-orbit|$n$-orbits]].
The number of orbitals is called the **rank**.

If $\Delta$ is an orbital, then so is its **paired orbital**
$$
\begin{align*}
\Delta^* = \{ (\beta,\alpha): (\alpha,\beta) \in \Delta \}
\end{align*}
$$
and if $\Delta = \Delta^*$ we say $\Delta$ is **self-paired**.

An orbital $\Delta \sube \Omega \times \Omega$ admits a natural interpretation as a [[Graph|digraph]], known as the **orbital digraph**,
where by abuse of notation we write $\opn V(\Delta) = \Omega$ and $\opn A(\Delta) = \Delta$.

## Properties

Suppose $\Delta$ is an orbital, and identify it with the corresponding orbital digraph.

- $G \leq \Aut(\Delta)$, i.e. $G$ is a subgroup of [[Graph automorphism|graph automorphisms]].
- $\Delta$ is [[Graph automorphism|arc-transitive]] — in fact [[Every arc-transitive digraph is an orbital digraph]].
- [[The rank of a transitive group action equals the number of suborbits]]


#
---
#state/tidy | #lang/en | #SemBr
