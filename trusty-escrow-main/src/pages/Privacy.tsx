import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground">This is a placeholder for the Privacy Policy.</p>
      <Link to="/" className="text-primary mt-4 inline-block">Back home</Link>
    </div>
  );
};

export default Privacy;
