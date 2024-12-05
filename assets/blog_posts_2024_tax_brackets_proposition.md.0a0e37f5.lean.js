import{_ as t,o as a,c as r,S as o}from"./chunks/framework.4bfe0024.js";const h=JSON.parse('{"title":"Tax brackets proposition","description":"","frontmatter":{"date":"2024-10-27T00:00:00.000Z","title":"Tax brackets proposition","author":"Martin Erpicum","category":"Data exploration","next":false,"tags":["data exploration"],"blog":"post","aside":"left","sidebar":false,"prev":false},"headers":[],"relativePath":"blog/posts/2024/tax_brackets_proposition.md"}'),i={name:"blog/posts/2024/tax_brackets_proposition.md"};function n(s,e,l,c,p,u){return a(),r("div",null,e[0]||(e[0]=[o('<p><strong>Executive summary</strong>: The Belgian tax system is notably intricate, characterized by numerous tax brackets that determine the tax liability based on an individual&#39;s income. We take a look at the proposed changes to the tax brackets proposed by Bart De Wever in the latest version of the Super Nota (202410).</p><hr><h1 id="tax-brackets-proposition" tabindex="-1">Tax brackets proposition <a class="header-anchor" href="#tax-brackets-proposition" aria-label="Permalink to &quot;Tax brackets proposition&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>The Belgian tax system is notably intricate, characterized by numerous tax brackets that determine the tax liability based on an individual&#39;s income.</p><p>In the latest version of the <a href="https://www.lecho.be/monargent/analyse/impots/ce-que-prevoit-la-nouvelle-super-note-de-bart-de-wever-pour-votre-argent/10569902.html" target="_blank" rel="noreferrer">Super Nota of Bart De Wever</a>, a proposal has been introduced to revise these tax brackets.</p><p>This analysis aims to provide a clearer understanding of the proposed changes to the tax brackets.</p><h2 id="quick-explanation-of-taxation-in-belgium" tabindex="-1">Quick explanation of taxation in Belgium <a class="header-anchor" href="#quick-explanation-of-taxation-in-belgium" aria-label="Permalink to &quot;Quick explanation of taxation in Belgium&quot;">​</a></h2><p>In Belgium, personal income tax (IPP - Impot sur les Personnes Physiques) is calculated progressively on an individual’s net taxable income.</p><ul><li>Starting from the gross salary, social security contributions are deducted, resulting in a net income.</li><li>Then, a tax-free allowance, adjusted based on family situation (e.g., children), is subtracted.</li><li>The remaining taxable income is taxed in progressive brackets (currenlty ranging from 25% to 50%).</li><li>After calculating gross taxes, specific tax credits and reductions may apply. Monthly, a withholding tax, or &quot;précompte professionnel,&quot; is taken directly from the salary as an advance on the IPP.</li><li>At year-end, this is reconciled against the total tax owed, leading to a refund or additional payment if necessary.</li></ul><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><p><img src="https://github.com/tintamarre/tax_brakets_belgium/blob/main/imposition.png?raw=true" alt="Tax brackets"></p><p><em>As observed, the changes are quite significant. Each income decile will experience a reduction in the tax rate. The most substantial tax decrease will benefit those earning 20k euros annually (+4.7%) and those earning above 65k euros, with a reduction of &gt; +4.7%.</em></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/tintamarre/tax_brakets_belgium/blob/main/imposition.py" target="_blank" rel="noreferrer">Tax brackets proposition source code</a></li><li><a href="https://www.lecho.be/monargent/analyse/impots/ce-que-prevoit-la-nouvelle-super-note-de-bart-de-wever-pour-votre-argent/10569902.html" target="_blank" rel="noreferrer">l&#39;Echo : Ce que prévoit la nouvelle &quot;super note&quot; de Bart De Wever pour votre argent</a></li></ul>',15)]))}const b=t(i,[["render",n]]);export{h as __pageData,b as default};