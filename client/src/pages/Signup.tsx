import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { signUp, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "intern" as "intern" | "admin",
  });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const isBusy = loading || googleLoading;

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    try {
      await signInWithGoogle(formData.role);
      toast({
        title: "Account created!",
        description: "Welcome to Cognify. Let's start your journey!",
      });
      setLocation("/dashboard");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to sign up with Google";
      toast({
        title: "Google signup failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await signUp(
        formData.email,
        formData.password,
        formData.name,
        formData.role
      );
      toast({
        title: "Account created!",
        description: "Welcome to Cognify. Let's start your journey!",
      });
      setLocation("/dashboard");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to create account";
      toast({
        title: "Signup failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <div className="mx-auto mb-8">
              <Link
                href="/"
                className="flex flex-col items-center  rounded-md py-1"
              >
                <h1
                  className="font-alkatra text-2xl font-bold leading-tight"
                  data-testid="text-logo"
                >
                  Cognify Vision.
                </h1>
                <h2 className="text-sm italic text-muted-foreground mt-0.5">
                  get hands-on, now.
                </h2>
              </Link>
            </div>
            <CardTitle className="text-2xl" data-testid="text-card-title">
              Create Account
            </CardTitle>
            <CardDescription data-testid="text-card-description">
              Start your journey in tech today
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={isBusy}
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={isBusy}
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  disabled={isBusy}
                  data-testid="input-password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                  disabled={isBusy}
                  data-testid="input-confirm-password"
                />
              </div>
              <div className="space-y-2">
                <Label>I want to join as</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      role: value as "intern" | "admin",
                    })
                  }
                  disabled={isBusy}
                  data-testid="radio-group-role"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="intern"
                      id="intern"
                      data-testid="radio-intern"
                    />
                    <Label
                      htmlFor="intern"
                      className="font-normal cursor-pointer"
                    >
                      Intern - I want to learn and grow
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="admin"
                      id="admin"
                      data-testid="radio-admin"
                    />
                    <Label
                      htmlFor="admin"
                      className="font-normal cursor-pointer"
                    >
                      Admin - I want to manage programs
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full"
                disabled={isBusy}
                data-testid="button-signup"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                disabled={isBusy}
                onClick={handleGoogleSignup}
                data-testid="button-signup-google"
              >
                {googleLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connecting to Google...
                  </>
                ) : (
                  <>
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Continue with Google
                  </>
                )}
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/login">
                  <a
                    className="text-primary hover:underline"
                    data-testid="link-login"
                  >
                    Log in
                  </a>
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
