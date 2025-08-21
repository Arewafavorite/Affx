import React, { useState, ReactNode } from 'react';
import AppHeader from '../headers/AppHeader';
import AppSidebar from '../layout/AppSidebar';

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
              <div className="flex h-screen overflow-hidden">
                      <AppSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                                        <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                                                  <main>
                                                              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                                                            {children}
                                                                                        </div>
                                                                                                  </main>
                                                                                                          </div>
                                                                                                                </div>
                                                                                                                    </>
                                                                                                                      );
                                                                                                                      }
                                                                                                                      