"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Bell, Clock, LineChart, Cloud, Settings } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption for all your monitoring needs"
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Smart Notifications",
      description: "Intelligent alert system with customizable thresholds and notification channels"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring with real-time alerts and updates"
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Comprehensive performance metrics and trend analysis tools"
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud providers and services"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Custom Configuration",
      description: "Flexible setup options to match your specific monitoring requirements"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the tools that make MyWatchdog the perfect choice for your monitoring needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}