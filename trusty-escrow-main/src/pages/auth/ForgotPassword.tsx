import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
      <p className="text-muted-foreground">This is a placeholder forgot-password page. Implement reset flow here.</p>
      <Link to="/login" className="text-primary mt-4 inline-block">Back to login</Link>
    </div>
  );
};

export default ForgotPassword;
