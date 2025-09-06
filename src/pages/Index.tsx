import { useState } from "react";
import Layout from "@/components/Layout";
import HomePage from "@/components/HomePage";
import SearchPage from "@/components/SearchPage";
import MarketplacePage from "@/components/MarketplacePage";
import ProgressPage from "@/components/ProgressPage";
import ChallengesPage from "@/components/ChallengesPage";
import CommunityPage from "@/components/CommunityPage";
import SettingsPage from "@/components/SettingsPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "search":
        return <SearchPage />;
      case "marketplace":
        return <MarketplacePage />;
      case "progress":
        return <ProgressPage />;
      case "challenges":
        return <ChallengesPage />;
      case "community":
        return <CommunityPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default Index;
