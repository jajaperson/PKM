---
tags:
  - public
mathLink: Conventions of $1$st-order logic in these notes
---
[[1st-order logic]]
# Conventions of $1$st-order logic in these notes

See also [[Conventions of 0th-order logic in these notes]]

## Quantification

The statement “there exists $x$ satisfying $\varphi(x)$” and “all $x$ satisfy $\varphi(x)$” are written as
$$
\begin{align*}
(\exists x)\varphi(x) \qquad (\forall x)\varphi(x)
\end{align*}
$$
If $\opn T$ is a type, then either of the following notations may be used for “there exists $x$ of type $\opn T$ satisfying $\varphi(x)$” (the notation for the universal quantifier is similar)
$$
\begin{align*}
(\exists x: \opn T)\varphi(x) \qquad (\exists \opn{T} x)\varphi(x)
\end{align*}
$$
This notation is also used as an abbreviation for quantifications with predicates.[^comp]
If $\opn P$ is a unary predicate,
$$
\begin{align*}
(\exists \opn P x)\varphi(x) &\stackrel{\text{def}}\iff (\exists x)[\opn P(x) \land \varphi(x)] \\
(\forall \opn P x)\varphi(x) &\stackrel{\text{def}}\iff (\forall x)[\opn P(x) \Rightarrow \varphi(x)]
\end{align*}
$$
and if $\in$ is a binary predicate,
$$
\begin{align*}
(\exists x \in y)\varphi(x) &\stackrel{\text{def}}\iff (\exists x)[x \in y \land \varphi(x)] \\
(\forall x \in y)\varphi(x) &\stackrel{\text{def}}\iff (\forall x)[x \in y \Rightarrow \varphi(x)]
\end{align*}
$$
We also have the following abbreviation for nonexistence
$$
\begin{align*}
(\nexists x) \varphi(x) &\stackrel{\text{def}}\iff \neg(\exists x)\varphi(x)
\end{align*}
$$

  [^comp]: This is of course compatible with the flattening of a finite-typed $1$st-order logic to a single typed one with predicates.

#
---
#state/develop | #lang/en | #SemBr
