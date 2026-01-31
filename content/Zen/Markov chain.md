---
tags:
  - public
---
[[Probability theory MOC]]
# Markov chain

A **Markov chain** $(\mathscr{K}, S)$ is a random sequence of events where the probability of each event depends only on the previous event occurs.
Thus such a process may be characterized by a state space $S$ and a **transition matrix** $\mathscr{K} : S \times S \to [0,1]$, such that for each $s \in S$ we have
$$
\begin{align*}
\sum_{s' \in S} \mathscr{K}(s,s') = 1
\end{align*}
$$

A **stationary distribution** is a distribution of initial states which remains invariant upon transition,
i.e. an [[Eigenvectors, eigenvalues, and eigenspaces|eigenvector]] of eigenvalue 1 with entries summing to 1.
$$
\begin{align*}

\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
