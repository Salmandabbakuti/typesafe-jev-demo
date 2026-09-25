# typesafe-jev-demo

This project was created using `bun init` in bun v1.4.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

Install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

Then, install dependencies:

```bash
bun install
```

To run:

> Copy `.env.example` to `.env` and add your Typesafe API key.

```bash
bun run src/index.ts
```

### Or with Node.js

```bash
npm install

npx tsx --env-file=.env src/index.ts
```

### Example output:

```js
{
  department: {
    type: "choice",
    choice: "billing",
    confidence: 1,
    probabilities: {
      account: 0,
      technical: 0,
      billing: 1,
    },
  },
  urgency: {
    type: "score",
    score: 2.62,
    confidence: 0.62,
    legend: {
      "0": "Not urgent",
      "1": "Somewhat urgent",
      "2": "Urgent",
      "3": "Extremely urgent",
    },
    probabilities: {
      "0": 0,
      "1": 0,
      "2": 0.38,
      "3": 0.62,
    },
  },
  refundRequested: {
    type: "noul",
    noul: 0.99,
  },
  frustrated: {
    type: "noul",
    noul: 0.98,
  },
}
```
