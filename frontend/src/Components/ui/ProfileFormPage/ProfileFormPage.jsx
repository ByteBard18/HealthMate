import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export default function PatientForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Patient Registration</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Full Name */}
          <div>
            <Label>Full Name</Label>
            <Input {...register("fullname", { required: "Full name is required" })} />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <Input type="email" {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Age */}
          <div>
            <Label>Age</Label>
            <Input type="number" {...register("age", { required: "Age is required" })} />
            {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <Label>Date of Birth</Label>
            <Input type="date" {...register("dateOfBirth", { required: "Date of Birth is required" })} />
            {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
          </div>

          {/* Gender */}
          <div>
            <Label>Gender</Label>
            <Select onValueChange={(value) => setValue("gender", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Blood Group */}
          <div>
            <Label>Blood Group</Label>
            <Select onValueChange={(value) => setValue("bloodGroup", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Blood Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Address */}
          <div className="col-span-2">
            <Label>Address</Label>
            <Textarea {...register("address", { required: "Address is required" })} />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          {/* City */}
          <div>
            <Label>City</Label>
            <Input {...register("city", { required: "City is required" })} />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>

          {/* State */}
          <div>
            <Label>State</Label>
            <Input {...register("state", { required: "State is required" })} />
            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
          </div>

          {/* Pincode */}
          <div>
            <Label>Pincode</Label>
            <Input type="text" {...register("pincode", { required: "Pincode is required" })} />
            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
          </div>

          {/* Ethnicity */}
          <div>
            <Label>Ethnicity</Label>
            <Input {...register("ethnicity")} />
          </div>

          {/* Marital Status */}
          <div>
            <Label>Marital Status</Label>
            <Select onValueChange={(value) => setValue("maritalStatus", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Marital Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Occupation */}
          <div>
            <Label>Occupation</Label>
            <Input {...register("occupation")} />
          </div>

          {/* Medical Conditions */}
          <div className="col-span-2">
            <Label>Medical Conditions</Label>
            <Textarea {...register("medicalConditions")} />
          </div>

          {/* Allergies */}
          <div className="col-span-2">
            <Label>Allergies</Label>
            <Textarea {...register("allergies")} />
          </div>

          {/* Surgeries */}
          <div className="col-span-2">
            <Label>Surgeries</Label>
            <Textarea {...register("surgeries")} />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <Button type="submit" className="w-full bg-slate-800">Submit</Button>
          </div>

        </form>
      </div>
    </div>
  );
}
