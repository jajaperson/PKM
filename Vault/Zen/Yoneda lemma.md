---
tags:
  - public
---
[[Category theory MOC]]
# Yoneda lemma


**Yoneda lemma (contravariant form)** 
For every object $X \in \cat C$ and every [[Contravariant functor]] $F : \op{\cat C} \to \Set$,
the set of natural transformations from the fixed-codomain [[Hom-functor]] $\cat C(-, X)$ to $F$ is isomorphic to $FX$ #m/thm/cat
$$
\begin{align*}
F X \cong \Set^{\op{\cat C}}(\cat C (-, X), F)
\end{align*}
$$

> [!check]- Proof
> Consider two natural transformations $\eta, \epsilon : \cat C(-,X) \to F$.[^spec]
> We will show that $\eta = \epsilon$ iff $\eta_{X} \id_{X} = \epsilon_{X} \id_{X}$, where $\id_{X} \in \cat C(X, X)$.
> The forward statement is obvious —
> clearly if the natural transformations are the same the functions $\eta_{X} , \epsilon_{X} \in \Set(\cat C(X,X), FX)$ will be the same,
> and therefore have the same image for $\id_{X}$.
> For the converse, assume  $\eta_{X} \id_{X} = \epsilon_{X} \id_{X}$.
> Note that two natural transformations are the same iff the functions $\eta_{Y}, \epsilon_{Y}$ are the same for all $Y \in \cat C$,
> which in turn is the case iff $\eta_{Y}(f) = \epsilon_{Y}(f)$ for all $f \in \cat C(Y,X)$.
> With this in mind, let $Y \in \cat C$ be some object,
> and $f \in \cat C(Y, X)$ be some morphism $f : Y \to X$.
> The conditions for a [[Natural transformation]] give the commutative diagram
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09X%20%26%26%20FX%20%26%26%20%7B%5Ctextsf%7BC%7D(X%2CX)%7D%20%26%26%20FX%20%5C%5C%0A%09%5C%5C%0A%09Y%20%26%26%20FY%20%26%26%20%7B%5Ctextsf%7BC%7D(Y%2CX)%7D%20%26%26%20FY%0A%09%5Carrow%5B%22%7B%5Ctextsf%7BC%7D(f%2CX)%3Df%5E%5Cstar%7D%22%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Ceta_X%7D%22'%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Ceta_Y%7D%22%2C%20from%3D3-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22Ff%22'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22Ff%22%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Cepsilon_X%7D%22%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22%7B%5Cepsilon_Y%7D%22'%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22f%22%2C%20from%3D3-1%2C%20to%3D1-1%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="
> \usetikzlibrary{decorations.pathmorphing}
> \[\begin{tikzcd}
> 	X &amp;&amp; FX &amp;&amp; {\textsf{C}(X,X)} &amp;&amp; FX \\
> 	\\
> 	Y &amp;&amp; FY &amp;&amp; {\textsf{C}(Y,X)} &amp;&amp; FY
> 	\arrow[&quot;{\textsf{C}(f,X)=f^\star}&quot;, from=1-5, to=3-5]
> 	\arrow[&quot;{\eta_X}&quot;', from=1-5, to=1-3]
> 	\arrow[&quot;{\eta_Y}&quot;, from=3-5, to=3-3]
> 	\arrow[&quot;Ff&quot;', from=1-3, to=3-3]
> 	\arrow[&quot;Ff&quot;, from=1-7, to=3-7]
> 	\arrow[&quot;{\epsilon_X}&quot;, from=1-5, to=1-7]
> 	\arrow[&quot;{\epsilon_Y}&quot;', from=3-5, to=3-7]
> 	\arrow[&quot;f&quot;, from=3-1, to=1-1]
> \end{tikzcd}\]
> " /></p>
> 
> Now if we start with $\id_{X} \in \cat C(X,X)$ following the middle morphism we get $f^\star \id_{X} = f$.
> Thence follows
> $$
> \begin{align*}
> \eta_{Y} f = (Ff) \eta_{X} \id_{X} = (Ff) \epsilon_{X} \id_{X} = \epsilon_{Y} f
> \end{align*}
> $$
> Therefore $\eta = \epsilon$.
> <span class="QED"/>

[^spec]: i.e. $\eta,\epsilon \in \Set^{\cop C}(\cat C(-, X), F)$.



This can be viewed as a vast generalisation of [[Cayley's theorem]].
In particular, given $X, Y \in \cat C$:
$$
\begin{align*}
\Set^{\op{\cat C}}(\cat C(-, X), \cat C(-, Y)) \cong \cat C(X,Y)
\end{align*}
$$
An important application of the Yoneda lemma is the [[Yoneda embedding]].


#
---
#state/tidy | #lang/en | #SemBr
