export const PRODUCT_DESCRIPTION_PROMPT = `Create a compelling and professional product description for an e-commerce website based on the following details:
- Product Name: %s
- Category: %s
- Brand: %s

Requirements:
- Provide an engaging overview paragraph, a bulleted list of key features, and specifications.
- Format using clean Markdown with headings (##), bold text, and bullet points.
- Do not wrap the response in markdown code blocks (\`\`\`markdown). Return only the description content.`;