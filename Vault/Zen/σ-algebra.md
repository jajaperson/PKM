---
tags:
  - public
---
[[Measure theory MOC]]
# σ-algebra

A **σ-algebra** $\Sigma \sube \mathcal{P}(X)$ on a set $X$ is a set of subsets of $X$ with the following properties #m/def/measure 

1. **universal set**: $X \in \Sigma$ ^M1
2. **compliment**: $A \in \Sigma \implies X \setminus A \in \Sigma$ ^M2
3. **countable union**: $\{ A_{i} \}_{i=1}^\infty \sube \Sigma \implies \bigcup_{i=1}^\infty A_{i} \in \Sigma$ ^M3

it immediately follows from [[De Morgan's laws]] $\Sigma$ is closed under

4. **countable intersection**: $\{ A_{i} \}_{i=1}^\infty \sube \Sigma \implies \bigcap_{i=1}^\infty A_{i} \in \Sigma$ ^M4
5. **set difference**: $A, B \in \Sigma \implies A \setminus B \in \Sigma$ ^M5

#
---
#state/tidy | #lang/en | #SemBr 