---
aliases:
  - epic
  - epi
tags:
  - public
---
[[Morphism]]
# Epimorphism
A **epimorphism** is a **right-cancellable** morphism (denoted with $\twoheadrightarrow$).
A morphism $e : X \to Y$ is **epic** iff for any $Z \in \cat C$ and $f, g : Y \to Z$ #m/def/cat 
$$
\begin{align*}
 f \circ e = g \circ e \implies f = g
\end{align*}
$$
In $\Set$ a function is a epic iff it is surjective iff (assuming the [[Axiom of Choice]]) it is right-invertible (i.e. [[Split epimorphism|split epic]]), but these are not equivalent in every [[concrete category]], rather:
```mermaid
graph LR;
  right-invertible ==>|implies| surjective ==>|implies| epic
```

## Properties

See the [[Monomorphism#Properties|dual properties]].

1. If $fg$ is epic then $f$ is epic. ^P1

> [!check]- Proof of 1
> Dualize the corresponding proofs for [[Monomorphism#Properties|properties of monomorphisms]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
