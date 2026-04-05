---
tags:
  - public
---
[[Inequalities in probability MOC]]
# Convergence concepts in probability MOC

- [[Convergence in the pth mean]] ([[Lebesgue space]])
- [[Convergence almost surely]] ([[Convergence almost everywhere]])
- [[Sure convergence]] ([[Pointwise convergence]])
- [[Convergence in probability]] ([[Ky Fan metric]])
- [[Convergence in distribution]]

## Relation between convergence concepts

Let $X_{n} : \xi \to \mathbb{R}$ define a sequence of [[Real random variable|real random variables]]
and $X : \xi \to \mathbb{R}$ be a real random variable. 
Then #m/thm/prob 

1. [[Convergence almost surely]] to $X$ implies [[Convergence in probability]] to $X$ ^R1

> [!check]- Proof of 1
> Let $A_{i} = \{ |X_{i} - X| > \epsilon \}$ be an event,
> and $B_{j} = \bigcup_{i=j}^\infty A_{i}$.
> Then clearly $A_{i} \sube B_{i}$ for all $i \in \mathbb{N}$.
> Now $|X_{i}- X| > \epsilon$ implies $\sup_{j \geq i} |X_{j}-X| > \epsilon$,
> so
> $$
> \begin{align*}
> \lim_{ i \to \infty } \mathbb{P}(|X_{i} - X| < \epsilon) \geq \lim_{ i \to \infty } \mathbb{P} (\sup_{j \geq i} |X_{j}-X| > \epsilon)
> \end{align*}
> $$
> for every $\epsilon > 0$, proving [[#^R1]]. <span class="QED"/>


## Convergence theorems

- [[Kolmogorov's law]]
- [[Khinchin's law]]
- [[Empirical cumulative distribution function]]
- [[Central limits theorem]]

#
---
#MOC | #state/develop | #lang/en | #SemBr
