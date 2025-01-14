---
aliases:
  - projective order
tags:
  - public
---
[[Finite projective plane]]
# Number of points in a finite projective plane

If in an [[abstract projective plane]] $\Pi$ there exists a line $e$ incident with $n+1$ points, #m/thm/geo/fin

1. every line of $\Pi$ is incident with $n+1$ points; ^C1
2. every point of $\Pi$ is incident with $n+1$ lines; and ^C2
3. $\Pi$ contains $n^2+n+1$ points and the same number of lines.[^2020] ^C3

By duality, the same holds if there is a point incident with $n+1$ lines.
Thus $n$ is called the **order** of a projective plane. #m/def/geo 

[^2020]: 2020, [[@kissFiniteGeometries2020|Finite geometries]], p. 6

> [!check]- Proof
> Let the points incident with $e$ be $P_{1},\dots ,P_{n+1}$.
> If $Q \notI E$ then by [[Abstract projective plane#^P1]] there exist pairwise distinct lines $\{ QP_{i} \}_{i=1}^{n+1}$.
> Now this must exhaust all lines passing through $Q$, since each such line must intersect $e$ by [[Abstract projective plane#^P2]] at a point.
> By duality, if there is a point $E$ incident with $n+1$ lines, then every line not through $E$ is incident with $n+1$ points.
> 
> If $f$ is a line distinct from $e$ then there exists by [[Abstract projective plane#^P4]] a third line $g$ through $e \cap f$,
> and by [[Abstract projective plane#^P3]] this $g$ is incident with a point $R \neq e\cap f$.
> Since $R \notI e$, there are $n+1$ lines passing through $R$, and since $R \notI e$ this yields $n+1$ points on $f$.
> This proves [[#^C1]], and similarly one shows [[#^C2]].
> 
> Consider an arbitrary point $P \in \mathcal{P}$, and the $n+1$ lines incident with it.
> Each of these contains $n$ points distinct from each other and $P$,
> so the total number of points is $n^2+n+1$.
> By duality, the same holds for lines.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
