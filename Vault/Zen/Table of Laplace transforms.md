---
tags:
  - public
---
[[Laplace transform]]
# Table of Laplace transforms

## Specific functions
| Laplace transform                  | Function                                                      |
| ---------------------------------- | ------------------------------------------------------------- |
| $$\frac{1}{(s-a)^n}$$              | $$e^{at} \frac{t^{n-1}}{(n-1)!}$$                             |
| $$\frac{1}{s^2 + \omega^2}$$       | $$\frac{\sin(\omega t)}{\omega}$$                             |
| $$\frac{s}{s^2 + \omega^2}$$       | $$\cos(\omega t)$$                                            |
| $$\frac{1}{(s-a)^2 + \omega^2}$$   | $$\frac{e^{at} \sin(\omega t)}{\omega}$$                      |
| $$\frac{{s-a}}{(s-a)^2 + \omega}$$ | $$e^{at} \cos(\omega t)$$                                     |
| $$\frac{1}{(s^2 + \omega^2)^2}$$   | $$\frac{\sin(\omega t) - \omega t\cos(\omega t)}{2\omega^3}$$ |
| $$\frac{s}{(s^2+\omega^2)^2}$$     | $$\frac{t\sin(\omega t)}{2\omega}$$                           |

Note $n \in \mathbb{N}_{\leq 0}$

## General rules
| Laplace transform                               | Function                     |
| ----------------------------------------------- | ---------------------------- |
| $$\frac{e^{-as}}{s}$$                           | $$H(t-a)$$                   |
| $$e^{-as}\cdot \mathcal{L}\{ f \}(s)$$          | $$f(t-a)\,H(t-a)$$           |
| $$\mathcal{L}\{ f \}(s-a)$$                     | $$e^{at}f(t)$$               |
| $$s \mathcal{L}\{ f \}(s) - f(0)$$              | $$f'(t))$$                   |
| $$s^2 \mathcal{L}\{ f \}(s) - sf(0) - f'(0)$$   | $$f''(t))$$                  |
| $$(D \mathcal{L})\{ f \}(s)$$                   | $$-t f(t)$$                  |
| $$(D^n \mathcal{L})\{ f \}(s)$$                 | $$(-t)^n f(t)$$              |
| $$\frac{\mathcal{L}\{ f \}(s)}{s}$$             | $$\int_{0}^{t} f(u) \, du $$ |
| $$\mathcal{L}\{ f \}(s) \, \mathcal{L}\{ g \}(s)$$ | $$(f * g)(t)$$                             |

Note that here $H(t)$ represents the [[Heaviside function]]
and $f * g$ represents [[Convolution]].
$D$ is the [[differential operator]].

#
---
#state/tidy | #SemBr
