---
tags:
  - public
---
[[Binomial distribution]] • [[Hypergeometric distribution]]
# Relationship between binomial and hypergeometric distributions

If $X \sim \Bin(n,p)$ and $Y \sim \Bin(m,p)$ are [[Independence of random variables|independently distributed]] then #m/thm/prob 
$$
\begin{align*}
X \mid X+Y = r \sim \mathrm{HGeom}(n,m,r)
\end{align*}
$$

> [!check]- Proof
> Since
> $$
> \begin{align*}
> \mathbb{P}(X = k \mid X + Y = r) &= \frac{\mathbb{P}(X=k \land X+Y = r)}{\mathbb{P}(X+Y=r)} \\
> &= \frac{\mathbb{P}(X=k \land Y=r-k)}{\mathbb{P}(X+Y=r)} \\
> &= \frac{{n \choose k}p^k(1-p)^{n-k}{m\choose r-k}p^{r-k}(1-p)^{m-(r-k)}}{{n + m \choose r}p^r (1-p)^{n+m-r}} \\
> &= \frac{{n \choose k}{m \choose r-k}}{n+m \choose r}
> \end{align*}
> $$
> as required.  <span class="QED"/>

If $X \sim \mathrm{HGeom}(s,f,n)$ and $N = s+f \to \infty$ such that $p = \frac{s}{N}$ remains fixed,
then $X \rightsquigarrow \Bin(n,p)$. #m/thm/prob 

> [!check]- Proof
> Since
> $$
> \begin{align*}
> \mathbb{P}(X=x)
> &= \frac{{s \choose k}{f \choose n - k}}{s+f \choose n}
> = \frac{{n \choose k}{s + f - n \choose s-k}}{s+f \choose s} 
> = {n \choose k} \frac{\left( \frac{(s+f-n)!}{(s-k)!(f-n+k)!} \right)}{\left( \frac{(s+f)!}{s!f!} \right)} \\
> &\to {n \choose k}p^k(1-p)^k
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
