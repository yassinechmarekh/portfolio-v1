"use client";

import React, { useMemo, useState } from "react";
import Container from "@/components/container";
import { CertificateType } from "@/types";
import { Parag } from "@/components/text";
import CertificateCard from "@/components/certificate-card";
import { motion, AnimatePresence } from "framer-motion";

interface CertificatesListProps {
  allCertificates: CertificateType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localeContent: any;
}

const CertificatesList = ({
  allCertificates,
  localeContent,
}: CertificatesListProps) => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Frontend", "Backend", "Tools"];

  const filteredCertificates = useMemo(() => {
    if (activeTab === "All") {
      console.log("All Certificates : ", allCertificates);
      return allCertificates;
    }
    console.log({
      tab: activeTab,
      filtredCartificates: allCertificates.filter(
        (certificate) => certificate.type === activeTab
      ),
    });
    return allCertificates.filter(
      (certificate) => certificate.type === activeTab
    );
  }, [allCertificates, activeTab]);

  return (
    <section>
      <Container>
        {/* Tabs */}
        <div
          className="flex justify-center flex-wrap gap-4 mb-16 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 text-xs xs:text-sm md:text-base font-semibold rounded-full hover-effect focus:outline-none cursor-pointer ${
                activeTab === tab
                  ? "text-cyan-600 dark:text-cyan-300 border border-cyan-600 dark:border-cyan-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 dark:from-cyan-500/60 to-purple-500/30 dark:to-purple-500/60 blur-md"></span>
              )}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-cyan-500/10 dark:bg-cyan-500/10"
                    : "bg-gray-100 dark:bg-gray-900/50"
                }`}
              ></span>
              <span className="relative z-10">
                {tab === "All"
                  ? localeContent.all
                  : tab === "Tools"
                  ? localeContent.tools
                  : tab}
              </span>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={`${activeTab}-${certificate.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <CertificateCard certificate={certificate} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-16 animate-fadeInUp">
            <Parag>{localeContent.noResult}</Parag>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CertificatesList;
