"use client";

import React, { useState } from "react";

import {
  CalendarDays,
  ChevronRight,
  Crown,
  Gamepad2,
  Mail,
  MapPin,
  MessageCircle,
  MonitorPlay,
  Radio,
  Swords,
  TableProperties,
  Trophy,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GTAEsports() {
  const [signupType, setSignupType] = useState("individual");

  return (
    <div className="min-h-screen bg-[#f4f4f2] text-[#080808]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f4f2]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center">
            <img
              src="/gtaesports-logo.png"
              alt="GTA Esports Logo"
              className="h-auto w-[180px] md:w-[240px]"
            />
          </a>

          <div className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.22em] text-black/70 md:flex">
            <a href="#info" className="hover:text-[#c90000]">Info</a>
            <a href="#play" className="hover:text-[#c90000]">Play</a>
            <a href="#league" className="hover:text-[#c90000]">League</a>
            <a href="#watch" className="hover:text-[#c90000]">Watch</a>
            <a href="#community" className="hover:text-[#c90000]">Community</a>
          </div>

          <Button asChild className="rounded-none bg-black px-6 font-black uppercase tracking-wide text-white hover:bg-[#c90000]">
            <a href="#register">Sign Up</a>
          </Button>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-0 top-20 h-2 w-48 bg-[#c90000]" />
        <div className="absolute bottom-24 right-0 h-2 w-60 bg-[#c90000]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex border border-black/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#c90000] shadow-sm">
              Greater Toronto Area Esports
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-7xl">
              GTA’s competitive esports league.
            </h1>

            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/65">
              GTA Esports connects local players, teams, schools, and gaming communities through organized leagues, tournaments, broadcasts, and competitive events.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="rounded-none bg-[#c90000] px-8 py-6 text-base font-black uppercase tracking-wide text-white hover:bg-black">
                <a href="#register">
                  Register to Play <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="outline" className="rounded-none border-2 border-black bg-transparent px-8 py-6 text-base font-black uppercase tracking-wide text-black hover:bg-black hover:text-white">
                <a href="#league">View League</a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <Stat title="5v5" subtitle="Format" />
              <Stat title="GTA" subtitle="Region" />
              <Stat title="S1" subtitle="Season One" />
            </div>
          </div>

          <Card className="rounded-none border-2 border-black bg-white shadow-[14px_14px_0px_#080808]">
            <CardContent className="p-8">
              <img
                src="/gtaesports-logo.png"
                alt="GTA Esports Logo"
                className="mx-auto mb-10 h-auto w-full max-w-[400px]"
              />

              <div className="grid gap-4">
                <InfoRow icon={<Trophy />} title="Season One" text="League of Legends registration is officially open." />
                <InfoRow icon={<Users />} title="Solo or Team" text="Players can register individually or as a full roster." />
                <InfoRow icon={<MapPin />} title="Toronto Based" text="Built for players across the Greater Toronto Area." />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="info" className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel text="Info" />

        <div className="mt-4 grid gap-10 md:grid-cols-[0.9fr_1.3fr]">
          <h2 className="text-4xl font-black uppercase leading-tight tracking-[-0.04em] md:text-5xl">
            Built for the GTA esports scene.
          </h2>

          <div className="space-y-5 text-lg font-semibold leading-8 text-black/65">
            <p>
              GTA Esports gives local players a place to compete, find teammates, join tournaments, and be part of a real esports community.
            </p>
            <p>
              The platform is designed to support multiple games over time, starting with League of Legends.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <Feature icon={<Users />} title="Players" text="Solo players can join the free-agent pool." />
          <Feature icon={<Swords />} title="Teams" text="Register your full roster and compete." />
          <Feature icon={<CalendarDays />} title="Events" text="Leagues, tournaments, and match nights." />
          <Feature icon={<MessageCircle />} title="Community" text="Discord, announcements, and support." />
        </div>
      </section>

      <section id="play" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionLabel text="Play" dark />

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">
              Current game.
            </h2>

            <p className="max-w-xl font-semibold leading-7 text-white/65">
              More games can be added later. Season One starts with League of Legends.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-none border-2 border-white bg-[#f4f4f2] text-black md:col-span-2">
              <CardContent className="p-8">
                <Gamepad2 className="mb-5 h-10 w-10 text-[#c90000]" />

                <h3 className="text-4xl font-black uppercase tracking-[-0.04em]">
                  League of Legends
                </h3>

                <p className="mt-4 max-w-2xl font-semibold leading-7 text-black/65">
                  Register as an individual player or submit your full roster for GTA Esports Season One.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <Mini title="Format" text="5v5 Summoner’s Rift" />
                  <Mini title="Signup" text="Solo or full team" />
                  <Mini title="Region" text="Greater Toronto Area" />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none border-2 border-white/20 bg-white/10 text-white">
              <CardContent className="p-8">
                <MonitorPlay className="mb-5 h-10 w-10 text-[#c90000]" />

                <h3 className="text-3xl font-black uppercase">
                  More Games Soon
                </h3>

                <p className="mt-4 font-semibold leading-7 text-white/65">
                  Valorant, Rocket League, Fortnite, and other games can be added later.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="league" className="bg-[#ecece8] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel text="League Format" />

          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">
            Built like a real competitive season.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Feature icon={<Users />} title="Team Registration" text="Teams submit rosters before the season starts." />
            <Feature icon={<CalendarDays />} title="Weekly Matches" text="Organized match weeks and scheduling." />
            <Feature icon={<TableProperties />} title="Standings" text="Wins, losses, rankings, and records tracked weekly." />
            <Feature icon={<Crown />} title="Playoffs" text="Top teams qualify for a playoff bracket." />
          </div>
        </div>
      </section>

      <section id="register" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel text="Sign Up" />

            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">
              Register for GTA Esports.
            </h2>

            <p className="mt-3 font-semibold text-black/60">
              Current game: League of Legends.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-md">
            <label className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-black/70">
              Select Game
            </label>
            <select className="w-full rounded-none border-2 border-black bg-white px-4 py-3 font-black uppercase outline-none">
              <option>League of Legends</option>
            </select>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <Button
              onClick={() => setSignupType("individual")}
              className={`rounded-none px-6 font-black uppercase ${
                signupType === "individual"
                  ? "bg-[#c90000] text-white hover:bg-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              Individual
            </Button>

            <Button
              onClick={() => setSignupType("team")}
              className={`rounded-none px-6 font-black uppercase ${
                signupType === "team"
                  ? "bg-[#c90000] text-white hover:bg-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              Team
            </Button>
          </div>

          <Card className="mt-8 rounded-none border-2 border-black bg-white shadow-[10px_10px_0px_#c90000]">
            <CardContent className="p-6 md:p-8">
              {signupType === "individual" ? <IndividualForm /> : <TeamForm />}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="watch" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel text="Watch" dark />

            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">
              Featured matches live on Twitch.
            </h2>

            <p className="mt-4 font-semibold leading-8 text-white/65">
              Watch highlighted GTA Esports matches, playoffs, community showmatches, and season finals.
            </p>

            <Button asChild className="mt-8 rounded-none bg-[#c90000] px-8 py-6 font-black uppercase text-white hover:bg-white hover:text-black">
              <a href="#watch">Watch on Twitch</a>
            </Button>
          </div>

          <div className="border-2 border-white/20 bg-white/10 p-8">
            <Radio className="mb-4 h-12 w-12 text-[#c90000]" />

            <h3 className="text-2xl font-black uppercase">
              GTA Esports Broadcast
            </h3>

            <p className="mt-3 font-semibold text-white/60">
              Live matches, VODs, highlights, and community streams will appear here.
            </p>
          </div>
        </div>
      </section>

      <section id="community" className="bg-[#c90000] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/70">
              Discord
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">
              Join the GTA Esports community.
            </h2>

            <p className="mt-4 max-w-2xl font-semibold leading-8 text-white/80">
              Find teammates, receive match updates, ask questions, and stay connected with the GTA esports community.
            </p>
          </div>

          <Button asChild className="rounded-none bg-white px-8 py-6 font-black uppercase text-black hover:bg-black hover:text-white">
            <a href="#community">Join Discord</a>
          </Button>
        </div>
      </section>

      <footer className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 border-t-2 border-black pt-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#home">
              <img
                src="/gtaesports-logo.png"
                alt="GTA Esports Logo"
                className="h-auto w-[190px]"
              />
            </a>

            <p className="mt-4 max-w-md font-semibold text-black/60">
              A local esports platform for amateur players and teams across the Greater Toronto Area.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-wide">Links</h4>
            <div className="mt-3 grid gap-2 text-sm font-bold text-black/60">
              <a href="#play">Play</a>
              <a href="#league">League</a>
              <a href="#community">Community</a>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-wide">Contact</h4>
            <div className="mt-3 flex items-center gap-2 text-sm font-bold text-black/60">
              <Mail className="h-4 w-4 text-[#c90000]" />
              <span>contact@gtaesports.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <p className={`text-xs font-black uppercase tracking-[0.3em] ${dark ? "text-[#c90000]" : "text-[#c90000]"}`}>
      {text}
    </p>
  );
}

function Stat({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-2 border-black bg-white p-4 text-center">
      <p className="text-2xl font-black uppercase">{title}</p>
      <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-black/50">
        {subtitle}
      </p>
    </div>
  );
}

function InfoRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4 border-2 border-black/10 bg-[#f4f4f2] p-4">
      <div className="text-[#c90000] [&_svg]:h-6 [&_svg]:w-6">{icon}</div>
      <div>
        <h3 className="font-black uppercase">{title}</h3>
        <p className="text-sm font-semibold text-black/60">{text}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <Card className="rounded-none border-2 border-black bg-white transition hover:-translate-y-1 hover:shadow-[8px_8px_0px_#c90000]">
      <CardContent className="p-6">
        <div className="mb-4 text-[#c90000] [&_svg]:h-8 [&_svg]:w-8">
          {icon}
        </div>
        <h3 className="text-xl font-black uppercase">{title}</h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-black/60">
          {text}
        </p>
      </CardContent>
    </Card>
  );
}

function Mini({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-2 border-black bg-white p-4">
      <h4 className="font-black uppercase">{title}</h4>
      <p className="mt-1 text-sm font-semibold text-black/60">{text}</p>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-black/70">
        {label}
      </span>

      <input
        placeholder={placeholder}
        className="w-full rounded-none border-2 border-black bg-[#f4f4f2] px-4 py-3 font-semibold outline-none placeholder:text-black/35 focus:border-[#c90000]"
      />
    </label>
  );
}

function IndividualForm() {
  return (
    <form className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" placeholder="Your name" />
        <Field label="Email" placeholder="you@email.com" />
        <Field label="Discord Username" placeholder="Discord username" />
        <Field label="League IGN" placeholder="Summoner name" />
        <Field label="Current Rank" placeholder="Emerald, Diamond, etc." />
        <Field label="City / Area" placeholder="Toronto, Mississauga, etc." />
      </div>

      <Button type="button" className="mt-4 rounded-none bg-[#c90000] px-8 py-6 font-black uppercase text-white hover:bg-black">
        Submit Individual Registration
      </Button>
    </form>
  );
}

function TeamForm() {
  return (
    <form className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Team Name" placeholder="Your team name" />
        <Field label="Captain Name" placeholder="Captain full name" />
        <Field label="Captain Email" placeholder="captain@email.com" />
        <Field label="Captain Discord" placeholder="Discord username" />
        <Field label="Average Team Rank" placeholder="Emerald, Diamond, etc." />
        <Field label="City / Area" placeholder="Toronto, Vaughan, etc." />
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-black/70">
          Team Roster
        </span>

        <textarea
          rows={5}
          placeholder={"Player 1 - Summoner name - Role - Rank\nPlayer 2 - Summoner name - Role - Rank\nPlayer 3 - Summoner name - Role - Rank"}
          className="w-full rounded-none border-2 border-black bg-[#f4f4f2] px-4 py-3 font-semibold outline-none placeholder:text-black/35 focus:border-[#c90000]"
        />
      </label>

      <Button type="button" className="mt-4 rounded-none bg-[#c90000] px-8 py-6 font-black uppercase text-white hover:bg-black">
        Submit Team Registration
      </Button>
    </form>
  );
}