---
mathLink-blocks:
  L: $(\lambda)$
  LL: $(\lambda_L)$
  LS: $(\lambda_S)$
  T: $(\tau)$
  A1: $(\alpha_1)$
  A2: $(\alpha_2)$
  An: $(\alpha_3)$
  B: $(\beta)$
  C: $(\gamma)$
  A1c: $(\alpha_1')$
  A2c: $(\alpha_2')$
  Bc: $(\beta')$
  D: $(\delta)$
  R1: $(\rho_1)$
  R2: $(\rho_2)$
  R3: $(\rho_3)$
  P1: $(\pi_1)$
  P2: $(\pi_2)$
tags:
  - public
---
[[Semantics MOC]]
# Liar paradox

The **Liar paradox**[^ep], in its various formulations, gives an example of a sentence which fails to be either true or false.
In it's most basic form it reads

>$(\lambda_{L})$ This sentence is a lie ^LL

but it is often more expedient[^con] to treat

> $(\lambda)$ This proposition is false ^L

[^ep]: Sometimes referred to as **Epimenides' paradox**, however the Cretan's statement “All Cretans are liars” is only paradoxical if one regards a liar as someone who never tells the truth.
[^con]: This Zettel follows the stipulations set forth in 1989, [[@barwiseLiarEssayTruth1989#Important terms and stipulative definitions|The Liar]]

## Variations and related sentences

See 1989, [[@barwiseLiarEssayTruth1989|The Liar]], pp. 20ff. for a “budget of Liar-like paradoxes”.

### Strengthened liar

If one attempts to resolve the Liar by rejecting the [[Law of excluded middle]] and claiming [[#^L]] is neither true nor false, but rather ‘gappy’, 
then a similar paradox presents itself in the **strengthened Liar**

> $(\lambda_{S})$ This proposition is a lie or ‘gappy’ ^LS

### Truth-teller

The following sentence can be decided to be true or false without any apparent contradictions

> $(\tau)$ This proposition is true ^T

### Liar cycle

Taking bare self-reference to be the fundamental problem with [[#^L]] is shown to be erroneous by the liar cycle

> $(\alpha_{1})$ The proposition expressed by [[#^A2]] is true. ^A1

> $(\alpha_{2})$ The  proposition expressed by [[#^An]] is true. ^A2

> $\vdots$

> $(\alpha_{n})$ The proposition expressed by [[#^B]] is true. ^An

> $(\beta)$ The proposition expressed by [[#^A1]] is false. ^B

### Contingent Liar

> $(\gamma)$ Max has the three of clubs and this proposition is false. ^C

Intuitively, if Max does not have the three of clubs then [[#^C]] is simply false,
otherwise we get the same situation as [[#^L]].

### Contingent Liar cycle

Combining the [[#Contingent Liar]] and [[#Liar cycle]] we get

> $(\alpha_{1}' )$ Max has the three of clubs. ^A1c

> $(\alpha_{2}')$ The proposition expressed by [[#^Bc]] is true. ^A2c

> $(\beta')$ At least one of the propositions expressed by [[#^A1c]] and [[#^A2c]] is false. ^Bc

If Max does not have the three of clubs, then [[#^A1c]] is false and [[#^A2c]] and [[#^Bc]] are true,
but if Max does have three three of clubs there is no unproblematic true/false assigment.

### Löb's paradox

The following, sometimes called **Curry's paradox**, is closely related to [[Löb's theorem]] in proof theory.

> $(\delta)$ If this proposition is true, then Max has the three of clubs. ^D

Using this proposition, one deduces via [[Modus ponens]] and [[Conditional proof]] that Max has the three of clubs.

> [!check]- Proof*
> Assume the antecedent of [[#^D]], i.e. that the proposition it expresses is true.
> Then we have [[#^D]] and its [[Hypothetical proposition|antecedent]], whence Max has the three of clubs by [[Modus ponens]].
> Therefore by [[Conditional proof]], if [[#^D]] is true, then Max has the three of clubs,
> which is precisely what [[#^D]] claims.
> Thus [[#^D]] is true, and once again applying [[Modus ponens]] Max has the three of clubs.
> <span class="QED"/>

### Gupta's puzzle

[[Anil Gupta]] presented the following counterexample to a treatment of the Liar by [[Paul Kripke]]. Imagine two people $R$ and $P$ are making claims about a card game played between Max and Claire, where Claire has the ace of clubs.
Thus [[#^R1]] is false and [[#^P2]] is true.
$R$ claims

> $(\rho_{1})$ Max has the ace of clubs. ^R1

> $(\rho_{2})$ All the claims made by $P$ are true. ^R2

> $(\rho_{3})$ At least one of the claims made by $P$ is false. ^R3

and $P$ claims

> $(\pi_{1})$ Claire has the ace of clubs. ^P1

> $(\pi_{2})$ At most one of the claims made by $R$ is true. ^P2

The natural way to reason here is as follows.
Since [[#^R2]] and [[#^R3]] contradict each other, at most one of these can be true.
Since the claim made by [[#^R1]] is false, [[#^P2]] is true.
Therefore [[#^P2]] expresses a truth while [[#^R3]] does not.

#
---
#state/tidy | #lang/en | #SemBr
