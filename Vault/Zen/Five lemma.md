---
tags:
  - public
---
[[Homological algebra MOC]]
# Five lemma

If the following diagram commutes in $\Grp$ with both rows [[Exact sequence|exact]]

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTAsWzAsMCwiQV8xIl0sWzIsMCwiQV8yIl0sWzQsMCwiQV8zIl0sWzYsMCwiQV80Il0sWzgsMCwiQV81Il0sWzAsMiwiQl8xIl0sWzIsMiwiQl8yIl0sWzQsMiwiQl8zIl0sWzYsMiwiQl80Il0sWzgsMiwiQl81Il0sWzAsMSwiXFxhbHBoYV8xIl0sWzEsMiwiXFxhbHBoYV8yIl0sWzIsMywiXFxhbHBoYV8zIl0sWzMsNCwiXFxhbHBoYV80Il0sWzUsNiwiXFxiZXRhXzEiLDJdLFs2LDcsIlxcYmV0YV8yIiwyXSxbNyw4LCJcXGJldGFfMyIsMl0sWzgsOSwiXFxiZXRhXzQiLDJdLFswLDUsIlxcZ2FtbWFfMSIsMSx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDYsIlxcZ2FtbWFfMiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1vbm8ifSwiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzIsNywiXFxnYW1tYV8zIiwxXSxbMyw4LCJcXGdhbW1hXzQiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtb25vIn0sImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFs0LDksIlxcZ2FtbWFfNSIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1vbm8ifX19XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7BA_1%7D%20%5C%26%5C%26%20%7BA_2%7D%20%5C%26%5C%26%20%7BA_3%7D%20%5C%26%5C%26%20%7BA_4%7D%20%5C%26%5C%26%20%7BA_5%7D%20%5C%5C%0A%09%5C%5C%0A%09%7BB_1%7D%20%5C%26%5C%26%20%7BB_2%7D%20%5C%26%5C%26%20%7BB_3%7D%20%5C%26%5C%26%20%7BB_4%7D%20%5C%26%5C%26%20%7BB_5%7D%0A%09%5Carrow%5B%22%7B%5Calpha_1%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Calpha_2%7D%22%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%7B%5Calpha_3%7D%22%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22%7B%5Calpha_4%7D%22%2C%20from%3D1-7%2C%20to%3D1-9%5D%0A%09%5Carrow%5B%22%7B%5Cbeta_1%7D%22'%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbeta_2%7D%22'%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cbeta_3%7D%22'%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Cbeta_4%7D%22'%2C%20from%3D3-7%2C%20to%3D3-9%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_1%7D%22%7Bdescription%7D%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_2%7D%22%7Bdescription%7D%2C%20tail%2C%20two%20heads%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_3%7D%22%7Bdescription%7D%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_4%7D%22%7Bdescription%7D%2C%20tail%2C%20two%20heads%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_5%7D%22%7Bdescription%7D%2C%20tail%2C%20from%3D1-9%2C%20to%3D3-9%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTAsWzAsMCwiQV8xIl0sWzIsMCwiQV8yIl0sWzQsMCwiQV8zIl0sWzYsMCwiQV80Il0sWzgsMCwiQV81Il0sWzAsMiwiQl8xIl0sWzIsMiwiQl8yIl0sWzQsMiwiQl8zIl0sWzYsMiwiQl80Il0sWzgsMiwiQl81Il0sWzAsMSwiXFxhbHBoYV8xIl0sWzEsMiwiXFxhbHBoYV8yIl0sWzIsMywiXFxhbHBoYV8zIl0sWzMsNCwiXFxhbHBoYV80Il0sWzUsNiwiXFxiZXRhXzEiLDJdLFs2LDcsIlxcYmV0YV8yIiwyXSxbNyw4LCJcXGJldGFfMyIsMl0sWzgsOSwiXFxiZXRhXzQiLDJdLFswLDUsIlxcZ2FtbWFfMSIsMSx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDYsIlxcZ2FtbWFfMiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1vbm8ifSwiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzIsNywiXFxnYW1tYV8zIiwxXSxbMyw4LCJcXGdhbW1hXzQiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtb25vIn0sImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFs0LDksIlxcZ2FtbWFfNSIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1vbm8ifX19XV0=" /></p>

and $\gamma_{2},\gamma_{4}$ are isomorphisms, $\gamma_{1}$ [[Group epimorphism|epimorphism]], and $\gamma_{5}$ [[Group monomorphism|monomorphism]]
then $\gamma_{3}$ is an isomorphism.[^loose] #m/thm/homology

