---
aliases:
  - The continuous image of a connected space is connected
tags:
  - public
---
[[Connectedness]]
# Main theorem of connectedness

Let $X$ and $Y$ be topological spaces and $f : X \to Y$ be a continuous function.
If $X$ is ([[Path connectedness|path]])connected, then so is $f(Y)$. #m/thm/topology 

> [!check]- Proof for plain connectedness
> Without loss of generality, consider a surjection $f : X \twoheadrightarrow Y$.
> If $Y$ is disconnected, it can be partitioned into open $V_{1}$ and $V_{2}$,
> wherefore $X$ can be partitioned into open $f^{-1}V_{1}$ and $f^{-1}V_{2}$ and is thus disconnected.
> Alternatively, if $Y$ is disconnected then there exists non-constant continuous $g : Y \twoheadrightarrow \{ 0,1 \}$,
> wherefore $fg : X \twoheadrightarrow \{ 0,1 \}$ is nonconstant and continuous.
> Thus, if $X$ is compact so is its continuous image $f(X)$.
> <span class="QED"/>


> [!check]- Proof for path-connectedness
> Given any two points $a, b \in X$ there exists a continuous function $c : [0,1] \to X$ such that $f(0) = a$ and $f(1) = b$.
> Clearly, $f c$ constitutes a continuous function $f c : [0,1] \to f(X)$,
> and therefore for any two points $f(a), f(b) \in f(X)$ there exists a [[Continuous path]] $f c$ such that $f  c (0) = f(a)$ and $f  c (1) = f(b)$.
> Thus $f(X)$ is path connected. 
> <span class="QED"/>


This is a remarkably rare instance of properties being inherited by images,
usually properties are inherited by preïmages.

## Corollaries

- [[Connectedness]] and [[Path connectedness]] are [[Topological property|topological properties]].
- The [[Quotient topology|quotient]] of a connected space is connected.
- [[Connected fibres and quotient implies connected space]]

#
---
#state/tidy  | #lang/en | #SemBr 
