import { Metadata } from 'next';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';

export const metadata: Metadata = {
  title: 'AI Trading Dashboard',
  description: 'A dashboard to monitor AI trading signals and performance.',
};

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        {/* We will add our components here in the next phases */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to your AI Trading Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          The foundation is ready. We will now start adding your data and charts.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
