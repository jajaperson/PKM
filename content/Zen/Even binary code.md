---
tags:
  - public
---
[[Binary linear code]]
# Even binary code

The **even binary code** $\mathcal{E}(\Omega_{n})$ of length $n$ is given by #m/def/code
$$
\begin{align*}
\mathcal{E}(\Omega_{n}) = \{ S \sube \Omega_{n} : \abs S \in 2\mathbb{Z} \}
\end{align*}
$$
which is a [[quadratic space]] with the form
$$
\begin{align*}
q: \mathcal{E}(\Omega_{n}) &\to \mathbb{Z}_{2} \\
S &\mapsto \frac{\abs S}{2} + 2\mathbb{Z}
\end{align*}
$$
which has the polar form $b_{q}(S_{1},S_{2}) = \abs{S_{1} \cap S_{2}} + 2\mathbb{Z}$ and the radical $\mathbb{K}_{2} \Omega_{n}$.

## Properties

Invoking the [[Iverson bracket]],

1. $q(S) = [\abs S \notin 4\mathbb{Z}]$.
2. If $n$ is even, then every [[Orthogonal code|self-dual]] code contains $\Omega$ (this follows from the fact that it is the radical)



#
---
#state/develop | #lang/en | #SemBr
