import { useAuth } from "@/hooks/useAuth";
import AppHeader from "./AppHeader";

export default function AppHeaderWrapper() {
  const { user, profile, signOut } = useAuth();

  return (
    <AppHeader
      isAuthenticated={!!user}
      userRole={profile?.role}
      userName={profile?.displayName}
      onLogout={signOut}
    />
  );
}
