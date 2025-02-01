import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 mt-20">
      {/* Profile Header */}
      <Card>
        <CardHeader className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Doshi Jay</CardTitle>
            <p className="text-sm text-gray-500">Patient ID: 1001</p>
          </div>
          <Button variant="outline" className="ml-auto">Edit Profile</Button>
        </CardHeader>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {[
            ["Date of Birth", "15 March 1985"],
            ["Gender", "Male"],
            ["Blood Type", "O+"],
            ["Phone", "(555) 123-4567"],
            ["Email", "john.peterson@email.com"],
            ["Address", "123 Healthcare Street, Medical City, MC 12345"],
          ].map(([label, value], index) => (
            <div key={index} className="space-y-1">
              <p className="text-sm font-medium text-gray-500">{label}</p>
              <p className="text-sm">{value}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Medical History */}
      <Card>
        <CardHeader>
          <CardTitle>Medical History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            ["12 Jan 2024", "Annual Physical Examination - Normal results"],
            ["23 Nov 2023", "Flu Vaccination"],
            ["15 Aug 2023", "Minor sprain in right ankle - Physical therapy completed"],
          ].map(([date, event], index) => (
            <div key={index} className="border p-3 rounded-md">
              <p className="text-sm font-medium text-gray-500">{date}</p>
              <p className="text-sm">{event}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Demographics */}
      <Card>
        <CardHeader>
          <CardTitle>Demographics</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {[
            ["Ethnicity", "Caucasian"],
            ["Marital Status", "Married"],
            ["Primary Language", "English"],
            ["Occupation", "Software Engineer"],
          ].map(([label, value], index) => (
            <div key={index} className="space-y-1">
              <p className="text-sm font-medium text-gray-500">{label}</p>
              <p className="text-sm">{value}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
