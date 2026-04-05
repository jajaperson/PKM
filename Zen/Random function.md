---
tags:
  - public
---
[[Real random variable]]
# Random function

A **random function** $T$ is a function of some [[Real random variable]] $X$,
or rather a function that composes with the random variable $X$ to create a function on the sample space $T \circ X : \xi \to S$. #m/def/prob

## Distribution

The [[probability density function]] of a random function $F$ is given by #m/thm/prob
$$
\begin{align*}
F_{T} (t) = \Ex[ \delta (T ( X) - t) ]
\end{align*}
$$
where $\delta$ is the [[Dirac delta]].[^schw]

[^schw]: 2006, [[@schwablStatistischeMechanik2006|Statistische Mechanik]], p. 5

> [!check]- Proof
> Let $X \sim w$ and $F(X)$ be a random function.
> Then the [[Characteristic function (probability)]] of $F$ is
> $$
> \begin{align*}
> \chi_{F} (k) = \sum_{n=0}^\infty \frac{(-ik)^n}{n!} \langle F(X)^n \rangle 
> \end{align*}
> $$
> Applying the inverse [[Fourier transform]]:
> $$
> \begin{align*}
> w_{F}(f) &= \frac{1}{2\pi} \int_{-\infty}^{\infty} \left( \sum_{n=0}^\infty \frac{(-ik)^n}{n!} \langle F^n \rangle  \right) e^{ikf} \, dk \\
> &= \frac{1}{2\pi} \int_{-\infty}^{\infty} \left( \sum_{n=0}^\infty \frac{(-ik)^n}{n!} \int_{-\infty}^{\infty} F(x)^n \, w(x) dx   \right) e^{ikf} \, dk \\
> &= \frac{1}{2\pi} \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} \left( \sum_{n=0}^\infty \frac{(-ik)^n}{n!} F(x)^n \right) \, w(x) dx   \right) e^{ikf} \, dk \\
> &= \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{ikf} \int_{-\infty}^{\infty}  e^{-ikF(x)} \, w(x)dx  \, dk \\
> &= \frac{1}{2\pi} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty}  e^{ik(f-F(x))} \, dk\, w(x)dx  
> \end{align*}
> $$
> Now using the [[Dirac delta#Properties|Fourier representation of the Dirac delta]]
> $$
> \begin{align*}
> w_{F}(f) &=  \int_{-\infty}^{\infty} \delta(f - F(x)) \, w(x)dx = \langle \delta(f-F(x)) \rangle
> \end{align*}
> $$
> This expands to [[Multivariate random variable|multivariate]] scenarios as expected. <span class="QED"/>

In the discrete case the [[Discrete random variable|probability mass function]] is
$$
\begin{align*}
p_{T}(t) = \sum_{x:T(x) = y}p_{X}(y)
\end{align*}
$$

See also

- [[Distribution of a differentiable injective random function]]

#
---
#state/tidy | #lang/en | #SemBr 