---
tags:
  - public
---
[[Fourier series]]
# Exponential form of the Fourier series

By application of [[Euler's formula]], the [[Fourier series]] of a [[L2 space|square-integrable]] ${L}^2(-a,a)$ function may be expressed as
$$
\begin{align*}
f(x) = \Span_\mathbb{Z} C_{n}  e^{in\pi x / a}
\end{align*}
$$
where
$$
\begin{align*}
C_{n} = \braket{ e_{n} | f } = \frac{1}{2a} \int _{-a}^L e^{in\pi x / a} f(x) \, dx  
\end{align*}
$$
Hence the [[Hilbert space]] $L^2(-a,a)$ has the orthonormal [[dense basis]]
$$
\begin{align*}
L^2 (-a,a) = \span \{ \ket{e_{n}} = x \mapsto e^{in\pi x/a} : n \in \mathbb{Z} \}
\end{align*}
$$
with
$$
\begin{align*}
\braket{ e_{n} | e_{m} } = \frac{1}{2a} \int ^a_{-a} e^{-in\pi x / a} e^{i m\pi x/a} \, dx = \delta_{nm}
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
