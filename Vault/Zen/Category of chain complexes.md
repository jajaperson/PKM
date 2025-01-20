---
categoryName: category of chain complexes
mathLink: $\cat{Ch}_\cat{A}$
object: "[[chain complex]] in $\\cat A$]]"
morphism: "[[chain map]]"
arguments:
  - $\cat A$ [[abelian category]]
tags:
  - category
  - public
---
[[Homological algebra MOC]]
# Category of chain complexes

The **category of chain complexes** $\cat{Ch}_{\cat A}$ consists of [[Chain complex|chain complexes]] $(C_{•},\partial_{•})$ in $\cat A$ as objects and [[Chain map|chain maps]] $f_{•} : C_{•} \to C'_{•}$ as morphisms, with composition given by $(gf)_{k} = g_{k}f_{k}$. #m/def/homology 
For notational convenience, we will often use $C$ to refer to $(C_{•}, \partial_{•})$, and $f$ to refer to $f_{•}$.
Furthermore, for a [[ring]] $R$ we write $\cat{Ch}_{R} = \cat{Ch}_{\lMod R}$.

## Limits and colimits

- Both [[Initial and terminal objects]] are the trivial complexes.
- The [[Products and coproducts|coproduct]] is given by the sum of constituent modules


> [!check]- Proof of (co)limits
> Consider the trivial chain complex $(0, 0)$ of trivial modules with trivial homomorphisms between them.
> Clearly for any chain complex $(C_{•},\partial_{•}) \in \cat{Ch}_{R}$ the following diagram commutes
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTUsWzQsMiwiQ19rIl0sWzYsMiwiQ197aysxfSJdLFsyLDIsIkNfe2stMX0iXSxbMiw0LCIwIl0sWzQsNCwiMCJdLFs2LDQsIjAiXSxbMCwyLCJcXGNkb3RzIl0sWzAsNCwiXFxjZG90cyJdLFs4LDQsIlxcY2RvdHMiXSxbOCwyLCJcXGNkb3RzIl0sWzIsMCwiMCJdLFs0LDAsIjAiXSxbNiwwLCIwIl0sWzAsMCwiXFxkb3RzIl0sWzgsMCwiXFxkb3RzIl0sWzUsNCwiMCJdLFs0LDMsIjAiXSxbMSwwLCJcXHBhcnRpYWxfe2srMX0iLDJdLFswLDIsIlxccGFydGlhbF9rIiwyXSxbOSwxLCJcXHBhcnRpYWxfe2srMn0iLDJdLFs4LDUsIjAiXSxbMiw2LCJcXHBhcnRpYWxfe2stMX0iLDJdLFszLDcsIjAiXSxbMiwzLCIwIiwyXSxbMCw0LCIwIiwyXSxbMSw1LCIwIiwyXSxbMTIsMSwiMCIsMl0sWzExLDAsIjAiLDJdLFsxMCwyLCIwIiwyXSxbMTQsMTIsIjAiLDJdLFsxMiwxMSwiMCIsMl0sWzExLDEwLCIwIiwyXSxbMTAsMTMsIjAiLDJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5Cdots%20%5C%26%5C%26%200%20%5C%26%5C%26%200%20%5C%26%5C%26%200%20%5C%26%5C%26%20%5Cdots%20%5C%5C%0A%09%5C%5C%0A%09%5Ccdots%20%5C%26%5C%26%20%7BC_%7Bk-1%7D%7D%20%5C%26%5C%26%20%7BC_k%7D%20%5C%26%5C%26%20%7BC_%7Bk%2B1%7D%7D%20%5C%26%5C%26%20%5Ccdots%20%5C%5C%0A%09%5C%5C%0A%09%5Ccdots%20%5C%26%5C%26%200%20%5C%26%5C%26%200%20%5C%26%5C%26%200%20%5C%26%5C%26%20%5Ccdots%0A%09%5Carrow%5B%220%22%2C%20from%3D5-7%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%220%22%2C%20from%3D5-5%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk%2B1%7D%7D%22'%2C%20from%3D3-7%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_k%7D%22'%2C%20from%3D3-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk%2B2%7D%7D%22'%2C%20from%3D3-9%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%220%22%2C%20from%3D5-9%2C%20to%3D5-7%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk-1%7D%7D%22'%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%220%22%2C%20from%3D5-3%2C%20to%3D5-1%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D3-3%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D3-5%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D3-7%2C%20to%3D5-7%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D1-9%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D1-7%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%220%22'%2C%20from%3D1-3%2C%20to%3D1-1%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTUsWzQsMiwiQ19rIl0sWzYsMiwiQ197aysxfSJdLFsyLDIsIkNfe2stMX0iXSxbMiw0LCIwIl0sWzQsNCwiMCJdLFs2LDQsIjAiXSxbMCwyLCJcXGNkb3RzIl0sWzAsNCwiXFxjZG90cyJdLFs4LDQsIlxcY2RvdHMiXSxbOCwyLCJcXGNkb3RzIl0sWzIsMCwiMCJdLFs0LDAsIjAiXSxbNiwwLCIwIl0sWzAsMCwiXFxkb3RzIl0sWzgsMCwiXFxkb3RzIl0sWzUsNCwiMCJdLFs0LDMsIjAiXSxbMSwwLCJcXHBhcnRpYWxfe2srMX0iLDJdLFswLDIsIlxccGFydGlhbF9rIiwyXSxbOSwxLCJcXHBhcnRpYWxfe2srMn0iLDJdLFs4LDUsIjAiXSxbMiw2LCJcXHBhcnRpYWxfe2stMX0iLDJdLFszLDcsIjAiXSxbMiwzLCIwIiwyXSxbMCw0LCIwIiwyXSxbMSw1LCIwIiwyXSxbMTIsMSwiMCIsMl0sWzExLDAsIjAiLDJdLFsxMCwyLCIwIiwyXSxbMTQsMTIsIjAiLDJdLFsxMiwxMSwiMCIsMl0sWzExLDEwLCIwIiwyXSxbMTAsMTMsIjAiLDJdXQ==" /></p>
> 
> Moreover no other vertical morphisms are definable, let alone commuting.
> Therefore $(0,0)$ is the [[Initial and terminal objects|initial and terminal object]] of $\cat{Ch}_{R}$.
> 
> Let $(X^1_{•}, \partial^1_{•})$ and $(X^2_{•}, \partial^2_{•})$ be chain complexes.
> The sequence $(X_{•}, \partial_{•}) = (X^1_{•} \oplus X^2_{•}, \partial^1_{•} \oplus \partial^2_{•})$ is a well defined chain complex, since
> $$
> \begin{align*}
> \partial_{k}\partial_{k+1} = (\partial^1_{k} \oplus \partial^2_{k}) (\partial^1_{k+1} \oplus \partial^2_{k+1}) = \partial^1_{k} \partial^1_{k+1} \oplus \partial^2_{k} \partial^2_{k+1} = 0
> \end{align*}
> $$
> The following diagram commutes with unique vertical morphisms due to the coproduct in $\cat{Mod}_{R}$.
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTUsWzQsMiwiWF9rIl0sWzYsMiwiWF97aysxfSJdLFsyLDIsIlhfe2stMX0iXSxbMiw0LCJYXjJfe2stMX0iXSxbNCw0LCJYXjJfayJdLFs2LDQsIlheMl9rIl0sWzAsMiwiXFxjZG90cyJdLFswLDQsIlxcY2RvdHMiXSxbOCw0LCJcXGNkb3RzIl0sWzgsMiwiXFxjZG90cyJdLFsyLDAsIlheMV97ay0xfSJdLFs0LDAsIlheMV9rIl0sWzYsMCwiWF4xX3trKzF9Il0sWzAsMCwiXFxkb3RzIl0sWzgsMCwiXFxkb3RzIl0sWzUsNCwiXFxwYXJ0aWFsXjJfe2srMX0iXSxbMSwwLCJcXHBhcnRpYWxfe2srMX0iLDJdLFswLDIsIlxccGFydGlhbF9rIiwyXSxbOSwxLCJcXHBhcnRpYWxfe2srMn0iLDJdLFs4LDUsIlxccGFydGlhbF4yX3trKzJ9Il0sWzIsNiwiXFxwYXJ0aWFsX3trLTF9IiwyXSxbMyw3LCJcXHBhcnRpYWxeMl97ay0xfSJdLFszLDIsIlxcaW90YV4yX3trLTF9Il0sWzQsMCwiXFxpb3RhXjIiXSxbNSwxLCJcXGlvdGFeMl97aysxfSJdLFsxMiwxLCJcXGlvdGFeMV97aysxfSIsMl0sWzExLDAsIlxcaW90YV4xIiwyXSxbMTAsMiwiXFxpb3RhXjFfe2stMX0iLDJdLFsxNCwxMiwiXFxwYXJ0aWFsXjFfe2srMn0iLDJdLFsxMiwxMSwiXFxwYXJ0aWFsXjFfe2srMX0iLDJdLFsxMSwxMCwiXFxwYXJ0aWFsXjFfayIsMl0sWzEwLDEzLCJcXHBhcnRpYWxeMV97ay0xfSIsMl0sWzQsMywiXFxwYXJ0aWFsXjJfayJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5Cdots%20%5C%26%5C%26%20%7BX%5E1_%7Bk-1%7D%7D%20%5C%26%5C%26%20%7BX%5E1_k%7D%20%5C%26%5C%26%20%7BX%5E1_%7Bk%2B1%7D%7D%20%5C%26%5C%26%20%5Cdots%20%5C%5C%0A%09%5C%5C%0A%09%5Ccdots%20%5C%26%5C%26%20%7BX_%7Bk-1%7D%7D%20%5C%26%5C%26%20%7BX_k%7D%20%5C%26%5C%26%20%7BX_%7Bk%2B1%7D%7D%20%5C%26%5C%26%20%5Ccdots%20%5C%5C%0A%09%5C%5C%0A%09%5Ccdots%20%5C%26%5C%26%20%7BX%5E2_%7Bk-1%7D%7D%20%5C%26%5C%26%20%7BX%5E2_k%7D%20%5C%26%5C%26%20%7BX%5E2_k%7D%20%5C%26%5C%26%20%5Ccdots%0A%09%5Carrow%5B%22%7B%5Cpartial%5E2_%7Bk%2B1%7D%7D%22%2C%20from%3D5-7%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk%2B1%7D%7D%22'%2C%20from%3D3-7%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_k%7D%22'%2C%20from%3D3-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk%2B2%7D%7D%22'%2C%20from%3D3-9%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Cpartial%5E2_%7Bk%2B2%7D%7D%22%2C%20from%3D5-9%2C%20to%3D5-7%5D%0A%09%5Carrow%5B%22%7B%5Cpartial_%7Bk-1%7D%7D%22'%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cpartial%5E2_%7Bk-1%7D%7D%22%2C%20from%3D5-3%2C%20to%3D5-1%5D%0A%09%5Carrow%5B%22%7B%5Ciota%5E2_%7Bk-1%7D%7D%22%2C%20from%3D5-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Ciota%5E2%7D%22%2C%20from%3D5-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Ciota%5E2_%7Bk%2B1%7D%7D%22%2C%20from%3D5-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Ciota%5E1_%7Bk%2B1%7D%7D%22'%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Ciota%5E1%7D%22'%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Ciota%5E1_%7Bk-1%7D%7D%22'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cpartial%5E1_%7Bk%2B2%7D%7D%22'%2C%20from%3D1-9%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22%7B%5Cpartial%5E1_%7Bk%2B1%7D%7D%22'%2C%20from%3D1-7%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%7B%5Cpartial%5E1_k%7D%22'%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cpartial%5E1_%7Bk-1%7D%7D%22'%2C%20from%3D1-3%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22%7B%5Cpartial%5E2_k%7D%22%2C%20from%3D5-5%2C%20to%3D5-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTUsWzQsMiwiWF9rIl0sWzYsMiwiWF97aysxfSJdLFsyLDIsIlhfe2stMX0iXSxbMiw0LCJYXjJfe2stMX0iXSxbNCw0LCJYXjJfayJdLFs2LDQsIlheMl9rIl0sWzAsMiwiXFxjZG90cyJdLFswLDQsIlxcY2RvdHMiXSxbOCw0LCJcXGNkb3RzIl0sWzgsMiwiXFxjZG90cyJdLFsyLDAsIlheMV97ay0xfSJdLFs0LDAsIlheMV9rIl0sWzYsMCwiWF4xX3trKzF9Il0sWzAsMCwiXFxkb3RzIl0sWzgsMCwiXFxkb3RzIl0sWzUsNCwiXFxwYXJ0aWFsXjJfe2srMX0iXSxbMSwwLCJcXHBhcnRpYWxfe2srMX0iLDJdLFswLDIsIlxccGFydGlhbF9rIiwyXSxbOSwxLCJcXHBhcnRpYWxfe2srMn0iLDJdLFs4LDUsIlxccGFydGlhbF4yX3trKzJ9Il0sWzIsNiwiXFxwYXJ0aWFsX3trLTF9IiwyXSxbMyw3LCJcXHBhcnRpYWxeMl97ay0xfSJdLFszLDIsIlxcaW90YV4yX3trLTF9Il0sWzQsMCwiXFxpb3RhXjIiXSxbNSwxLCJcXGlvdGFeMl97aysxfSJdLFsxMiwxLCJcXGlvdGFeMV97aysxfSIsMl0sWzExLDAsIlxcaW90YV4xIiwyXSxbMTAsMiwiXFxpb3RhXjFfe2stMX0iLDJdLFsxNCwxMiwiXFxwYXJ0aWFsXjFfe2srMn0iLDJdLFsxMiwxMSwiXFxwYXJ0aWFsXjFfe2srMX0iLDJdLFsxMSwxMCwiXFxwYXJ0aWFsXjFfayIsMl0sWzEwLDEzLCJcXHBhcnRpYWxeMV97ay0xfSIsMl0sWzQsMywiXFxwYXJ0aWFsXjJfayJdXQ==" /></p>
> 
> Hence  $(X_{•}, \partial_{•})$ is the coproduct of $(X^1_{•},\partial^1_{•})$ and $(X^2_{•},\partial^2_{•})$.
> <span class="QED"/>

