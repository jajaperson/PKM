---
tags:
  - public
---
[[Chain complex]]
# Direct sum of chain complexes

Let $A = (A_{\bullet}, \partial_{\bullet})$ and $B = (B_{\bullet}, \partial_{\bullet}')$ be [[Chain complex|chain complexes]] in an [[abelian category]] $\cat C$.
Then one may define the **direct sum complex** $A \oplus B$ by #m/def/homology 
$$
\begin{align*}
\cdots \xleftarrow{\partial_{k-1} \oplus \partial_{k-1}'} A_{k-1} \xleftarrow{\partial_{k} \oplus \partial_{k}'} A_{k} \oplus B_{k} \xleftarrow{\partial_{k+1} \oplus \partial_{k+1}'} A_{k+1} \xleftarrow{\partial_{k+2} \oplus \partial_{k+2}'} \cdots
\end{align*}
$$

## Properties

1. $A \oplus B$ is [[Exact sequence|exact]] iff $A$ and $B$ are exact. ^P1

> [!check]- Proof
> Note that $\ker(\partial_{k} \oplus \partial_{k}') = (\ker \partial_{k}) \oplus (\ker \partial_{k}')$.
> Similarly $\im(\partial_{k-1} \oplus \partial_{k-1}') = (\im \partial_{k-1}) \oplus (\im \partial_{k-1}')$.
> From this the statement [[#^P1]] is clear. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr
