"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Courses", "Why Us", "Gallery", "Contact"];
  const PHONE = "+918003638684";
  const PHONE_DISPLAY = "+91 8003638684";
  const WA_PHONE = "918003638684";

  return (
    <div className="font-sans text-gray-800">
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-200 shadow">
              <Image src="/hrd_logo.jpg" alt="HRD Logo" width={44} height={44} className="object-cover w-full h-full" />
            </div>
            <div>
              <p className="font-bold text-blue-800 text-sm leading-tight">HRD Bhoopendra Faujdar</p>
              <p className="text-xs text-green-600 font-medium">Education A1</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-blue-700 transition-colors">{l}</a>
            ))}
          </nav>

          <a href={`tel:${PHONE}`} className="hidden md:inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition">
            📞 Call Now
          </a>

          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3 text-sm font-medium text-gray-700">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)} className="hover:text-blue-700">{l}</a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="bg-gradient-to-br from-blue-800 via-blue-700 to-green-600 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image src="/hrd_logo.jpg" alt="HRD Logo" width={96} height={96} className="object-cover w-full h-full" />
            </div>
          </div>

          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">CBSE & State Board</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Quality Education for<br />Class 1 to 12
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Personalized coaching with focus on conceptual clarity, exam preparation & academic excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`} className="bg-white text-blue-800 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition shadow-lg flex items-center gap-2">
              📞 Call Now
            </a>
            <a href={`https://wa.me/${WA_PHONE}`} target="_blank" rel="noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 transition shadow-lg flex items-center gap-2">
              💬 WhatsApp Us
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[["10+", "Years Experience"], ["500+", "Students Taught"], ["95%", "Board Results"], ["1-12", "All Classes"]].map(([val, label]) => (
              <div key={label} className="bg-white/15 rounded-2xl py-5 px-3 backdrop-blur">
                <p className="text-3xl font-extrabold">{val}</p>
                <p className="text-sm text-blue-100 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <section className="bg-green-600 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-semibold text-center">
          {["✅ Experienced Tutor", "📈 Strong Academic Results", "👁 Personal Attention", "💰 Affordable Fees"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">About the Tutor</span>
            <h2 className="text-3xl font-extrabold text-blue-800 mt-2 mb-4">HRD Bhoopendra Faujdar</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 10 years of dedicated teaching experience, HRD Bhoopendra Faujdar has helped hundreds of students achieve academic excellence. He specializes in teaching CBSE and State Board curriculum for Classes 1–12.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              His teaching methodology focuses on <strong>conceptual clarity</strong>, regular practice, and thorough exam preparation. He believes every student has the potential to excel with the right guidance and personal attention.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              {["10+ years of teaching experience", "Expertise in CBSE & State Board curriculum", "Proven track record in board exam results", "Focus on doubt clearing & concept building"].map((p) => (
                <li key={p} className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✔</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-inner">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-200 shadow-lg">
              <Image src="/hrd_logo.jpg" alt="HRD Logo" width={128} height={128} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-blue-800">Bhoopendra Faujdar</h3>
            <p className="text-green-600 font-medium mt-1">Senior Educator & Private Tutor</p>
            <p className="text-gray-500 text-sm mt-3">Class 1 – 12 | CBSE & State Board</p>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" className="py-16 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl font-extrabold text-blue-800 mt-2 mb-10">Courses Available</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { grade: "Class 1–5", subjects: "All Subjects", icon: "🎒", color: "from-yellow-400 to-orange-400" },
              { grade: "Class 6–8", subjects: "All Subjects", icon: "📚", color: "from-blue-400 to-cyan-400" },
              { grade: "Class 9–10", subjects: "Maths, Science, SST, English", icon: "🔬", color: "from-green-400 to-teal-400" },
              { grade: "Class 11–12", subjects: "Maths, Physics, Chemistry, Biology, Commerce", icon: "🎓", color: "from-purple-400 to-pink-400" },
            ].map((c) => (
              <div key={c.grade} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${c.color} p-5 text-white`}>
                  <span className="text-3xl">{c.icon}</span>
                  <h3 className="text-xl font-extrabold mt-2">{c.grade}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{c.subjects}</p>
                  <a href={`tel:${PHONE}`} className="mt-4 inline-block text-blue-700 font-semibold text-sm hover:underline">Enquire →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why-us" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Strengths</span>
          <h2 className="text-3xl font-extrabold text-blue-800 mt-2 mb-10">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "👥", title: "Small Batch Size", desc: "Limited students per batch ensuring focused learning." },
              { icon: "🎯", title: "Individual Attention", desc: "Every student gets personalized guidance and mentoring." },
              { icon: "📝", title: "Regular Tests", desc: "Weekly assessments to track progress and build confidence." },
              { icon: "🤔", title: "Doubt Sessions", desc: "Dedicated doubt-clearing sessions after every topic." },
              { icon: "📋", title: "Board Exam Prep", desc: "Special preparation for CBSE and State Board exams." },
              { icon: "💸", title: "Affordable Fees", desc: "Quality education at prices that fit every family's budget." },
            ].map((f) => (
              <div key={f.title} className="bg-blue-50 rounded-2xl p-6 text-left hover:bg-blue-100 transition-colors">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="text-lg font-bold text-blue-800 mt-3 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Classroom</span>
          <h2 className="text-3xl font-extrabold text-blue-800 mt-2 mb-10">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["📖", "Study Session", "bg-blue-100"],
              ["🧪", "Science Lab", "bg-green-100"],
              ["📐", "Maths Class", "bg-yellow-100"],
              ["🖊️", "Writing Practice", "bg-pink-100"],
              ["🏫", "Classroom", "bg-purple-100"],
              ["🎓", "Exam Prep", "bg-orange-100"],
            ].map(([icon, label, bg]) => (
              <div key={label as string} className={`${bg} rounded-2xl aspect-video flex flex-col items-center justify-center gap-2`}>
                <span className="text-4xl">{icon}</span>
                <p className="text-sm font-semibold text-gray-600">{label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl font-extrabold text-blue-800 mt-2">Contact Us</h2>
            <p className="text-gray-500 mt-2 text-sm">Reach out via call or WhatsApp — we'd love to hear from you!</p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a href={`tel:${PHONE}`} className="flex flex-col items-center gap-3 bg-blue-600 text-white rounded-2xl p-6 hover:bg-blue-700 transition shadow-lg">
              <span className="text-4xl">📞</span>
              <p className="font-bold text-lg">{PHONE_DISPLAY}</p>
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Tap to Call</span>
            </a>

            <a href={`https://wa.me/${WA_PHONE}`} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 bg-green-500 text-white rounded-2xl p-6 hover:bg-green-600 transition shadow-lg">
              <span className="text-4xl">💬</span>
              <p className="font-bold text-lg">WhatsApp</p>
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Chat with Us</span>
            </a>

            <div className="flex flex-col items-center gap-3 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <span className="text-4xl">📍</span>
              <p className="font-semibold text-gray-700 text-center text-sm leading-relaxed">
                Baroli Chouth, Deeg,<br />Rajasthan – 321203
              </p>
              <a href="https://maps.app.goo.gl/jrNdiSknHEkqiNNH8" target="_blank" rel="noreferrer" className="text-xs text-blue-600 font-semibold hover:underline">Open in Maps →</a>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Baroli+Chouth+Deeg+Rajasthan+321203&output=embed&z=14"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>

          <div className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/jrNdiSknHEkqiNNH8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition text-sm"
            >
              📍 Open Full Map in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-blue-900 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow">
                <Image src="/hrd_logo.jpg" alt="HRD Logo" width={48} height={48} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">HRD Bhoopendra Faujdar</p>
                <p className="text-xs text-green-400 font-medium">Education A1</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm">Quality Education for Class 1 to 12 – CBSE & State Board</p>
            <p className="text-blue-300 text-sm mt-2">📍 Baroli Chouth, Deeg, Rajasthan – 321203</p>
            <p className="text-blue-300 text-sm mt-1">📞 {PHONE_DISPLAY}</p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-green-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              {navLinks.map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-green-400">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${PHONE}`} className="bg-blue-700 hover:bg-blue-600 transition text-white text-sm font-semibold px-4 py-3 rounded-lg text-center">📞 {PHONE_DISPLAY}</a>
              <a href={`https://wa.me/${WA_PHONE}`} target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-500 transition text-white text-sm font-semibold px-4 py-3 rounded-lg text-center">💬 WhatsApp Us</a>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-blue-700 text-center text-xs text-blue-400">
          © {new Date().getFullYear()} HRD Bhoopendra Faujdar Education A1. All rights reserved.
        </div>
      </footer>
    </div>
  );
}