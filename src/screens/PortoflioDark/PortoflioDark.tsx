import {
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SunIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

const contactButtons = [
  {
    icon: MailIcon,
    label: "Send an email",
    gradient:
      "linear-gradient(51deg,rgba(147,88,247,1)_0%,rgba(146,89,247,1)_7%,rgba(142,93,246,1)_13%,rgba(136,98,245,1)_20%,rgba(128,107,244,1)_27%,rgba(117,117,242,1)_33%,rgba(104,130,240,1)_40%,rgba(89,144,238,1)_47%,rgba(74,159,235,1)_53%,rgba(59,173,233,1)_60%,rgba(46,186,231,1)_67%,rgba(35,196,229,1)_73%,rgba(27,205,228,1)_80%,rgba(21,210,227,1)_87%,rgba(17,214,226,1)_93%,rgba(16,215,226,1)_100%)",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    gradient:
      "linear-gradient(135deg,rgba(105,100,222,1)_0%,rgba(252,166,233,1)_100%)",
  },
  {
    icon: ExternalLinkIcon,
    label: "Upwork",
    gradient:
      "linear-gradient(45deg,rgba(244,66,108,1)_0%,rgba(251,242,177,1)_100%)",
  },
  {
    icon: GithubIcon,
    label: "Github",
    gradient:
      "linear-gradient(131deg,rgba(210,64,116,1)_0%,rgba(101,24,180,1)_100%)",
  },
];

const experienceCompanies = [
  { name: "Selfbook", active: false },
  { name: "Wevoz", active: false },
  { name: "FreeBeings", active: true },
  { name: "TDF", active: false },
  { name: "Upwork", active: false },
  { name: "Shoppy", active: false },
];

const featuredProjects = [
  {
    title: "IntenseProxy",
    description:
      "Proxy provider website including authentication, dashboard and dynamic features",
    tech: "React - Bootstrap - Styled Components",
    gradient: "bg-[url(/gradients-sugar-cream-1.svg)]",
    hasGithub: false,
  },
  {
    title: "$AAPE Coin",
    description: "Site for a BSC based coin called $AAPE",
    tech: "Vue - Nuxt - Netlify",
    gradient: "bg-[url(/gradients-sugar-cream-5.svg)]",
    hasGithub: false,
  },
  {
    title: "Blockchain Explorer; Hive Attention Tokens",
    description:
      "Sidechain explorer open source project (block explorer) for transactions.",
    tech: "React - TailwindCSS - Context API",
    gradient: "bg-[url(/gradients-sugar-cream-2.svg)]",
    hasGithub: true,
  },
  {
    title: "GitProfile",
    description:
      "A nicer look to GithubIcon profiles using features such as user search, authentication using Firebase and charts using the GitHub API.",
    tech: "React - Redux - Firebase - GitHub API",
    gradient: "bg-[url(/gradients-sugar-cream-7.svg)]",
    hasGithub: true,
  },
  {
    title: "MovieDB",
    description:
      "TV application, displays different categories of movies/shows (popular, in theaters, trending etc) alongside a search option using TheMovieDB API for the data",
    tech: "React.js - Redux - TheMovieDB API",
    gradient: "bg-[url(/gradients-sugar-cream-8.svg)]",
    hasGithub: true,
  },
  {
    title: "Soundify",
    description:
      "Music search application, displays informations about artists such as albums, biography, songs that are available on youtube and much more using TheAudioDB API",
    tech: "Vue.js - Vuex - TheAudioDB API",
    gradient: "bg-[url(/gradients-sugar-cream.svg)]",
    hasGithub: true,
  },
  {
    title: "Mu6icbot",
    description:
      "Discord music bot using Node.js and Discord's API library to play music through YouTube, added Genius API making the bot capable to pull the lyrics for the current playing song",
    tech: "Discord Library - Node.js - Genius API - Youtube API",
    gradient: "bg-[url(/gradients-sugar-cream-6.svg)]",
    hasGithub: true,
  },
  {
    title: "IntenseProxy",
    description:
      "Proxy provider website including authentication, dashboard and dynamic features",
    tech: "React - Bootstrap - Styled Components",
    gradient: "bg-[url(/gradients-sugar-cream-4.svg)]",
    hasGithub: true,
  },
  {
    title: "IntenseProxy",
    description:
      "Proxy provider website including authentication, dashboard and dynamic features",
    tech: "React - Bootstrap - Styled Components",
    gradient: "bg-[url(/gradients-sugar-cream-3.svg)]",
    hasGithub: true,
  },
];

const moreProjects = [
  {
    title: "Vue Weather APP",
    description:
      "My first Vue app using OpenWeather API and fetch API with no custom libraries for requests or styling.",
    tech: "Vue.js",
    hasGithub: false,
  },
  {
    title: "Vuewinder",
    description:
      "Used all what I was able to find publicly that is similar to Twitter's UI and also added the tweet function",
    tech: "Vue.js - TailwindCSS",
    hasGithub: true,
  },
];

export const PortoflioDark = (): JSX.Element => {
  return (
    <div className="bg-black w-full min-w-[1440px] min-h-screen relative">
      <header className="w-full h-[123px] bg-[url(/rectangle-9.svg)] bg-[100%_100%] flex items-center justify-center">
        <nav className="w-[74.86%] flex items-center justify-between">
          <div className="[font-family:'Inter',Helvetica] font-light text-white text-2xl tracking-[0] leading-[normal]">
            DR.
          </div>
          <div className="flex items-center gap-[30px]">
            <button className="[font-family:'Inter',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
              Projects
            </button>
            <button className="[font-family:'Inter',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
              Resume
            </button>
            <button className="[font-family:'Inter',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
              Contact
            </button>
            <SunIcon className="w-6 h-6 text-white" />
          </div>
        </nav>
      </header>

      <section className="w-full bg-[#111111] pb-[123px]">
        <div className="max-w-[1080px] mx-auto px-[180px]">
          <div className="pt-64">
            <div className="[font-family:'Inter',Helvetica] font-light text-white text-base tracking-[0] leading-[normal] whitespace-nowrap mb-[38px]">
              Hey, I&apos;m
            </div>
            <h1 className="bg-[linear-gradient(84deg,rgba(152,69,232,1)_0%,rgba(51,210,255,1)_55%,rgba(221,87,137,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'GT_Walsheim_Pro-Medium',Helvetica] font-medium text-transparent text-8xl tracking-[0] leading-[normal] whitespace-nowrap mb-[136px]">
              Darlene Robertson
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-light text-[#f0f0f0] text-lg text-justify tracking-[0] leading-6 mb-[148px]">
              I&#39;m a software engineer based in Toronto, Canada and also a
              communication and journalism student. I enjoy creating things that
              live on the internet, whether that be websites, applications, or
              anything in between. I have been freelancing for a year now while
              studying at the university and I&#39;ve manage to gain a decent
              amount of experience and valuable knowledge from all different
              kinds of fields throughout my projects/work.
            </p>
            <div className="flex items-start gap-2.5 relative">
              {contactButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto w-[202px] relative rounded border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none bg-transparent"
                  style={
                    {
                      "--gradient": button.gradient,
                    } as React.CSSProperties
                  }
                >
                  <style jsx>{`
                    button:before {
                      background: ${button.gradient};
                    }
                  `}</style>
                  <button.icon className="w-5 h-5 mr-2" />
                  <span className="[font-family:'Inter',Helvetica] font-light text-white text-base tracking-[0] leading-6">
                    {button.label}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1080px] mx-auto px-[180px] py-[124px]">
        <h2 className="[font-family:'Inter',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal] mb-[55px]">
          EXPERIENCE
        </h2>
        <div className="flex gap-[281px]">
          <div className="relative">
            <Separator
              orientation="vertical"
              className="absolute left-0 top-0 w-0.5 h-[330px] bg-white"
            />
            <div className="flex flex-col gap-[55px] pl-9">
              {experienceCompanies.map((company, index) => (
                <div
                  key={index}
                  className={`[font-family:'Inter',Helvetica] font-light text-lg tracking-[0] leading-[normal] ${
                    company.active
                      ? "text-white bg-[#1f1e1e] w-[193px] h-[55px] flex items-center -ml-9 pl-9"
                      : "text-white"
                  }`}
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-[26px]">
              <h3 className="[font-family:'Inter',Helvetica] font-light text-white text-2xl tracking-[0] leading-[normal]">
                Frontend Engineer (Contractor)
              </h3>
              <span className="[font-family:'Inter',Helvetica] font-light text-[#c4c4c4] text-base tracking-[0] leading-6 whitespace-nowrap">
                Mar 2021 - Aug 2021
              </span>
            </div>
            <div className="[font-family:'Inter',Helvetica] font-light text-[#6cace4] text-sm tracking-[0] leading-6 whitespace-nowrap mb-[26px]">
              FreeBeings
            </div>
            <p className="[font-family:'Inter',Helvetica] font-light text-[#c4c4c4] text-base tracking-[0] leading-6 mb-[26px]">
              - Working on web applications and occasionally leading the
              development team.
            </p>
            <p className="[font-family:'Inter',Helvetica] font-light text-[#c4c4c4] text-base tracking-[0] leading-6">
              - Using React and integrating external APIs with the HIVE
              blockchain.
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-[1080px] mx-auto bg-white h-px" />

      <section className="max-w-[1080px] mx-auto px-[180px] py-[89px]">
        <h2 className="[font-family:'Inter',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal] mb-[55px]">
          FEATURED PROJECTS
        </h2>
        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[108px]">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-transparent border-none">
              <CardContent className="p-0">
                <div
                  className={`w-full h-[237px] rounded ${project.gradient} bg-cover bg-[50%_50%] mb-[30px]`}
                />
                <h3 className="[font-family:'Inter',Helvetica] font-light text-white text-2xl tracking-[0] leading-[normal] mb-[30px]">
                  {project.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-[#c4c4c4] text-sm tracking-[0] leading-6 mb-[30px]">
                  {project.description}
                </p>
                <p className="[font-family:'Inter',Helvetica] font-light text-[#6cace4] text-sm tracking-[0] leading-6 mb-[30px]">
                  {project.tech}
                </p>
                <div className="flex items-center gap-10">
                  <Button
                    variant="outline"
                    className="h-auto w-[158px] relative rounded border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded before:[background:linear-gradient(51deg,rgba(147,88,247,1)_0%,rgba(146,89,247,1)_7%,rgba(142,93,246,1)_13%,rgba(136,98,245,1)_20%,rgba(128,107,244,1)_27%,rgba(117,117,242,1)_33%,rgba(104,130,240,1)_40%,rgba(89,144,238,1)_47%,rgba(74,159,235,1)_53%,rgba(59,173,233,1)_60%,rgba(46,186,231,1)_67%,rgba(35,196,229,1)_73%,rgba(27,205,228,1)_80%,rgba(21,210,227,1)_87%,rgba(17,214,226,1)_93%,rgba(16,215,226,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none bg-transparent"
                  >
                    <img
                      className="w-[11.18%] h-[32.10%] mr-2"
                      alt="Vector"
                      src="/vector.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-light text-white text-base tracking-[0] leading-6">
                      Live demo
                    </span>
                  </Button>
                  {project.hasGithub && (
                    <img
                      className="w-9 h-9"
                      alt="GithubIcon fill"
                      src="/frame-38.svg"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-[1080px] mx-auto bg-white h-px" />

      <section className="max-w-[1080px] mx-auto px-[180px] py-[89px]">
        <h2 className="[font-family:'Inter',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal] mb-[55px]">
          MORE PROJECTS
        </h2>
        <div className="flex gap-[24.4px]">
          {moreProjects.map((project, index) => (
            <Card key={index} className="bg-transparent border-none flex-1">
              <CardContent className="p-0">
                <h3 className="[font-family:'Inter',Helvetica] font-light text-white text-2xl tracking-[0] leading-[normal] mb-[30px]">
                  {project.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-[#c4c4c4] text-sm tracking-[0] leading-6 mb-[30px]">
                  {project.description}
                </p>
                <p className="[font-family:'Inter',Helvetica] font-light text-[#6cace4] text-sm tracking-[0] leading-6 mb-[30px]">
                  {project.tech}
                </p>
                <div className="flex items-center gap-10">
                  <Button
                    variant="outline"
                    className="h-auto w-[158px] relative rounded border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded before:[background:linear-gradient(51deg,rgba(147,88,247,1)_0%,rgba(146,89,247,1)_7%,rgba(142,93,246,1)_13%,rgba(136,98,245,1)_20%,rgba(128,107,244,1)_27%,rgba(117,117,242,1)_33%,rgba(104,130,240,1)_40%,rgba(89,144,238,1)_47%,rgba(74,159,235,1)_53%,rgba(59,173,233,1)_60%,rgba(46,186,231,1)_67%,rgba(35,196,229,1)_73%,rgba(27,205,228,1)_80%,rgba(21,210,227,1)_87%,rgba(17,214,226,1)_93%,rgba(16,215,226,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none bg-transparent"
                  >
                    <img
                      className="w-[11.18%] h-[32.10%] mr-2"
                      alt="Vector"
                      src="/vector.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-light text-white text-base tracking-[0] leading-6">
                      Live demo
                    </span>
                  </Button>
                  {project.hasGithub && (
                    <img
                      className="w-[30px] h-[29.26px]"
                      alt="Vector"
                      src="/vector-5.svg"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
