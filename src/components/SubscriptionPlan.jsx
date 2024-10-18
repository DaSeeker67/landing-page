import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SubscriptionPlan = ({
  type,
  name,
  price,
  originalPrice,
  discount,
  description,
  credits,
  features,
  buttonText,
  additionalFeatures,
  highlighted,
  exploreProdCapabilities,
}) => {
  return (
    <div
      className={`border rounded-lg p-6 flex flex-col h-full ${
        highlighted
          ? 'bg-gradient-to-b from-blue-900 to-black text-white'
          : 'bg-white text-gray-900'
      }`}
    >
      {/* Top section (70% height) */}
      <div className="flex flex-col flex-grow" style={{ flexBasis: '70%' }}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{type}</h3>
          {highlighted && (
            <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
              Popular
            </span>
          )}
        </div>

        <div className="mb-6">
          {price !== null ? (
            <div className="flex items-baseline">
              {type !== 'Enterprise' ? (
                <>
                  <span className="text-4xl font-bold">${price}</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </>
              ) : (
                <span className="text-3xl font-bold">Contact Us</span>
              )}
            </div>
          ) : (
            <span className="text-3xl font-bold">Try now</span>
          )}
          {originalPrice && type !== 'Enterprise' && (
            <div className="mt-1">
              <span className="ml-2 px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                {discount}% off
              </span>
              <span className="text-gray-500 line-through">${originalPrice}</span>
            </div>
          )}
          {type === 'Enterprise' && (
            <div className="mt-1">
              <span className="text-gray-500">for individual pricing</span>
            </div>
          )}
        </div>

        {credits && (
          <div className="mb-4 text-lg text-blue-500 font-semibold">{credits} Credits</div>
        )}

        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle2
                className={`w-5 h-5 mr-2 ${
                  highlighted ? 'fill-white text-black' : 'fill-black text-white'
                } flex-shrink-0`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="mt-auto">
        <hr className="mb-6 border-t border-blue-200" />
      </div>

      {/* Bottom section (30% height) */}
      <div className="flex flex-col justify-between" style={{ flexBasis: '30%' }}>
        <div>
          {additionalFeatures && (
            <ul className="mb-6 space-y-2">
              {additionalFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          {exploreProdCapabilities && (
            <p className="mb-4 text-sm text-gray-600">
              + Explore product capabilities
            </p>
          )}
        </div>
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 mt-auto">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;