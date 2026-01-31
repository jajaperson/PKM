---
tags:
  - public
---
[[Category theory MOC]]
# Biproduct

Let $\cat C$ be a category with [[Zero morphism|zero morphisms]].
A **biproduct** $A$ of a finite collection $\{ A_{i} \}_{i=1}^n$ of objects in $\cat C$ is simultaneously a [[Products and coproducts|product and coproduct]] in a compatible way. #m/def/cat 
If $\pi_{i} : A \twoheadrightarrow A_{i}$ and $\iota_{i} : A_{i} \hookrightarrow A$ denote the product projections and coproduct inclusions respectively,
we require
$$
\begin{align*}
\pi_{i} \iota_{j} &= \begin{cases}
1_{A_{i}} & i = j \\
0 & i \neq j
\end{cases}
\end{align*}
$$
for all $i,j \in \mathbb{N}_{n}$.
A monoidal category whose tensor product is a binary biproduct is called a [[Bicartesian category]].

#
---
#state/tidy | #lang/en | #SemBr
