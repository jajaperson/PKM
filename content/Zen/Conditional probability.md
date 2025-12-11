---
tags:
  - public
---
[[Probability theory MOC]]
# Conditional probability
**Conditional probability** allows the investigation of how the knowledge of one event occurring
effects the knowledge of the other one.
Given a probability model $(\xi, \mathcal{F}, \mathbb{P})$,
and two events $A,B \in \mathcal{F}$,
the conditional probability of $A$ _given_ $B$ is #m/def/prob 
$$
\begin{align*}
\mathbb{P}(A\mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}
\end{align*}
$$
unless $\mathbb{P}(B) = 0$, in which case $\mathbb{P}(A\mid B) = 0$.[^imp]
The function $\mathbb{P}(\cdot \mid A)$ forms a [[Probability model|probability measure]] on the same space $(\xi,\mathcal{F})$ as $\mathbb{P}$.

[^imp]: Since this may be considered an _impossible_ scenario.

## Properties

1. $$
  \mathbb{P}(A\cap B)= \mathbb{P}(B)\mathbb{P}(A\mid B) = \mathbb{P}(A)\mathbb{P}(B \mid A)
  $$
2. $$
   \mathbb{P}(A \mid B) = \frac{\mathbb{P}(B\mid A)\mathbb{P}(A)}{\mathbb{P}(B)}
   $$
3. $$
  \frac{\mathbb{P}(A\mid B)}{\mathbb{P}(A^c \mid B)} = \frac{\mathbb{P}(B \mid A)}{\mathbb{P}(B \mid A^c)} \frac{\mathbb{P}(A)}{\mathbb{P}(A^c)}
  $$
4. Let $\{ A_{i} \}_{i=1}^n$ partition $\xi$. Then
  $$
\begin{align*}
\mathbb{P}(B)=\sum_{i=1}^n\mathbb{P}(B\mid A_{i})\mathbb{P}(A_{i})
\end{align*}
$$
5. $$
  \begin{align*}
  \mathbb{P}(A\mid B \cap E) = \frac{\mathbb{P}(B \mid A \cap E)\mathbb{P}(A\mid E)}{\mathbb{P}(B \mid E)}
  \end{align*}
  $$


## See also

- [[Conditional distribution]]
- [[Independence of events#Conditional independence]]
- [[Conditional expected value]]
- [[Conditional variance]]

#
---
#state/tidy | #SemBr | #lang/en
