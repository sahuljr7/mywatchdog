"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, Target, Users } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300"
    },
    {
      name: "Michael Chen",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "MyWatchdog was established with a vision to revolutionize system monitoring."
    },
    {
      year: "2019",
      title: "First Major Release",
      description: "Launched our core monitoring platform with essential features."
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations to serve customers worldwide."
    },
    {
      year: "2023",
      title: "Enterprise Solutions",
      description: "Introduced enterprise-grade features and dedicated support."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Building the future of system monitoring and management
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide reliable and intelligent monitoring solutions that help businesses maintain optimal system performance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, reliability, and customer success drive everything we do.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To become the world's most trusted platform for system monitoring and management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-8">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-grow border-l-2 border-primary pl-8 pb-8">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}