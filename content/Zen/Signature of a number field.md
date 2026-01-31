---
alias: real embedding, unreal embedding
tags:
  - public
---
[[Number field]]
# Signature of a number field

Let $K = \mathbb{Q}(\vartheta)$ be a [[number field]] of degree $n$.
Then $K$ has $n$ distinct field embeddings $\sigma_{i} : K \hookrightarrow \mathbb{C}$ into [[Complex numbers]], which are either **real** or **unreal**.
Moreover, the unreal embeddings come in conjugate pairs.
We label the embeddings such that $\sigma_{1} , \dots, \sigma_{r_{1}}$ are the real embeddings
and $\tau_{1}, \dots, \tau_{r_{2}}$ are representatives of conjugate pairs of unreal embeddings.
Then
$$
\begin{align*}
n = r_{1} + 2r_{2}
\end{align*}
$$
and $(r_{1},r_{2})$ is called the **signature** of $K$.

> [!code]- Sage
> Given a number field `K`, we can get the signature using `K.signature()`.

## See also

- [[Minkowski embedding]]

#
---
#state/tidy | #lang/en | #SemBr
