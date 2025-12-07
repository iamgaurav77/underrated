import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import Badges from './components/badges';
import HallOfFame from './components/hall-of-fame';
import RatingGrid from './components/rating-grid';
import TopPerformer from './components/top-performer';
import { LEADERBOARD } from './constants';
import {
  StyledContent,
  StyledDashboardContainer,
  StyledTab,
  StyledTabs,
  StyledTabsContainer,
  StyledTitle,
} from './styled';

ModuleRegistry.registerModules([AllCommunityModule]);

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <StyledDashboardContainer>
      <StyledContent>
        <StyledTitle text={LEADERBOARD.TITLE} />
        <StyledTabsContainer>
          <StyledTabs value={activeTab} onChange={handleTabChange}>
            <StyledTab label={LEADERBOARD.TABS.TOP_PERFORMER} />
            <StyledTab label={LEADERBOARD.TABS.OVERALL_RATING} />
            <StyledTab label={LEADERBOARD.TABS.BADGES} />
            <StyledTab label={LEADERBOARD.TABS.HALL_OF_FAME} />
          </StyledTabs>
        </StyledTabsContainer>
        {activeTab === 0 && <TopPerformer />}
        {activeTab === 1 && <RatingGrid />}
        {activeTab === 2 && <Badges />}
        {activeTab === 3 && <HallOfFame />}
      </StyledContent>
    </StyledDashboardContainer>
  );
};

export default Leaderboard;
