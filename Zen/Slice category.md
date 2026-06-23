---
tags:
  - public
---
[[Category theory MOC]]
# Slice category

Let $\cat C$ be a [[category]] and $C \in \Ob \cat C$.
The **slice category** $\cat C_{/ C}$ is defined as follows:[^2010] #m/def/cat 

- an object in $\cat C_{/C}$ is a pair $(X, f)$ where $X \in \cat C_{0}$ and $f : X \to C$;
- a morphism $a : (X,f) \to (X', f')$ is a commuting triangle, i.e. a morphism $a : X \to X'$ in $\cat C$ such that $f'a = f$.


[^2010]: 2010\. [[Sources/@awodeyCategoryTheory2010|Category theory]], p. 16

Typically the objects are referred to by the morphism (e.g. $f$) only. 
Dualizing, we can form the <dfn>coslice category</dfn> $\cat C^{\backslash C}$.
Both are naturally viewed as special cases of the more general [[Comma category]],
or as the fibres of the canonical and cocanonical [[canonical self-indexing|self indexing]] respectively.

## Properties
- There exists a functor $U : \cat C / C \to \cat C$ that forgets the base object.

#
---
#state/develop | #lang/en | #SemBr
