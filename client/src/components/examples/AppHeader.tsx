import AppHeader from '../AppHeader';

export default function AppHeaderExample() {
  return (
    <div>
      <AppHeader 
        isAuthenticated={true} 
        userRole="intern" 
        userName="John Doe"
        onLogout={() => console.log('Logout clicked')}
      />
    </div>
  );
}
