---
tags:
  - public
---
[[Algebra theory MOC]]
# Tensor product of algebras

Let $(A, \cdot_{A})$ and $(B, \cdot_{B})$ be $\mathbb{K}$-[[Algebra over a field|algebras]]
The **tensor product algebra** $(A \otimes B, \cdot_{A \otimes B})$ is their [[Tensor product of vector spaces|tensor product vector space]] $A \otimes B$ along with the product defined by the following commutative diagram #m/def/falg 

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTAsWzAsMCwiQSBcXG90aW1lcyBCIFxcdGltZXMgQSBcXG90aW1lcyBCIl0sWzIsMCwiQSBcXG90aW1lcyBCIFxcb3RpbWVzIEEgXFxvdGltZXMgQiJdLFswLDIsIkEgXFxvdGltZXMgQiJdLFsyLDIsIkEgXFxvdGltZXMgQSBcXG90aW1lcyBCIFxcb3RpbWVzIEIiXSxbMywwLCJBIFxcdGltZXMgQSJdLFszLDIsIkEiXSxbNSwwLCJBIFxcb3RpbWVzIEEiXSxbNSwyLCJCIFxcb3RpbWVzIEIiXSxbNywwLCJCIl0sWzcsMiwiQiBcXHRpbWVzIEIiXSxbMCwxLCIoXFxvdGltZXMpIl0sWzAsMiwiKFxcY2RvdF97QSBcXG90aW1lcyBCfSkiLDFdLFszLDIsIihcXGJhciBcXGNkb3RfQSkgXFxvdGltZXMgKFxcYmFyIFxcY2RvdF9CKSJdLFsxLDMsIlxccm17aWR9IFxcb3RpbWVzIFxcYmV0YSBcXG90aW1lcyBcXHJte2lkfSIsMV0sWzQsNSwiKFxcY2RvdF9BKSIsMl0sWzYsNSwiKFxcY2RvdF9BKSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs0LDYsIihcXG90aW1lcykiXSxbNyw4LCIoXFxiYXIgXFxjZG90X0IpIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzksNywiKFxcb3RpbWVzKSJdLFs5LDgsIihcXGNkb3RfQikiLDJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7BA%20%5Cotimes%20B%20%5Ctimes%20A%20%5Cotimes%20B%7D%20%5C%26%5C%26%20%7BA%20%5Cotimes%20B%20%5Cotimes%20A%20%5Cotimes%20B%7D%20%5C%26%20%7BA%20%5Ctimes%20A%7D%20%5C%26%5C%26%20%7BA%20%5Cotimes%20A%7D%20%5C%26%5C%26%20B%20%5C%5C%0A%09%5C%5C%0A%09%7BA%20%5Cotimes%20B%7D%20%5C%26%5C%26%20%7BA%20%5Cotimes%20A%20%5Cotimes%20B%20%5Cotimes%20B%7D%20%5C%26%20A%20%5C%26%5C%26%20%7BB%20%5Cotimes%20B%7D%20%5C%26%5C%26%20%7BB%20%5Ctimes%20B%7D%0A%09%5Carrow%5B%22%7B(%5Cotimes)%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B(%5Ccdot_%7BA%20%5Cotimes%20B%7D)%7D%22%7Bdescription%7D%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Crm%7Bid%7D%20%5Cotimes%20%5Cbeta%20%5Cotimes%20%5Crm%7Bid%7D%7D%22%7Bdescription%7D%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B(%5Cotimes)%7D%22%2C%20from%3D1-4%2C%20to%3D1-6%5D%0A%09%5Carrow%5B%22%7B(%5Ccdot_A)%7D%22'%2C%20from%3D1-4%2C%20to%3D3-4%5D%0A%09%5Carrow%5B%22%7B(%5Ccdot_A)%7D%22%2C%20dashed%2C%20from%3D1-6%2C%20to%3D3-4%5D%0A%09%5Carrow%5B%22%7B(%5Cbar%20%5Ccdot_A)%20%5Cotimes%20(%5Cbar%20%5Ccdot_B)%7D%22%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B(%5Cbar%20%5Ccdot_B)%7D%22%2C%20dashed%2C%20from%3D3-6%2C%20to%3D1-8%5D%0A%09%5Carrow%5B%22%7B(%5Ccdot_B)%7D%22'%2C%20from%3D3-8%2C%20to%3D1-8%5D%0A%09%5Carrow%5B%22%7B(%5Cotimes)%7D%22%2C%20from%3D3-8%2C%20to%3D3-6%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTAsWzAsMCwiQSBcXG90aW1lcyBCIFxcdGltZXMgQSBcXG90aW1lcyBCIl0sWzIsMCwiQSBcXG90aW1lcyBCIFxcb3RpbWVzIEEgXFxvdGltZXMgQiJdLFswLDIsIkEgXFxvdGltZXMgQiJdLFsyLDIsIkEgXFxvdGltZXMgQSBcXG90aW1lcyBCIFxcb3RpbWVzIEIiXSxbMywwLCJBIFxcdGltZXMgQSJdLFszLDIsIkEiXSxbNSwwLCJBIFxcb3RpbWVzIEEiXSxbNSwyLCJCIFxcb3RpbWVzIEIiXSxbNywwLCJCIl0sWzcsMiwiQiBcXHRpbWVzIEIiXSxbMCwxLCIoXFxvdGltZXMpIl0sWzAsMiwiKFxcY2RvdF97QSBcXG90aW1lcyBCfSkiLDFdLFszLDIsIihcXGJhciBcXGNkb3RfQSkgXFxvdGltZXMgKFxcYmFyIFxcY2RvdF9CKSJdLFsxLDMsIlxccm17aWR9IFxcb3RpbWVzIFxcYmV0YSBcXG90aW1lcyBcXHJte2lkfSIsMV0sWzQsNSwiKFxcY2RvdF9BKSIsMl0sWzYsNSwiKFxcY2RvdF9BKSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs0LDYsIihcXG90aW1lcykiXSxbNyw4LCIoXFxiYXIgXFxjZG90X0IpIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzksNywiKFxcb3RpbWVzKSJdLFs5LDgsIihcXGNkb3RfQikiLDJdXQ==" /></p>

where $\beta : a \otimes b \mapsto b \otimes a$ is the braiding morphism for $\Vect_{\mathbb{K}}$.
Thus
$$
\begin{align*}
(a_{1} \otimes b_{1}) \cdot (a_{2} \otimes b_{2}) = (a_{1}\cdot a_{2}) \otimes (b_{1} \cdot b_{2})
\end{align*}
$$

## Special cases

- [[Tensor product of a Lie algebra and a commutative algebra]] is a Lie algebra

#
---
#state/tidy | #lang/en | #SemBr
