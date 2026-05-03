---
tags:
  - public
---
[[Fourier analysis MOC]]
# Fourier transform
The **Fourier transform** is a [[Unitary operator|unitary operator]] on $L^1(\mathbb{R})$ of that converts a function from a **time domain** to a **frequency domain**:
instead of describing amplitude of a function at a given time,
the transformed $\hat{f}$ describes the amplitude of a function at a given frequency.

$$
\begin{align*}
\hat{f}(\omega) = \mathcal{F}\{ f \}(\omega) = \frac{1}{\sqrt{ 2\pi }} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} \, dt 
\end{align*}
$$
[^form]
The Fourier transform may be thought of as a complex version of the [[Laplace transform]], 
or an extension of the [[Fourier series]] from discrete integer frequencies to continuous real ones.
In any case, the **inverse Fourier transform** is significantly simpler than the inverse Laplace transform:
$$
\begin{align*}
f(t) = \mathcal{F}^{-1} \{ \hat{f} \}(t) = \frac{1}{\sqrt{ 2\pi }} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega t} \, dx 
\end{align*}
$$

  [^form]: Used above is the unitary angular form.

> [!note]- Note on derivation
> The above formulae can be derived from the [[Fourier series]] by taking the limit as $L \to \infty$.
> See 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], problem 2.19, p. 60

## Properties
The **Fourier transform** has the properties[^2023][^libre]

> [!missing]-
> #missing

## Applications
- In a similar vain to the [[Laplace transform]],
  the properties of the Fourier transform make it very useful for solving [[Differential equations MOC|differential equations]]
- Related is the [[Dirac delta]]

  [^libre]: Proofs can be found in [§9.5: Properties of the Fourier Transform](https://math.libretexts.org/Bookshelves/Differential_Equations/Introduction_to_Partial_Differential_Equations_(Herman)/09%3A_Transform_Techniques_in_Physics/9.05%3A_Properties_of_the_Fourier_Transform) (LibreTexts)
  [^2023]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 92

#
---
#state/develop | #lang/en | #SemBr
