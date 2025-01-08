---
tags:
  - public
---
[[Projective space]]
# Abstract projective plane

An **abstract projective plane** $\Pi$ is an [[incidence geometry]] $(\mathcal{P},\mathcal{E}, \mathrm{I})$ satisfying the following axioms[^2020] #m/def/geo 

1. For any two distinct points $A,B \in \mathcal{P}$ there exists precisely one line $AB \in \mathcal{E}$ incident with both of them. ^P1
2. For any two distinct lines $e,f \in \mathcal{E}$ there exists precisely one point $e \cap f \in \mathcal{P}$ incident with both of them. ^P2
3. Each line of $\mathcal{E}$ is incident with at least three distinct points of $\mathcal{P}$. ^P3
4. Each point of $\mathcal{P}$ is incident with at least three distinct lines of $\mathcal{E}$. ^P4

[^2020]: 2020, [[@kissFiniteGeometries2020|Finite geometries]], p. 1

Since [[#^P1]] and [[#^P2]], as well as [[#^P3]] and [[#^P4]], are duals of each other,
the dual of any theorem following from these axioms holds.
This is known as the **principle of duality**.
The following axioms can replace both [[#^P3]] and [[#^P4]].

- (3a.) There are four points of $\mathcal{P}$ in general position, that is four points no three of which are colinear. ^P3a
- (3b.) At least two lines exist[^err], but no two lines of $\mathcal{E}$ cover the points of the plane, i.e. for any two lines there is a point of $\mathcal{P}$ incident with neither line. ^P3b

[^err]: Kiss and Szőnyi leave this out, but I believe without this stipulation it is possible to produce a geometry of one line and one point.

> [!check]- Proof of equivalence
> Assume $\Pi$ satisfies [[#^P1]], [[#^P2]], [[#^P3]], and [[#^P4]].
> Let $A \in \mathcal{P}$.
> By [[#^P4]] there exist three distinct lines $e,f,g \I A$,
> and by [[#^P2]] and [[#^P3]] there exist distinct points $E_{1},E_{2} \I e$, $F \I f$, and $G \I g$.
> each distinct from $A$.
> At least one of $E_{1},E_{2} \notI FG$,
> so without loss of generality assume $E_{1} \notI FG$.
> Then $A,F,G,E_{1}$ are in general configuration, so [[#^P3a]] holds.
> 
> Now assume $\Pi$ satisfies [[#^P1]], [[#^P2]], and [[#^P3a]], but not [[#^P3b]],
> so there exist two lines $e,f \in \mathcal{E}$ covering the points of the plane.
> By [[#^P3a]] there exist distinct $E_{1},E_{2} \I e$ and $F_{1},F_{2} \I f$ all different from $e \cap f$ (otherwise three points would be colinear)
> but since $E_{1}F_{1} \cap E_{2}F_{2}$ cannot be on $e$ or $f$,
> the assumption of not [[#^P3b]] was invalid.
> Hence [[#^P3b]] holds.
> 
> Finally assume $\Pi$ satisfies [[#^P1]], [[#^P2]], and [[#^P3b]].
> [[#^P4]] follows immediately, since for any point $A \in \mathcal{P}$ there exist lines $e,f \I A$ and and at least one $B \notI e,f$, so $AB,e,f \I A$.
> If $e$ is any line, there exists $A \notI e$, and by [[#^P4]] there are three distinct lines through $A$ each of which meet $e$ at a different point,
> hence [[#^P3]] holds.
> <span class="QED"/>

See [[Finite projective plane]], and the generalizing [[Abstract projective space]].

#
---
#state/tidy | #lang/en | #SemBr