## Homology functor

$H_{k} : \cat{Ch}_{K} \to \cat{Mod}_{K}$ becomes a functor for each $k \in K$ via induced homomorphisms (see [[chain map]]),
where for $f : C' \to C$ we have
$$
\begin{align*}
H_{k}f : H_{k}C' &\to H_{k}C \\
[b'] &\mapsto [f_{k}(b')]
\end{align*}
$$
This functor preserves initial and terminal objects in a trivial fashion, as well as coproducts. #to/prove

> [!check]- Proof of functor
> Consider the identity chain map $\id_C$.
> Then $\id_{H_{k}(C_{•}, \partial_{•})}$ already has the property that that $\id_{H_{k}C}[b] = [\id_{C_{k}}(b)] = [b]$,
> hence $\id_{H_{k}C} = H_{k}\id_{C}$.
> Now consider chain complex $(C_{•}, \partial_{•})$, $(C'_{•}, \partial'_{•})$, and $(C_{•}'', \partial_{•}'')$ with chain maps $f : C'' \to C'$ and $g : C' \to C$.
> Then
> $$
> \begin{align*}
> (H_{k}g) (H_{k}f) [b''] &= H_{k}g [f_{k}(b'')] = [g_{k}f_{k}(b'')] = [(gf)_{k}(b'')] = H_{k}(gf)(b'')
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
