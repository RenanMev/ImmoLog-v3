import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "@/Pages/components-pages/loading";
import AlertSucess from "../Pages/components-pages/alert/Alert";
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
import AlertErr from "../Pages/components-pages/alert/AlertErr";

export function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isErroAlertOpen, setIsErroAlertOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post("http://localhost:3333/registerUser", {
      email: email,
      senha: password,
      username: username
    })
    .then((res) => {
      localStorage.setItem("user", username);
      console.log(res)
      if (res.data.status === 205) {
        setIsErroAlertOpen(true);
        setTimeout(() => {
          setIsErroAlertOpen(false);
        }, 20000);
      } else {
        setIsSuccessAlertOpen(true);
        setTimeout(() => {
          setIsSuccessAlertOpen(false);
        }, 20000);
      }
    })
    .catch(error => {
      console.error("Erro ao registrar usuário:", error.message);
      setIsErroAlertOpen(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
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
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    required
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
                <Button type="submit" className="w-full">
                  {isLoading? <div className=""> <Loading/>
                    </div> : "Create an account" } 
                </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
        {isErroAlertOpen && <div>
          <AlertErr/>
          </div>}
      {isSuccessAlertOpen && <div>
        <AlertSucess />
        </div>}
      </Card>
    </div>
  );
}
