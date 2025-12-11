---
tags:
  - public
---
[[Homological algebra MOC]]
# Chain map

A **chain map**[^Kettenabbildung] $f : (A_{•}, \partial_{•}) \to (B_{•}, d_{•})$ between [[Chain complex|chain complexes]] in $\cat A$ is a sequence $(f_{k} : A_{k} \to B_{k})_{k \in \mathbb{Z}}$ of homomorphisms such that the following diagram commutes in $\cat A$ for all $k \in \mathbb{Z}$:[^loose] #m/def/homology 

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTAsWzQsMCwiQV9rIl0sWzYsMCwiQV97aysxfSJdLFsyLDAsIkFfe2stMX0iXSxbMiwyLCJCX3trLTF9Il0sWzQsMiwiQl9rIl0sWzYsMiwiQl97aysxfSJdLFswLDAsIlxcY2RvdHMiXSxbMCwyLCJcXGNkb3RzIl0sWzgsMiwiXFxjZG90cyJdLFs4LDAsIlxcY2RvdHMiXSxbNSw0LCJkX3trKzF9Il0sWzQsMywiZF9rIl0sWzEsMCwiXFxwYXJ0aWFsX3trKzF9IiwyXSxbMCwyLCJcXHBhcnRpYWxfayIsMl0sWzksMSwiXFxwYXJ0aWFsX3trKzJ9IiwyXSxbOCw1LCJkX3trKzJ9Il0sWzIsNiwiXFxwYXJ0aWFsX3trLTF9IiwyXSxbMyw3LCJkX3trLTF9Il0sWzIsMywiZl97ay0xfSIsMl0sWzAsNCwiZl9rIiwyXSxbMSw1LCJmX3trKzF9IiwyXV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5Ccdots%20%5C%26%5C%26%20%7BA_%7Bk-1%7D%7D%20%5C%26%5C%26%20%7BA_k%7D%20%5C%26%5C%26%20%7BA_%7Bk%2B1%7D%7D%20%5C%26%5C%26%20%5Ccdots%20%5C%5C%0A%09%5C%5C%0A%09%5Ccdots%20%5C%26%5C%26%20%7BB_%7Bk-1%7D%7D%20%5C%26%5C%26%20%7BB_k%7D%20%5C%26%5C%26%20%7BB_%7Bk%2B1%7D%7D%20%5C%26%5C%26%20%5Ccdots%0A%09%5Carrow%5B%22%7Bd_%7Bk%2B1%7D%7D%22%2C%20from%3D3-7%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7Bd_k%7D%22%2C%20from%3D3-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk%2B1%7D%7D%22'%2C%20from%3D1-7%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_k%7D%22'%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk%2B2%7D%7D%22'%2C%20from%3D1-9%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22%7Bd_%7Bk%2B2%7D%7D%22%2C%20from%3D3-9%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk-1%7D%7D%22'%2C%20from%3D1-3%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22%7Bd_%7Bk-1%7D%7D%22%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7Bf_%7Bk-1%7D%7D%22'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7Bf_k%7D%22'%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7Bf_%7Bk%2B1%7D%7D%22'%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTAsWzQsMCwiQV9rIl0sWzYsMCwiQV97aysxfSJdLFsyLDAsIkFfe2stMX0iXSxbMiwyLCJCX3trLTF9Il0sWzQsMiwiQl9rIl0sWzYsMiwiQl97aysxfSJdLFswLDAsIlxcY2RvdHMiXSxbMCwyLCJcXGNkb3RzIl0sWzgsMiwiXFxjZG90cyJdLFs4LDAsIlxcY2RvdHMiXSxbNSw0LCJkX3trKzF9Il0sWzQsMywiZF9rIl0sWzEsMCwiXFxwYXJ0aWFsX3trKzF9IiwyXSxbMCwyLCJcXHBhcnRpYWxfayIsMl0sWzksMSwiXFxwYXJ0aWFsX3trKzJ9IiwyXSxbOCw1LCJkX3trKzJ9Il0sWzIsNiwiXFxwYXJ0aWFsX3trLTF9IiwyXSxbMyw3LCJkX3trLTF9Il0sWzIsMywiZl97ay0xfSIsMl0sWzAsNCwiZl9rIiwyXSxbMSw1LCJmX3trKzF9IiwyXV0=" /></p>

It follows that each $f_{k}$ maps $k$-cycles to $k$-cycles and $k$-boundaries to $k$-boundaries, 
and hence there is an induced homomorphism $(f_{k})_{*} : H_{k}(A, \partial) \to H_{k}(B, d)$ between chain homologies, defined by $(f_{k})_{*}[b] = [f(b)]$.

[^Kettenabbildung]: German _Kettenabbildung_
[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], ¶3.1.4, p. 128

> [!check]- Proof
> Let $z \in Z_{k}(A, \partial)$ so $\partial _k(z) = 0$.
> Then $d_{k} f_{k}(z) = f_{{k-1}} \partial_{k}(z) = 0$ and thus $f_{k}(z) \in Z_{k}(B,d)$.
> Now let $b \in B_{k}(A,\partial)$ so $b = \partial_{k+1}(c)$ for some $c \in A_{k+1}$.
> Then $f_{k}(b) = f_{k} \partial_{k+1}(c) = d_{k+1}f_{k+1}(b)$ and thus $f_{k}(b) \in B_{k}(B, d)$.
> <span class="QED"/>

Chain maps form morphisms in [[Category of chain complexes]].

#
---
#state/tidy | #lang/en | #SemBr
