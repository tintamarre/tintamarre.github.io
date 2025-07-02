---
date: 2025-07-01
title: "De scripts éparpillés à une plateforme unifiée"
sidebar: auto
author: Martin Erpicum
category: Article
tags:
  - data
  - orchestrator
---

_Executive summary_: This is a case study about the use of Dagster in the Federation Wallonie-Bruxelles, Belgium, to modernize their data platform and improve data orchestration and observability.

It is a translation of the original article available on [Dagster's website](https://dagster.io/blog/federation-wallonie-bruxelles-case-study) written by [Alex Noonan](https://www.linkedin.com/in/alexander-noonan).

---

# De scripts éparpillés à une plateforme unifiée

## Comment Dagster alimente les décisions de données pour 4,5 millions de citoyens belges

La Fédération Wallonie-Bruxelles de Belgique sert 4,5 millions de citoyens dans les domaines de l’éducation, de la culture et des services de jeunesse, mais ses systèmes de données hérités fragmentés créaient des cauchemars opérationnels : des processus manuels qui prenaient des mois, une visibilité de pipeline nulle et des dépendances d'outils propriétaires qui limitaient la flexibilité.

L'ingénieur en données **Martin Erpicum** a dirigé la transformation vers une plateforme moderne et unifiée alimentée par Dagster, offrant des résultats transformationnels : une livraison de pipeline deux fois plus rapide, un passage de la maintenance réactive au développement proactif de produits de données, une visibilité complète des problèmes de qualité des données auparavant indétectables et des analyses en libre-service qui ont permis aux utilisateurs finaux de provisionner leurs propres tableaux de bord.

Cette étude de cas révèle comment une grande organisation gouvernementale a modernisé avec succès sa pile technologique tout en continuant à servir des millions de citoyens, prouvant que l’orchestration moderne des données peut fonctionner à grande échelle, même dans des environnements hautement réglementés.

**Table des matières**
[[toc]]

## Contexte

L’une des trois communautés linguistiques de la Belgique, la **Fédération Wallonie-Bruxelles** supervise l’éducation, le sport, la culture, les services de jeunesse, etc., pour 4,5 millions de citoyens — et gère des équipes composées de plus de 7000 personnes, réparties dans 5 administrations générales différentes et des centaines d'équipes/départements au sein du ministère. Avec une telle ampleur, l'organisation génère d'énormes quantités de données provenant des citoyens qu'elle sert et des organisations qu'elle subventionne. Mais les systèmes de données fragmentés et fermés de la FWB étaient lents, inaccessibles et trop souvent désespérément manuels.

**Martin Erpicum** est ingénieur en données à la Fédération Wallonie-Bruxelles, où il a contribué à transformer le système hérité lourd de la FWB en une plateforme de données moderne et modulaire. Comme l'explique Martin à ses dirigeants, la flexibilité de Dagster permet à son équipe de répondre aux importants besoins organisationnels de la FWB sans être contraint par la plateforme. **« Pas de verrouillage fournisseur signifie que 90 % de notre code peut être réutilisé n'importe où »**, dit-il. « Et, après seulement dix mois d'utilisation, j'ai déjà vu plusieurs instances où les fonctionnalités de data observability de Dagster nous ont aidés à détecter et résoudre des problèmes qui seraient autrement passés inaperçus. »

## Résultats clés

- **Vitesse de pipeline doublée :** Le temps de livrer des résultats à partir de données brutes aux outils BI réduit de plus de 50%
- **Réactif -> proactif :** Les équipes de données proposent désormais de manière proactive de nouveaux produits de données aux utilisateurs, au lieu de simplement répondre à des demandes
- **Visibilité débloquée :** Les problèmes de qualité des données qui étaient auparavant indétectables sont désormais rapidement découverts et résolus grâce au plan de contrôle unifié de Dagster
- **Accessibilité nulle -> libre-service :** Les utilisateurs finaux provisionnent maintenant leurs propres tableaux de bord de données depuis un data mart toujours à jour

## Se libérer des contraintes des outils propriétaires

À son arrivée à la Fédération Wallonie-Bruxelles, Martin a trouvé un ministère coincé dans un cycle de dette technique et d'inefficacité opérationnelle que de nombreuses grandes organisations reconnaîtront.

L'architecture de données existante de la FWB avait évolué de manière organique au fil des années, créant un ensemble disparate de systèmes déconnectés qui entravaient plutôt qu'aidaient leur mission de servir efficacement les citoyens belges. L'équipe de Martin a eu du mal à suivre les changements ou à garantir la qualité des données, et ils souhaitaient pouvoir permettre aux utilisateurs de construire et maintenir leurs propres workflows de données.

Les problèmes critiques qui ont motivé le changement incluent :

- **Dépendance aux outils propriétaires** limitant la flexibilité et la transparence des opérations gouvernementales
- **Absence totale de contrôle de version** pour les pipelines de données, rendant les modifications risquées et difficiles à suivre
- **Observabilité des données limitée ou inexistante** concernant la santé du pipeline, la performance ou les échecs
- **Obstacles significatifs à l'intégration des utilisateurs** empêchant les équipes de devenir autonomes avec les données

La pile technique du ministère reflétait cette complexité, avec des données circulant de SQLServer, MySQL, PostgreSQL, Denodo, DB2, fichiers FTP et divers API vers leur Azure Data Lake et des outils BI comme PowerBI et Metabase.

« La plupart des transformations de données devaient être effectuées manuellement ou via Excel », dit Martin.

« C'était un cauchemar parce que chaque année nous devions tout reprocesser, et j'ai des collègues qui devaient passer deux ou trois mois à apporter des modifications à un ensemble de données. »

## Choisir la flexibilité et les pratiques modernes d’ingénierie

Après avoir lutté avec des outils propriétaires et une architecture de données fragmentée, Martin et son équipe ont systématiquement évalué leurs options d'orchestration pour trouver une plateforme capable d'unifier leur écosystème complexe tout en offrant plus d'accessibilité aux utilisateurs d'analytique.

Le ministère a testé plusieurs solutions, y compris TiMi, KNIME, Apache Airflow et Prefect avant de choisir Dagster. Leur expérience pratique avec Airflow pendant plusieurs semaines, suivie de mois avec Prefect, leur a donné des aperçus clairs de ce qu'ils devaient éviter. « Airflow n'était pas intuitif pour nos utilisateurs—l'interface utilisateur manquait d'amabilité, les concepts étaient difficiles à saisir et ses capacités de journalisation étaient limitées », explique Martin.

Après une évaluation approfondie, Dagster est apparu comme le choix clair pour plusieurs raisons clés :

- **Architecture centrée sur les actifs :** La focalisation de Dagster sur les actifs de données en tant que citoyens de première classe s'alignait parfaitement avec la façon dont leurs équipes conceptualisaient les workflows de données, plutôt que de simplement penser aux tâches et aux processus.
- **Expérience moderne de développeur :** La plateforme offrait des workflows de développement propres, des capacités de test local et des meilleures pratiques en ingénierie logicielle que leurs équipes techniques appréciaient.
- **Observabilité avancée :** Les capacités intégrées de surveillance et de débogage étaient essentielles pour gérer leur environnement de données complexe et hétérogène à travers de multiples sources et destinations.
- **Adaptabilité organisationnelle :** L'architecture flexible de Dagster pouvait accueillir les cinq « Administrations Générales » de la FWB travaillant dans des domaines très différents.
- **Fondation à l'épreuve du futur :** La plateforme pourrait servir à la fois leurs besoins d'orchestration immédiats et fournir une base pour des capacités avancées d'analytique et d'IA/ML.

L'approche différenciée de Dagster a immédiatement résonné avec leurs besoins. L'architecture centrée sur les actifs s'alignait parfaitement avec la façon dont leurs équipes pensaient réellement aux données, tandis que l'expérience de développeur moderne promettait de surmonter la friction et l'inaccessibilité qui avaient historiquement empêché l'adoption généralisée des outils de données dans tout le ministère. « Dagster était particulièrement bien adapté à la structure polycéphale de notre organisation », dit Martin, faisant référence aux nombreuses administrations internes de la FWB, et notant que Dagster était la seule solution qu'ils avaient trouvée offrant une observabilité avancée des données à travers un domaine de données aussi divergent.

> _Nous apprécions énormément que Dagster traite les actifs comme des citoyens de première classe dans son architecture. Cette capacité à suivre et à gérer de manière exhaustive les actifs de données tout au long de leur cycle de vie est cruciale pour nous._

## Construire une plateforme de données orientée développeur avec Dagster

Plutôt que d'essayer une migration en un grand-bang, la Fédération Wallonie-Bruxelles a adopté une approche réfléchie par phases qui priorisait l'expérience développeur et la gestion du changement organisationnel — et beaucoup d'intégrations. « C'est un ministère du domaine public, et la littératie des données dans notre organisation n'est pas encore très bonne », dit Martin. « Nous savions que le succès de l'adoption ne serait que aussi bon que notre soutien pour nos utilisateurs. »

L'approche stratégique de migration de la FWB comprenait :

- **Stratégie de déploiement par phases** pour minimiser les perturbations et assurer des transitions en douceur
- **Soutien pratique aux utilisateurs** avec des sessions d'intégration sur mesure pour chaque équipe
- **Programmes de formation complets** couvrant les fondamentaux comme SQL, Python, Git, et Docker
- **Développement des meilleures pratiques** pour assurer la cohérence et la qualité de l'ensemble du développement de pipeline
- **Création de packages Python personnalisés** pour simplifier les interactions avec leur écosystème unique

La mise en œuvre technique a montré des pratiques d'ingénierie sophistiquées qui maximisaient les capacités de Dagster tout en répondant aux exigences spécifiques du ministère :

- **Ressources personnalisées de Dagster et gestionnaires IO** pour SQLServer, PostgreSQL, DB2, et diverses API
- **Intégration transparente de dbt** en utilisant le support intégré de Dagster pour les workflows de transformation de données
- **Intégration de DuckDB** pour un traitement et une analyse efficaces des données
- **Intégration de projet automatisée** utilisant les sous-modules Git et les workflows automatisés
- **Automatisation de pipeline CI/CD GitLab** avec tests, validation et déploiement sur une infrastructure Docker Swarm – fournie par notre partenaire informatique ([ETNIC](https://etnic.be)) – dans les environnements de branche de fonctionnalité, de mise en scène et de production

L'une de leurs implémentations les plus innovantes démontre la puissance de traiter l'infrastructure comme du code : « Nous avons développé un workflow pour intégrer automatiquement les projets dbt dans nos emplacements de code Dagster.

Ce workflow implique la séparation des référentiels de code pour les projets dbt et les emplacements de code Dagster.

À chaque publication de projet dbt, nous incluons automatiquement le projet dbt comme sous-module Git dans l'emplacement de code Dagster. »

Cette approche permet à leurs utilisateurs de tirer parti des projets dbt existants sans nécessiter une connaissance approfondie de Dagster, abaissant significativement la barrière à l'entrée tout en conservant les avantages de l'orchestration unifiée.

> _Je voulais vraiment que nos analystes de données se sentent confiants et non intimidés — pour eux, même utiliser une CLI pouvait être difficile. Avec Dagster, nous pouvions leur donner leur propre environnement, inclus dans l'orchestration._

## Améliorations mesurables de fiabilité et de productivité

Six mois après la mise en œuvre, la Fédération Wallonie-Bruxelles a atteint des résultats transformationnels qui démontrent l'impact de Dagster tant sur les opérations techniques que sur les résultats commerciaux. La combinaison de la fiabilité améliorée, de la productivité des développeurs renforcée et de la gestion proactive des données a fondamentalement changé la façon dont le ministère aborde les données.

Les améliorations opérationnelles quantifiables de la FWB incluent :

- **Amélioration de la fiabilité des pipelines** grâce à une surveillance et à des alertes complètes via les notifications MSTeams et NTFY
- **Résolution des problèmes plus rapide** grâce aux fonctionnalités d'observabilité de Dagster pour une identification rapide des problèmes
- **Détection améliorée de la qualité des données** aidant les développeurs de logiciels à identifier et résoudre les problèmes de données au niveau des applications
- **Réduction des perturbations opérationnelles** grâce à une exécution de pipeline plus fiable et à un suivi
- **Confiance renforcée dans la prise de décision** permettant la proposition proactive de nouveaux produits de données aux utilisateurs

La transformation s'étend au-delà des simples métriques techniques à des changements culturels et organisationnels qui montrent comment la valeur plus large de l'orchestration moderne des données apporte des bénéfices organisationnels et stratégiques :

- **Passage du réactif au proactif** dans le développement de produits de données et le support aux utilisateurs
- **Augmentation de la littératie des données** dans toute l'organisation grâce à une amélioration de la formation et de la documentation
- **Confiance accrue des parties prenantes** dans la qualité des données et les délais de livraison
- **Collaboration renforcée** entre équipes techniques et non techniques
- **Fondation plus solide** pour les futures initiatives d'IA/ML et d'analytique avancée

L'automatisation du suivi de la qualité données du ministère illustre comment une observabilité adéquate transforme les opérations : « Nous avons mis en place un suivi des exécutions et des contrôles de qualité des données (avec notifications) pour nous assurer que nos pipelines de données fonctionnent aussi efficacement que possible », explique Martin.

C'est ainsi, dit-il, que l'équipe de données de la FWB est passée de la découverte de problèmes seulement _après_ que les tableaux de bord ont cessé de fonctionner à la prévention des problèmes avant qu'ils n'aient un impact sur les utilisateurs finaux — une capacité cruciale lors de la prestation de services gouvernementaux fiables à 4,5 millions de citoyens.

## Élargir les capacités et ajouter de l'IA

La Fédération Wallonie-Bruxelles voit Dagster comme la base pour des prochaines étapes ambitieuses qui permettront de démocratiser davantage l'accès aux données et, éventuellement, de tirer parti des technologies de pointe en IA et en apprentissage automatique pour mieux servir ses citoyens.

Les priorités immédiates du plan d'action de la FWB incluent :

- **Assistance utilisateur alimentée par l'IA** grâce à l'intégration du service MCP reliant la documentation de leur bibliothèque Dagster personnalisée à un LLM pour une aide personnalisée et contextuelle
- **Meilleure intégration des utilisateurs** en explorant le nouveau dg CLI de Dagster pour simplifier davantage l'adoption par les utilisateurs
- **Capacités d'analytique avancée** en s'appuyant sur leur base d'orchestration solide pour prendre en charge des charges de travail IA/ML croissantes

La vision à long terme du ministère positionne Dagster comme le composant central dans un écosystème de données complet qui soutient des services de données unifiés et efficaces répondant aux besoins de tous les parties prenantes tout en promouvant la littératie des données et les meilleures pratiques en ingénierie dans toute l'organisation.

> "Nous envisageons d'intégrer un service MCP qui relie notre documentation de bibliothèque Dagster personnalisée et nos capacités de découverte de données à un LLM, permettant une assistance personnalisée et contextuelle pour nos utilisateurs", explique Martin. "Grâce à Dagster, dbt, DuckDB et notre data lake, nous construisons les bases d'une plateforme de données qui peut croître et s'adapter pour soutenir les besoins de notre organisation pendant très longtemps."
