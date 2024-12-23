---
date: 2024-10-27
title: "Tax brackets proposition"
author: Martin Erpicum
category: Data exploration
next: false
tags:
  - data exploration
---

**Executive summary**: The Belgian tax system is notably intricate, characterized by numerous tax brackets that determine the tax liability based on an individual's income. We take a look at the proposed changes to the tax brackets proposed by Bart De Wever in the latest version of the Super Nota (202410).

---

# Tax brackets proposition

## Introduction

The Belgian tax system is notably intricate, characterized by numerous tax brackets that determine the tax liability based on an individual's income.

In the latest version of the [Super Nota of Bart De Wever](https://www.lecho.be/monargent/analyse/impots/ce-que-prevoit-la-nouvelle-super-note-de-bart-de-wever-pour-votre-argent/10569902.html), a proposal has been introduced to revise these tax brackets.

This analysis aims to provide a clearer understanding of the proposed changes to the tax brackets.

## Quick explanation of taxation in Belgium

In Belgium, personal income tax (IPP - Impot sur les Personnes Physiques) is calculated progressively on an individual’s net taxable income.

- Starting from the gross salary, social security contributions are deducted, resulting in a net income.
- Then, a tax-free allowance, adjusted based on family situation (e.g., children), is subtracted.
- The remaining taxable income is taxed in progressive brackets (currenlty ranging from 25% to 50%).
- After calculating gross taxes, specific tax credits and reductions may apply. Monthly, a withholding tax, or "précompte professionnel," is taken directly from the salary as an advance on the IPP.
- At year-end, this is reconciled against the total tax owed, leading to a refund or additional payment if necessary.

## Results

![Tax brackets](https://github.com/tintamarre/tax_brakets_belgium/blob/main/imposition.png?raw=true)

_As observed, the changes are quite significant. Each income decile will experience a reduction in the tax rate. The most substantial tax decrease will benefit those earning 20k euros annually (+4.7%) and those earning above 65k euros, with a reduction of > +4.7%._

## References

- [Tax brackets proposition source code](https://github.com/tintamarre/tax_brakets_belgium/blob/main/imposition.py)
- [l'Echo : Ce que prévoit la nouvelle "super note" de Bart De Wever pour votre argent](https://www.lecho.be/monargent/analyse/impots/ce-que-prevoit-la-nouvelle-super-note-de-bart-de-wever-pour-votre-argent/10569902.html)
