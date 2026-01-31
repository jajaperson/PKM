---
tags:
  - public
---
[[Mathematics MOC]]
# Abstract algebra MOC

Abstract algebra begins with the study of algebraic structures on sets:
Sets endowed with some algebraic operations.

## Group like

```mermaid
graph TD;
  Unital[Unital magma]
  Associative[Associative quasigroup]
  Magma-->|divisibility|Quasigroup
  Magma-->|identity|Unital
  Magma-->|associativity|Semigroup
  Quasigroup-->|associativity|Associative
  Semigroup-->|divisibility|Associative
  Quasigroup-->|identity|Loop
  Unital-->|invertibility|Loop
  Semigroup-->|identity|Monoid
  Unital-->|associativity|Monoid
  Loop-->|associativity|Group
  Associative-->|identity|Group
  Monoid-->|invertibility|Group

class Magma internal-link;
class Quasigroup internal-link;
class Semigroup internal-link;
class Monoid internal-link;
class Group internal-link;
```


#
---
#MOC | #state/develop | #lang/en | #SemBr