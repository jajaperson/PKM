---
tags:
  - public
---
[[Integration techniques MOC]]
# Integration by parts
**Integration by parts** is basically an integral version of the product rule.[^2022][^2016]
By beginning with the product rule, and integrating by $x$, we get the following:

$$
\begin{align*}
\frac{d}{dx}(uv) &= v \frac{du}{dx} + u \frac{dv}{dx} \\
\implies \qquad uv &= \int v \, du + \int u \, dv \\
\end{align*}
$$

which can be rearranged to get the product rule
$$
\begin{align*}
\boxed{
\int u \, dv = uv - \int v \, du  
}
\end{align*}
$$

Or in function notation
$$
\boxed{
\int f(x)\, g'(x) \, dx = f(x)\,g(x) - \int g(x)\,f'(x) \, dx 
}
$$

[^2022]: 2022\. [[Sources/@bassomMATH1011MultivariableCalculus2022|MATH1011: Multivariable calculus]], pp. 94–95 (§6.3.6)
[^2016]: 2016\. [[Sources/@stewartCalculus2016|Calculus]], pp. 512–516 (§7.1)

> It applies to the situation in which you are called upon to integrate the product of one function ($f$) and the derivative of another ($g$); 
> it says you can _transfer the derivative_ from $g$ to $f$, 
> at the cost of a minus sign and a boundary term.

## Higher order derivatives

It follows
$$
\begin{align*}
\int_{a}^b \frac{d^nf}{dx^n} g \, dx &= \left[ \sum_{j=1}^n \frac{d^{n-j}f}{dx^{n-j}} \frac{d^{j-1}g}{dx^{j-1}} \right]_{x=a}^{x=b} + (-1)^n \int_{a}^{b} f \frac{d^ng}{dx^n} \, dx  
\end{align*}
$$

## Generalisations
By exploiting different generalisations of the [[Fundamental theorem of calculus]]
along with different generalisations of the [[Product rule|product rule]],
we can generalise integration by parts for vector valued functions.[^2013]

### Divergence
3. Scaling 
  $$
  \begin{align*}
  \iiint_{\Omega} f(\vab{\nabla} \cdot \vab G) \, d\tau = \oiint_{\partial \Omega} f \vab G \cdot d\vab a - \iiint_{\Omega} \vab G \cdot (\vab{\nabla} f) \, d\tau
  \end{align*}
  $$
  ^GE3

### Curl

5. Scaling
   $$
  \begin{align*}
  \iiint_{\Omega}f(\vab{\nabla}\times\vab G)\,d\tau &= - \oiint_{\partial\Omega} f \vab G \times d\vab a - \iiint_{\Omega} (\vab{\nabla}f) \times \vab G \,d\tau
  \end{align*}
  $$
  ^GE5

> [!check]- Proof of 5
> First note that according to [[Product rule#^GE5]]
> $$
> \begin{align*}
> f(\vab{\nabla} \times \vab G) = \vab{\nabla} \times (f \vab G) - (\vab{\nabla}f) \times \vab G
> \end{align*}
> $$
> whence applying [[Острогра́дский's divergence theorem#^C1]] we have
> $$
> \begin{align*}
> \iiint_{\Omega}f\,(\vab{\nabla}\times\vab G)\,d\tau &= - \oiint_{\partial\Omega} f \vab G \times d\vab a - \iiint_{\Omega} (\vab{\nabla}f) \times \vab G \,d\tau
> \end{align*}
> $$
> proving [[#^GE5]]. <span class="QED"/>


[^2013]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]], p. 37 (eqn 1.59)

## Practice problems
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], pp. 516–518 (§7.1 exercises)
- 2022\. [[Sources/@bassomMATH1011MultivariableCalculus2022|MATH1011: Multivariable calculus]], pp. 94–95 (examples 6.24–6.25)

#
---
#state/tidy | #lang/en | #SemBr 