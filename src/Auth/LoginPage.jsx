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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AlertErrPass from "../Pages/components-pages/alert/AlertErrPass";

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openErrPasswordAler, setOpenErrPasswordAler] = useState(false)
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validLogin = async () => {
    const idAsth = localStorage.getItem('idAsth');
    if (!idAsth) {
        return;
    }
    
    try {
        const res = await axios.post("http://localhost:3333/validLogin", { id: idAsth });
        if (res.status === 200) {
            localStorage.setItem("user", res.data[0].email);
            localStorage.setItem("user", res.data[0].username);
            localStorage.setItem("idAsth", res.data[0].id);
            window.location.href = "/dashboard";
        } else {
            console.error("Erro no login:", res.data.message);
        }
    } catch (error) {
        console.error("Erro na solicitação:", error);
    }
}



  useEffect( ()=>{
    validLogin()
  },[])

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
   await axios.post('http://localhost:3333/login', {
      email: email,
      password: password
    })
      .then(async (res) => {
        if (res.data.status === 205) {
          setOpenErrPasswordAler(true)
          setTimeout(() => {
            setOpenErrPasswordAler(false)
          }, 20000);
        } if (res.data.status === 200) {
         localStorage.setItem("user", res.data.mensage.username);
         localStorage.setItem("idAsth", res.data.mensage.id);
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        console.error("Erro ao efetuar login:", error.message);
      });
  };

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl flex gap-2">
            <img src={ImgLogo} alt="Logo" />
            <h1 className="font-semibold">IMMOLOG</h1>
          </CardTitle>
          <CardDescription>Login</CardDescription>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginFormSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleEmailChange}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  onChange={handlePasswordChange}
                  id="password"
                  type="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
          <div className="pt-6">
            {openErrPasswordAler ? <AlertErrPass /> : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
