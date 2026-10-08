import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg">{profile.name}</p>
          <p className="mt-1 text-sm text-mist">{profile.role}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-mist md:items-end">
          <p className="flex gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-white">LeetCode</a>
          </p>
          <p>© 2026 {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
