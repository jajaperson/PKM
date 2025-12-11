---
tags:
  - public
aliases:
  - analytic
  - differentiable
  - differentiability class
  - $C^\alpha$
mathLink-blocks:
  smooth: $C^\infty$
---
[[Analysis MOC]]
# Differentiability

A map $f : D \sube \mathbb{R} \to R \sube \mathbb{R}$ is **$n$-differentiable** at a point $x_{0} \in U$ iff it has an $n$-th derivative at that point, and thus all derivatives up to $n$. #m/def/anal 
Moreover $f$ is called $n$-differentiable if it is differentiable at every $x_{0} \in U$.
$C^n$ is the set of all $n$-differentiable functions with a [[Continuity|continuous]] $n$th derivative, and is called a **differentiability class**,
and $n \leq m \implies C^n \sube C^m$.
In particular,

- $C^0$ is the class of all [[Continuity|continuous functions]];
- $C^\omega$ of **analytic** functions; and
- $C^\infty$ of **infinitely differentiable functions**[^smooth]. ^smooth

  [^smooth]: Often called _smooth_, however the exact meaning of this term varies between authors, e.g. sometimes $C^1$ functions are referred to as smooth.

## Generalizations

### Complex functions

In complex analysis all differentiable functions are analytic and infinitely differentiable.
Such a function is called [[Holomorphic function|holomorphic]].

### Open subsets of real coördinate space

Differentiability generalizes naturally to higher dimensional [[Real coördinate space]] (and open subsets thereof).
A function $f : \mathbb{R}^N \to \mathbb{R}^M$ is $C^n$ iff it has all $n$-th order partial derivatives.

### Arbitrary subsets of real coördinate space

Let $X \sube \mathbb{R}^N$ be inhabited.
A function $f : X \to \mathbb{R}^M$ is $C^k$ iff every $x \in X$ has an open neighbourhood $U \sube \mathbb{R}^N$ with a $C^k$ extension $F : U \to \mathbb{R}^M$ such that $F(y) = f(y)$ for all $y \in X \cap U$. #m/def/geo/diff 

By considering [[Real embedded manifold|real submanifolds]], this yields the notion of differentiability for maps between such manifolds.

### Map between manifolds

Let $f : M \to N$ be a map between [[manifold|manifolds]] of dimension $m$ and $n$ respectively.
The $C^k$ class is only well defined if $M$ and $N$ are $C^k$ [[differentiable manifold|differentiable manifolds]].
Let $p \in M$.
$f$ is called $k$-differentiable at $p \in M$ iff there exists a chart $(U, \varphi)$ containing $p$ and $(V, \psi)$ containing $f(p)$ such that $\psi f\varphi^{-1}$ is $k$-differentiable at $p$. #m/def/geo/diff
$f$ is called $C^k$ iff it is $k$-differentiable everywhere.

#
---
#state/tidy | #lang/en | #SemBr