> [!check]- Proof
> The proof involves proving the two “four lemmas”, by [[Diagram chasing]].
> We will use additive notation for group operations, but the groups in question need not be abelian.
> 
> First we use the fact that $\gamma_{2},\gamma_{4}$ are epic and $\gamma_{5}$ is monic to show that $\gamma_{3}$ is epic.
> 
> 1. Let $b_{3} \in B_{3}$
> 2. By epi $\gamma_{4}(a_{4}) = \beta_3(b_{3})$ for some $a_{4} \in A_{4}$
> 3. By commutativity $\beta_{4}\gamma_{4}(a_{4}) = \gamma_{5}\alpha_{4}(a_{4})$
> 4. By exactness $0 = \beta_{4}\beta_{3}(b_{3}) = \beta_{4}\gamma_{4}(a_{4}) = \gamma_{5}\alpha_{4}(a_{4})$
> 5. By mono $\alpha_{4}(a_{4}) = 0$
> 6. By exactness $a_{4} \in \ker\alpha_{4}= \im \alpha_{3}$
> 7. Thus $a_{4} = \alpha_{3}(a_{3})$ for some $a_{3} \in A_{3}$
> 8. Thus $\beta_{3}\gamma_{3}(a_{3}) = \gamma_{4}\alpha_{3}(a_{3}) = \gamma_{4} (a_{4}) = \beta_{3}(b_{3})$
> 9. Thus $\beta_{3}(b_{3}) - \beta_{3}\gamma_{3}(a_{3}) = 0$
> 10. By homo $\beta_{3}(b_{3} - \gamma_{3}(a_{3})) = 0$
> 11. By exactness $b_{3} - \gamma_{3}(a_{3}) \in \ker \beta_{3} = \im \beta_{2}$
> 12. Thus $b_{3}-\gamma_{3}(a_{3})= \beta_{2}(b_{2})$ for some $b_{2}\in \beta_{2}$
> 13. By epi $b_{2} = \gamma_{2}(a_{2})$ for some $a_{2} \in A_{2}$
> 14. By commutativity $\beta_{2}\gamma_{2}(a_{2})= \gamma_{3}\alpha_{2}(a_{2}) = b_{3} - \gamma_{3}(a_{3})$ 
> 15. By homo $\gamma_{3}(\alpha_{2}(a_{2}) + a_{3}) = \gamma_{3}\alpha_{2}(a_{2})+\gamma_{3}(a_{3}) = b_{3} - \gamma_{3}(a_{3}) + \gamma_{3}(a_{3}) = b_{3}$
> 
> Therefore $\gamma_{3}$ is epic.
> Now we will use the fact that $\gamma_{2},\gamma_{4}$ are monic and $\gamma_{1}$ is epic to show that $\gamma_{3}$ is monic.
> 
> 1. Let $a_{3} \in \ker \gamma_{3}$, so $\gamma_{3}(a_{3})=0$
> 2. By homo $\beta_{3}\gamma_{3}(a_{3})=0$
> 3. By commutativity $\gamma_{4}\alpha_{3}(a_{3})=0$
> 4. By mono $\alpha_{3}(a_{3}) = 0$
> 5. By exactness $a_{3} \in \ker \alpha_{3} = \im \alpha_{2}$
> 6. Thus $a_{3} = \alpha_{2}(a_{2})$ for some $a_{2} \in A_{2}$
> 7. By commutativity $\beta_{2}\gamma_{2}(a_{2}) = \gamma_{3}\alpha_{2}(a_{2}) = \gamma_{3}(a_{3}) = 0$
> 8. By exactness $\gamma_{2}(a_{2}) \in \ker \beta_{2} = \im \beta_{1}$
> 9. Thus $\gamma_{2}(a_{2})= \beta_{1}(b_{1})$ for some $b_{1} \in B_{1}$
> 10. By epi $b_{1} = \gamma_{1}(a_{1})$ for some $a_{1} \in A_{1}$
> 11. By commutativity $\gamma_{2}\alpha_{1}(a_{1})=\beta_{1}\gamma_{1}(a_{1}) = \gamma_{2}(a_{2})$
> 12. By mono $\alpha_{1}(a_{1}) = a_{2}$
> 13. By exactness $\alpha_{2}\alpha_{1}(a_{1})= \alpha_{2}(a_{2}) = a_{3} = 0$
> 
> Therefore $\gamma_{3}$ is monic.
> <span class="QED"/>

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], ¶3.1.10, p.130ff

Every [[Module]] is a group, and every abelian category has a representation as a module category ([[Freyd-Mitchell theorem]]),
so the lemma holds for module and abelian categories,

#
---
#state/tidy | #lang/en | #SemBr
