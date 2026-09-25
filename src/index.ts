import { choice, score, noul, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();

const ticket = `
My card was charged twice for the same order.
I need one of the charges refunded immediately.
This is really frustrating because I need the money back today.
`;

const response = await client.systemOne({
  state: {
    ticket
  },

  questions: {
    department: choice("Which team should handle this ticket?", {
      billing: null,
      technical: null,
      account: null
    }),

    urgency: score("How urgent is this request?", [
      "Not urgent",
      "Somewhat urgent",
      "Urgent",
      "Extremely urgent"
    ]),

    refundRequested: noul("Does the customer explicitly request a refund?"),

    frustrated: noul("Does the customer appear frustrated?")
  }
});

console.log(response.answers);
