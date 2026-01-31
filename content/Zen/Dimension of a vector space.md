---
tags:
  - public
---
[[Linear algebra MOC]]
# Dimension of a vector space

The **dimension**[^plural] of a [[vector space]] is the [[cardinality]] of any [[Vector basis|basis]] for that space. #m/def/linalg 
Thus all possible bases for a vector space have the same cardinality.[^2008] 

> [!check]- Proof
> Let $V$ be a vector space.
> First we show that if $\{ v_{i} \}_{i=1}^n$ are [[Linear (in)dependence|linearly independent]] in $V$ and $V = \Span \{ s_{i} \}_{i=1}^m$, 
> then $n \leq m$.
> 
> Let $A = \{ v_{i} \}_{i=1}^n$ and $B = \{ s_{i} \}_{i=1}^m$
> We iterate the following steps, starting with $k=1$ and incrementing until exhaustion:
> 
> 1. Move a vector $v_{k}$ out of $A$ into $B$.
> 2. Since $\Span(B) = V$, $v_{k}$ is a linear combination of other elements of $B$, so one of the $s_{i}$ can be removed from $B$ and still $\Span(B) = V$.
>    Without loss of generality by reïndexing we remove $s_{k}$ from $B$.
>    $A$ remains linearly independent.
> 
> If $m < n$, we eventually exhaust all $s_{i}$ and $A$ and $B$ will partition $\{ v_{i} \}_{i=1}^n$.
> But then $A \sube \Span(B)$, i.e. some $v_{i}$ are linear combinations of other $v_{i}$,
> which is a contradiction.
> Therefore, $n \leq m$.
> 
> It follows immediately that if a vector space $V$ has any finite [[Span|spanning set]],
> then any two bases of $V$ have the same size.
> 
> Now consider $V$ with no finite spanning set.
> Let $\mathcal{B}=\{ b_{i} \}_{i \in I}$ and $\mathcal{C} = \{ c_{j} \}_{j \in J}$ be two distinct bases for $V$.
> Then any $c_{j}$ can be written as a finite linear combination of $b_{i}$ with nonzero coëfficients, say
> $$
> \begin{align*}
> c_{j} = \sum_{i \in U_{j}} \lambda_{i}b_{i}
> \end{align*}
> $$
> but because $\mathcal{C}$ is a basis, it follows
> $$
> \begin{align*}
> \bigcup_{j \in J}U_{j} = I
> \end{align*}
> $$
> for if the vectors in $\mathcal{ C}$ can be expressed as finite linear combinations of vectors in a proper subset $\mathcal{B}' \subset \mathcal{B}$, then $V=\Span \mathcal{B}'$, which is a contradiction.
> Since $\abs{U_{j}}< \aleph_{0}$ for all $j \in J$,
> it follows from [[Upper bound on the cardinality of an arbitrary union]] that
> $$
> \begin{align*}
> \abs{\mathcal{B}} = \abs I \leq \aleph_{0} \abs{\mathcal{C}} = \abs{\mathcal{C}}
> \end{align*}
> $$
> By the same token $\abs{\mathcal{C}} \leq \abs{\mathcal{B}}$
> thus by the [[Schröder-Bernstein theorem]] $\abs{\mathcal{B}}=\abs{\mathcal{C}}$.
> <span class="QED"/>

  [^2008]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], pp. 48ff.
  [^plural]: sometimes **dimensionality**, especially in plural since dimensions is confusing

The vector spaces of a given dimension form an [[Isomorphism class]].[^2008a]

  [^2008a]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], pp. 63–64


> [!warning]- Vector spaces with multiple dimensionalities
> Unless a vector space is over a [[prime field]], there are typically multiple dimensionalities assignable to a vector space,
> depending on which ground field is being considered.
> This is distinguished by a subscript, for example
> $\dim_{\mathbb{C}} \mathbb{C} = 1$ but $\dim_{\mathbb{R}}\mathbb{C} = 2$.
> If no ground field is specified, assume the topical field $\mathbb{K}$.

#
---
#state/tidy | #SemBr | #lang/en 
