---
title: "A Virtual Dataset of Human Bodies"
excerpt: "The generation of a Collection of human bodies; AKA when you get stuck for lack of data<br/><img src='/images/mh_males.png'>"
collection: portfolio
---

Some antefacts
============
As everyone working on biometric and computer vision know the availability of data is fundamental for the reasearch. For me this was completely new when in 2010 I started working on biometric.
When in 2011 my PhD plan of study was getting drafted, and since the interest by the biometric community and the funding agencies, the analysis of the human shape analysis was my main research focus.
In 2011/2012 I was able to collect some interesting data with Microsoft kinect, and NIR (Near Infrared) camera together with some anthropometric measurements, but the number was around 130 with a prevalence of undergrad students and some adult.
These kind of collections are kinda expensive and time consuming, two requisite that often are a big deal in small universities with small budget, and students that need to finish for lack of funding.
Then autonomously I came out with a interesting solution able to keep my research going, and avoiding the change in my PhD topic.

Body models and Human shape in computer vision, and gaming
==========================================================
The human body is quite interesting object, it's composed of rigid and not rigid material, it has many degree of freedom, and the appearance can change with age, gender, race, health status, and life style.
An enormous amout of works can be found in the modern and past literature. For instance the Leonardo da vinci [Vitruvian man](https://en.wikipedia.org/wiki/Vitruvian_Man),
just to cite one.
In the last century the human body studies focused more on health assessment, or recognition, applying different statistical, and more physiological based techniques.
However, in a data driven approach, the necessity to collect human data for a statistically significant number of individuals is fundamental for avoiding biased results.
The only dataset with a good number of subjects is the CAESAR dataset. However, is not free, and the individuals in the dataset are 2400.

Although, there is the [NHANES](https://www.cdc.gov/nchs/nhanes/nhanes_questionnaires.htm) dataset from the [CDC](https://www.cdc.gov/) that collect many anthropometric measurements and statistics of the American population for different years.
My initial thought was: if we can build bodies from these measurements we can replicate many analyses on real world with way less money and resources.
My study focused on works like [SCAPE: Shape Completion and Animation of People](http://ai.stanford.edu/~drago/Projects/scape/scape.html), and [skinned body models](http://smpl.is.tue.mpg.de/). Unfortunately, this was before the [enormous work](https://ps.is.tuebingen.mpg.de/research_fields/shape) done by [Michael Black](https://ps.is.tuebingen.mpg.de/person/black) in human shape, and human pose. 
However, Black' goals were slightly different than mine, and the only relevant work to my research was the base for launching a well known startup. 

Another area that was quite surprising to discover it was the character modeling for games and virtual reality.
This area is definitely closer to the gaming and developer communities than a scientific and research based communities.
Although, there are some gray areas with the computer graphics people that definitely approach the problems with more "cum grano solis", and a more scientific approach.
From the gaming community I was attracked by the open source [MakeHuman](http://www.makehuman.org/) project.
Before that I was contemplating to use some commercial software, but the cost, the scarcity of funds (in those years I was close to get unfounded! maybe I'll write a blog....) made me lean toward the open source option where I could get my hands dirt with the source code :). 

MakeHuman
=========
[Makehuman](http://www.makehuman.org/) is an open source library from the prototyping of mesh characters. The contributions of many developers made MakeHuman extremely stable with multiple additions, and plugins.
MakeHUman is unique because is written in python with the use of common python libraries, and just a few dependencies. The structure of the code is completely modular with the possibility to write additional plugins and classes without effort.

Unfortunately MakeHuman has been design for the generation of a single character at the time, relying on other software for the animation.
However, given some utility classes, I develop an efficient script capable to generate many bodies automatically.

