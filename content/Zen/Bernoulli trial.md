---
aliases:
  - Bernoulli distribution
  - indicator random variable
tags:
  - public
---
[[Discrete random variable]]
# Bernoulli trial
A **Bernoulli trial** is an experiment with two possible outcomes,
namely _success_ and _failure_.  #m/def/prob 
For any event $A \in \mathcal{F}$ in a [[probability model]] has an associated **Bernoulli random variable** $1_{A}$ called its **indicator random variable**[^ind], where
$$
\begin{align*}
1_{A} : A &\mapsto \{ 1 \} \\
A^c &\mapsto \{ 0 \}
\end{align*}
$$
We say $1_{A} \sim \Bern(p)$ where $p = \mathbb{P}(A)$.
The sum of repeated independent but identical Bernoulli trials follows a [[Binomial distribution]].

  [^ind]: This is a special case of an [[indicator function]].

## Properties

Let $X \sim \Bern(p)$ and $q = 1-p$

1. [[Expectation]]: $\mu= \Ex[X]= p$   
2. [[Standard deviation\|Variance]]:  $\sigma^2= \Var[X] =  pq$ 
3. [[Moment-generating function]]: $M_{X} : \mathbb{R} \to \mathbb{R} : t \mapsto pe^t + q$
4. [[Probability-generating function]]: $g_{X}(t) = pt+q$

We have the further properties

1. $X^k = X$ for any $k \in \mathbb{N}$

### Indicator random variables

Let $A,B \in \mathcal{F}$ in a [[probability model]]

1. $1_{A^c} = 1 - 1_{A}$
2. $1_{A\cap B}= 1_{A}1_{B}$
3. $1_{A \cup B}= 1_{A} + 1_{B} - 1_{A}1_{B}$
4. $\Ex[1_{A}] = \mathbb{P}(A)$

#
---
#state/tidy | #SemBr | #lang/en
