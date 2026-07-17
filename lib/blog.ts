export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingTime: string
  author: string
  content: string[]
}

export const posts: BlogPost[] = [
  {
    slug: "ai-automation-canadian-smbs-2025",
    title: "How Canadian SMBs Are Using AI Automation to Compete in 2025",
    excerpt:
      "Small and mid-sized businesses across Canada are quietly deploying AI to reclaim thousands of hours a year. Here is what the smartest ones are doing differently.",
    category: "AI Strategy",
    date: "2025-06-18",
    readingTime: "6 min read",
    author: "Northbound Team",
    content: [
      "For years, meaningful automation felt like something reserved for enterprise budgets. That has changed. The tooling that once required a dedicated data team is now accessible to a 15-person operation in Halifax or a family manufacturer outside Calgary.",
      "The pattern we see among the most successful Canadian SMBs is not that they adopted the flashiest technology first. It is that they started with a single, painful, repetitive process and automated it end to end before moving on to the next one.",
      "A common first project is invoice intake. Instead of a bookkeeper manually keying line items from PDFs, an AI pipeline extracts the data, validates it against purchase orders, and pushes clean records into the accounting system. The bookkeeper reviews exceptions instead of doing data entry.",
      "The second wave is usually customer-facing. AI assistants that draft responses, triage support tickets, and surface the right knowledge base article turn a two-person support desk into something that feels like a team of ten.",
      "The lesson for owners evaluating AI right now: resist the urge to buy a platform. Buy an outcome. Pick the process that costs you the most hours or the most goodwill, and automate that first.",
    ],
  },
  {
    slug: "measuring-roi-automation-projects",
    title: "Measuring the Real ROI of an Automation Project",
    excerpt:
      "Time saved is only half the story. A practical framework for calculating what an automation investment actually returns to your business.",
    category: "Operations",
    date: "2025-05-30",
    readingTime: "5 min read",
    author: "Northbound Team",
    content: [
      "Every automation pitch leads with hours saved. It is the easiest number to quote and the least useful on its own. Hours only become value when they are redeployed into revenue-generating or cost-avoiding work.",
      "We recommend a three-part ROI model. First, direct labour recovery: the fully loaded cost of the hours no longer spent on the task. Second, error reduction: the cost of the mistakes the manual process used to produce, from rework to lost customers. Third, capacity unlocked: the new revenue possible because your team can now handle more volume without new hires.",
      "The third bucket is where the largest returns usually live, and it is the one most businesses forget to measure. A sales team that automates proposal generation does not just save time. It sends more proposals, faster, and closes deals it would previously have let slip.",
      "Before starting any project, write down the baseline for all three buckets. Ninety days after go-live, measure again. The gap is your real ROI, and it is almost always larger than the hours-saved figure alone suggests.",
    ],
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs Off-the-Shelf: A Decision Framework",
    excerpt:
      "When should you buy a SaaS subscription, and when does building custom actually pay off? A clear-eyed guide for growing businesses.",
    category: "Software",
    date: "2025-05-12",
    readingTime: "7 min read",
    author: "Northbound Team",
    content: [
      "The default advice is always buy, not build. For most needs, that advice is correct. If a $40 per seat tool solves your problem, building a custom alternative rarely makes financial sense.",
      "The calculation changes when the process you are automating is the thing that makes you different from your competitors. Off-the-shelf software encodes an average way of working. If your edge comes from doing something in a way no vendor supports, forcing your operation into their model erodes the very advantage you are trying to scale.",
      "The second trigger for building is integration debt. When you are paying for six tools and a person to copy data between them, a focused custom layer that ties your systems together often costs less over three years than the subscriptions and manual labour combined.",
      "Our rule of thumb: buy for commodity functions like email, accounting, and payroll. Build for the workflows that are core to how you win. And whenever possible, build thin, connecting best-in-class tools rather than reinventing them.",
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
