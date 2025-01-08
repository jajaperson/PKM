---
tags:
  - public
---
[[Pushforward and pullback of morphisms]]
# Pushforward and pullback of an isomorphism

Let $f : X \to Y$ be a morphism in an arbitrary category $\cat C$,
and $X,Y,Z \in \cat C$
Then the following conditions are equivalent #m/thm/cat 

- $f : X \to Y$ is an [[Morphism|isomorphism]]
- $f_{\star} : \cat C(Z, X) \to \cat C(Z, Y)$ is a bijection
- $f^\star : \cat C(Y, Z) \to \cat C (X, Z)$ is a bijection

> [!check]- Proof
> Suppose $f : X \to Y$ is an isomorphism.
> Then there exists an inverse $g = f^{-1} : Y \to X$.
> For any $Z \in \cat C$,
> there exist pushforwards $f_{\star} : \cat C(Z, X) \to \cat C(Z, Y)$ and $g_{\star} : \cat C(Z, Y) \to \cat C(Z, X)$.
> Let $s : Z \to X$, then clearly $g_{\star} f_{\star}(s) = g_{\star}(fs) = gfs = s$.
> Likewise for $t : Y \to X$, clearly $f_{\star}g_{\star}(t) = f_{\star}(gt) = fgt = t$.
> Hence $g_{\star}$ is the inverse of $f_{\star}$
> Similarly for any $Z \in \cat C$, 
> there exist pullbacks $f^\star : \cat C(Y, Z) \to \cat C (X, Z)$ and $g^\star : \cat C (X, Z) \to \cat C(Y, Z)$.
> Proceeding as before, $g^\star$ is the inverse of $f^\star$.
> Therefore, if $f$ is an isomorphism,
> so are $f_{\star}$ and $f^\star$ bijections.
> 
> Next, assume for any $Z \in \cat C$ the pushforward $f_{\star} : \cat C(Z, X) \to \cat C(Z, Y)$ is a bijection.
> If we let $Z = Y$, from surjectivity it follows there exists $g : Y \to X$ such that $f_{\star}(g) = fg = \id_{Y}$.
> If we let $Z = X$, it follows that $f_{\star}(gf) = fgf = f = f_{\star}(\id_{X})$,
> and hence from injectivity $gf = \id_{X}$. 
> Therefore $g$ is the inverse of $f$,
> whence $f$ is an isomorphism.
> 
> Finally, assume for any $Z \in \cat C$ the pullback $f^\star : \cat C (Y, Z) \to \cat C(X, Z)$ is a bijection.
> If we let $Z = X$,
> from surjectivity it follows there exists $g : Y \to X$
> such that $f^\star (g) = gf = \id_{X}$.
> If we let $Z = Y$, it follows that $f^\star(fg) = fgf = g = f^\star(\id_{Y})$,
> and hence from injectivity $fg = \id_{Y}$.
> Therefore $g$ is the inverse of $f$,
> whence $f$ is an isomorphism.
> <span class="QED"/>

In summary, if you understand all the morphisms $X \to Z$,
you know $X$ up to isomorphism.
In summary, if you understand all the morphisms $Z \to X$,
you know $X$ up to isomorphism.[^br]

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 9


#
---
#state/tidy | #lang/en | #SemBr
