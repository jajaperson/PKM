---
tags:
  - public
aliases:
  - vertex-transitive
  - arc-transitive
---
[[Graph theory MOC]]
# Graph automorphism

Let $\Gamma$ be a [[Graph|general graph]]. 
A **graph automorphism** $\phi \in \Aut(\Gamma)$ is a bijection $\opn{V}(\phi) : \opn V(\Gamma) \to \opn V(\Gamma)$ which leaves the [[adjacency matrix]] of $\Gamma$ fully invariant, #m/def/graph 
i.e.
$$
\begin{align*}
\abs{\Gamma(v,w)} = \abs{\Gamma(\phi(v), \phi(w))}
\end{align*}
$$
for all $v, w \in \opn V(\Gamma)$.
Clearly $\Aut(\Gamma)$ forms a [[group]] under composition,
which in addition to an [[Group action|action]] on $\opn V(\Gamma)$ has an action on $\opn A(\Gamma)$.
A digraph is called

- **vertex-transitive** iff $\Aut(\Gamma)$ acts transitively on $\opn V(\Gamma)$;
- **arc-transitive** iff $\Aut(\Gamma)$ acts transitively on $\opn A(\Gamma)$.


## Results

- [[Every arc-transitive digraph is an orbital digraph]]
#
---
#state/tidy | #lang/en | #SemBr
