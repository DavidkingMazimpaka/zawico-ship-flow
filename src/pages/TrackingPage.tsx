
import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "lucide-react";

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState("");

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setError("");
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock data - in a real app this would come from an API
      if (trackingNumber === "ZW123456789") {
        setTrackingResult({
          trackingNumber: trackingNumber,
          status: "In Transit",
          origin: "New York, USA",
          destination: "London, UK",
          estimatedDelivery: "May 25, 2025",
          currentLocation: "Frankfurt, Germany",
          lastUpdate: "May 19, 2025 - 14:30 GMT",
          history: [
            {
              date: "May 19, 2025 - 14:30 GMT",
              location: "Frankfurt, Germany",
              activity: "Departed from transit facility",
              status: "In Transit",
            },
            {
              date: "May 19, 2025 - 08:15 GMT",
              location: "Frankfurt, Germany",
              activity: "Arrived at transit facility",
              status: "In Transit",
            },
            {
              date: "May 18, 2025 - 23:45 GMT",
              location: "New York, USA",
              activity: "Departed from origin",
              status: "In Transit",
            },
            {
              date: "May 18, 2025 - 16:20 GMT",
              location: "New York, USA",
              activity: "Processed at origin facility",
              status: "Processing",
            },
            {
              date: "May 17, 2025 - 10:05 GMT",
              location: "New York, USA",
              activity: "Shipment information received",
              status: "Information Received",
            },
          ],
        });
      } else if (trackingNumber === "ZW987654321") {
        setTrackingResult({
          trackingNumber: trackingNumber,
          status: "Delivered",
          origin: "Tokyo, Japan",
          destination: "Sydney, Australia",
          estimatedDelivery: "May 15, 2025",
          currentLocation: "Sydney, Australia",
          lastUpdate: "May 15, 2025 - 09:45 AEST",
          history: [
            {
              date: "May 15, 2025 - 09:45 AEST",
              location: "Sydney, Australia",
              activity: "Delivered to recipient",
              status: "Delivered",
            },
            {
              date: "May 14, 2025 - 18:30 AEST",
              location: "Sydney, Australia",
              activity: "Out for delivery",
              status: "Out for Delivery",
            },
            {
              date: "May 14, 2025 - 06:15 AEST",
              location: "Sydney, Australia",
              activity: "Arrived at delivery facility",
              status: "In Transit",
            },
            {
              date: "May 12, 2025 - 22:40 JST",
              location: "Tokyo, Japan",
              activity: "Departed from origin",
              status: "In Transit",
            },
            {
              date: "May 12, 2025 - 14:10 JST",
              location: "Tokyo, Japan",
              activity: "Shipment information received",
              status: "Information Received",
            },
          ],
        });
      } else {
        setError("No shipment found with the provided tracking number. Please try again or contact customer support.");
      }
      
      setIsLoading(false);
    }, 1500);
  };

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-green-600 bg-green-100";
      case "In Transit":
        return "text-blue-600 bg-blue-100";
      case "Out for Delivery":
        return "text-purple-600 bg-purple-100";
      case "Processing":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  // Calculate shipment progress percentage for the progress bar
  const calculateProgressPercentage = (status: string) => {
    switch (status) {
      case "Information Received":
        return 10;
      case "Processing":
        return 25;
      case "In Transit":
        return 50;
      case "Out for Delivery":
        return 75;
      case "Delivered":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-50 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Your Shipment</h1>
            <p className="text-lg text-neutral-700 mb-8">
              Enter your tracking number to get real-time updates on your shipment's status and location.
            </p>
            
            <form onSubmit={handleTracking} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., ZW123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1 h-12 text-base"
                />
                <Button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-700 h-12 px-8"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader size={16} className="mr-2 animate-spin" />
                      Tracking...
                    </>
                  ) : (
                    "Track"
                  )}
                </Button>
              </div>
              {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
              <p className="mt-4 text-sm text-neutral-500">
                For demo purposes, try tracking number: <span className="font-medium">ZW123456789</span> or <span className="font-medium">ZW987654321</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult && (
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-md">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">Tracking Details</CardTitle>
                      <CardDescription className="text-base">
                        Tracking Number: <span className="font-medium">{trackingResult.trackingNumber}</span>
                      </CardDescription>
                    </div>
                    <div className={`px-4 py-2 rounded-full font-medium ${getStatusColor(trackingResult.status)}`}>
                      {trackingResult.status}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-blue rounded-full transition-all duration-500 ease-in-out"
                        style={{ width: `${calculateProgressPercentage(trackingResult.status)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-500">
                      <span>Information Received</span>
                      <span>In Transit</span>
                      <span>Delivered</span>
                    </div>
                  </div>

                  {/* Shipment Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-neutral-500">Origin</h3>
                        <p className="font-medium">{trackingResult.origin}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-neutral-500">Current Location</h3>
                        <p className="font-medium">{trackingResult.currentLocation}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-neutral-500">Last Update</h3>
                        <p className="font-medium">{trackingResult.lastUpdate}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-neutral-500">Destination</h3>
                        <p className="font-medium">{trackingResult.destination}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-neutral-500">Estimated Delivery</h3>
                        <p className="font-medium">{trackingResult.estimatedDelivery}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-neutral-500">Service Type</h3>
                        <p className="font-medium">International Express</p>
                      </div>
                    </div>
                  </div>

                  {/* Tracking History */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Tracking History</h3>
                    <div className="space-y-4">
                      {trackingResult.history.map((event, index) => (
                        <div key={index} className="relative pl-6 pb-6">
                          {/* Timeline connector */}
                          {index < trackingResult.history.length - 1 && (
                            <div className="absolute top-3 left-[7px] w-[2px] h-full bg-neutral-200"></div>
                          )}
                          
                          {/* Timeline dot */}
                          <div className={`absolute top-2 left-0 w-4 h-4 rounded-full ${
                            index === 0 ? 'bg-brand-blue' : 'bg-neutral-300'
                          }`}></div>
                          
                          <div>
                            <div className="flex flex-wrap justify-between gap-2">
                              <p className="font-medium">{event.date}</p>
                              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(event.status)}`}>
                                {event.status}
                              </span>
                            </div>
                            <p className="text-neutral-800 mt-1">{event.activity}</p>
                            <p className="text-neutral-500 text-sm">{event.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

// Types
interface TrackingEvent {
  date: string;
  location: string;
  activity: string;
  status: string;
}

interface TrackingResult {
  trackingNumber: string;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  currentLocation: string;
  lastUpdate: string;
  history: TrackingEvent[];
}

export default TrackingPage;
