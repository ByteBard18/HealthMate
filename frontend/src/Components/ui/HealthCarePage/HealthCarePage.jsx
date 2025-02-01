import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      icon: "🍽",
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Healthy Living Tips
        <span className="block mt-5 w-80 h-1 bg-teal-500 mx-auto rounded-full"></span>
      </h1>
      
      {/* Simplified Navigation */}
      <div className="flex flex-wrap justify-center gap-6 mb-8 border-b pb-4">
        {categories.map((category) => (
          <span
            key={category.value}
            className="text-gray-600 hover:text-teal-600 cursor-pointer transition-colors text-lg"
          >
            {category.label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-teal-500/90 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tip.icon}</span>
                <CardTitle className="text-xl">{tip.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-700">{tip.subtitle}</h3>
              <p className="text-gray-600 leading-relaxed">{tip.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-teal-600 text-sm font-medium capitalize">
                  {tip.category.replace('-', ' ')}
                </span>
                <BookmarkIcon className="h-5 w-5 text-gray-400 hover:text-teal-600 cursor-pointer transition-colors" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HealthyLivingTips;



// import React, { useState, useEffect } from 'react';
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { BookmarkIcon } from 'lucide-react';

// const HealthyLivingTips = () => {
//   const categories = [
//     { value: "all", label: "All Tips" },
//     { value: "nutrition", label: "Nutrition" },
//     { value: "exercise", label: "Exercise" },
//     { value: "mental-health", label: "Mental Health" },
//     { value: "sleep", label: "Sleep" },
//     { value: "stress", label: "Stress Management" },
//   ];

//   const [tips, setTips] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTips = async () => {
//       try {
//         const endpoint = selectedCategory === 'all' 
//           ? '/api/tips' 
//           : /api/tips?category=${selectedCategory};
        
//         const response = await fetch(endpoint);
//         if (!response.ok) throw new Error('Failed to fetch tips');
        
//         const data = await response.json();
//         setTips(data);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTips();
//   }, [selectedCategory]);

//   if (loading) return <div className="text-center py-8">Loading health tips...</div>;
//   if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-4 space-y-6">
//       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
//         Healthy Living Tips
//         <span className="block mt-5 w-80 h-1 bg-teal-500 mx-auto rounded-full"></span>
//       </h1>

//       {/* Category Navigation */}
//       <div className="flex flex-wrap justify-center gap-6 mb-8 border-b pb-4">
//         {categories.map((category) => (
//           <span
//             key={category.value}
//             onClick={() => setSelectedCategory(category.value)}
//             className={`cursor-pointer transition-colors text-lg ${
//               category.value === selectedCategory
//                 ? 'text-teal-600 font-semibold'
//                 : 'text-gray-600 hover:text-teal-600'
//             }`}
//           >
//             {category.label}
//           </span>
//         ))}
//       </div>

//       {/* Tips Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tips.map((tip, index) => (
//           <Card key={index} className="hover:shadow-lg transition-shadow">
//             <CardHeader className="bg-teal-500/90 text-white rounded-t-lg">
//               <div className="flex items-center gap-3">
//                 <span className="text-2xl">{tip.icon}</span>
//                 <CardTitle className="text-xl">{tip.title}</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent className="pt-6">
//               <h3 className="font-semibold text-lg mb-2 text-gray-700">{tip.subtitle}</h3>
//               <p className="text-gray-600 leading-relaxed">{tip.description}</p>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="text-teal-600 text-sm font-medium capitalize">
//                   {tip.category.replace('-', ' ')}
//                 </span>
//                 <BookmarkIcon className="h-5 w-5 text-gray-400 hover:text-teal-600 cursor-pointer transition-colors" />
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HealthyLivingTips;