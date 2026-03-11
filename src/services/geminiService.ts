import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateBlogContent(topic: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Write a professional blog post about "${topic}" for a creative agency called RPNMORE. 
    The post should be engaging, informative, and highlight how RPNMORE can help.
    Include a catchy title, a short excerpt, and the main content in Markdown format.
    Return the result in JSON format with fields: title, excerpt, content, tags (array of 3 strings).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          excerpt: { type: Type.STRING },
          content: { type: Type.STRING },
          tags: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "excerpt", "content", "tags"]
      }
    }
  });

  return JSON.parse(response.text);
}

export async function generateBlogImage(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: {
      parts: [
        {
          text: `A high-end, professional, cinematic digital art piece for a blog post about: ${prompt}. 
          Style: Minimalist, modern, creative agency aesthetic, high contrast, emerald and black color palette.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return "https://picsum.photos/seed/rpnmore/1280/720";
}
