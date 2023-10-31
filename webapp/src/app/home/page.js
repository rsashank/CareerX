'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../Header';
import DefaultLayout from '../DefaultLayout';

export default function home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [personalityType, setPersonalityType] = useState('');
  const [thinkingStyle, setThinkingStyle] = useState('');
  const [perceptionStyle, setPerceptionStyle] = useState('');
  const [intuitionSensing, setIntuitionSensing] = useState('');
  const [lrScore, setLrScore] = useState('');

  const handleLrScoreChange = (e) => {
    const value = e.target.value;

    if (/^[1-9][0-9]?$|100$/.test(value)) {
      setLrScore(value);
    }
  };

  const onChange = e => {
    setInputValue(e.target.value);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      personalityType,
      thinkingStyle,
      perceptionStyle,
      intuitionSensing,
      lrScore,
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    router.push(`/result`)
  };

  return (



//FORM SECTION
<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <label className="text-base font-bold text-black">Name</label>
          <form action="" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-black"
                  placeholder="Name"
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
              <label className="ttext-base font-bold text-black">Email ID</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-black"
                  placeholder="Email ID"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="text-base font-bold text-black">Personality Type (Introverted/Extroverted)</label>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input
                      type="radio"
                      name="personalityType"
                      value="Introverted"
                      checked={personalityType === 'Introverted'}
                      onChange={() => setPersonalityType('Introverted')}
                    />
                      <span className="text-black font-sans"> Introverted</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="personalityType"
                      value="Extroverted"
                      checked={personalityType === 'Extroverted'}
                      onChange={() => setPersonalityType('Extroverted')}
                    />
                      <span className="text-black font-sans"> Extroverted</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-base font-bold text-black">Thinking Style (Thinker/Feeler)</label>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input
                      type="radio"
                      name="thinkingStyle"
                      value="Thinker"
                      checked={thinkingStyle === 'Thinker'}
                      onChange={() => setThinkingStyle('Thinker')}
                    />
                      <span className="text-black font-sans"> Thinker</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="thinkingStyle"
                      value="Feeler"
                      checked={thinkingStyle === 'Feeler'}
                      onChange={() => setThinkingStyle('Feeler')}
                    />
                      <span className="text-black font-sans"> Feeler </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-base font-bold text-black">Perception Style (Perceiver/Judger)</label>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input
                      type="radio"
                      name="perceptionStyle"
                      value="Perceiver"
                      checked={perceptionStyle === 'Perceiver'}
                      onChange={() => setPerceptionStyle('Perceiver')}
                    />
                      <span className="text-black font-sans"> Perceiver</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="perceptionStyle"
                      value="Judger"
                      checked={perceptionStyle === 'Judger'}
                      onChange={() => setPerceptionStyle('Judger')}
                    />
                      <span className="text-black font-sans"> Judger</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-base font-bold text-black">Thought Process (Intuition/Sensing)</label>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input
                      type="radio"
                      name="intuitionSensing"
                      value="Intuition"
                      checked={intuitionSensing === 'Intuition'}
                      onChange={() => setIntuitionSensing('Intuition')}
                    />
                      <span className="text-black font-sans"> Intuition</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="intuitionSensing"
                      value="Sensing"
                      checked={intuitionSensing === 'Sensing'}
                      onChange={() => setIntuitionSensing('Sensing')}
                    />
                      <span className="text-black font-sans"> Sensing</span>
                  </label>
                </div>
              </div>
              <div>
              <label className="text-base font-bold text-black">LR Score (1-100)</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-black"
                  placeholder="LR Score"
                  type="number"
                  id="lrScore"
                  value={lrScore}
                  onChange={handleLrScoreChange}
                />
              </div>
              <div className="mt-4 flex items-center justify-center">
                <button
                  type="submit"
                  className="inline-block w-100 rounded-lg bg-gradient-to-r from-blue-400   to-blue-900 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Submit
                </button>
              </div>  
            </form>
          </div>

          //END OF FORM
  );
}