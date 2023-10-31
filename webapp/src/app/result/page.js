'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DefaultLayout from '../DefaultLayout';

export default function Result() {
  const router = useRouter();

  const formData = JSON.parse(localStorage.getItem('formData'));
  const [predictions, setPredictions] = useState(null);

  const handleBack = () => {
    router.push('/');
  };

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/predict';
    const requestBody = {
      LRscore: formData.lrScore,
      personality_Introverted: true,
      thinking_Thinker: true,
      perception_Perceiver: true, 
      thought_Sensing: true, 
    };

    if (formData.personalityType === "Extroverted") {
      requestBody.personality_Introverted = false;
    }
    if (formData.thinkingStyle === "Feeler") {
      requestBody.thinking_Thinker = false;
    }
    if (formData.perceptionStyle === "Judger") {
      requestBody.perception_Perceiver = false;
    }
    if (formData.intuitionSensing === "Intuition") {
      requestBody.thought_Sensing = false;
    }
    
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictions(data.predictions);
        console.log("Predictions:", data.predictions); 
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, []);

  const careerCategories = {
    0: "Architecture",
    1: "Arts",
    2: "Business",
    3: "Communications",
    4: "Education",
    5: "Engineering",
    6: "Government",
    7: "Healthcare",
    8: "Law",
    9: "Sales",
  };

  return (
    <DefaultLayout>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-blue-700">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <div className="mt-4 pr-3">
              <Image src="/careerxdark.png" alt="CareerX Logo" width={600} height={180} />
            </div>
            <p class="mb-8 leading-relaxed text-gray-200 sm:text-3xl">
              Thanks for putting your trust with CareerX. Here is your guidance report.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 text-gray-800 text-lg">
          <h2 className="text-3xl font-semibold mb-4">Form Input Results</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-xl font-bold">Name:</p>
              <p>{formData.name}</p>
            </div>
            <div>
              <p className="text-xl font-bold">Personality Type:</p>
              <p>{formData.personalityType}</p>
            </div>
            <div>
              <p className="text-xl font-bold">Thinking Style:</p>
              <p>{formData.thinkingStyle}</p>
            </div>
            <div>
              <p className="text-xl font-bold">Perception Style:</p>
              <p>{formData.perceptionStyle}</p>
            </div>
            <div>
              <p className="text-xl font-bold">Thought Process:</p>
              <p>{formData.intuitionSensing}</p>
            </div>
            <div>
              <p className="text-xl font-bold">LR Score:</p>
              <p>{formData.lrScore}</p>
            </div>
            <div>
          </div></div>
          <br></br>
          <div>
          <p className="text-xl text-center font-bold">the crystal ball has spoken! 🔮</p>
          {predictions ? (
            <ul className="text-xl text-center">
              {predictions.map((prediction, index) => (
                <li key={index}>{careerCategories[prediction]}</li>
              ))}
            </ul>
          ) : (
            <p className="text-xxl text-center">Loading predictions...</p>
          )}
        </div>
        <br></br>
    <div className="flex items-center justify-center gap-2"> {/* Center the buttons and add a small gap */}
    <button onClick={handleBack} className="bg-gradient-to-r from-blue-400   to-blue-900 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded">
          Back
      </button>
      <button className="bg-gradient-to-r from-blue-400   to-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Career Path
      </button>
    </div>
        </div>
        </div>
      </div>
    </section>
    </DefaultLayout>
  );
}
