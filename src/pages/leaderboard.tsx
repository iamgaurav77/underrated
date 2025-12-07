import Leaderboard from '@/modules/leaderboard';
import { Box, styled } from '@mui/material';

const PageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20), // Account for fixed header
}));

const LeaderboardPage = () => {
  return (
    <PageWrapper>
      <Leaderboard />
    </PageWrapper>
  );
};

export default LeaderboardPage;
