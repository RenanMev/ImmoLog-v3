import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ImgLogo from "@/assets/Logoverde.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');


  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("userName:", userName);
    
  };

  return (
    <div className="w-full flex items-center justify-center h-screen">
     <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegisterSubmit}>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Username</Label>
              <Input id="first-name" placeholder="Vitin mantuni" required
              onChange={handleUserNameChange}
              value={userName} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password"
              value={password}
              required
              onChange={handlePasswordChange} />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to='/' className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
