---
tags:
  - public
---
[[Compact space]]
# Closed subsets of a compact space are compact

Let $X$ be a [[compact space]].
Then if $A \sube X$ is [[Topological space|closed]] it is also [[Compact space|compact]]. #m/thm/topology 

> [!check]- Proof
> Let $\{A_{\alpha}\}_{\alpha \in I} \sube A$ be an open cover of $A$.
> Then $\{X \setminus A\} \cup \{A_{\alpha}\}_{\alpha \in I}$ is an open cover of $X$, 
> so by compactness it has a finite subcover
> $\{X \setminus A\} \cup \{A_{\alpha_{i}}\}_{i=1}^n$.
> But it follows that $\{A_{\alpha_{i}}\}_{i=1}^n$ is a finite subcover of $\{A_{\alpha}\}_{\alpha \in I}$.
> Hence $A$ is compact.
> <span class="QED"/>

Similarly, [[Compact subsets of a Hausdorff space are closed]].

#
---
#state/tidy | #lang/en | #SemBr
