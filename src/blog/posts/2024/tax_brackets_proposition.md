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

## Results

![Tax brackets](https://github.com/tintamarre/tax_brakets_belgium/blob/main/imposition.png?raw=true)

_As observed, the changes are quite significant. Each income decile will experience a reduction in the tax rate. The most substantial tax decrease will benefit those earning 20k euros annually (+4.7%) and those earning above 65k euros, with a reduction of > +4.7%._

## References

- [Tax brackets proposition source code](https://github.com/tintamarre/tax_brakets_belgium/blob/main/imposition.py)
- [L'ECHO : Ce que prévoit la nouvelle "super note" de Bart De Wever pour votre argent](https://www.lecho.be/monargent/analyse/impots/ce-que-prevoit-la-nouvelle-super-note-de-bart-de-wever-pour-votre-argent/10569902.html)
