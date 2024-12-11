"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Bell, Clock, Users, LineChart, Lock, Cloud, Zap, Settings, Phone, Mail, MessageSquare } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption"
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Smart Notifications",
      description: "Customizable alerts with intelligent filtering"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and alerts"
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Detailed insights and performance metrics"
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud providers"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Custom Configuration",
      description: "Flexible setup options for any infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for Modern Monitoring
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover all the tools and features that make MyWatchdog the perfect choice for your monitoring needs.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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

      {/* Technical Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Infrastructure Monitoring</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Server Performance Tracking
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Security Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  Cloud Resource Management
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Communication</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  SMS Alerts
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Notifications
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Instant Messaging Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}