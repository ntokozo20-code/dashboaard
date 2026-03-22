import React, { useState } from 'react';

function Sidebar() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'chart', label: 'Chart', icon: '📈' },
    { id: 'transactions', label: 'Transactions', icon: '💳' },
    { id: 'wallet', label: 'Wallet', icon: '👛' },
    { id: 'mail', label: 'Mail', icon: '📧' },
    { id: 'box', label: 'Box', icon: '📦' },
    { id: 'setting', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      {/* Logo / Brand */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="space-y-2 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-700 p-4">
        <button className="w-full px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors flex items-center space-x-3 font-medium">
          <span className="text-xl">🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;