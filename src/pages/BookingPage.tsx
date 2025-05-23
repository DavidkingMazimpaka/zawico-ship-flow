import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Textarea } from "@/components/UI/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/UI/dialog";
import { Loader, CheckCircle } from "lucide-react";
import { useToast } from "@/components/UI/use-toast";

const BookingPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingReference, setBookingReference] = useState("");
  
  // Form state
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    
    // Shipment Details
    shipmentType: "",
    shippingMethod: "",
    itemDescription: "",
    weight: "",
    dimensions: "",
    declaredValue: "",
    
    // Addresses
    pickupAddress: "",
    pickupCity: "",
    pickupCountry: "",
    pickupPostcode: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryCountry: "",
    deliveryPostcode: "",
    
    // Additional Services
    insurance: false,
    expressDelivery: false,
    packaging: false,
    specialHandling: false,
    
    // Other
    notes: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    
    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    });
  };

  // Handle checkbox changes
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  // Handle select changes
  const handleSelect = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all reqred personal information fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.shipmentType || !formData.shippingMethod || !formData.itemDescription) {
      toast({
        title: "Missing Information",
        description: "Please fill in all reqred shipment details.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Generate random booking reference
      const reference = `ZW-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      setBookingReference(reference);
      
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 2000);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-50 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Shipment</h1>
            <p className="text-lg text-neutral-700 mb-8">
              Fill out the form below to book your shipment with Za.w.i.co.Ltd.
              Our team will review your request and contact you shortly to confirm details.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Shipment Booking Form</CardTitle>
              </CardHeader>
              
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="company">Company Name (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipment Details */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Shipment Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="shipmentType">Shipment Type *</Label>
                        <Select 
                          value={formData.shipmentType} 
                          onValueChange={(value) => handleSelect("shipmentType", value)}
                        >
                          <SelectTrigger id="shipmentType">
                            <SelectValue placeholder="Select shipment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="document">Document</SelectItem>
                            <SelectItem value="package">Package</SelectItem>
                            <SelectItem value="pallet">Pallet</SelectItem>
                            <SelectItem value="container">Container</SelectItem>
                            <SelectItem value="vehicle">Vehicle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shippingMethod">Shipping Method *</Label>
                        <Select 
                          value={formData.shippingMethod} 
                          onValueChange={(value) => handleSelect("shippingMethod", value)}
                        >
                          <SelectTrigger id="shippingMethod">
                            <SelectValue placeholder="Select shipping method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="air">Air Freight</SelectItem>
                            <SelectItem value="sea">Sea Freight</SelectItem>
                            <SelectItem value="road">Road Transport</SelectItem>
                            <SelectItem value="express">Express Delivery</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="itemDescription">Item Description *</Label>
                        <Textarea
                          id="itemDescription"
                          name="itemDescription"
                          value={formData.itemDescription}
                          onChange={handleChange}
                          rows={2}
                          placeholder="Describe the contents of your shipment"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg) *</Label>
                        <Input
                          id="weight"
                          name="weight"
                          type="text"
                          value={formData.weight}
                          onChange={handleChange}
                          placeholder="e.g., 5.2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensions (cm) *</Label>
                        <Input
                          id="dimensions"
                          name="dimensions"
                          type="text"
                          value={formData.dimensions}
                          onChange={handleChange}
                          placeholder="e.g., 30 x 20 x 15"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="declaredValue">Declared Value (USD)</Label>
                        <Input
                          id="declaredValue"
                          name="declaredValue"
                          type="text"
                          value={formData.declaredValue}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pickup and Delivery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pickup Address */}
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Pickup Address</h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickupAddress">Street Address *</Label>
                          <Input
                            id="pickupAddress"
                            name="pickupAddress"
                            value={formData.pickupAddress}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="pickupCity">City *</Label>
                            <Input
                              id="pickupCity"
                              name="pickupCity"
                              value={formData.pickupCity}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pickupPostcode">Postal Code *</Label>
                            <Input
                              id="pickupPostcode"
                              name="pickupPostcode"
                              value={formData.pickupPostcode}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickupCountry">Country *</Label>
                          <Select 
                            value={formData.pickupCountry} 
                            onValueChange={(value) => handleSelect("pickupCountry", value)}
                          >
                            <SelectTrigger id="pickupCountry">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="australia">Australia</SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                              <SelectItem value="france">France</SelectItem>
                              <SelectItem value="japan">Japan</SelectItem>
                              <SelectItem value="china">China</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Address */}
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="deliveryAddress">Street Address *</Label>
                          <Input
                            id="deliveryAddress"
                            name="deliveryAddress"
                            value={formData.deliveryAddress}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="deliveryCity">City *</Label>
                            <Input
                              id="deliveryCity"
                              name="deliveryCity"
                              value={formData.deliveryCity}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="deliveryPostcode">Postal Code *</Label>
                            <Input
                              id="deliveryPostcode"
                              name="deliveryPostcode"
                              value={formData.deliveryPostcode}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="deliveryCountry">Country *</Label>
                          <Select 
                            value={formData.deliveryCountry} 
                            onValueChange={(value) => handleSelect("deliveryCountry", value)}
                          >
                            <SelectTrigger id="deliveryCountry">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="australia">Australia</SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                              <SelectItem value="france">France</SelectItem>
                              <SelectItem value="japan">Japan</SelectItem>
                              <SelectItem value="china">China</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Additional Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="insurance"
                          name="insurance"
                          checked={formData.insurance}
                          onChange={handleCheckbox}
                          className="w-4 h-4 text-brand-blue"
                        />
                        <Label htmlFor="insurance">Shipping Insurance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="expressDelivery"
                          name="expressDelivery"
                          checked={formData.expressDelivery}
                          onChange={handleCheckbox}
                          className="w-4 h-4 text-brand-blue"
                        />
                        <Label htmlFor="expressDelivery">Express Delivery</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="packaging"
                          name="packaging"
                          checked={formData.packaging}
                          onChange={handleCheckbox}
                          className="w-4 h-4 text-brand-blue"
                        />
                        <Label htmlFor="packaging">Professional Packaging</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="specialHandling"
                          name="specialHandling"
                          checked={formData.specialHandling}
                          onChange={handleCheckbox}
                          className="w-4 h-4 text-brand-blue"
                        />
                        <Label htmlFor="specialHandling">Special Handling</Label>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="notes" className="text-xl font-semibold">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Any special instructions or additional information about your shipment"
                      rows={3}
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-brand-blue hover:bg-brand-700 w-full md:w-auto" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={16} className="mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Submit Booking"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="text-green-600 h-6 w-6" />
              Booking Submitted Successfully
            </DialogTitle>
            <DialogDescription>
              Your shipment booking has been received. Our team will review the details and contact you shortly.
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-neutral-50 p-4 rounded-lg my-4">
            <p className="text-sm text-neutral-600">Booking Reference:</p>
            <p className="text-xl font-semibold text-brand-blue">{bookingReference}</p>
            <p className="mt-2 text-sm text-neutral-500">Please save this reference number for tracking and communication.</p>
          </div>
          
          <DialogFooter className="sm:justify-start">
            <Button 
              className="bg-brand-blue hover:bg-brand-700"
              onClick={() => {
                setShowConfirmation(false);
                // Reset form or navigate
                window.scrollTo(0, 0);
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default BookingPage;
