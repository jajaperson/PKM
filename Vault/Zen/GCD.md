---
tags:
  - public
---
[[Ring theory MOC]]
# GCD

Let $R$ be an [[integral domain]] and $a,b \in R$.
An element $d \in R$ is a **greatest common divisor** or **GCD** of $a$ and $b$ iff #m/def/ring
$$
\begin{align*}
\langle a,b \rangle \trianglelefteq \langle d \rangle 
\end{align*}
$$
and $\langle a,b \rangle \trianglelefteq \langle d' \rangle \trianglelefteq \langle d \rangle$ implies $\langle d' \rangle = \langle d \rangle$.[^2009]
The GCD is unique up to [[associate elements]], leading to the abuse of notation
$$
\begin{align*}
\gcd\{ a,b \} =d.
\end{align*}
$$
  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §V.2.1, p. 252

## Properties

1. GCDs exist for nonzero elements in a [[Unique factorization domain|UFD]]


#
---
#state/develop | #lang/en | #SemBr
