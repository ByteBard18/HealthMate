import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { BookmarkIcon } from 'lucide-react';

const HealthyLivingTips = () => {
  const categories = [
    { value: "all", label: "All Tips" },
    { value: "nutrition", label: "Nutrition" },
    { value: "exercise", label: "Exercise" },
    { value: "mental-health", label: "Mental Health" },
    { value: "sleep", label: "Sleep" },
    { value: "stress", label: "Stress Management" },
  ];

  const tips = [
    {
      icon: "🍽️",
      title: "Healthy Eating",
      subtitle: "Balanced Diet Essentials",
      description: "Include a variety of colorful fruits and vegetables in your daily meals. Aim for at least 5 servings per day for optimal nutrition.",
      category: "nutrition"
    },
    {
      icon: "🏃",
      title: "Active Lifestyle",
      subtitle: "Daily Movement Goals",
      description: "Aim for at least 30 minutes of moderate physical activity every day. Walking, swimming, or cycling are excellent options.",
      category: "exercise"
    },
    {
      icon: "🧠",
      title: "Mental Wellness",
      subtitle: "Mindfulness Practice",
      description: "Take 10 minutes each day for meditation or deep breathing exercises. This helps reduce stress and improve mental clarity.",
      category: "mental-health"
    },
    {
      icon: "🌙",
      title: "Better Sleep",
      subtitle: "Sleep Hygiene",
      description: "Maintain a consistent sleep schedule. Aim for 7-9 hours of quality sleep each night for optimal health and recovery.",
      category: "sleep"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Healthy Living Tips</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap justify-start gap-2 mb-6">
          {categories.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="px-4 py-2 rounded-full data-[state=active]:bg-teal-500 data-[state=active]:text-white"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <Card key={index} className="relative">
            <CardHeader className="bg-teal-500 text-white rounded-t-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{tip.icon}</span>
                <CardTitle>{tip.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-2">{tip.subtitle}</h3>
              <p className="text-gray-600">{tip.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-teal-500 text-sm">{tip.category}</span>
                <BookmarkIcon className="h-5 w-5 text-gray-400 hover:text-teal-500 cursor-pointer" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HealthyLivingTips;