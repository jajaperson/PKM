---
tags:
  - public
---
[[𝜇-estimator]]
# Central limits theorem
The **central limits theorem** states that as the sample size $n$ increases,
the [[𝜇-estimator|sample mean]] $\overline{X}_{n}$ [[Convergence in distribution|converges in distribution]] to a [[normal distribution]],
regardless of the underlying distribution of $X$. #m/thm/stat
That is,
$$
\begin{align*}
\overline{X}_{n} \rightsquigarrow \N\left( \mu _{X}, \frac{\sigma_{X}^2}{n} \right)
\end{align*}
$$
or equivalently
$$
\begin{align*}
\frac{{\overline{X}_{n} - \mu_{X}}}{\sigma / \sqrt{ n }} \rightsquigarrow \N(0,1)
\end{align*}
$$
as $n \to \infty$.
In the case where $X$ itself is normally distributed,
$\overline{X}_{n}$ is already normal for all $n$.
Otherwise, $n=30$ is generally taken as a good guide.

[^schw]: 2006, [[@schwablStatistischeMechanik2006|Statistische Mechanik]], p. 8

> [!check]- Proof[^schw]
> Consider a set of independent, similarly distributed random variables $X_{1} \sim X_{2} \sim \cdots \sim X_{n}$
> with expected value $\mu$ and probability density function $w(x)$.
> It is useful to introduce the [[Random function]]
> $$
> \begin{align*}
> Y = \frac{\sum_{i=1}^n \left( X_{i} - \mu \right)}{\sqrt{n }}
> = \frac{\sum_{i=1}^n X_{i}}{\sqrt{ n }} - \sqrt{ n }\mu
> \end{align*}
> $$
> which by [[Random function#Distribution]] has distribution
> $$
> \begin{align*}
> w_{Y}(z) &= \langle \delta(Y(\vab X) - y ) \rangle \\
> &= \int_{\mathbb{R}^n} \left( \prod_{j=1}^n w(x_{j}) \,dx_{j} \right) \,  \delta\left( y - \frac{1}{\sqrt{ n }} \sum_{j=1}^n (x_{j} - \mu) \right) \\
> &= \frac{1}{2\pi} \int_{\mathbb{R}^n} \left( \prod_{j=1}^n w(x_{j}) \,dx_{j} \right) \int_{-\infty}^\infty dk \exp\left( ik\left( y - \frac{1}{\sqrt{ n }} \sum_{j=1}^n (x_{j} - \mu) \right) \right) \\
> &= \frac{1}{2\pi} \int_{-\infty}^{\infty} dk \,e^{iky} \int _{\mathbb{R}^n} \prod_{j=1}^n dx_{j}\, w(x_{j}) \exp\left( -\frac{ik}{\sqrt{ n }}(x_{j} - \mu) \right) \\
> &= \frac{1}{2\pi} \int_{-\infty}^{\infty} dk \,e^{iky + ik \sqrt{ n }\mu} \left( \int _{-\infty}^\infty dx \, w(x) \exp(-ikx)  \right)^n \\
> &= \frac{1}{2\pi} \int_{-\infty}^{\infty}  dk \,e^{iky + ik \sqrt{ n }\mu} \chi\left( \frac{k}{\sqrt{ n }} \right)^n
> \end{align*}
> $$
> <span class="QED"/>

#
---
#state/tidy | #SemBr | #lang/en
