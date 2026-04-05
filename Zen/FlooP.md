---
tags:
  - public
---
[[BlooP]]
# FlooP

**FlooP** (named for free loops) is an extension of the programming language [[BlooP]],
both presented in [[Sources/@hofstadterGodelEscherBach1999|Gödel, Escher, Bach: An eternal golden braid]].
FlooP augments BlooP with a single feature: MU-LOOPS,
relaxing the requirement that the number of steps in a loop must be known ahead of time.

```FlooP
MU-LOOP:
BLOCK n: BEGIN
    .
    .
    .
BLOCK n: END
```

#
---
#state/develop | #lang/en | #SemBr
