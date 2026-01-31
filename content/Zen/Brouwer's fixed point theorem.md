---
aliases:
  - Retraction theorem
tags:
  - public
---
[[Ball space]]
# Brouwer's fixed point theorem

Let $f: \mathbb{B}^n \to \mathbb{B}^n$ be a continuous function.
Then $f$ has a fixed point, i.e. there exists $x \in \mathbb{B}^n$ such that $f(x) = x$. #m/thm/topology 

> [!missing]- Proof
> #missing/proof 
> Requires some more advanced topology, however a key step is defining the ray-intersection
> $$
> \begin{equation*}
> 		r(x) = x + \left(
> 			\sqrt{
> 				1 - \|x\|^2 + \left(
> 					\frac
> 						{x \cdot (x - f(x))}
> 						{\| x - f(x) \|}
> 				\right)^2
> 			}
> 			- \frac
> 				{x \cdot (x - f(x))}
> 				{\| x - f(x) \|}
> 		\right)
> 		\frac
> 			{x - f(x)}
> 			{\|x - f(x)\|}
> 	\end{equation*}
> $$

## Corollaries

The **retraction theorem** for an $(n+1)$-ball is equivalent to Brouwer's theorem for an $n+1$-ball, which states

> There exists no continuous [[Topological retraction|retraction]] $r : \mathbb{B}^{n+1} \to \mathbb{S}^n$,
> i.e. no continuous $r$ such that $r\iota = \id_{{\mathbb{S}^n}}$.

> [!check]- Beweis von Äquivalenz
> Sei $p(n)$ und $q(n)$ der Retraktionssatz bzw. der Fixpunktsatz von Brouwer für $\mathbb{B}^{n+1}$.
> 
> Angenommen $\neg q(n)$, existiert ein stetiges $f: \mathbb B^{n+1} \to \mathbb B^{n+1}$ mit $f(x) \neq x$ für jedes $x \in \mathbb B^{n+1}$.
> Dann ist das oben definierte $r : \mathbb B^{n+1} \to \mathbb S^n$ stetig, und $r \iota = \id_{\mathbb S^n}$, d.h. $\neg p(n)$.
> Also $p(n) \implies q(n)$.
> 
> Angenommen nun $\neg p(n)$, existiert ein stetiges $r : \mathbb B^{n+1} \to \mathbb S^n$ mit $r \iota = \id_{\mathbb S^n}$.
> Sei $a : \mathbb S^n \to \mathbb S^n : x \mapsto -x$ die Abbildung,
> die Punkte auf ihre Antipoden abbildet.
> Dann ist $\iota a r : \mathbb B^{n+1} \to \mathbb B^{n+1}$ eine stetige Abbildung mit keinen Fixpunkten, also $\neg q(n)$.
> Also $q(n) \implies p(n)$.
> <span class="QED"/>

#
---
#state/develop | #lang/en #lang/de | #SemBr
