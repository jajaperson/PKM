---
tags:
  - public
---
[[Conditional probability]]
# Conditional expected value

## Given an event

Let $X: \xi \to \mathbb{R}$ be a [[real random variable]]
and $A \in \mathcal{F}$ be an event with nonzero probability.
Then the **conditional expected value** of $X$ given $A$ is defined to be #m/def/prob 
$$
\begin{align*}
\Ex[X \mid A] =\int_{-\infty}^{\infty} y f_{Y \mid A}(y ) \, dx 
\end{align*}
$$
where $f_{Y \mid A}(y)$ is the [[conditional distribution]] of $Y$ given $A$.

### Properties

- If $\{ A_{i} \}_{i=1}^n$ partition $X$ then $\Ex[Y] = \sum_{i=1}^n \Ex[Y \mid A_{i}] \mathbb{P}(A_{i})$

## Given a random variable

Let $X,Y: \xi \to \mathbb{R}$ be a [[real random variable|real random variables]] and $g(x) = \Ex[Y \mid X=x]$.
Then the **conditional expected value** of $Y$ given $X$ is the [[random function]]
$$
\begin{align*}
\Ex[Y \mid X] = g(X)
\end{align*}
$$

### Properties

Let $X, Y , Z,Y_{1}, Y_{2}, \dots : \xi \to \mathbb{R},$ be real random variables.

1. If $X$ and $Y$ are independent, then $\Ex[Y \mid X] = \Ex[Y]$
2. For any function $h : \mathbb{R} \to \mathbb{R}$ we have $\Ex[h(X)Y \mid X]= h(X) \Ex[Y \mid X]$
3. Linearity: $\Ex[\mu Y_{1}+\lambda Y_{2} \mid X] = \mu[Y_{1} \mid X] + \lambda\Ex[Y_{2} \mid X]$
4. Adam's law: $\Ex[Y] = \Ex[\Ex[Y \mid X]]$ 
5. Adam's law with extra conditioning: $\Ex[\Ex[Y\mid X,Z] \mid Z]=\Ex[Y \mid Z ]$
6. [[Projection interpretation of conditional expected value]]

## See also

- [[Conditional variance]]

#
---
#state/stub | #lang/en | #SemBr 