'use client';

import { Check } from 'lucide-react';

const pricingPlans = [
  {
    category: 'ONLINE PASS',
    plans: [
      { type: 'Students', price: '₹499', currency: 'INR' },
      { type: 'Professionals', price: '₹1099', currency: 'INR' },
    ],
  },
  {
    category: 'OFFLINE PASS',
    plans: [
      { type: 'Students', price: '₹799', currency: 'INR' },
      { type: 'Professionals', price: '₹1299', currency: 'INR' },
    ],
  },
];

const features = [
  'Access to all sessions',
  'Networking opportunities',
  'Conference materials',
  'Certificate of participation',
];

export function PricingSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1628] via-[#0F1E35] to-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Pricing & Registration</h2>
          <p className="text-gray-400 text-lg">Choose the pass that works best for you</p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {pricingPlans.map((plan, planIndex) => (
            <div key={planIndex} className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-6">
                {plan.category}
              </h3>

              {plan.plans.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm mb-1">{plan.category}</p>
                      <h4 className="text-xl sm:text-2xl font-bold text-white">
                        {item.type}
                      </h4>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl sm:text-4xl font-bold text-blue-400">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-4 pt-4 border-t border-blue-400/20 space-y-2">
                    {features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Group offer */}
        <div className="bg-gradient-to-r from-blue-600/30 to-blue-700/30 border-2 border-blue-400/50 rounded-xl p-8 sm:p-10 text-center space-y-4 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-300">Special Group Offer</h3>
          <p className="text-white text-lg">
            <span className="font-bold text-2xl">Offline Group of 5+ Students</span>
          </p>
          <p className="text-3xl font-bold text-blue-300">₹699 per person</p>
          <p className="text-gray-300">Save ₹100 per student with group registration</p>
        </div>
      </div>
    </section>
  );
}
