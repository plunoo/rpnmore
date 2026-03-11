import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

// Model config stored in localStorage, settable from AdminDashboard
export const TEXT_MODELS = [
  { id: "gemini-2.5-flash-preview-05-20", label: "Gemini 2.5 Flash (Latest)" },
  { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash" },
  { id: "gemini-2.5-pro-preview-06-05", label: "Gemini 2.5 Pro (Best Quality)" },
];

export const IMAGE_MODELS = [
  { id: "gemini-2.0-flash-preview-image-generation", label: "Gemini 2.0 Flash Image" },
  { id: "imagen-3.0-generate-002", label: "Imagen 3" },
];

export const DEFAULT_TEXT_MODEL = TEXT_MODELS[0].id;
export const DEFAULT_IMAGE_MODEL = IMAGE_MODELS[0].id;

export function getTextModel(): string {
  return localStorage.getItem("rpnmore_text_model") || DEFAULT_TEXT_MODEL;
}

export function getImageModel(): string {
  return localStorage.getItem("rpnmore_image_model") || DEFAULT_IMAGE_MODEL;
}

export function setTextModel(model: string) {
  localStorage.setItem("rpnmore_text_model", model);
}

export function setImageModel(model: string) {
  localStorage.setItem("rpnmore_image_model", model);
}

export async function generateBlogContent(topic: string) {
  const model = getTextModel();
  const response = await ai.models.generateContent({
    model,
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
  const model = getImageModel();
  const response = await ai.models.generateContent({
    model,
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
