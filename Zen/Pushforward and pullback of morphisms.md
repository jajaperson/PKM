---
aliases: 
  - pushforward 
  - pullback
tags:
  - public
---
[[Category theory MOC]]
# Pushforward and pullback

A **pushforward** $f_{*}$ is a function associated with a morphism $f : X\to Y$ and an object $Z$ representing postcomposition so that $f_{*} : \cat C(Z, X) \to \cat C(Z, Y) : g \to f \circ g$. #m/def/cat 
Likewise, a **pullback** $f^*$ is defined by precomposition so that $f^* : \cat C(Y,Z), \cat C(X,Z) : g \mapsto g\circ f$.[^br] #m/def/cat

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 8

There is a sense in which pushforwards and pullbacks are [[Natural transformation|natural transformations]]. See [[Yoneda embedding]].

## Properties

- [[Pushforward and pullback of an isomorphism]]: $f$ is iso iff $f^\star$ is bijective iff $f_{\star}$ is bijective.

#
---
#state/develop | #lang/en | #SemBr
