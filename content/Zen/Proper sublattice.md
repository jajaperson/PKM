---
tags:
  - public
---
[[Rational lattice]]
# Proper sublattice

Let $L$ be a [[rational lattice]] an suppose $M = \Span_\mathbb{Z} \{ \alpha_{i} \}_{i=1}^n$ is a proper sublattice, and $L / M$ has [[Torsion group|exponent]] $m$. Then #m/thm/geo 
$$
\begin{align*}
L \leq_{\mathbb{Z}} \frac{1}{m} M
\end{align*}
$$
and there exists
$$
\begin{align*}
\beta = \sum_{i=1}^n \frac{m_{i}}{m} \alpha_{i} \in L
\end{align*}
$$
for integers $0 \leq m_{i} < m$ not all equal to zero.[^2022]

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶2.5, p. 35

> [!check]- Proof
> If $L / M$ has exponent $m$, then $m L \leq_{\mathbb{Z}} M$,
> and thus $L \leq_{\mathbb{Z}} \frac{1}{m}M$.
> Moreover
> $$
> \begin{align*}
> \left\{  \sum_{i=1}^n \frac{m_{i}}{m}\alpha_{i} : 0 \leq m_{i} < m \right\}
> \end{align*}
> $$
> forms a set of coset representatives for $\left( \frac{1}{m}M \right)/M \geq_{\mathbb{Z}} L / M$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
