import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import { ChatAnthropicTools } from "@langchain/anthropic/experimental";
import { PromptTemplate } from "@langchain/core/prompts";
import { JsonOutputToolsParser } from "@langchain/core/output_parsers/openai_tools";

const EXTRACTION_TEMPLATE = `Extract and save the relevant entities mentioned in the following passage together with their properties.

Passage:
{input}
`;

const prompt = PromptTemplate.fromTemplate(EXTRACTION_TEMPLATE);

// Use Zod for easier schema declaration
const schema = z.object({
  name: z.string().describe("The name of a person"),
  height: z.number().describe("The person's height"),
  hairColor: z.optional(z.string()).describe("The person's hair color"),
});

const model = new ChatAnthropicTools({
  temperature: 0.1,
  model: "claude-3-sonnet-20240229",
}).bind({
  tools: [
    {
      type: "function",
      function: {
        name: "person",
        description: "Extracts the relevant people from the passage.",
        parameters: zodToJsonSchema(schema),
      },
    },
  ],
  // Can also set to "auto" to let the model choose a tool
  tool_choice: {
    type: "function",
    function: {
      name: "person",
    },
  },
});

// Use a JsonOutputToolsParser to get the parsed JSON response directly.
const chain = await prompt.pipe(model).pipe(new JsonOutputToolsParser());

const response = await chain.invoke({
  input:
    "Alex is 5 feet tall. Claudia is 1 foot taller than Alex and jumps higher than him. Claudia is a brunette and Alex is blonde.",
});

console.log(JSON.stringify(response, null, 2));

/*
  [
    {
      "type": "person",
      "args": {
        "name": "Alex",
        "height": 5,
        "hairColor": "blonde"
      }
    },
    {
      "type": "person",
      "args": {
        "name": "Claudia",
        "height": 6,
        "hairColor": "brunette"
      }
    }
  ]
*/
