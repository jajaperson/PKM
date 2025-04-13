---
tags:
  - public
---
[[Dedekind domain]]
# Prime ideals are invertible in a Dedekind domain

Let $R$ be an ideal, $\mathfrak{p} \triangleleft R$ be a nonzero [[prime ideal]],
and $0 \neq I \trianglelefteq R$ be a nonzero ideal.
Then $(\mathfrak{p}^{-1} I) \neq I$.[^2022] #m/thm/ring 
In particular, $(\mathfrak{p}^{-1} \mathfrak{p}) = R$.

> [!check]- Proof
> Let $K = \opn{Frac} R$ be the [[field of fractions]].
> 
> First we consider the case $I = R$, i.e. we must show $\mathfrak{p}^{-1} \neq R$,
> whereby it is sufficient to find $x \in \mathfrak{p}^{-1} \setminus R$.
> By definition, $x \in \mathfrak{p}^{-1}$ iff $x\mathfrak{p} \sube R$.
> We will try to find $a,b \in R$ so that $b \mathfrak{p} \sube (a)$, but $b \notin (a)$,
> so that $a^{-1}b$ is the appropriate $x$.
> To this end, let $0 \neq a \in \mathfrak{p}$.
> By [[Noetherian ring#^P1]],
> we have $(\mathfrak{p}_{1} \cdots \mathfrak{p}_{r}) \sube (a)$ for some nonzero prime ideals,
> where we are free to assume that $r$ is minimal.
> Since $(a) \sube \mathfrak{p}$ it follows by [[Product ideal#^D2]] $\mathfrak{p}_{i}\sube \mathfrak{p}$.
> say $i = 1$.
> But since $\dim R = 1$, $\mathfrak{p}_{i}$ is [[Maximal ideal|maximal]], so $\mathfrak{p} = \mathfrak{p}_{1}$.
> 
> If $r = 1$, then again by maximality $\mathfrak{p} = (a)$,
> whence $\mathfrak{p}^{-1} = Ra^{-1}$ cannot be equal to $R$ or else $a$ is a unit and $(a) = (1)$ which is not prime.
> 
> Now consider $r \geq 2$,
> whence $(\mathfrak{p}_{2} \cdots \mathfrak{p}_{r}) \subne (a)$ by minimality of $r$.
> Hence there exists $b \in (\mathfrak{p}_{2} \cdots \mathfrak{p}_{r})$ such that $b \notin (a)$.
> By construction $b \mathfrak{p} \sube (a)$, and it follows that $x = a^{-1} b \in \mathfrak{p}^{-1} \setminus R$,
> proving the case $I = R$.
> 
> More generally, use the [[Noetherian ring|Noetherian]] nature of $R$ to write $I = (\alpha_{1},\dots,\alpha_{n})$.
> Suppose towards contradiction $\mathfrak{p}^{-1} I = I$.
> Then for every $x \in \mathfrak{p}^{-1}$, we may write
> $$
> \begin{align*}
> x \alpha_{i} = \sum_{j=1}^n a_{ij}\alpha_{j} \sube K
> \end{align*}
> $$
> 
> for some $A = (a_{ij}) \in \opn M_{n}(R)$.
> Let $T = x 1_{n} - A$, so that
> $$
> \begin{align*}
> T \vthree{\alpha_{1}}{\vdots}{\alpha_{n}} = 0
> \end{align*}
> $$
> whence $\det T = 0$.
> But $\det T$ is a monic polynomial in $x$ with coëfficients in $R$, whence $x$ is integral over $R$.
> But $R$ is integrally closed, hence $\mathfrak{p}^{-1} = R$, contradicting the above special case.
> 
> For invertibility, note $x \mathfrak{p} \sube R$ for all $x \in \mathfrak{p}^{-1}$,
> and $R \sube \mathfrak{p}^{-1}$, so $\mathfrak{p} \sube \mathfrak{p}^{-1}\mathfrak{p} \sube R$.
> Since $\mathfrak{p}^{-1}\mathfrak{p} \neq \mathfrak{p}$ but is an ideal, and $\mathfrak{p}$ is maximal, it follows $\mathfrak{p}^{-1}\mathfrak{p} = (1)$. <span class="QED"/>

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶1.35–1.36, pp. 18–19


#
---
#state/tidy | #lang/en | #SemBr
