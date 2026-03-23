---
sr-due: 2024-03-30
sr-interval: 9
sr-ease: 230
tags:
  - public
---

[[Integration techniques MOC]]
# Trigonometric integrals

A variety of integrals can be solved by using the appropriate [[Trigonometric identities|trigonometric identity]].[^2016]

> [!tip]+ Evaluating $\int \sin^mx \cos^n x \, dx$
> Where $k \in \mathbb{N}_{0}$
> 
> 1. If $n = 2k+1$
>  $$
>   \begin{align*}
>   \int \sin^mx \cos^{2k+1} x \, dx &= \int \sin^m x (\cos^2 x)^k \cos x \, dx \\
>   &= \int \sin^m x (1-\sin^2 x)^k \cos x \, dx 
>   \end{align*}
>  $$
> 2. If $m = 2k+1$
>  $$
>   \begin{align*}
>   \int \sin^{2k+1}x\cos^nx \, dx &= \int (\sin^2x)^k \sin x\cos x \, dx \\
>   &= \int (1-\cos^2x)^k \cos x \sin x \, dx 
>   \end{align*}
>  $$
> 3. If $n$ and $m$ are even, use the identities
>  $$
>   \begin{align*}
>   \sin^2x &= \frac{1}{2}(1- \cos2x) \\
>   \cos^2x &= \frac{1}{2}(1+\cos{2}x) \\
>   \sin x\cos x &= \frac{1}{2} \sin2x
>   \end{align*}
>  $$


[^2016]: 2016\. [[Sources/@stewartCalculus2016|Calculus]], §7.2

## Practice problems

- 2016\. [[Sources/@stewartCalculus2016|Calculus]], §7.2, pp. 72–73 $

#
---
#state/tidy | #lang/en | #SemBr | #review
