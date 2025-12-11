---
tags:
  - public
aliases:
  - algebraically closed
---
[[Field]]
# Algebraically closed field

A field $K$ is called **algebraically closed** iff it satisfies the following equivalent properties #m/def/ring 

1. every non-constant polynomial $p(x) \in K[x]$  has a root, i.e. a solution to $p(x)=0$; ^A1
2. $p(x) \in K[x]$ is an [[Polynomial ring#^irreducible]] iff it is linear, i.e. $\deg p = 1$; ^A2
3. there does not exist a proper [[algebraic element|algebraic extension]] of $K$; ^A3
4. every [[maximal ideal]] of $K[x]$ is of the form $\langle x-\alpha \rangle$ for some $\alpha \in K$. ^A4

Assuming choice, every field is contained in an algebraically closed one: a/the [[Algebraic closure]].

## Examples and nonexamples

- [[Real numbers]] is not algebraically closed, since $x^2 + 1$ has no real root.
- [[Complex numbers]] is the closure of the real numbers.

## Properties

- [[Division algebra with only algebraic elements over an algebraically closed field]]

#
---
#state/tidy | #lang/en | #SemBr
