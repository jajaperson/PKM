---
tags:
  - public
---
[[Cauchy sequence]]
# Complete metric space
A **complete metric space** is a [[metric space]] for which every [[Cauchy sequence]] is a [[Convergence|convergent sequence]],
i.e. the limit of a sequence is in the space.
A stronger condition is [[Sequentially compact space|compactness]].



> [!warning] Completeness is not a topological property
> Completeness is not a topological property,
> unlike the stronger [[Sequentially compact space|sequential compactness]].
> Consider the homeomorphism $f : (-1,1) \to \mathbb{R} : x \mapsto \frac{x}{(1-x^2)}$.
> While $\mathbb{R}$ is complete, $(-1, 1)$ is not.^[2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 7]


Any metric space may be embedded in its [[Metric completion]].

## Examples

- Clearly $\mathbb{Q}$ with the Euclidean metric is incomplete,
whereas $\mathbb{R}$ is.
- $\mathcal{C}^1[a,b]$ is not complete, as is showed by a function limiting to absolute value, which is not differentiable at $0$.

#
---
#state/develop | #lang/en | #SemBr
