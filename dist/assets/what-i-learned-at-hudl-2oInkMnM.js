const e=`---
title: What I Learned at Hudl
date: 2026-03-01
description: Two internships, two different teams, and a few things I wish I'd known going in.
---

I interned at Hudl twice — once in 2023 on a platform team, once in 2024 on a product team. Same company, completely different experience. Here's what I took away.

## The monorepo migration was harder than it looked

In 2023, one of my projects was migrating the payment portal frontend into Hudl's main monorepo. On paper: move files, update imports, done. In practice: a month of resolving dependency conflicts, understanding build tooling I'd never touched, and coordinating with teams who had opinions about how their corner of the repo should be organized.

The lesson wasn't technical. It was that migrations are primarily coordination problems. The code is the easy part.

## Full-stack features ship slower than you expect

In 2024, I built features for the Hudl Ticketing platform — C# backend, TypeScript frontend, GraphQL in between. What surprised me was how much time I spent not writing code: reading tickets, asking clarifying questions, waiting on design reviews, getting PR feedback.

I shipped less than I'd planned. But I learned that "shipped less" and "less valuable" aren't the same thing. One feature that was actually right beat three that needed immediate follow-up.

## GraphQL is genuinely pleasant when it's done well

I exposed ticketing data through GraphQL for the first time. Having the schema as a contract between frontend and backend, with typed queries, made collaboration with the frontend team noticeably smoother. When the schema was right, everything downstream was easier.

When the schema wasn't right, everything downstream was harder. Schema design matters more than you'd think.

## The unglamorous stuff is where you grow

The projects I'm most proud of from both internships aren't the flashiest ones. They're the internal tooling refactor that nobody else wanted to touch and the ticket draft state that reduced a painful onboarding step. Low visibility, high impact.

I'd take that trade every time.
`;export{e as default};
