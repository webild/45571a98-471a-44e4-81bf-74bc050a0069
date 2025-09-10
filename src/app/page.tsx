"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase 
        logoSrc="/images/logo.svg"
        logoAlt="FunMemecoin Logo"
        leftButtonText="Join the Fun!"
      />

      <div id="hero" data-section="hero">
        <BillboardHero title="Welcome to FunMemecoin!" subtitle="Join the fun in memecoin trading!" />
      </div>

      <div id="about" data-section="about">
        <CtaAbout title="What is FunMemecoin?" descriptions={[
          "FunMemecoin is a community-driven currency that brings joy to the world of crypto.",
          "Empowering users to engage with a vibrant community and take part in exciting projects."
        ]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D title="How to Buy FunMemecoin" steps={[
          { title: "Step 1", description: "Create a wallet and fund it with crypto.", image: "/images/step1.jpg", position: "left", isCenter: false },
          { title: "Step 2", description: "Connect your wallet to the exchange.", image: "/images/step2.jpg", position: "center", isCenter: true },
          { title: "Step 3", description: "Buy FunMemecoin and join the community.", image: "/images/step3.jpg", position: "right", isCenter: false }
        ]} />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics title="Tokenomics Overview" description="Explore the key stats of FunMemecoin." kpiItems={[
          { value: "1 Million", description: "Total Supply", icon: "DollarSign" },
          { value: "500K", description: "Market Cap", icon: "DollarSign" },
          { value: "100K", description: "Holders", icon: "Users" }
        ]} />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient 
          logoSrc="/images/logo.svg"
          logoAlt="FunMemecoin Logo"
          logoText="FunMemecoin"
          items={[
            { label: "Privacy Policy", onClick: () => {}},
            { label: "Terms of Service", onClick: () => {}}, 
          ]} 
        />
      </div>
    </SiteThemeProvider>
  );
}
