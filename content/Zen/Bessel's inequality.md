---
tags:
  - public
---
[[Functional analysis MOC]]
# Bessel's inequality

Let $X$ be a [[Hilbert space]],
and $(\ket{e_{i}})_{i=1}^\infty$ be an [[Orthonormal set|orthonormal sequence]] in $X$.
Then for any $\ket{x} \in X$
$$
\begin{align*}
\sum_{n=1}^\infty \abs{ \braket{ e_{n} | x } }^2 \leq \braket{ x | x }
\end{align*}
$$
and thus the infinite series on the left converges. #m/thm/anal/fun 

> [!check]- Proof
> Let
> $$
> \begin{align*}
> \ket{x_{k}} = \sum_{j=1}^k \ket{e_{j}}\braket{ e_{j} | x }  
> \end{align*}
> $$
> then
> $$
> \begin{align*}
> \braket{ x | x_{k} } = \sum_{j=1}^k \braket{ x | e_{j} }\braket{ e_{j} | x } 
> \end{align*}
> $$
> meanwhile
> $$
> \begin{align*}
> \braket{ x_{k} | x_{k} } 
> &= \left( \sum_{j=1}^k \braket{ x | e_{j} } \bra{e_{j}}  \right) \left( \sum_{i=1}^k \ket{e_{i}} \braket{ e_{i} | x }  \right)  \\
> &= \sum_{j=1}^k \sum_{i=1}^k \braket{ x | e_{j}  } \braket{ e_{i} | x } \braket{ e_{j} | e_{i} } \\
> &= \sum_{j=1}^k \sum_{i=1}^k \braket{ x | e_{j}  } \braket{ e_{i} | x }  \, \delta_{ij} \\
> &= \sum_{j=1}^k \braket{ x | e_{j} }\braket{ e_{j} | x }
> \end{align*}
> $$
> so $\braket{ x_{k} | x_{k} } = \braket{ x | x_{k} }$.
> Now
> $$
> \begin{align*}
> \|\ket{x} -\ket{x_{k}} \|^2
> &=\left( \bra{x} -\bra{x_{k}}  \right) (\ket{x} -\ket{x_{k}} ) \\
> &= \braket{ x | x }  + \braket{ x_{k} | x_{k} } - 2\Re (\braket{ x | x_{k} } ) \\
> &= \braket{ x | x }  - \braket{ x_{k} |x_{k}  } \\
> \end{align*}
> $$
> so 
> $$
> \begin{align*}
> \|\ket{x_{k}}\|^2 = \|\ket{x}\|^2 - \|\ket{x} -\ket{x_{k}} \|^2 \leq \|\ket{x}\|^2
> \end{align*}
> $$
> implying
> $$
> \begin{align*}
> \sum_{j=1}^k \abs{\braket{ e_{j} | x } }^2 = \braket{ x_{k} | x_{k} }  \leq \braket{ x | x } 
> \end{align*}
> $$
> for all $k$. <span class="QED"/>

---
#statetidy | #lang/en | #SemBr
