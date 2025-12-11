---
tags:
  - public
---
[[Abstract algebra MOC]]
# Quasigroup

A **quasigroup** is a [[group]]-like structure that need not be associative.
Formally, a quasigroup $(Q,*)$ is a [[magma]] such that for any $a,b \in Q$ there exist unique $a,b \in Q$ such that #m/def/algebra 
$$
\begin{align*}
a * x &= b \\
y * a &= b
\end{align*}
$$
called the [[Latin square]] property since it requires that the resulting Cayley table form a Latin square.
Equivalently, we may characterize a quasigroup $(Q,*,{/}, {\backslash})$ as having left and right division satisfying the following identities (i.e. for all $x,y \in Q$)
$$
\begin{align*}
y &= (y / x) * x \\
y &= (y * x) / x \\
y &= x * (x \backslash y) \\
y &= x \backslash (x * y)
\end{align*}
$$

> [!missing]- Proof of equivalence
> #missing/proof


#
---
#state/develop | #lang/en | #SemBr
