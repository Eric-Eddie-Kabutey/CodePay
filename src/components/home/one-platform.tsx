"use client"
import React, { useState } from 'react'

interface TabItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

function OnePlatform() {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    const tabs: TabItem[] = [
    {
      id: 'tab1',
      title: 'Money Movement',
      description: 'Local and international transfers, multi-currency wallets, dynamic exchange rates, and payout rail management. Send money across borders in seconds.',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631879dfeee38145d24e421c_00_Homepage%20-%20Tab%201.png',
      imageAlt: 'Money transfer and remittance'
    },
    {
      id: 'tab2',
      title: 'Financial Services',
      description: 'Account creation, card issuance, loan origination, and multi-bank aggregation. Build modern digital banking on top of existing cores.',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631879ef2341737dd49c9676_00__Homepage%20-%20Tab%202.png',
      imageAlt: 'Banking suite features'
    },
    {
      id: 'tab3',
      title: 'AI & Compliance',
      description: 'AI-powered KYC, liveness detection, fraud monitoring, and blockchain verification. Trust and risk management powered by artificial intelligence.',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329740f9e19760414d7401d_01__Homepage%20-%20Tab%203.png',
      imageAlt: 'AI-powered security'
    },
    {
      id: 'tab4',
      title: 'Agent Network',
      description: 'Manage distributed cash networks at scale. Master agent hierarchy, onboarding, commission management, and agent discovery.',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631879dfeee38145d24e421c_00_Homepage%20-%20Tab%201.png',
      imageAlt: 'Agent network management'
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-navy-900">Complete Platform Modules</h1>
        <div className="border border-neutral-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm bg-neutral-50">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2 space-y-6 sm:space-y-8">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col gap-6 pl-6 sm:pl-8 cursor-pointer transition-opacity ${activeTab === tab.id ? 'opacity-100' : 'opacity-50 hover:opacity-70'}`}
                >
                  {activeTab === tab.id && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-teal-500 rounded-full"></div>
                  )}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-3 sm:mb-4">{tab.title}</h2>
                  {activeTab === tab.id && (
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700">{tab.description}</p>
                  )}
                  {activeTab === tab.id && (
                    <div className="lg:w-1/2 pt-6 flex sm:hidden items-center justify-center bg-neutral-100 rounded-xl p-4 sm:p-8 border border-neutral-200">
                      <img
                        src={activeTabData.imageUrl}
                        alt={activeTabData.imageAlt}
                        className="w-full h-auto max-h-[250px] sm:max-h-[400px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 hidden sm:flex items-center justify-center bg-neutral-100 rounded-xl p-4 sm:p-8 border border-neutral-200">
              <img
                src={activeTabData.imageUrl}
                alt={activeTabData.imageAlt}
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default OnePlatform