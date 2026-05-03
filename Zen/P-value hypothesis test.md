---
mathLink: $\mathbb P$-value hypothesis test
tags:
  - public
---
[[Statistical hypothesis]]
# $\mathbb{P}$-value hypothesis test
The **$\mathbb{P}$-value test** involves finding the probability,
under our assumed ($H_{0}$) model,
of getting a test [[statistic]] _at least_ as extreme as observed.
If it is less than a designated level of significance $\alpha$[^typ],
the result is said to be _statistically significant_
and $H_{0}$ is rejected in favour of $H_{1}$.

[^typ]: Typically $\alpha=0.05$ or $\alpha=0.01$.

## Steps
1. Identify the appropriate distribution of the underlying random variable $X$
2. Formulate a null hypothesis $H_{0}$ of our assumed parameterisation of the distribution;
   and an alternate hypothesis $H_{1}$ of its negation,
   which may be either _one-sided_ or _two-sided_.
3. Construct the distribution of the test statistic being used $Z$ under the assumptions of $H_{0}$.
4. Find the probability of a test statistic _at least as extreme_ as observed $z$ under $H_{0}$.
5. State the conclusion:
   if the $\mathbb{P}$-value is less than the selected level of significance $\alpha$, it is highly unlikely $H_{0}$ is true and we therefore reject it in favour of $H_{1}$;
   otherwise we maintain $H_{0}$.
6. Interpret these results in the context of the problem.


#
---
#state/tidy | #SemBr
