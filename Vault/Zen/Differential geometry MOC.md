---
tags:
  - public
alias: 
  - "#m/thm/geo/diff"
  - "#m/def/geo/diff"
---
[[Geometry MOC]]
# Differential geometry MOC

**Differential geometry** studies [[Differentiability|smooth]] geometric structures, in particular [[Differentiable manifold|differentiable manifolds]].
As such it is closely related to differential topology.
A guiding principle is the [[Linearization dogma]].

> [!info]- In an ambient space
> [[John Willard Milnor]] and [[Lyle Noakes]] take an approach where only [[Real embedded manifold|real embedded manifolds]] are considered, as justified by the [[Whitney embedding theorem]].
> 
> - [[Differentiability#Arbitrary subsets of real coördinate space|Differentiability on arbitrary subsets of real coördinate space]]
> - [[Tangent space#Real embedded manifold|Tangent space]]
> - [[Tangent map#Real embedded manifold|Differential pushforward]]

In these notes lowercase Latin indices are used for [[abstract index notation]] unless otherwise specified, see the linked Zettel for information on conventions.

## Spaces

- [[Submanifold]]
- [[Tangent bundle]]
- [[Vector bundle]]

## Morphisms

- [[Immersion and submersion]]
### Fibrations


- [[Bundle map]]
- [[Bundle section]]
- [[Vector bundle morphism]]

### Derived maps

- [[Tangent map]]
- [[Differential pushforward]]
- [[Differential pullback]]

### Results

- [[Inverse function theorem#Corollary|Inverse function theorem]] gives a condition for local diffeomorphisms
- [[Preïmage theorem]] can be used to verify most constructions that are manifolds

## Attached data

- [[Tangent space]], [[Tangent bundle]]
- [[Cotangent space]], [[Cotangent bundle]]

## Calculus on manifolds

Besides from $C^\alpha$-morphisms, other “functions” we might want to differentiate include

- [[Scalar field]], [[Vector field]], [[1-form]]
    - [[Commuting vector fields are frames]]
- [[Tensor field]]
- [[Differential form]]
    - [[Volume form]], [[Riemannian volume form]]

This gives rise to a plethora of derivative notions, which all agree when they act on a [[scalar field|scalar field]] $f \in C^\alpha(M)$:

- [[Exterior derivative]] of a differential form.
- [[Lie derivative]] of a tensor field along a [[vector field]].
- [[Covariant derivative]] of a tensor field (requires an [[affine connexion]]).
- [[Differential pushforward]] and [[differential pullback]] of a $C^\alpha$-morphism.

Some pain has been taken to make sure most of my definitions for [[Calculus of variations MOC]] work for manifolds.

## Differentiation

There are three main definitions of differentiation, which in some sense coïncide on [[scalar field|scalar fields]].

- [[Exterior derivative]]
- [[Covariant derivative]] via an [[Affine connexion]]
- [[Lie derivative]]

## Geometry

- [[Smooth geodesic]]

## Symmetry

- [[Diffeomorphism]]
- [[Differential pullback along a diffeomorphism]] defines symmetries of tensor fields and in particular metrics (giving isometries).
- [[Killing vector field]]

## Extra structure

- [[Semi-Riemannian manifold]]
- [[Oriented manifold]]


#
---
#state/develop | #lang/en | #SemBr
