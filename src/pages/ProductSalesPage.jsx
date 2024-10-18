import React from 'react';
import SubscriptionPlan from '../components/SubscriptionPlan';
import ToggleButtonGroup from '../components/ToggleButtongroup';
const ProductSalesPage = () => {
  const plans = [
    {
      type: 'Trial',
      name: 'Try now',
      price: null,
      description: 'Get personalized template',
      features: [
        '25+ data sources',
        'GPT4, LinkedIn and others',
        'Access to slack community',
        '10+ templates to scale your outbound'
      ],
      buttonText: 'Try Now',
      exploreProdCapabilities: true
    },
    {
      type: 'Growth',
      name: 'Growth',
      price: 229,
      originalPrice: 459,
      discount: 50,
      credits: 8000,
      features: [
        'Webhook, HTTP API',
        'Credit rollover (upto 2x plan credits)',
        'Outbound email integrations like Instantly, Smartlead',
        'Dedicated 3 hours from Bitscale expert'
      ],
      buttonText: 'Continue with Growth',
      additionalFeatures: [
        'Unlimited leads search',
        'Fully enriched 5000 leads',
        'Personalized outreach at scale'
      ]
    },
    {
      type: 'Booster',
      name: 'Booster',
      price: 499,
      originalPrice: 999,
      discount: 50,
      credits: 25000,
      features: [
        'Webhook, HTTP API',
        'Credit rollover (upto 2x plan credits)',
        'Outbound email integrations like Instantly, Smartlead',
        'Dedicated 3 hours from Bitscale expert',
        'Advanced models like Claude Sonnet',
        'Dedicated 8 hours from Bitscale expert',
        '2 way Hubspot integration'
      ],
      buttonText: 'Continue with Booster',
      additionalFeatures: [
        'Unlimited leads search',
        'Fully enriched 15000 leads',
        'Personalized outreach at scale'
      ],
      highlighted: true
    },
    {
      type: 'Enterprise',
      name: 'Enterprise',
      price: 'Contact Us',
      description: 'For individual pricing',
      features: [
        'Data privacy certification',
        'Priority Support',
        'Dedicated Bitscale expert',
        'Private Slack Channel',
        'Collaborative workspace and templates'
      ],
      buttonText: 'Try Now',
      additionalFeatures: [
        'Perfect for High-Volume End-to-End CRM Data Enrichment',
        'Unlimited list of leads with unlimited data points'
      ]
    }
  ];

  return (
    <div className=" container justify-center mx-auto px-4 py-8">
      <div className="flex justify-center mb-4">
        <ToggleButtonGroup />
      </div>
      <div className=' px-4 py-6'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan, index) => (
          <SubscriptionPlan key={index} {...plan} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductSalesPage;