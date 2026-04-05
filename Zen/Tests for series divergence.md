---
tags:
  - public
---
[[Infinite series]]
# Tests for series divergence
The following is a summary of tests available for the divergence of infinite series.

| Name                                                           | Principle                                                                                     | When to use                                                                            |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [[Test for divergence by sequence limit]]                      | $\lim_{ n \to \infty } a_{n} \neq 0 \implies$ DNE                                             | Obvious cases                                                                          |
| [[Integral test]]                                              | $\sum_{n=1}^\infty a_{n}$ and $\int_{1}^{\infty} f(x) \, dx$ both converge or diverge         | $a_n$ is extendible to an integratable positive decreasing function                    |
| [[Comparison test]]                                            | Analogous to the squeeze theorem                                                              | A divergent lower bound or convergent upper bound is known.                            |
| [[Limit comparison test]]                                      | Compare the ratio between two sequences                                                       | Same as above, but series which approach multiples of each other are especially useful |
| [[Alternating series test]]                                    | Test for divergence becomes necessary and sufficient for alternating series                   | Any alternating sequence, which is absolutely non-increasing for large $n$             |
| [[Absolute and conditional convergence\|Absolute convergence]] | Absolutely convergent $\implies$ convergent                                                   | $\sum_{ n = 1 }^{ \infty } \abs{a_{n}}$ is convergent                                  |
| [[Ratio test for absolute convergence]]                        | A ratio of subsequent terms less than one implies the series is bound by the geometric series | Absolute ratio of subsequent terms can be found.                                       |

#
---
#state/tidy | #SemBr
