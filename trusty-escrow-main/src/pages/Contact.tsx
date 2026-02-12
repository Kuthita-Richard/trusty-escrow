import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <p className="text-muted-foreground">This is a placeholder contact page.</p>
      <Link to="/" className="text-primary mt-4 inline-block">Back home</Link>
    </div>
  );
};

export default Contact;
