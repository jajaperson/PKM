---
tags:
  - public
---
[[Statistical hypothesis]]
# Critical value hypothesis test
The **critical value test** involves constructing a _rejection region_ based on a _significance level_ $\alpha$.
The critical region will depend on whether $H_{1}$ is two sided.
In general

- For one sided, we use a rejection region $[z_{\alpha}, \infty)$ or $(\infty,-z_{\alpha}]$,
  where $z_{\alpha} = F_{Z}^{-1}(1-\alpha)$.
- For two sided, we use a rejection region  $\left( \infty,-z_{\frac{\alpha}{2}}]\cup[z_{\frac{\alpha}{2}}, \infty \right)$

## Steps
1. Identify the appropriate distribution of the underlying random variable $X$
2. Formulate a null hypothesis $H_{0}$ of our assumed parameterisation of the distribution;
   and an alternate hypothesis $H_{1}$ of its negation,
   which may be either _one-sided_ or _two-sided_.
3. Construct the distribution of the test statistic being used $Z$ under the assumptions of $H_{0}$.
4. Calculate the _critical value_ and _rejection region_ for significance level $\alpha$.
5. State the conclusion:
   Reject $H_{0}$ if the observed statistic is in the rejection region;
   otherwise we maintain $H_{0}$.
6. Interpret these results in the context of the problem.

#
---
#state/tidy | #SemBr
