---
tags:
  - public
alias:
  - "#m/def/ring"
  - "#m/thm/ring"
---
[[Abstract algebra MOC]]
# Ring theory MOC

[[Category of rings]]

## Objects

The graph below is a non-exhaustive classification of rings


```mermaid
graph TD
    NumField[Number field]:::internal-link
    ACField[Algebraically closed field]:::internal-link
    Field:::internal-link
    NumField --> Field
    ACField --> Field

    Division[Division ring]:::internal-link
    Simple[Simple ring]:::internal-link
    PIR[Principal ideal ring]:::internal-link
    Noetherian[Noetherian ring]:::internal-link
    Field --> Division --> Simple --> PIR --> Noetherian --> Ring

    EDomain[Euclidean domain]:::internal-link
    PID[Principal ideal domain]:::internal-link
    Field --> EDomain --> PID --> PIR
    
    Dedekind[Dedekind domain]:::internal-link
    Dedekind --> Noetherian
    Dedekind --> IDomain
    PID --> Dedekind

    UFD[Unique factorization domain]:::internal-link
    GCDDomain[GCD domain]:::internal-link
    IDomain[Integral domain]:::internal-link
    Commutative[Commutative ring]:::internal-link
    PID --> UFD --> GCDDomain --> IDomain --> Commutative --> Ring

    Ring:::internal-link
    Rng:::internal-link
    Rig:::internal-link
    Ring --> Rng
    Ring --> Rig
```

### Examples

- [[Modular arithmetic]]

## Morphisms

- [[Rng homomorphism]], [[Ring homomorphism]]

## Internally

- [[Characteristic]]
- [[Krull dimension]]

### Elements

- [[Unit]], [[Zero-divisor]]
- [[Irreducible element]], [[Prime element]], [[Associate elements]]
- [[Algebraic element]], [[Integral element]]

## Externally

- [[Subrng]], [[Subring]], [[Field extension]]
- [[Ideal]], [[Quotient ring]]

## Related

- [[Module theory MOC]]



#
---
#MOC | #state/develop | #lang/en | #SemBr