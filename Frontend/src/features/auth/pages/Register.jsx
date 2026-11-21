import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import AuthLeftPanel from '../components/AuthLeftPanel'

const Register = () => {
    const { loading, handleRegister } = useAuth()
    const navigate = useNavigate()

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)
    const [ agreedToTerms, setAgreedToTerms ] = useState(true)
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ isSubmitting, setIsSubmitting ] = useState(false)

    const validateForm = () => {
        if (!username.trim()) {
            setErrorMessage("Please enter a username.")
            return false
        }
        if (username.trim().length < 3) {
            setErrorMessage("Username must be at least 3 characters.")
            return false
        }
        if (!email.trim()) {
            setErrorMessage("Please enter your email address.")
            return false
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email.trim())) {
            setErrorMessage("Please enter a valid email address.")
            return false
        }
        if (!password) {
            setErrorMessage("Please enter a password.")
            return false
        }
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters.")
            return false
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.")
            return false
        }
        if (!agreedToTerms) {
            setErrorMessage("Please accept the Terms of Service to continue.")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage("")
        if (!validateForm()) return

        setIsSubmitting(true)
        try {
            const data = await handleRegister({ username: username.trim(), email: email.trim(), password })
            if (data?.user) {
                navigate('/')
            }
        } catch (err) {
            setErrorMessage(typeof err === 'string' ? err : "Registration failed. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                {/* Left Panel */}
                <AuthLeftPanel />

                {/* Right Panel */}
                <div className="auth-right-panel">
                    <div className="auth-card">
                        {/* Header */}
                        <div className="auth-card__header">
                            <h2 className="auth-card__title">Create Account</h2>
                            <p className="auth-card__subtitle">Sign up to start your interview journey</p>
                        </div>

                        {/* Top Segmented Tab Switcher */}
                        <div className="auth-tabs">
                            <button
                                type="button"
                                className="auth-tab"
                                onClick={() => navigate('/login')}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                    <polyline points="10 17 15 12 10 7" />
                                    <line x1="15" y1="12" x2="3" y2="12" />
                                </svg>
                                <span>Login</span>
                            </button>
                            <button
                                type="button"
                                className="auth-tab auth-tab--active"
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                    <line x1="20" y1="8" x2="20" y2="14" />
                                    <line x1="23" y1="11" x2="17" y2="11" />
                                </svg>
                                <span>Register</span>
                            </button>
                        </div>

                        {/* Animated Validation Error Banner */}
                        {errorMessage && (
                            <div className="auth-error-banner" role="alert">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        {/* Register Form */}
                        <form className="auth-form" onSubmit={handleSubmit} noValidate>
                            {/* Username Field */}
                            <div className="auth-input-group">
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                            if (errorMessage) setErrorMessage("")
                                        }}
                                        placeholder="Enter username"
                                        autoComplete="username"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="auth-input-group">
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </span>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            if (errorMessage) setErrorMessage("")
                                        }}
                                        placeholder="Enter email address"
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="auth-input-group">
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            if (errorMessage) setErrorMessage("")
                                        }}
                                        placeholder="Enter password"
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        className="auth-password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        ) : (
                                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div className="auth-input-group">
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <polyline points="9 12 11 14 15 10" />
                                        </svg>
                                    </span>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value)
                                            if (errorMessage) setErrorMessage("")
                                        }}
                                        placeholder="Confirm password"
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        className="auth-password-toggle"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? (
                                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        ) : (
                                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="auth-extra-row">
                                <label className="auth-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    />
                                    <span className="auth-checkbox__custom">
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <span className="auth-checkbox__text">
                                        I agree to the <a href="#terms" onClick={(e) => e.preventDefault()} className="auth-terms-link">Terms &amp; Privacy</a>
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="auth-submit-btn"
                                disabled={isSubmitting || loading}
                            >
                                {isSubmitting || loading ? (
                                    <>
                                        <span className="auth-btn-spinner" />
                                        <span>Creating account...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                            <line x1="20" y1="8" x2="20" y2="14" />
                                            <line x1="23" y1="11" x2="17" y2="11" />
                                        </svg>
                                        <span>Register</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Footer Switch Link */}
                        <div className="auth-card__footer">
                            <p>
                                Already have an account?{' '}
                                <Link to="/login" className="auth-link-highlight">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
