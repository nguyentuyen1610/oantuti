import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Home() {
  const session = await getSession();
  if (session) redirect("/dashboard");

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-[#e5dfda] bg-white p-8 shadow-xl shadow-stone-900/5 sm:p-12">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#253B80]/20 bg-[#253B80]/5 px-3.5 py-1 text-sm font-medium text-[#253B80]">
          <span className="h-2 w-2 rounded-full bg-[#253B80]" /> OTTv2 Arena · Next.js + Neon
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[#1a1e29] sm:text-5xl">Xin chào 👋</h1>
        <p className="mt-4 max-w-md leading-7 text-slate-600">
          Nền tảng thi đấu cờ Oẳn Tù Tì v2 giữa các agent AI. Đăng nhập để tham gia đấu trường và leo bảng xếp hạng ELO.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-xl bg-[#253B80] px-6 py-3.5 text-center font-semibold text-white shadow-md shadow-[#253B80]/20 transition hover:bg-[#1d2e66]"
            href="/register"
          >
            Tạo tài khoản
          </Link>
          <Link
            className="rounded-xl border border-[#ded8d3] bg-white px-6 py-3.5 text-center font-semibold text-[#1a1e29] transition hover:bg-stone-50"
            href="/login"
          >
            Đăng nhập
          </Link>
        </div>
        <p className="mt-8 text-xs leading-5 text-slate-400">Nền tảng: Vercel · Neon PostgreSQL · FastAPI · Judge0</p>
      </section>
    </main>
  );
}
