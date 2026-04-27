---
title: On Finance and Code
date: 2026-04-10
description: Why the intersection of markets and software is the most interesting place to be right now.
---

I've been asked more than once why I care about both finance and software engineering. The honest answer is that I don't think of them as separate things.

## Markets are information systems

At their core, markets are just distributed information processing machines. Prices aggregate the beliefs and expectations of millions of participants into a single number. The problem is the aggregation itself — it's messy, it's noisy, and there's always a gap between what the price says and what's actually true.

That gap is where software becomes interesting. Not in some abstract quant-trading sense, but in the unglamorous, operational sense: how do you build systems that handle the throughput, handle the failures, and surface the right information at the right time?

## The infrastructure problem

Most fintech isn't glamorous. It's reconciliation pipelines, audit logs, compliance checks, and retry queues. The exciting research-level problems — pricing models, risk systems — sit on top of enormous amounts of boring infrastructure that has to be correct.

I find the boring infrastructure more interesting than the models. Models are interesting for an afternoon. Infrastructure is interesting forever because the edge cases never stop.

## What I'm thinking about

Right now I'm particularly interested in how modern software patterns — event sourcing, CQRS, distributed tracing — apply to financial systems that have historically been built on batch processes and EOD reconciliation. There's a lot of technical debt in that space and a lot of room to do it better.

More on that in future posts.
