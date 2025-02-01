import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaPaperPlane } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

function HealthAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("How can I improve my diet?");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput("");

      const healthKeywords = [
        "health", "wellness", "doctor", "hospital", "medicine", "disease", "nutrition", "exercise", 
        "mental health", "cardiology", "neurology", "dentist", "fitness", "first aid", "surgery", "therapy",
        "blood pressure", "heart rate", "infection", "immunity", "BMI", "sleep", "stress", "anxiety",
        "cancer", "diabetes", "hypertension", "high blood pressure", "low blood pressure", "heart disease", 
        "stroke", "arthritis", "osteoporosis", "asthma", "pneumonia", "bronchitis", "tuberculosis", "migraine", 
        "epilepsy", "depression", "anxiety", "stress", "PTSD", "schizophrenia", "bipolar", "obesity", "cholesterol", 
        "kidney disease", "liver disease", "hepatitis", "cirrhosis", "HIV", "AIDS", "malaria", "dengue", "typhoid", 
        "flu", "cold", "COVID", "allergy", "autoimmune", "skin disease", "eczema", "psoriasis", "acne", "STD", 
        "infection", "virus", "bacteria", "fungi",
        "diet", "nutrition", "vitamins", "minerals", "protein", "carbohydrates", "fats", "fiber", "calories", 
        "hydration", "healthy eating", "balanced diet", "weight loss", "weight gain", "intermittent fasting", 
        "keto", "paleo", "vegan", "vegetarian", "gluten-free", "dairy-free", "sugar-free", "low-carb", "organic", 
        "supplements", "probiotics", "prebiotics", "omega-3", "antioxidants", "superfoods",
        "exercise", "workout", "gym", "strength training", "weightlifting", "cardio", "HIIT", "yoga", "pilates", 
        "meditation", "stretching", "flexibility", "endurance", "metabolism", "fat loss", "muscle gain", "running", 
        "cycling", "swimming", "hiking", "sports", "fitness tracker", "heart rate", "BMI", "body fat percentage", 
        "calories burned", "step count",
        "mental health", "stress", "anxiety", "depression", "mindfulness", "meditation", "relaxation", "self-care", 
        "therapy", "counseling", "emotional health", "burnout", "sleep", "insomnia", "PTSD", "OCD", "ADHD", 
        "self-esteem", "mood swings", "bipolar disorder", "schizophrenia", "loneliness", "grief", "trauma", 
        "panic attacks", "coping mechanisms", "social anxiety",
        "pregnancy", "maternity", "childbirth", "prenatal", "postnatal", "breastfeeding", "baby care", "infant health", 
        "pediatrician", "newborn", "fertility", "IVF", "miscarriage", "postpartum", "baby development", "vitamins during pregnancy", 
        "morning sickness", "labor", "delivery", "c-section", "gestational diabetes", "stretch marks", "baby nutrition",
        "first aid", "CPR", "choking", "heart attack", "stroke", "wound care", "bleeding", "burns", "fractures", 
        "sprains", "allergic reaction", "poisoning", "heat stroke", "dehydration", "snake bite", "drowning", "shock", 
        "seizure", "unconscious",
        "teeth", "dentist", "oral health", "cavity", "gum disease", "braces", "orthodontist", "dental hygiene", 
        "toothpaste", "flossing", "root canal", "wisdom tooth", "bad breath", "mouth ulcers", "toothache", 
        "tooth decay", "dentures",
        "homeopathy", "Ayurveda", "acupuncture", "herbal remedies", "naturopathy", "traditional medicine", 
        "essential oils", "chiropractic", "reflexology", "Reiki", "massage therapy", "energy healing", "detox", "fasting",
        "blood pressure", "cholesterol", "hemoglobin", "anemia", "clotting", "platelets", "white blood cells", 
        "red blood cells", "plasma", "circulation", "heart rate", "arrhythmia", "ECG"
      ];
      const lowerCaseInput = input.toLowerCase();
      const isHealthRelated = healthKeywords.some(keyword => lowerCaseInput.includes(keyword));

      if (!isHealthRelated) {
        setMessages([...newMessages, { text: "I can only answer health-related questions. Please ask about health, fitness, or nutrition.", user: false }]);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.post(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCF-WWD3d2tx_lcKPk0b3Qo2rvir6Qox2M",
          {
            contents: [{ parts: [{ text: input }] }],
          }
        );

        const botResponse = response.data.candidates[0].content.parts[0].text;
        setLoading(false);
        setMessages([...newMessages, { text: botResponse, user: false }]);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
        setMessages([...newMessages, { text: "Error: AI response failed", user: false }]);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-10" autoPlay loop muted>
        <source src="/static/videos/health_background.mp4" type="video/mp4" />
      </video>

      <Card className="relative w-full max-w-lg shadow-lg rounded-2xl bg-white">
        <CardContent className="p-4">
          <h1 className="text-2xl font-bold text-blue-600 text-center mb-3">HealthMate AI 🏥</h1>

          <ScrollArea className="h-72 overflow-y-auto border rounded-lg p-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 ${msg.user ? "text-right" : "text-left"}`}>
                <div className={`inline-block px-4 py-2 rounded-lg ${msg.user ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2 mt-2">
                <Skeleton className="w-24 h-6 rounded-md bg-gray-300" />
                <Skeleton className="w-32 h-6 rounded-md bg-gray-300" />
                <Skeleton className="w-20 h-6 rounded-md bg-gray-300" />
              </div>
            )}
          </ScrollArea>

          <div className="flex items-center gap-2 mt-4">
            <Input
              type="text"
              placeholder="Ask about health, fitness, or nutrition..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700 text-white p-3">
              <FaPaperPlane />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default HealthAI;
