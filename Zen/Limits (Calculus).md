---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Limits
Intuitively (for the formal definition, see [[Epsilon-Delta Construction of the Limit]]), 
a limit of function $f(x)$ as $x$ approaches $0$
$$
\begin{align*}
\lim_{x \to 0}{f(x)}
\end{align*}
$$
is what $f(x)$ gets close to as $x$ gets close to $0$.
In some cases this is obvious 
— for example, for any function [[Continuity|Continuous]] and defined at $f(a)$,
$$
\begin{align*}
\lim_{x \to a}{f(x)} = f(x) 
\end{align*}
$$
In other cases, it may be a value which the function visibly approaches

![[limiting curve example.jpeg#invert]]

Limits can be calculated using [[Limit Laws]].
They are generalised by the category-theoretic notion of [[Limits and colimits]]

## One-sided limits
Limits can be defined as approaching from the left hand side ($-$),
or as approaching from the right hand side ($+$).
These are written as $\lim_{x \to L^-}$ and $\lim_{x \to L^+}$ respectively.
Hence,
$$
\begin{align*}
\lim_{x \to a}{f(x)} = L \iff \lim_{x \to a^+} {f(x)} = L \land \lim_{x \to a^-}{f(x)} = L
\end{align*}
$$
## Undefined limits
Limits **Do Not Exist (DNE)** in cases where

1. For a bilateral limit, 
	$x \to a^+$ and $x \to a^-$ give different results (see above).
2. The limit is $\pm \infty$.
3. The input limit (i.e. what $x$ approaches) is a finite distance outside the domain of $f(x)$.

## Multivariable limits
See [[Multivariable limits]].

---
#state/tidy | #SemBr 
