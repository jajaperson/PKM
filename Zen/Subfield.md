---
tags:
  - public
---
[[Field theory MOC]]
# Subfield

A **subfield** $F$ of a [[field]] $K$ is a [[subring]] which is itself a field. #m/def/field
Often we consider these in terms of [[Field extension|field extensions]].

## Tests for subfields


**Theorem.** Let $F \sube K$.
Iff for all $a,b \in F$, we have $a - b \in F$ and $b \neq 0$ implies $ab^{-1} \in K$,
then $F$ is a subfield. #m/thm/field 

> [!check]- Proof
> By [[Subrng#Subrng test]], we have a subrng.
> Since $1 \cdot(1)^{-1} = 1 \in F$, we have a subring.
> Commutativity of $K$ implies commutativity of $F$,
> and every nonzero element has a unit.
> Therefore $F$ is a field. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
