---
tags:
  - public
---
[[Probability theory MOC]]
# Statistical hypothesis
A **statistical hypothesis** is a statement to be verified of the value of a parameter of a probability model,
such as the [[Expectation]] or [[Standard deviation|variance]].

Often we speak of two hypotheses
- The **null hypothesis** $H_{0}$ represents the status quo — the state of affairs we expect, 
  i.e. the real distribution's parameters match our own.
  We continue to believe this state of affairs 
  unless we have strong data for the contrary.
- The **alternate hypothesis** $H_{1}$ is a different state of affairs we need strong evidence to support.

## Testing
Statistical hypothesis testing involves using an [[Estimator]] to determine which of two hypotheses (see above) should be rejected.
This itself means reconciling an observed estimate with an assumed estimate.
Common methods include

- [[P-value hypothesis test]]
- [[Critical value hypothesis test]]

### Summary table
| $H_{1}$      | $\mathbb{P}$-value        | Rejection region                                                                   |
| ------------ | ------------------------- | ---------------------------------------------------------------------------------- |
| $\mu < A$    | $\mathbb{P}(Z>z)$         | $[z_{\alpha}, \infty)$                                                             |
| $A > \mu$    | $\mathbb{P}(Z<z)$         | $(-\infty, -z_{\alpha}]$                                                           |
| $\mu \neq A$ | $\mathbb{P}(\abs{Z} > z)$ | $\left( -\infty, z_{\frac{\alpha}{2}}] \cup [z_{\frac{\alpha}{2}}, \infty \right)$ |

#
---
#state/tidy | #SemBr
