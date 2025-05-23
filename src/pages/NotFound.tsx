
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/UI/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-brand-blue mb-6">404</h1>
        <p className="text-2xl font-semibold text-neutral-800 mb-4">Page Not Found</p>
        <p className="text-neutral-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Button asChild className="bg-brand-blue hover:bg-brand-700 w-full">
            <Link to="/">Return to Homepage</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
