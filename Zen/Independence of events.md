---
tags:
  - public
---
[[Probability theory MOC]]
# Independence of events
**Independent events** are events which have no effect on each other's fruition 
— the knowledge that one occurred does not affect knowledge of whether the other occurred.
$$
\begin{align*}
\mathbb{P}\left(\bigcap_{i \in I}A_{i}\right) = \prod_{i \in I}\mathbb{P}(A_{i})
\end{align*}
$$
That is, the [[Conditional probability]] of one event given the occurance of the other
is the same as the probability of the event.
Note that pairwise independence does not necessarily imply independence.
See also [[Independence of random variables]].

## Conditional independence

A related notion is **conditional independence**:
Two events are conditionally independent given $E$ iff
$$
\begin{align*}
\mathbb{P}(A \cap B\mid E)=\mathbb{P}(A\mid E)\mathbb{P}(B\mid E)
\end{align*}
$$

## Properties

1. Disjoint events can only be independent if one has zero probability
2. Two events can be
   - conditionally independent given $E$ but not independent
   - independent but not conditionally independent given $E$
   - conditionally independent given $E$ but not given $E^c$

#
---
#state/tidy | #SemBr | #lang/en
