---
tags:
  - public
aliases:
  - probability measure
---
[[Probability theory MOC]]
# Probability model
A **probability model** allows for the formal mathematical description of contingencies.
Formally, a probability model is a [[Measure space]] $(\xi, \mathcal{F}, \mathbb{P})$ with the additional requirement $\mathbb{P}(\xi) = 1$,
i.e. at least one event must occur.
As an overview, 
- $\xi$ represents the set of mutually exclusive outcomes (world-states);
- $\mathcal{F} \sube 2^\xi$ is a [[σ-algebra]] of possible events closed under compliment, finite union, and finite intersection; and
- $\mathbb{P} : \mathcal{F} \to [0,1]$ is the probability measure of an event.

Note in some cases, especially discrete ones,
it is unnecessary to limit what kind events are allowed,
and so $\mathcal{F} = 2^\xi$ is assumed.

An **event** here represents some (possibly infinite) union of outcome singletons,
i.e. an event is a set of outcomes which would fulfil the event.
The [[σ-algebra]] contains at least $\xi$ and $\0$,
and allows for the formation of events from others by

- The **intersection** of events $A \cap B$, which represents the fulfilment of both (**and**)
- The **union** of events $A \cup B$, which represents the fulfilment of either (**or**)
- The **compliment** of an event $\overline{A}$, which represents the non-fulfilment of $A$ (**not**)

The probability of any such event is $\mathbb{P}(E)$.

## Properties

Some of these follow from measure space [[Measure space#Properties]]

1. $\mathbb{P}(\0) = 0$
2. $\mathbb{P}$ is monotone on $\mathcal{F}$ ordered by inclusion, i.e. $A \sube B \implies \mathbb{P}(A) \leq \mathbb{P}(B)$.
3. For any $A \in E$, it holds that $\mathbb{P}(A^c) = 1 - P(A)$
4. $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$


[^cons]: As noted above, it follows from this and other axioms that $\mathbb{P}(A) \in [0,1]$.
[^weak]: A relaxation of this axiom allows for negative probabilities, and such a model is called a [[quasiprobability model]].

#
---
#state/tidy | #SemBr | #lang/en 