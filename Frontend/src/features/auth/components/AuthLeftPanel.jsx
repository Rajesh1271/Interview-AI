import React from 'react'

const AuthLeftPanel = () => {
    return (
        <div className="auth-left-panel">
            {/* Ambient Background Glows */}
            <div className="auth-left__glow auth-left__glow--top" />
            <div className="auth-left__glow auth-left__glow--bottom" />

            {/* Top Bar: Brand Logo & AI Powered Badge */}
            <div className="auth-left__header">
                <div className="auth-brand">
                    <span className="auth-brand__icon">
                        {/* Target / Bullseye icon in pink */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="#ff2d78" strokeWidth="2.2" strokeOpacity="0.4" />
                            <circle cx="12" cy="12" r="6.5" stroke="#ff2d78" strokeWidth="2.2" />
                            <circle cx="12" cy="12" r="2.8" fill="#ff2d78" />
                            <path d="M19 5L14 10" stroke="#ff6b9d" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                    <span className="auth-brand__name">
                        Interview <span className="auth-brand__accent">Strategy</span>
                    </span>
                </div>

                <div className="auth-badge">
                    <span className="auth-badge__sparkle">✦</span>
                    <span>AI Powered</span>
                </div>
            </div>

            {/* Center 3D Job-related Illustration */}
            <div className="auth-illustration">
                <div className="auth-illustration__scene">
                    {/* SVG 3D Job-Scene */}
                    <svg
                        className="auth-3d-svg"
                        viewBox="0 0 380 260"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            {/* Neon floor ring gradient */}
                            <linearGradient id="neonRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.9" />
                                <stop offset="50%" stopColor="#d946ef" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                            </linearGradient>

                            {/* Neon glow filter */}
                            <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
                                <feGaussianBlur stdDeviation="6" result="blur1" />
                                <feGaussianBlur stdDeviation="14" result="blur2" />
                                <feMerge>
                                    <feMergeNode in="blur2" />
                                    <feMergeNode in="blur1" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            {/* Briefcase gradients */}
                            <linearGradient id="briefcaseBody" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6328a6" />
                                <stop offset="50%" stopColor="#431478" />
                                <stop offset="100%" stopColor="#250949" />
                            </linearGradient>

                            <linearGradient id="briefcaseTop" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#6d28d9" />
                            </linearGradient>

                            <linearGradient id="briefcaseFront" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#581c87" />
                                <stop offset="100%" stopColor="#300b52" />
                            </linearGradient>

                            <linearGradient id="pinkAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff2d78" />
                                <stop offset="100%" stopColor="#db2777" />
                            </linearGradient>

                            {/* Document gradients */}
                            <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="70%" stopColor="#f3e8ff" />
                                <stop offset="100%" stopColor="#e9d5ff" />
                            </linearGradient>

                            {/* Floating glass tiles */}
                            <linearGradient id="glassTileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6b21a8" stopOpacity="0.75" />
                                <stop offset="100%" stopColor="#3b0764" stopOpacity="0.85" />
                            </linearGradient>
                        </defs>

                        {/* Ground Shadow */}
                        <ellipse cx="190" cy="205" rx="145" ry="32" fill="#0b0314" opacity="0.7" filter="blur(10px)" />

                        {/* Glowing Neon Ring on floor */}
                        <g className="auth-anim-ring">
                            <ellipse
                                cx="175"
                                cy="198"
                                rx="135"
                                ry="34"
                                fill="none"
                                stroke="url(#neonRingGrad)"
                                strokeWidth="3"
                                filter="url(#neonGlow)"
                            />
                        </g>

                        {/* Floating Briefcase Group */}
                        <g className="auth-anim-briefcase">
                            {/* Briefcase shadow directly underneath */}
                            <ellipse cx="150" cy="190" rx="60" ry="14" fill="#120524" opacity="0.6" filter="blur(6px)" />

                            {/* Handle */}
                            <path
                                d="M125 78 C125 62, 175 62, 175 78 L175 92 L163 92 L163 78 C163 70, 137 70, 137 78 L137 92 L125 92 Z"
                                fill="#8b5cf6"
                            />
                            {/* Handle metal clips */}
                            <rect x="123" y="87" width="16" height="7" rx="2" fill="url(#pinkAccent)" />
                            <rect x="161" y="87" width="16" height="7" rx="2" fill="url(#pinkAccent)" />

                            {/* Briefcase Main Body (Isometric 3D block) */}
                            {/* Back/Sides */}
                            <path
                                d="M90 102 L195 90 L215 155 L108 172 Z"
                                fill="url(#briefcaseTop)"
                                opacity="0.9"
                            />

                            {/* Front Panel */}
                            <rect
                                x="92"
                                y="94"
                                width="116"
                                height="82"
                                rx="14"
                                fill="url(#briefcaseBody)"
                                stroke="#7c3aed"
                                strokeWidth="1.5"
                            />

                            {/* Flap Curve */}
                            <path
                                d="M92 98 Q150 128 208 98 L208 132 Q150 148 92 132 Z"
                                fill="url(#briefcaseFront)"
                                opacity="0.9"
                            />

                            {/* Corner reinforcement stitching */}
                            <path d="M102 108 L102 166" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                            <path d="M198 108 L198 166" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                            {/* Lock / Clasp (Pink metallic) */}
                            <rect x="142" y="128" width="16" height="18" rx="4" fill="url(#pinkAccent)" filter="url(#neonGlow)" />
                            <circle cx="150" cy="135" r="2.5" fill="#ffffff" />
                            <rect x="149" y="137" width="2" height="5" fill="#ffffff" />
                        </g>

                        {/* Job Resume Document */}
                        <g className="auth-anim-doc">
                            {/* Document Sheet (Rotated slightly, layered in front of briefcase) */}
                            <g transform="translate(195, 105) rotate(4)">
                                <rect
                                    x="0"
                                    y="0"
                                    width="75"
                                    height="100"
                                    rx="8"
                                    fill="url(#docGrad)"
                                    filter="drop-shadow(0 12px 24px rgba(0,0,0,0.5))"
                                />

                                {/* Document Header "JOB" */}
                                <text x="14" y="28" fill="#3b0764" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="800" letterSpacing="0.5">
                                    JOB
                                </text>

                                {/* Bullet text lines */}
                                <rect x="14" y="40" width="46" height="4" rx="2" fill="#8b5cf6" opacity="0.5" />
                                <rect x="14" y="50" width="38" height="4" rx="2" fill="#a78bfa" opacity="0.4" />
                                <rect x="14" y="60" width="44" height="4" rx="2" fill="#a78bfa" opacity="0.4" />
                                <rect x="14" y="70" width="28" height="4" rx="2" fill="#c4b5fd" opacity="0.35" />
                                <rect x="14" y="80" width="34" height="4" rx="2" fill="#c4b5fd" opacity="0.35" />
                            </g>

                            {/* Magnifying Glass inspecting Job document */}
                            <g transform="translate(242, 148) rotate(-12)" className="auth-anim-glass">
                                {/* Glass Lens glow */}
                                <circle cx="20" cy="20" r="18" fill="#ec4899" fillOpacity="0.2" stroke="#ff2d78" strokeWidth="4.5" filter="url(#neonGlow)" />
                                <circle cx="20" cy="20" r="18" fill="none" stroke="#ff6b9d" strokeWidth="2.5" />
                                <ellipse cx="14" cy="14" rx="6" ry="3" transform="rotate(-30 14 14)" fill="#ffffff" opacity="0.6" />

                                {/* Handle */}
                                <rect x="33" y="32" width="22" height="6.5" rx="3" transform="rotate(45 33 32)" fill="url(#pinkAccent)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))" />
                            </g>
                        </g>

                        {/* Floating Holographic Badge 1: Code </> (Top Left) */}
                        <g className="auth-float-badge auth-float-badge--1">
                            <rect
                                x="58"
                                y="112"
                                width="36"
                                height="36"
                                rx="9"
                                fill="url(#glassTileGrad)"
                                stroke="#a855f7"
                                strokeWidth="1.2"
                                filter="drop-shadow(0 8px 16px rgba(139,92,246,0.3))"
                            />
                            {/* < / > icon */}
                            <path
                                d="M71 125 L66 130 L71 135 M81 125 L86 130 L81 135 M77 122 L75 138"
                                stroke="#f3e8ff"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>

                        {/* Floating Holographic Badge 2: Analytics Chart (Top Right) */}
                        <g className="auth-float-badge auth-float-badge--2">
                            <rect
                                x="282"
                                y="88"
                                width="34"
                                height="34"
                                rx="8"
                                fill="url(#glassTileGrad)"
                                stroke="#c084fc"
                                strokeWidth="1.2"
                                filter="drop-shadow(0 8px 16px rgba(192,132,252,0.3))"
                            />
                            {/* Bar chart bars */}
                            <rect x="290" y="104" width="4" height="8" rx="1" fill="#ec4899" />
                            <rect x="297" y="98" width="4" height="14" rx="1" fill="#f472b6" />
                            <rect x="304" y="94" width="4" height="18" rx="1" fill="#ff2d78" />
                        </g>

                        {/* Floating Holographic Badge 3: Team / Community (Lower Right) */}
                        <g className="auth-float-badge auth-float-badge--3">
                            <rect
                                x="302"
                                y="160"
                                width="34"
                                height="34"
                                rx="8"
                                fill="url(#glassTileGrad)"
                                stroke="#ec4899"
                                strokeWidth="1.2"
                                filter="drop-shadow(0 8px 16px rgba(236,72,153,0.3))"
                            />
                            {/* User network icon */}
                            <circle cx="316" cy="172" r="3.2" fill="#fbcfe8" />
                            <path d="M310 183 C310 178, 322 178, 322 183" stroke="#fbcfe8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                            <circle cx="324" cy="170" r="2.2" fill="#ec4899" />
                            <path d="M321 178 C321 175, 328 175, 328 178" stroke="#ec4899" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                        </g>

                        {/* Floating Sparkles & 3D Isometric Cubes */}
                        <g className="auth-float-particle auth-float-particle--1">
                            {/* 3D Cube Particle */}
                            <path d="M190 60 L198 56 L206 60 L198 64 Z" fill="#d946ef" />
                            <path d="M190 60 L198 64 L198 73 L190 69 Z" fill="#a21caf" />
                            <path d="M198 64 L206 60 L206 69 L198 73 Z" fill="#701a75" />
                        </g>

                        <g className="auth-float-particle auth-float-particle--2">
                            {/* 3D Diamond / Cube */}
                            <path d="M255 78 L261 75 L267 78 L261 81 Z" fill="#c084fc" />
                            <path d="M255 78 L261 81 L261 87 L255 84 Z" fill="#9333ea" />
                            <path d="M261 81 L267 78 L267 84 L261 87 Z" fill="#581c87" />
                        </g>

                        {/* Small ambient light flares */}
                        <circle cx="100" cy="80" r="1.5" fill="#ffffff" opacity="0.7" />
                        <circle cx="280" cy="140" r="2" fill="#ff6b9d" opacity="0.8" />
                        <circle cx="70" cy="170" r="1.5" fill="#c084fc" opacity="0.6" />
                    </svg>
                </div>
            </div>

            {/* Bottom Content: Heading & Highlights */}
            <div className="auth-left__footer">
                <div className="auth-left__headings">
                    <h1 className="auth-left__title">
                        Get Prepared.
                        <br />
                        <span className="auth-left__title-gradient">Get Hired.</span>
                    </h1>
                    <p className="auth-left__desc">
                        AI-powered interview strategy to help you crack your dream job with confidence.
                    </p>
                </div>

                {/* 3-Column Highlights Bar */}
                <div className="auth-highlights">
                    <div className="auth-highlight-item">
                        <span className="auth-highlight-item__icon">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </span>
                        <div className="auth-highlight-item__text">
                            <strong>Smart</strong>
                            <span>Preparation</span>
                        </div>
                    </div>

                    <div className="auth-highlight-divider" />

                    <div className="auth-highlight-item">
                        <span className="auth-highlight-item__icon">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 13h4v8H3v-8zm7-5h4v13h-4V8zm7-5h4v18h-4V3z" />
                            </svg>
                        </span>
                        <div className="auth-highlight-item__text">
                            <strong>Personalized</strong>
                            <span>Strategy</span>
                        </div>
                    </div>

                    <div className="auth-highlight-divider" />

                    <div className="auth-highlight-item">
                        <span className="auth-highlight-item__icon">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                            </svg>
                        </span>
                        <div className="auth-highlight-item__text">
                            <strong>Track Your</strong>
                            <span>Progress</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle bottom curved gradient overlay */}
            <div className="auth-left__wave" />
        </div>
    )
}

export default AuthLeftPanel
