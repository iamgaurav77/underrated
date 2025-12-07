import Footer from '@/modules/layout/components/footer';
import GradientBackground from '@/modules/layout/components/gradient-background';
import Header from '@/modules/layout/components/header';
import { styled } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { AppProps } from 'next/app';
// pages/_app.tsx
import { useRouter } from 'next/router';
import '../styles/globals.scss';

const theme = createTheme({
  palette: {
    mode: 'light', // You can change this to 'dark' if needed
  },
});

const MainContent = styled('div')(() => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const PageContent = styled('div')<{ isHomePage: boolean }>(({ isHomePage }) => ({
  flex: 1,
  margin: 0,
  padding: 0,
  ...(isHomePage && {
    marginTop: 0,
    paddingTop: 0,
  }),
}));

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  /*useEffect(() => {
    if (isHomePage) {
      window.scrollTo(0, 0);
    }
  }, [isHomePage]);*/

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GradientBackground>
        <Header />
        <MainContent>
          <PageContent isHomePage={isHomePage}>
            <Component {...pageProps} />
          </PageContent>
          <Footer />
        </MainContent>
      </GradientBackground>
    </ThemeProvider>
  );
}
