---
tags:
  - public
---
[[Eigenvectors, eigenvalues, and eigenspaces]]
# 3b1b's eigenvalue trick
This trick was put forth by 3blue1brown in [this video](https://youtu.be/e50Bj7jn9IQ)
for calculating the eigenvalues of any $2 \times 2$ matrix quickly.
Since any $2 \times 2$ matrix has the properties
$$
\begin{align*}
\det(A) &= \lambda_{1} \lambda_{2} \\
\mathrm{Tr}(A) &= \lambda_{1} + \lambda_{2}
\end{align*}
$$
if we take $p = \det(A)$ and $m = \frac{1}{2}\mathrm{Tr}(A)$,
the eigenvalues are
$$
\begin{align*}
\lambda = m \pm \sqrt{ m^2 - p }
\end{align*}
$$
This last formula can easily be remembered with [this jingle](https://youtu.be/e50Bj7jn9IQ?t=287).

#
---
#state/tidy | #SemBr
