---
tags:
  - public
---
[[Linear code]]
# Dual linear code

Let $\mathcal{C} \leq \GF(q)^n$ be a [[Linear code]].
The **dual code** $\mathcal{C}^\perp \leq \opn{GF}(q)^n$ is then its [[Orthogonal complement polarity|orthogonal complement]] #m/def/code
$$
\begin{align*}
\mathcal{C}^\perp = \{ S \in \GF(q)^n : \tp{\mathcal C}S = 0 \}
\end{align*}
$$
whence
$$
\begin{align*}
\dim_{\GF(q)} \mathcal{C}^\perp = n - \dim_{\GF(q)} \mathcal{C}
\end{align*}
$$
A code is said to be **self-dual** iff
$$
\begin{align*}
\mathcal{C} = \mathcal{C}^\perp
\end{align*}
$$
whence
$$
\begin{align*}
\dim_{\GF(q)} \mathcal{C} = \frac{n}{2}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr
