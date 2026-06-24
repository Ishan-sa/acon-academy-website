import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import FreeSessionPopup from "./components/FreeSessionPopup";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Admissions from "./pages/Admissions";
import Campuses from "./pages/Campuses";
import SurreyCampus from "./pages/campuses/SurreyCampus";
import KelownaCampus from "./pages/campuses/KelownaCampus";
import About from "./pages/About";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import StudentLife from "./pages/StudentLife";
import Contact from "./pages/Contact";
import FreeClasses from "./pages/FreeClasses";
import NotFound from "./pages/NotFound";
import Sitemap from "./pages/Sitemap";

// About sub-pages
import OurStory from "./pages/about/OurStory";
import MissionValues from "./pages/about/MissionValues";
import Careers from "./pages/about/Careers";
import Accreditation from "./pages/about/Accreditation";

// Admissions sub-pages
import HowToApply from "./pages/admissions/HowToApply";
import EligibilityRequirements from "./pages/admissions/EligibilityRequirements";
import FeesFinancialAid from "./pages/admissions/FeesFinancialAid";
import ApplicationDeadlines from "./pages/admissions/ApplicationDeadlines";
import CampusTours from "./pages/admissions/CampusTours";

// Student Life sub-pages
import AcademicCounselling from "./pages/student-life/AcademicCounselling";
import ExamTraining from "./pages/student-life/ExamTraining";
import StudySpaces from "./pages/student-life/StudySpaces";
import StudentResources from "./pages/student-life/StudentResources";
import CommunityEvents from "./pages/student-life/CommunityEvents";

// News sub-pages
import Announcements from "./pages/news/Announcements";
import StudentStories from "./pages/news/StudentStories";
import Blog from "./pages/news/Blog";
import PressReleases from "./pages/news/PressReleases";

// Legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/programs/:slug" component={ProgramDetail} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/campuses" component={Campuses} />
      <Route path="/campuses/surrey" component={SurreyCampus} />
      <Route path="/campuses/kelowna" component={KelownaCampus} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsArticle} />
      <Route path="/student-life" component={StudentLife} />
      <Route path="/contact" component={Contact} />
      <Route path="/free-classes" component={FreeClasses} />
      <Route path="/sitemap" component={Sitemap} />

      {/* About sub-pages */}
      <Route path="/about/our-story" component={OurStory} />
      <Route path="/about/mission-values" component={MissionValues} />
      <Route path="/about/careers" component={Careers} />
      <Route path="/about/accreditation" component={Accreditation} />

      {/* Admissions sub-pages */}
      <Route path="/admissions/how-to-apply" component={HowToApply} />
      <Route path="/admissions/eligibility" component={EligibilityRequirements} />
      <Route path="/admissions/fees" component={FeesFinancialAid} />
      <Route path="/admissions/application-deadlines" component={ApplicationDeadlines} />
      <Route path="/admissions/campus-tours" component={CampusTours} />

      {/* Student Life sub-pages */}
      <Route path="/student-life/academic-counselling" component={AcademicCounselling} />
      <Route path="/student-life/exam-training" component={ExamTraining} />
      <Route path="/student-life/study-spaces" component={StudySpaces} />
      <Route path="/student-life/student-resources" component={StudentResources} />
      <Route path="/student-life/community-events" component={CommunityEvents} />

      {/* News sub-pages */}
      <Route path="/news/announcements" component={Announcements} />
      <Route path="/news/student-stories" component={StudentStories} />
      <Route path="/news/blog" component={Blog} />
      <Route path="/news/press-releases" component={PressReleases} />

      {/* Legal pages */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <FreeSessionPopup />
          <Router />
          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
